const categories = [
  { name: "Payments", count: 18, color: "#111318", icon: "card" },
  { name: "WhatsApp APIs", count: 12, color: "#0a9853", icon: "chat" },
  { name: "GST Invoicing", count: 10, color: "#2267e8", icon: "receipt" },
  { name: "Legal", count: 9, color: "#e8741a", icon: "person" },
  { name: "Hosting", count: 15, color: "#111318", icon: "server" },
  { name: "Analytics", count: 14, color: "#0a9853", icon: "chart" },
  { name: "CRM", count: 13, color: "#e8741a", icon: "gear" },
  { name: "Hiring", count: 16, color: "#2267e8", icon: "team" },
  { name: "Payroll", count: 8, color: "#e8741a", icon: "wallet" },
  { name: "AI Tools", count: 20, color: "#2267e8", icon: "spark" },
];

const comparisons = [
  {
    title: "Razorpay vs Cashfree vs Stripe",
    tag: "Payments",
    columns: ["Razorpay", "Cashfree", "Stripe"],
    rows: [
      ["Startup Readiness", 8.6, 8.1, 7.7],
      ["Tech Debt", 7.5, 7.2, 6.4],
      ["Conversion", 8.2, 7.8, 8.7],
      ["India Market Readiness", 9.2, 8.8, 6.9],
      ["Wasted SaaS Spend", 7.9, 7.6, 6.1],
      ["Starting Price", "Rs 2,000/mo", "Rs 1,800/mo", "2.9% + 30c"],
      ["Best For", "Most startups", "D2C, SMBs", "Global scale"],
    ],
  },
  {
    title: "WATI vs AiSensy vs Interakt",
    tag: "WhatsApp APIs",
    columns: ["WATI", "AiSensy", "Interakt"],
    rows: [
      ["Startup Readiness", 8.2, 7.6, 7.4],
      ["Tech Debt", 7.0, 6.8, 7.2],
      ["Conversion", 8.1, 7.9, 7.5],
      ["India Market Readiness", 8.6, 8.1, 7.8],
      ["Wasted SaaS Spend", 7.6, 7.2, 7.3],
      ["Starting Price", "Rs 2,999/mo", "Rs 2,499/mo", "Rs 2,999/mo"],
      ["Best For", "Sales and support", "SMBs", "Mid-market"],
    ],
  },
  {
    title: "Vercel vs Cloudflare vs Render",
    tag: "Hosting",
    columns: ["Vercel", "Cloudflare", "Render"],
    rows: [
      ["Startup Readiness", 8.7, 8.1, 7.8],
      ["Tech Debt", 6.8, 7.4, 7.1],
      ["Conversion", 7.9, 7.1, 6.9],
      ["India Market Readiness", 7.2, 8.2, 7.6],
      ["Wasted SaaS Spend", 8.3, 7.4, 7.0],
      ["Starting Price", "Free", "Free", "$7/mo"],
      ["Best For", "Frontend and Jamstack", "Edge and security", "Full-stack apps"],
    ],
  },
];

const tools = [
  ["Razorpay", "Payments", "Indian SaaS and marketplaces", "Usage-based", "Strong local payment coverage and docs."],
  ["Cashfree", "Payments", "D2C, SMB collections", "Usage-based", "Good India coverage with payout products."],
  ["Stripe", "Payments", "Global SaaS from India", "Usage-based", "Excellent global rails, India fit depends on entity setup."],
  ["PayU", "Payments", "High-volume commerce", "Custom", "Mature Indian gateway with enterprise posture."],
  ["PhonePe PG", "Payments", "UPI-heavy checkout", "Usage-based", "Strong UPI brand recall for consumer businesses."],
  ["WATI", "WhatsApp APIs", "Sales and support teams", "Paid plans", "Good WhatsApp-first workflows for Indian SMBs."],
  ["AiSensy", "WhatsApp APIs", "SMB campaigns", "Paid plans", "Popular India-first WhatsApp automation option."],
  ["Interakt", "WhatsApp APIs", "Commerce support", "Paid plans", "Useful for Shopify and WhatsApp selling motions."],
  ["Gupshup", "WhatsApp APIs", "Enterprise messaging", "Usage-based", "Broad CPaaS platform with WhatsApp scale."],
  ["Zoko", "WhatsApp APIs", "D2C WhatsApp sales", "Paid plans", "Built for conversational commerce teams."],
  ["Zoho Books", "GST Invoicing", "SMBs and agencies", "Paid plans", "Strong GST and accounting fit for India."],
  ["RazorpayX", "GST Invoicing", "Finance ops", "Paid plans", "Banking-adjacent workflows for Indian startups."],
  ["Refrens", "GST Invoicing", "Freelancers and agencies", "Freemium", "India-friendly invoices, proposals, and payments."],
  ["Vyapar", "GST Invoicing", "Small businesses", "Paid plans", "Popular GST billing for offline-first businesses."],
  ["ClearTax", "GST Invoicing", "Compliance-heavy teams", "Paid plans", "Useful for GST and tax workflows."],
  ["Vakilsearch", "Legal", "Incorporation and filings", "Service fees", "Common starting point for company setup."],
  ["IndiaFilings", "Legal", "SMB compliance", "Service fees", "Broad catalog for registrations and filings."],
  ["Leegality", "Legal", "Digital agreements", "Custom", "India-focused eSign and document execution."],
  ["SpotDraft", "Legal", "Contract-heavy teams", "Custom", "Strong contract ops for scaling startups."],
  ["Clerky", "Legal", "US company setup", "Paid docs", "Useful when Indian founders incorporate overseas."],
  ["Vercel", "Hosting", "Frontend and Jamstack", "Freemium", "Great DX, costs can rise with traffic."],
  ["Cloudflare", "Hosting", "Edge, DNS, Workers", "Freemium", "Strong global edge and India latency posture."],
  ["Render", "Hosting", "Full-stack apps", "Paid plans", "Simple deployment for small teams."],
  ["Railway", "Hosting", "Prototypes and demos", "Usage-based", "Fast setup, watch spend controls."],
  ["DigitalOcean", "Hosting", "Predictable VPS", "Paid plans", "Good control for cost-conscious teams."],
  ["PostHog", "Analytics", "Product analytics", "Freemium", "Open-source friendly, pricing needs monitoring."],
  ["Mixpanel", "Analytics", "Event analytics", "Freemium", "Good funnels; can become expensive."],
  ["Google Analytics", "Analytics", "Website traffic", "Free", "Default web analytics, weaker product insight."],
  ["Microsoft Clarity", "Analytics", "Session replay", "Free", "Low-cost behavior insight for landing pages."],
  ["June", "Analytics", "B2B SaaS insight", "Freemium", "Useful for account-level SaaS analytics."],
  ["Zoho CRM", "CRM", "India-first sales teams", "Paid plans", "Strong local ecosystem and pricing."],
  ["HubSpot", "CRM", "Inbound sales", "Freemium", "Great UX; paid tiers get costly."],
  ["Freshsales", "CRM", "SMB sales teams", "Paid plans", "India-origin SaaS with support depth."],
  ["Pipedrive", "CRM", "Pipeline discipline", "Paid plans", "Simple sales workflow for small teams."],
  ["Attio", "CRM", "Modern SaaS teams", "Paid plans", "Flexible, but India-specific templates are limited."],
  ["Wellfound", "Hiring", "Startup hiring", "Freemium", "Useful for startup talent discovery."],
  ["LinkedIn", "Hiring", "Broad hiring", "Paid plans", "High reach; noisy for early teams."],
  ["Cutshort", "Hiring", "Indian tech hiring", "Paid plans", "India-focused tech talent marketplace."],
  ["Instahyre", "Hiring", "Tech hiring", "Paid plans", "Useful for funded startup roles."],
  ["Internshala", "Hiring", "Interns and entry roles", "Paid plans", "Good for junior hiring in India."],
  ["RazorpayX Payroll", "Payroll", "Startup payroll", "Paid plans", "Good if already in Razorpay ecosystem."],
  ["Zoho Payroll", "Payroll", "SMB payroll", "Paid plans", "Useful with Zoho Books and People."],
  ["Keka", "Payroll", "HR and payroll", "Paid plans", "Strong India HRMS footprint."],
  ["GreytHR", "Payroll", "SMB HR ops", "Paid plans", "Established Indian payroll option."],
  ["Deel", "Payroll", "Global contractors", "Paid plans", "Useful for cross-border teams; costly for local-only."],
  ["OpenAI", "AI Tools", "AI product features", "Usage-based", "Strong models; manage latency and token spend."],
  ["Claude", "AI Tools", "Writing and analysis", "Usage-based", "Good reasoning and document workflows."],
  ["Perplexity", "AI Tools", "Research workflows", "Paid plans", "Useful for founder research and monitoring."],
  ["Cursor", "AI Tools", "AI-assisted coding", "Paid plans", "High leverage for solo technical founders."],
  ["LangSmith", "AI Tools", "LLM observability", "Paid plans", "Helpful once AI workflows enter production."],
].map(([name, category, bestFor, pricing, indiaNote]) => ({
  name,
  category,
  bestFor,
  pricing,
  indiaNote,
}));

const presets = [
  {
    title: "Bootstrap SaaS (India)",
    tools: 36,
    desc: "Lean, cost-effective stack for early stage SaaS startups.",
    cost: "Rs 5k - 12k",
    best: "Rs 0-20k MRR",
    color: "#2267e8",
    code: "dev",
  },
  {
    title: "D2C Brand (India)",
    tools: 42,
    desc: "Performance and conversion focused stack for D2C brands.",
    cost: "Rs 15k - 30k",
    best: "Rs 0-1 Cr/month",
    color: "#0a9853",
    code: "cart",
  },
  {
    title: "Marketplace (India)",
    tools: 45,
    desc: "Scalable and reliable stack for two-sided marketplaces.",
    cost: "Rs 20k - 40k",
    best: "Rs 1 Cr - 10 Cr GMV",
    color: "#e8741a",
    code: "mp",
  },
  {
    title: "AI Product (India)",
    tools: 38,
    desc: "Modern AI-native stack with best models and infra.",
    cost: "Rs 10k - 25k",
    best: "Early stage AI product",
    color: "#6c4de6",
    code: "ai",
  },
];

const leaderboard = [
  {
    name: "ShipFast",
    type: "Bootstrap SaaS",
    score: 72,
    burn: "Rs 18,450/mo",
    quote: "Modern stack, unclear pricing, and six tools doing the same job.",
  },
  {
    name: "DelhiD2C",
    type: "D2C Brand",
    score: 68,
    burn: "Rs 24,900/mo",
    quote: "Great acquisition setup, weak WhatsApp recovery, expensive analytics.",
  },
  {
    name: "AgencyOps",
    type: "Agency",
    score: 81,
    burn: "Rs 6,200/mo",
    quote: "Lean stack, strong CRM discipline, one invoice workflow gap.",
  },
];

const benchmarkBands = {
  saas: { label: "bootstrap SaaS", lean: 5000, normal: 12000, bloated: 25000 },
  agency: { label: "agency", lean: 4000, normal: 10000, bloated: 22000 },
  d2c: { label: "D2C brand", lean: 12000, normal: 30000, bloated: 65000 },
  freelancer: { label: "freelancer", lean: 1500, normal: 5000, bloated: 12000 },
  coaching: { label: "coaching center", lean: 2500, normal: 8000, bloated: 18000 },
  local: { label: "local business", lean: 2000, normal: 7000, bloated: 15000 },
};

const stackSignals = [
  { match: ["next", "nextjs"], label: "Next.js", risk: "Check SSR/runtime spend before Vercel costs climb." },
  { match: ["react", "vite"], label: "React/Vite", risk: "Good frontend velocity; verify SEO and routing basics." },
  { match: ["prisma"], label: "Prisma", risk: "Watch migration discipline and connection pooling." },
  { match: ["drizzle"], label: "Drizzle", risk: "Lean ORM choice; document schema migration workflow." },
  { match: ["postgres", "supabase"], label: "Postgres", risk: "Strong default; backup and branch strategy matter." },
  { match: ["mongodb"], label: "MongoDB", risk: "Useful for flexible data; reporting can get messy later." },
  { match: ["tailwind"], label: "Tailwind CSS", risk: "Fast UI work; keep component conventions tight." },
  { match: ["shadcn"], label: "shadcn/ui", risk: "Modern component base; avoid one-off styling drift." },
  { match: ["razorpay"], label: "Razorpay", risk: "India payment-ready; reconcile fees and webhook reliability." },
  { match: ["stripe"], label: "Stripe", risk: "Great global checkout; India entity/payment fit needs review." },
  { match: ["cashfree"], label: "Cashfree", risk: "India-friendly payment option; compare settlement/support needs." },
  { match: ["wati", "aisensy", "interakt", "whatsapp"], label: "WhatsApp Stack", risk: "Measure conversation spend against conversion lift." },
  { match: ["posthog", "mixpanel", "clarity"], label: "Analytics", risk: "Avoid duplicate tracking and unused event volume." },
  { match: ["openai", "anthropic", "langchain", "llamaindex"], label: "AI Workflow", risk: "Track token spend and latency before scaling." },
  { match: ["vercel"], label: "Vercel", risk: "Excellent DX; forecast bandwidth and function cost." },
  { match: ["cloudflare", "workers"], label: "Cloudflare", risk: "Strong edge fit; confirm team understands Workers limits." },
  { match: ["render", "railway"], label: "PaaS Hosting", risk: "Fast launch; monitor sleeping apps and usage-based surprises." },
];

const iconPaths = {
  card: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-8.6 8.3 9 9 0 0 1-3.2-.6L4 21l1.7-4.5a8 8 0 0 1-1.8-5A8.4 8.4 0 0 1 12.4 3 8.4 8.4 0 0 1 21 11.5Z"/><path d="M9 10h6M9 14h4"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  person: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  server: '<rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><path d="M8 7h.01M8 17h.01"/>',
  chart: '<path d="M4 20V9M10 20V4M16 20v-7M22 20H2"/>',
  gear: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="m19 12 2-1-2-4-2 1a7 7 0 0 0-2-1l-.5-2h-5L9 7a7 7 0 0 0-2 1L5 7l-2 4 2 1a7 7 0 0 0 0 2l-2 1 2 4 2-1a7 7 0 0 0 2 1l.5 2h5l.5-2a7 7 0 0 0 2-1l2 1 2-4-2-1a7 7 0 0 0 0-2Z"/>',
  team: '<path d="M16 11a4 4 0 1 0-8 0"/><path d="M3 21a9 9 0 0 1 18 0"/><path d="M18 8a3 3 0 0 1 0 6M6 8a3 3 0 0 0 0 6"/>',
  wallet: '<path d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12"/><path d="M17 13h4"/><path d="M7 9h6"/>',
  spark: '<path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',
};

const categoryGrid = document.querySelector("#categoryGrid");
const comparisonGrid = document.querySelector("#comparisonGrid");
const presetGrid = document.querySelector("#presetGrid");
const toolRows = document.querySelector("#toolRows");
const directoryCount = document.querySelector("#directoryCount");
const leaderboardList = document.querySelector("#leaderboardList");
const benchmarkBandsEl = document.querySelector("#benchmarkBands");
const submissionList = document.querySelector("#submissionList");
const submissionCount = document.querySelector("#submissionCount");
const toast = document.querySelector("#toast");
const localSubmissions = [];

function renderCategories(activeName = "") {
  categoryGrid.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card ${activeName === category.name ? "active" : ""}" type="button" data-category="${category.name}">
          <svg viewBox="0 0 24 24" aria-hidden="true" style="color:${category.color}">${iconPaths[category.icon]}</svg>
          <span><strong>${category.name}</strong><small>${category.count} tools</small></span>
        </button>
      `,
    )
    .join("");
}

function scoreClass(value) {
  if (typeof value !== "number") return "";
  if (value >= 8) return "high";
  if (value >= 7) return "mid";
  return "low";
}

function renderComparisons(filter = "") {
  const normalized = filter.toLowerCase();
  const visible = comparisons.filter(
    (comparison) =>
      !normalized ||
      comparison.title.toLowerCase().includes(normalized) ||
      comparison.tag.toLowerCase().includes(normalized) ||
      comparison.columns.some((column) => column.toLowerCase().includes(normalized)),
  );

  comparisonGrid.innerHTML = visible
    .map(
      (comparison) => `
        <article class="comparison-card">
          <div class="comparison-title">
            <h3>${comparison.title}</h3>
            <span class="tag">${comparison.tag}</span>
          </div>
          <table class="comparison-table">
            <thead>
              <tr>
                <th scope="col"></th>
                ${comparison.columns.map((column) => `<th scope="col">${column}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${comparison.rows
                .map(
                  (row) => `
                    <tr>
                      <td>${row[0]}</td>
                      ${row
                        .slice(1)
                        .map((cell) =>
                          typeof cell === "number"
                            ? `<td><span class="score-pill ${scoreClass(cell)}">${cell.toFixed(1)}</span></td>`
                            : `<td>${cell}</td>`,
                        )
                        .join("")}
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
          <a class="comparison-link" href="#roast">View full comparison →</a>
        </article>
      `,
    )
    .join("");

  if (!visible.length) {
    comparisonGrid.innerHTML = '<p class="empty-state">No comparisons matched. Try Razorpay, WhatsApp, GST, or Hosting.</p>';
  }
}

function renderTools(filter = "") {
  const normalized = filter.toLowerCase();
  const visible = tools.filter(
    (tool) =>
      !normalized ||
      tool.name.toLowerCase().includes(normalized) ||
      tool.category.toLowerCase().includes(normalized) ||
      tool.bestFor.toLowerCase().includes(normalized) ||
      tool.indiaNote.toLowerCase().includes(normalized),
  );

  directoryCount.textContent = `${visible.length} ${visible.length === 1 ? "tool" : "tools"}`;
  toolRows.innerHTML = visible.length
    ? visible
        .map(
          (tool) => `
            <tr>
              <td class="tool-name">${tool.name}</td>
              <td><span class="tool-category">${tool.category}</span></td>
              <td>${tool.bestFor}</td>
              <td class="tool-pricing">${tool.pricing}</td>
              <td>${tool.indiaNote}</td>
            </tr>
          `,
        )
        .join("")
    : '<tr><td class="empty-state" colspan="5">No indexed tools matched. Try payments, WhatsApp, GST, hosting, or AI.</td></tr>';
}

function renderPresets() {
  presetGrid.innerHTML = presets
    .map(
      (preset) => `
        <article class="preset-card">
          <span class="preset-icon" style="background:${preset.color}">${preset.code}</span>
          <h3>${preset.title}<span>${preset.tools} tools</span></h3>
          <p>${preset.desc}</p>
          <div class="preset-meta">
            <div><small>Est. monthly cost</small><strong>${preset.cost}</strong></div>
            <div><small>Best for</small><strong>${preset.best}</strong></div>
          </div>
          <button class="button ghost" type="button" data-preset="${preset.title}">View Stack</button>
        </article>
      `,
    )
    .join("");
}

function renderLeaderboard(items = leaderboard) {
  leaderboardList.innerHTML = items
    .map(
      (item, index) => `
        <article class="leader-row">
          <span class="rank">#${index + 1}</span>
          <div><strong>${item.name}</strong><span>${item.type}</span></div>
          <div class="leader-score">${item.score}/100</div>
          <div><small>Estimated waste</small><span class="leader-burn">${item.burn}</span></div>
          <p class="leader-quote">${item.quote}</p>
        </article>
      `,
    )
    .join("");
}

function formatRs(value) {
  return `Rs ${Math.round(value).toLocaleString("en-IN")}`;
}

function classifySpend(spend, band) {
  if (spend <= band.lean) return { label: "Lean", color: "#0a9853", percentile: 28 };
  if (spend <= band.normal) return { label: "Normal", color: "#0a9853", percentile: 64 };
  if (spend <= band.bloated) return { label: "Bloated", color: "#e8741a", percentile: 82 };
  return { label: "Danger Zone", color: "#de4d33", percentile: 94 };
}

function renderBenchmarkBands(type = "saas") {
  const band = benchmarkBands[type];
  const cards = [
    ["Lean", `0 - ${formatRs(band.lean)}`, "Founder is using free tiers and only essential tools."],
    ["Normal", `${formatRs(band.lean + 1)} - ${formatRs(band.normal)}`, "Healthy spend for the current stage."],
    ["Bloated", `${formatRs(band.normal + 1)} - ${formatRs(band.bloated)}`, "Tool overlap or premature scale spend is likely."],
    ["Danger Zone", `${formatRs(band.bloated + 1)}+`, "Audit immediately before spend becomes habit."],
  ];
  benchmarkBandsEl.innerHTML = cards
    .map(
      ([name, range, note]) => `
        <article class="band-card">
          <strong>${name}</strong>
          <span>${range}</span>
          <small>${note}</small>
        </article>
      `,
    )
    .join("");
}

function updateBenchmark(form) {
  const data = new FormData(form);
  const type = data.get("benchmarkType") || "saas";
  const spend = Number(data.get("benchmarkSpend") || 0);
  const team = Math.max(1, Number(data.get("benchmarkTeam") || 1));
  const stage = data.get("benchmarkStage") || "pre-revenue";
  const aiSpend = Number(data.get("benchmarkAi") || 0);
  const whatsAppSpend = Number(data.get("benchmarkWhatsApp") || 0);
  const band = benchmarkBands[type];
  const classification = classifySpend(spend, band);
  const stageMultiplier = stage === "pre-revenue" ? 0.75 : stage === "early" ? 1 : stage === "growth" ? 1.35 : 1.8;
  const expected = band.normal * stageMultiplier + Math.max(0, team - 3) * 900;
  const overlap = Math.max(0, spend - expected * 0.82 + Math.max(0, aiSpend - spend * 0.28) + Math.max(0, whatsAppSpend - spend * 0.22));
  const leanerThan = Math.max(6, 100 - classification.percentile);

  document.querySelector("#benchmarkPercentile").textContent = `${classification.percentile}%`;
  document.querySelector("#benchmarkBand").textContent = classification.label;
  document.querySelector("#benchmarkBand").style.color = classification.color;
  document.querySelector("#benchmarkGauge").style.background = `
    radial-gradient(circle at center, #fff 0 56%, transparent 57%),
    conic-gradient(${classification.color} 0 ${classification.percentile}%, #edf0f5 0 100%)
  `;
  document.querySelector("#benchmarkHeadline").textContent =
    `Your stack spend is ${classification.label.toLowerCase()} for ${band.label}.`;
  document.querySelector("#benchmarkSummary").textContent =
    `You are spending more than ${classification.percentile}% of similar Indian founders, with roughly ${formatRs(overlap)}/month in avoidable overlap.`;
  document.querySelector("#benchmarkShare").textContent =
    `My startup stack is leaner than ${leanerThan}% of Indian ${band.label} founders.`;
  renderBenchmarkBands(type);
}

function renderSubmissions() {
  submissionCount.textContent = `${localSubmissions.length} local ${
    localSubmissions.length === 1 ? "submission" : "submissions"
  }`;
  submissionList.innerHTML = localSubmissions.length
    ? localSubmissions
        .map(
          (item) => `
            <article class="submission-item">
              <strong>${item.type}</strong>
              <span>${formatRs(item.spend)}/month</span>
              <small>${item.stage} • ${item.tools}</small>
              ${item.regret ? `<p>${item.regret}</p>` : ""}
            </article>
          `,
        )
        .join("")
    : '<p class="empty-state">No local submissions yet. Add one to preview how public benchmark samples will appear.</p>';
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

async function updateRoast(form) {
  const data = new FormData(form);
  const spend = Number(data.get("spend") || 9800);
  const type = data.get("type") || "SaaS";
  const company = data.get("company") || "your startup";
  const repoUrl = data.get("repoUrl") || "";
  const packageHints = data.get("packageHints") || "";
  const overspend = Math.max(2500, Math.round(spend * 0.42));
  const score = Math.max(54, Math.min(86, 82 - Math.round(spend / 1800)));
  const companyLabel = company === "your startup" ? "Your Startup" : company;
  const overspendLabel = `Rs ${overspend.toLocaleString("en-IN")}/month`;
  document.querySelector("#overallScore").textContent = score;
  document.querySelector(".gauge").style.setProperty("--score", score);
  document.querySelector("#findingsList").innerHTML = `
    <li>${companyLabel} may be overspending by ${overspendLabel} across overlapping tools.</li>
    <li>${type} setup needs clearer pricing, CTA visibility, and India payment readiness.</li>
    <li>Switching one core vendor could save Rs ${Math.round(overspend * 0.32).toLocaleString("en-IN")}/month.</li>
  `;
  document.querySelector("#shareCompany").textContent = companyLabel;
  document.querySelector("#shareScore").textContent = `${score}/100`;
  document.querySelector("#shareQuote").textContent =
    `${type} stack, ${score < 70 ? "expensive tool overlap" : "solid basics"}, and ${overspendLabel} hiding in spend.`;
  await updateRepoAnalysis(repoUrl, packageHints, type);
}

function detectRepoProvider(repoUrl) {
  const input = String(repoUrl || "").trim();
  if (!input) return { provider: "No repository connected", host: "", owner: "", repo: "" };
  let url;
  try {
    url = new URL(input);
  } catch {
    return { provider: "Invalid repository URL", host: "", owner: "", repo: "" };
  }
  const host = url.hostname.replace(/^www\./, "");
  const parts = url.pathname.split("/").filter(Boolean);
  const providers = [
    ["github.com", "GitHub"],
    ["gitlab.com", "GitLab"],
    ["bitbucket.org", "Bitbucket"],
    ["codeberg.org", "Codeberg"],
    ["sr.ht", "SourceHut"],
    ["dev.azure.com", "Azure DevOps"],
    ["visualstudio.com", "Azure DevOps"],
  ];
  const matched = providers.find(([domain]) => host === domain || host.endsWith(`.${domain}`));
  return {
    provider: matched ? matched[1] : "Self-hosted Git",
    host,
    owner: parts[0] || "",
    repo: parts[1] || parts[2] || "",
  };
}

function packageJsonUrl(repo) {
  if (!repo.owner || !repo.repo) return "";
  const project = `${repo.owner}/${repo.repo}`;
  if (repo.provider === "GitHub") {
    return `https://api.github.com/repos/${project}/contents/package.json`;
  }
  if (repo.provider === "GitLab") {
    return `https://gitlab.com/api/v4/projects/${encodeURIComponent(project)}/repository/files/package.json/raw?ref=HEAD`;
  }
  if (repo.provider === "Bitbucket") {
    return `https://api.bitbucket.org/2.0/repositories/${project}/src/HEAD/package.json`;
  }
  if (repo.provider === "Codeberg") {
    return `https://codeberg.org/${project}/raw/branch/main/package.json`;
  }
  return "";
}

async function fetchPublicPackage(repo) {
  const url = packageJsonUrl(repo);
  if (!url) return { status: "No public package fetch route for this provider.", text: "" };
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4500);
  try {
    const response = await fetch(url, {
      headers: repo.provider === "GitHub" ? { Accept: "application/vnd.github.raw+json" } : {},
      signal: controller.signal,
    });
    if (!response.ok) {
      return { status: "Package fetch unavailable; using URL and dependency hints.", text: "" };
    }
    const raw = await response.text();
    try {
      const parsed = JSON.parse(raw);
      const deps = {
        ...(parsed.dependencies || {}),
        ...(parsed.devDependencies || {}),
        ...(parsed.peerDependencies || {}),
      };
      return {
        status: `Public package.json analyzed with ${Object.keys(deps).length} dependencies.`,
        text: Object.keys(deps).join(" "),
      };
    } catch {
      return { status: "Package file fetched but could not be parsed; using hints.", text: raw.slice(0, 2000) };
    }
  } catch {
    return { status: "Repository package fetch failed; using URL and dependency hints.", text: "" };
  } finally {
    window.clearTimeout(timeout);
  }
}

function inferStack(repoUrl, hints) {
  const text = `${repoUrl} ${hints}`.toLowerCase();
  const matched = stackSignals.filter((signal) =>
    signal.match.some((term) => text.includes(term.toLowerCase())),
  );
  if (matched.length) return matched;
  if (text.includes("api")) return [{ label: "API Backend", risk: "Add dependency hints for sharper stack prediction." }];
  if (text.includes("app") || text.includes("web")) {
    return [{ label: "Web App", risk: "Repository name suggests app code; package hints would improve prediction." }];
  }
  return [{ label: "Unknown Stack", risk: "Add package.json, framework names, or dependency hints for deeper analysis." }];
}

async function updateRepoAnalysis(repoUrl, hints, businessType) {
  const repo = detectRepoProvider(repoUrl);
  const packageResult =
    repo.provider === "No repository connected" || repo.provider === "Invalid repository URL"
      ? { status: "Paste a public repository URL to fetch package metadata.", text: "" }
      : await fetchPublicPackage(repo);
  const stack = inferStack(repoUrl, `${hints} ${packageResult.text}`);
  const providerText = repo.repo ? `${repo.provider}: ${repo.owner}/${repo.repo}` : repo.provider;
  document.querySelector("#repoProvider").textContent = providerText;
  document.querySelector("#repoChips").innerHTML = stack
    .map((signal) => `<span>${signal.label}</span>`)
    .join("");
  document.querySelector("#repoFindings").innerHTML = `
    <li>${repo.provider === "No repository connected" ? "No version-control source provided yet." : `${repo.provider} source detected from ${repo.host}.`}</li>
    <li>${packageResult.status}</li>
    <li>${stack[0].label === "Unknown Stack" ? stack[0].risk : `Predicted ${businessType} stack: ${stack.map((signal) => signal.label).slice(0, 5).join(", ")}.`}</li>
    <li>${stack.find((signal) => signal.label.includes("AI"))?.risk || stack[0].risk}</li>
  `;
}

renderCategories();
renderTools();
renderComparisons();
renderPresets();
renderLeaderboard();
renderBenchmarkBands();
renderSubmissions();

categoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-category]");
  if (!card) return;
  const category = card.dataset.category;
  renderCategories(category);
  renderTools(category);
  renderComparisons(category);
  showToast(`Filtered comparisons by ${category}`);
});

document.querySelector("#resetFilters").addEventListener("click", () => {
  renderCategories();
  renderTools();
  renderComparisons();
  document.querySelector("#searchInput").value = "";
  showToast("Showing all categories and comparisons");
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = document.querySelector("#searchInput").value.trim();
  renderCategories();
  renderTools(term);
  renderComparisons(term);
  showToast(term ? `Searching for ${term}` : "Showing featured comparisons");
});

document.querySelector("#presetGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-preset]");
  if (!button) return;
  showToast(`${button.dataset.preset} stack opened`);
});

document.querySelectorAll(".step").forEach((step) => {
  step.addEventListener("click", () => {
    document.querySelectorAll(".step").forEach((item) => item.classList.remove("active"));
    step.classList.add("active");
    const labels = {
      about: "1. About You",
      stack: "2. Your Stack",
      business: "3. Business Details",
      review: "4. Review and Pay",
    };
    document.querySelector("#formTitle").textContent = labels[step.dataset.step];
  });
});

document.querySelector("#auditForm").addEventListener("submit", (event) => {
  event.preventDefault();
  updateRoast(event.currentTarget).then(() => showToast("Sample roast generated"));
});

document.querySelector("#copyShare").addEventListener("click", async () => {
  const text = `${document.querySelector("#shareCompany").textContent} scored ${
    document.querySelector("#shareScore").textContent
  } on Stack Roast India. ${document.querySelector("#shareQuote").textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("Share text copied");
  } catch {
    showToast(text);
  }
});

document.querySelector("#benchmarkForm").addEventListener("submit", (event) => {
  event.preventDefault();
  updateBenchmark(event.currentTarget);
  showToast("Benchmark calculated");
});

document.querySelector('select[name="benchmarkType"]').addEventListener("change", (event) => {
  renderBenchmarkBands(event.currentTarget.value);
});

document.querySelector("#submissionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  localSubmissions.unshift({
    type: data.get("submissionType"),
    spend: Number(data.get("submissionSpend") || 0),
    stage: data.get("submissionStage"),
    tools: data.get("submissionTools"),
    regret: data.get("submissionRegret"),
  });
  renderSubmissions();
  event.currentTarget.reset();
  showToast("Anonymous sample added locally");
});

document.querySelector("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  showToast("Subscribed to weekly stack updates");
});
