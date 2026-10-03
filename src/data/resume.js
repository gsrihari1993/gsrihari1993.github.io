// All site content lives here. Edit this file, then run `npm run build`.

export const profile = {
  name: "Srihari Gopi",
  role: "Assistant Vice President, Global Workforce Optimization at Citi",
  location: "India",
  photo: { src: "images/srihari-720.jpg", width: 720, height: 1080, alt: "Portrait of Srihari Gopi" },
  badge: {
    text: "AI-built, zero code",
    title: "Designed and coded by Claude, Anthropic's AI assistant. I wrote none of the code.",
  },
  email: "gsrihari1993@gmail.com",
  linkedin: "https://www.linkedin.com/in/srihari-gopi/",
  cv: "Srihari_Gopi_CV.pdf",
  updated: "October 2026",
};

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#outside-work", label: "Outside work" },
];

export const intro = {
  headline: "Product, risk and analytics professional in financial operations.",
  sub: "Ten years in analytics, credit risk and product, now working on workforce optimization at a global bank.",
};

export const summary = [
  "Assistant Vice President at Citi with over ten years in analytics consulting, fintech product management, credit risk modeling and workforce optimization.",
  "At Citi I lead a seven-member automation team and own the data enablement and Xceptor platform initiatives. Before that I worked on lending products, credit risk models and portfolio data, and I studied business analytics at the University of Minnesota's Carlson School.",
];

export const experience = [
  {
    id: "citi",
    when: "Apr 2025 – present",
    title: "Assistant Vice President, Global Workforce Optimization",
    org: "Citi",
    bullets: [
      "Lead a seven-member low-code/no-code automation team that I built from scratch. The team runs a multi-API platform handling 600+ transactions a day, so operations agents can request overtime and voluntary time off, log out and update skills themselves.",
      "Own the data enablement initiatives. I set up a staging layer of 60+ tables that 20+ reports and other analytics solutions use.",
      "Own the Xceptor platform initiatives: an application-support intake for enquiries and enhancement requests on the GWFO product suite, and the ICRM mitigation-adjustment workflow, which calibrates systemic forecasts with approval across three teams for 100+ capacity plans.",
      "Built Lineage Console, an AI-assisted tool that maps 10,000 critical data elements from 550+ capacity plans across 4-5 hops. I own its governance and upkeep.",
      "Was a core member of a Report Rationalization initiative that reviewed clients' reporting landscape and produced a target-state architecture and operating model in six weeks.",
    ],
  },
  {
    id: "applied-data-finance",
    when: "2021 – Dec 2024",
    title: "Product Manager",
    org: "Applied Data Finance",
    bullets: [
      "Managed a personal-loan acquisition product that originated $50M a month. Reworked the organic funnel and customer acquisition rose by 20% in six months.",
      "Changed the underwriting workflow and cut early risk exposure on new loans by 35%.",
      "Launched a new affiliate partner through a co-branded campaign, and added a notary vendor that brought suspect applications to 100% compliance.",
    ],
  },
  {
    id: "funding-circle",
    when: "2020 – 2021",
    title: "Risk Analyst",
    org: "Funding Circle",
    bullets: [
      "Built an allocation model framework in Python and Django that routes prospective leads to lender partner groups, which improved sales efficiency.",
      "Rebuilt the single source of truth for the $1B loan portfolio, with common data definitions and clear ownership.",
    ],
  },
  {
    id: "latentview-associate",
    when: "2018 – 2020",
    title: "Associate, Credit Risk Strategy and Modeling",
    org: "LatentView Analytics",
    bullets: [
      "Revised PayPal's monthly consumer credit-card portfolio risk model in Python with gradient boosting (H2O). Eligible customers received higher credit lines and charge-off estimates improved.",
    ],
  },
  {
    id: "carlson-analytics-lab",
    when: "2017 – 2018",
    title: "Analytics Consultant",
    org: "Carlson Analytics Lab",
    bullets: [
      "Won first place at MinneMUDAC 2017 by predicting high-cost diabetic patients with a random forest, as part of the University of Minnesota graduate analytics practicum.",
    ],
  },
  {
    id: "latentview-analyst",
    when: "2014 – 2017",
    title: "Analyst, then Senior Analyst",
    org: "LatentView Analytics",
    bullets: [
      "Led five analysts on pricing and FP&A projects for an online-payments client.",
      "Helped integrate Xoom's pricing with the client's pricing structure, and built a Tableau tool that simulated fee structures for large-merchant negotiations.",
      'Won the "Spirit of LatentView" award for a customer-engagement waterfall model.',
    ],
  },
];

export const education = [
  {
    id: "msba",
    when: "2017 – 2018",
    title: "MS, Business Analytics",
    org: "Carlson School of Management, University of Minnesota",
    place: "Minneapolis, USA",
  },
  {
    id: "btech",
    when: "2010 – 2014",
    title: "B.Tech, Instrumentation and Control Engineering",
    org: "National Institute of Technology, Trichy",
    place: "India",
    bullets: [
      "Graduated with First Class. Captained the college swimming team.",
      "Summer internship at IIT Madras (2013) on data clustering.",
    ],
  },
];

export const skills = [
  { label: "Product and operations", value: "Product management, workforce optimization, capacity planning, report rationalization, process automation, Xceptor workflows" },
  { label: "Risk and analytics", value: "Credit risk modeling, gradient boosting (H2O), random forest, causal modeling, scenario planning" },
  { label: "Data and engineering", value: "Python, R, SQL (Teradata, MySQL), Django, data mapping and lineage, multi-API integration" },
  { label: "Tools", value: "Tableau, Power BI, MicroStrategy, Xceptor, low-code/no-code platforms" },
  { label: "Leadership", value: "Team building, stakeholder management, workshop facilitation, cross-functional delivery" },
];

export const outsideWork = {
  facts: [
    "Swam at state level in Tamil Nadu and captained the NIT Trichy swimming team. Won 5 golds and 2 silvers at the KV national meet (2009) and 3 golds and 2 silvers at the IIT Kharagpur inter-collegiate meet (2012).",
    "PADI Advanced Open Water diver. Was a member of the Tamil Nadu Sailing Association and the National Life Saving Association, India.",
  ],
  photos: [
    { src: "images/sailing.jpg", width: 800, height: 534, alt: "Sailing a dinghy in a harbour" },
    { src: "images/kayaking-1000.jpg", width: 1000, height: 563, alt: "Kayaking on a calm lake" },
    { src: "images/surfing-1000.jpg", width: 1000, height: 605, alt: "Surfing a small wave" },
  ],
};
