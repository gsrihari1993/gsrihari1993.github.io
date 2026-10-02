// All site content lives here. Edit this file, then run `npm run build`.

export const profile = {
  name: "Srihari Gopi",
  role: "Associate Vice President, Global Workforce Optimization at Citi",
  location: "Bengaluru, India",
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
  headline: "Product, risk and analytics leader for financial operations.",
  sub: "Ten years across the US and India, from credit risk models to automation at a global bank.",
};

export const summary = [
  "Associate Vice President with 10+ years across analytics consulting, US fintech product management, credit risk modeling and AI-led workforce optimization at a global bank.",
  "I built a seven-member automation team from zero and have delivered enterprise-scale reporting, lineage and scenario-planning systems that connect credit risk, product and operations. I trained at the University of Minnesota's Carlson School and worked in the US in credit risk and lending before moving back to India.",
];

// Most recent first.
export const route = [
  { city: "Bengaluru", years: "2025 – present" },
  { city: "Chennai", years: "2021 – 2024" },
  { city: "San Francisco", years: "2020 – 2021" },
  { city: "San Jose", years: "2018 – 2020" },
  { city: "Minneapolis", years: "2017 – 2018" },
  { city: "Chennai", years: "2014 – 2017" },
];

export const experience = [
  {
    when: "Apr 2025 – present",
    title: "Associate Vice President, Global Workforce Optimization",
    org: "Citi",
    place: "Bengaluru, India",
    bullets: [
      "Built and lead a seven-member low-code/no-code automation team from scratch. Delivered a multi-API platform handling 600+ transactions a day, so operations agents worldwide can self-serve overtime and voluntary time-off requests, agent logout and real-time skill updates.",
      "Lead an enterprise data mapping and lineage initiative covering 600+ long-term capacity plans across global sites and business functions. I own the process governance and its ongoing maintenance cycle.",
      "Core member of a Report Rationalization initiative that analyzed clients' end-to-end data and reporting landscape. Delivered a target-state architecture and a right-sized operating model in a six-week engagement, using stakeholder workshops and AI-assisted analysis of transcripts and report inventories.",
      "Lead a scenario-planning initiative on Xceptor, with maker-checker validation, that makes capacity planning governed and auditable at scale.",
    ],
  },
  {
    when: "2021 – Dec 2024",
    title: "Product Manager",
    org: "Applied Data Finance",
    place: "Chennai, India",
    bullets: [
      "Drove loan originations and product development for a personal-loan acquisition product originating $50M a month. Reworked the organic funnel UX and lifted customer acquisition by 20% in six months.",
      "Restructured the underwriting workflow to cut early risk exposure on newly originated loans by 35%.",
      "Launched a new affiliate partner through a co-branded campaign, and integrated a notary vendor that reached 100% compliance on suspect applications.",
    ],
  },
  {
    when: "2020 – 2021",
    title: "Risk Analyst",
    org: "Funding Circle",
    place: "San Francisco, USA",
    bullets: [
      "Built an allocation model framework in Python and Django that routes prospective leads to lender partner groups, improving sales efficiency across the platform.",
      "Rebuilt and maintained a single source of truth for the $1B loan portfolio, standardizing data definitions, ownership and governance.",
    ],
  },
  {
    when: "2018 – 2020",
    title: "Associate, Credit Risk Strategy and Modeling",
    org: "LatentView Analytics",
    place: "San Jose, USA",
    bullets: [
      "Revised PayPal's monthly consumer credit-card portfolio risk model in Python with gradient boosting (H2O), raising eligible customer credit lines and improving charge-off estimates.",
    ],
  },
  {
    when: "2017 – 2018",
    title: "Analytics Consultant",
    org: "Carlson Analytics Lab",
    place: "Minneapolis, USA",
    bullets: [
      "Won first place at MinneMUDAC 2017 by predicting high-cost diabetic patients with a random forest, as part of the University of Minnesota graduate analytics practicum.",
    ],
  },
  {
    when: "2014 – 2017",
    title: "Analyst, then Senior Analyst",
    org: "LatentView Analytics",
    place: "Chennai, India",
    bullets: [
      "Led five analysts across pricing and FP&A projects for a Fortune 500 online-payments client.",
      "Helped integrate Xoom's pricing with the client's pricing structure, and built a Tableau pricing-scenario tool that simulates fee structures for large-merchant negotiations.",
      'Won the "Spirit of LatentView" award for a customer-engagement waterfall model.',
    ],
  },
];

export const education = [
  {
    when: "2017 – 2018",
    title: "MS, Business Analytics",
    org: "Carlson School of Management, University of Minnesota",
    place: "Minneapolis, USA",
  },
  {
    when: "2010 – 2014",
    title: "B.Tech, Instrumentation and Control Engineering",
    org: "National Institute of Technology, Trichy",
    place: "India",
    bullets: [
      "Graduated with First Class. Captain of the college swimming team.",
      "Summer internship at IIT Madras (2013) on data clustering.",
    ],
  },
];

export const skills = [
  { label: "Product and operations", value: "Product management, workforce optimization, capacity planning, report rationalization, process automation" },
  { label: "Risk and analytics", value: "Credit risk modeling, gradient boosting (H2O), random forest, causal modeling, scenario planning" },
  { label: "Data and engineering", value: "Python, R, SQL (Teradata, MySQL), Django, data mapping and lineage, multi-API integration" },
  { label: "Tools", value: "Tableau, Power BI, MicroStrategy, Xceptor, low-code/no-code platforms" },
  { label: "Leadership", value: "Team building, stakeholder management, workshop facilitation, cross-functional delivery" },
];

export const outsideWork = {
  facts: [
    "Swam at state level in Tamil Nadu and captained the NIT Trichy swimming team. Won 5 golds and 2 silvers at the KV national meet (2009) and 3 golds and 2 silvers at the IIT Kharagpur inter-collegiate meet (2012).",
    "PADI Advanced Open Water diver. Have been a member of the Tamil Nadu Sailing Association and the National Life Saving Association, India.",
  ],
  photos: [
    { src: "images/sailing.jpg", width: 800, height: 534, alt: "Sailing a dinghy in a harbour" },
    { src: "images/kayaking-1000.jpg", width: 1000, height: 563, alt: "Kayaking on a calm lake" },
    { src: "images/surfing-1000.jpg", width: 1000, height: 605, alt: "Surfing a small wave" },
  ],
};
