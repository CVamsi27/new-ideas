import { spawn } from "node:child_process";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 9333 + Math.floor(Math.random() * 1000);
const userDataDir = await mkdtemp(path.join(tmpdir(), "stack-index-chrome-"));
const targetUrl = `file://${root}/index.html`;

const proc = spawn(chrome, [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  "--no-first-run",
  "--disable-dev-shm-usage",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  "about:blank",
]);

proc.stderr.on("data", () => {});

async function waitForJson(url, attempts = 80) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const events = new Map();

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result ?? {});
      return;
    }
    const listeners = events.get(message.method) ?? [];
    for (const listener of listeners) listener(message.params ?? {});
  });

  const opened = new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });

  return {
    opened,
    send(method, params = {}) {
      id += 1;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    once(method) {
      return new Promise((resolve) => {
        const list = events.get(method) ?? [];
        const listener = (params) => {
          events.set(
            method,
            (events.get(method) ?? []).filter((item) => item !== listener),
          );
          resolve(params);
        };
        events.set(method, [...list, listener]);
      });
    },
    close() {
      ws.close();
    },
  };
}

async function newPage() {
  const page = await fetch(`http://127.0.0.1:${port}/json/new`, { method: "PUT" }).then((r) =>
    r.json(),
  );
  const cdp = connect(page.webSocketDebuggerUrl);
  await cdp.opened;
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  return cdp;
}

async function navigate(cdp, url) {
  const loaded = cdp.once("Page.loadEventFired");
  await cdp.send("Page.navigate", { url });
  await loaded;
}

async function capture(cdp, file, { width, height, mobile = false, fullPage = false }) {
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
  });
  await navigate(cdp, targetUrl);
  let clip;
  if (fullPage) {
    const metrics = await cdp.send("Page.getLayoutMetrics");
    clip = {
      x: 0,
      y: 0,
      width: Math.ceil(metrics.contentSize.width),
      height: Math.ceil(metrics.contentSize.height),
      scale: 1,
    };
  }
  const screenshot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: fullPage,
    clip,
  });
  await writeFile(path.join(root, file), Buffer.from(screenshot.data, "base64"));
}

await mkdir(path.join(root, "assets"), { recursive: true });
await waitForJson(`http://127.0.0.1:${port}/json/version`);

const desktop = await newPage();
await capture(desktop, "assets/cdp-desktop.png", { width: 1440, height: 1100 });
await capture(desktop, "assets/cdp-full-page.png", { width: 1440, height: 1200, fullPage: true });

const mobile = await newPage();
await capture(mobile, "assets/cdp-mobile-390.png", { width: 390, height: 1100, mobile: true });
const metrics = await mobile.send("Runtime.evaluate", {
  returnByValue: true,
  expression: `({
    viewport: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    toolRows: document.querySelectorAll('#toolRows tr').length,
    hero: document.querySelector('h1').innerText,
    submitText: document.querySelector('.submit-tool').innerText
  })`,
});

await navigate(mobile, targetUrl);
await mobile.send("Runtime.evaluate", {
  awaitPromise: true,
  expression: `
    (async () => {
      document.querySelector('#searchInput').value = 'WhatsApp';
      document.querySelector('#searchForm').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      document.querySelector('input[name="company"]').value = 'ShipFast';
      document.querySelector('input[name="spend"]').value = '18000';
      document.querySelector('input[name="repoUrl"]').value = 'https://github.com/shipfast/app';
      document.querySelector('input[name="packageHints"]').value = 'next prisma razorpay posthog openai vercel';
      document.querySelector('#auditForm').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      await new Promise((resolve) => setTimeout(resolve, 5200));
      document.querySelector('select[name="benchmarkType"]').value = 'd2c';
      document.querySelector('input[name="benchmarkSpend"]').value = '42000';
      document.querySelector('input[name="benchmarkAi"]').value = '9000';
      document.querySelector('input[name="benchmarkWhatsApp"]').value = '12000';
      document.querySelector('#benchmarkForm').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      document.querySelector('input[name="submissionSpend"]').value = '15500';
      document.querySelector('input[name="submissionTools"]').value = 'Razorpay, WATI, Vercel';
      document.querySelector('input[name="submissionRegret"]').value = 'Bought too many analytics tools before revenue';
      document.querySelector('#submissionForm').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    })();
  `,
});
const interaction = await mobile.send("Runtime.evaluate", {
  returnByValue: true,
  expression: `({
    comparisonCards: document.querySelectorAll('.comparison-card').length,
    directoryCount: document.querySelector('#directoryCount').innerText,
    overallScore: document.querySelector('#overallScore').innerText,
    firstFinding: document.querySelector('#findingsList li').innerText,
    shareCompany: document.querySelector('#shareCompany').innerText,
    shareScore: document.querySelector('#shareScore').innerText,
    repoProvider: document.querySelector('#repoProvider').innerText,
    repoChips: Array.from(document.querySelectorAll('#repoChips span')).map((chip) => chip.innerText).join(', '),
    repoFinding: document.querySelector('#repoFindings li')?.innerText || '',
    leaderboardRows: document.querySelectorAll('.leader-row').length,
    benchmarkBand: document.querySelector('#benchmarkBand').innerText,
    benchmarkShare: document.querySelector('#benchmarkShare').innerText,
    benchmarkCards: document.querySelectorAll('.band-card').length,
    submissionCount: document.querySelector('#submissionCount').innerText,
    submissionPreview: document.querySelector('.submission-item')?.innerText || ''
  })`,
});

await writeFile(
  path.join(root, "assets/cdp-qa.json"),
  JSON.stringify({ metrics: metrics.result.value, interaction: interaction.result.value }, null, 2),
);

desktop.close();
mobile.close();
proc.kill();
