import type { ReactNode } from "react";
import LetterBuilder from "./components/LetterBuilder";

const PROJECT_NAME = "The Hidden Cost of AI";

const NAV_LINKS = [
  { href: "#explainer", label: "Data Centers" },
  { href: "#impact", label: "Impact" },
  { href: "#perspective", label: "Perspective" },
  { href: "#affected", label: "Who's Affected" },
  { href: "#solutions", label: "Solutions" },
  { href: "#action", label: "Take Action" },
  { href: "#sources", label: "Sources" },
];

/* ---------- Shared bits ---------- */

function Icon({
  size = 24,
  strokeWidth = 1.8,
  className,
  children,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

const LeafPath = (
  <>
    <path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z" />
    <path d="M5 19l7-7" />
  </>
);

const BoltPath = <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />;
const DropPath = (
  <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
);
const SoundPath = (
  <>
    <path d="M11 5 6 9H3v6h3l5 4z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
  </>
);

function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2
        id={id}
        className="m-0 font-display text-[clamp(30px,4vw,44px)] leading-[1.15] font-extrabold text-forest"
      >
        {title}
      </h2>
      {intro && <p className="m-0 max-w-[640px] text-body">{intro}</p>}
    </div>
  );
}

/* ---------- Sources ---------- */

type Source = { id: string; citation: string; url?: string };

const SOURCES: Source[] = [
  {
    id: "src-edgi",
    citation:
      "Environmental Data & Governance Initiative (EDGI). “Communities Close to EPA-Regulated Data Centers Face Heightened Air Pollution.”",
    url: "https://envirodatagov.org/communities-close-to-epa-regulated-data-centers-face-heightened-air-pollution/",
  },
  {
    id: "src-nationshealth",
    citation: "The Nation’s Health, vol. 56, no. 6. American Public Health Association.",
    url: "https://www.thenationshealth.org/content/56/6/1.1",
  },
  {
    id: "src-tao-gao",
    citation:
      "Tao, Yu, and Peng Gao. “Global Data Center Expansion and Human Health: A Call for Empirical Research.” Eco-Environment & Health, vol. 4, no. 3, 2025, 100157.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12273412/",
  },
  {
    id: "src-mytton",
    citation:
      "Mytton, David. “Data Centre Water Consumption.” npj Clean Water, vol. 4, no. 1, 2021, p. 11. (Cited in Tao & Gao.)",
  },
  {
    // TODO: replace [Article title] with the page's real title
    id: "src-ehs",
    citation: "Environmental Health Sciences (EHS). [Article title].",
    url: "https://ehsciences.org/ai-data-center-health-impacts/",
  },
  {
    // TODO: replace [Article title] with the page's real title
    id: "src-ehs-local",
    citation: "Environmental Health Sciences (EHS). [Article title].",
    url: "https://ehsciences.org/recommendations-for-local-governments-regarding-data-centers/",
  },
  {
    id: "src-liu",
    citation:
      "Liu, Andrew. “China Bets on Renewable Energy to Gain an AI Edge.” Inside Climate News, 2 Nov. 2026.",
    url: "https://insideclimatenews.org/news/02112026/china-renewable-energy-data-centers/",
  },
  {
    id: "src-stimpson",
    citation:
      "Stimpson, Ashley. “How One Maryland Community Is Fighting Data Centers and Defending Democracy.” Sierra Magazine. Accessed 3 Nov. 2026.",
    url: "https://www.sierraclub.org/sierra/how-one-maryland-community-fighting-data-centers-and-defending-democracy",
  },
];

/* ---------- Content ---------- */

const STEPS: { title: string; caption: string; icon: ReactNode }[] = [
  {
    title: "It runs on huge amounts of power",
    caption:
      "When that electricity comes from fossil fuels, or backup diesel generators run during outages and tests, it releases nitrogen oxides and fine particulate matter.",
    icon: BoltPath,
  },
  {
    title: "It uses water to stay cool",
    caption:
      "Large AI data centers can use millions of gallons of water a day for cooling, often from the same supply that serves local homes.",
    icon: DropPath,
  },
  {
    title: "It never goes quiet",
    caption:
      "Cooling fans, HVAC units and generators run around the clock, with a constant low hum and bright security lighting all night.",
    icon: SoundPath,
  },
  {
    title: "It reshapes the grid",
    caption:
      "New substations and transmission lines are built to feed it, often paid for by residents and sometimes on land taken through eminent domain.",
    icon: (
      <>
        <path d="M12 2 7 22M12 2l5 20" />
        <path d="M8.5 9h7M7 15h10" />
      </>
    ),
  },
];

const IMPACTS: {
  category: string;
  stat: string;
  body: string;
  icon: ReactNode;
  sourceId?: string;
}[] = [
  {
    category: "Air quality",
    stat: "~1,300",
    body: "deaths a year could be linked to U.S. data center air pollution by 2030, through illnesses like asthma and heart disease.",
    icon: (
      <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9z" />
    ),
    sourceId: "src-tao-gao",
  },
  {
    category: "Water",
    stat: "Up to 57%",
    body: "of the water data centers use for cooling comes from drinking-water sources in some areas, straining supply in already stressed regions.",
    icon: DropPath,
    sourceId: "src-mytton",
  },
  {
    category: "Noise & light",
    stat: "24/7",
    body: "Fans and generators never stop. Even noise within legal limits can cause poor sleep, stress and high blood pressure.",
    icon: SoundPath,
    sourceId: "src-nationshealth",
  },
  {
    category: "Neighbors",
    stat: "4 million",
    body: "people live within one mile of the 550 EPA-permitted data centers studied by EDGI.",
    icon: (
      <>
        <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    sourceId: "src-edgi",
  },
];

const STUDY_STATS = [
  { value: "550", label: "EPA-permitted data centers studied" },
  { value: "~10%", label: "of all U.S. data centers" },
  { value: "3 of 3", label: "pollutants measured above the national median" },
];

const STUDY_FINDINGS = [
  "Communities within one mile of these data centers are disproportionately communities of color, compared with the national median.",
  "Fine particulate matter, nitrogen dioxide and diesel particulate matter all run above the national median.",
  "Communities of color near data centers face worse air pollution than other communities near data centers.",
  "At the state level, low-income communities are significantly associated with higher nitrogen dioxide and diesel pollution.",
];

const AFFECTED: {
  name: string;
  description: string;
  alt: string;
  tone: string;
  icon: ReactNode;
}[] = [
  {
    name: "Communities of color & low-income neighborhoods",
    description:
      "Data centers are often built where people already carry more industrial air and water pollution. Nearby communities of color breathe dirtier air than the typical U.S. community.",
    alt: "Image placeholder: a neighborhood near a data center",
    tone: "bg-sage-200 text-forest",
    icon: (
      <>
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  {
    name: "Ratepayers & landowners",
    description:
      "Grid upgrades for AI are often paid for by residents, not the companies. Utilities and developers have used eminent domain to take land, and owners are rarely paid fairly.",
    alt: "Image placeholder: power lines crossing private land",
    tone: "bg-sand text-bark",
    icon: BoltPath,
  },
  {
    name: "Neighbors & wildlife",
    description:
      "Round-the-clock noise disrupts sleep and raises stress. Nighttime security lighting affects nearby homes and wildlife that rely on darkness to migrate, feed or reproduce.",
    alt: "Image placeholder: wildlife habitat near a lit data center campus",
    tone: "bg-sage-300 text-forest",
    icon: (
      <>
        <path d="M12 21v-9" />
        <path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z" />
        <path d="M12 10c0-3 2-5 6-5 0 3-2 5-6 5z" />
      </>
    ),
  },
];

const SOLUTIONS_BUILD = [
  "Power data centers with clean, renewable energy to cut the pollutants that harm people and the environment.",
  "Invest in water-saving cooling and better filtration so water can be reused before it’s replaced.",
  "Build in cooler climates that need less energy and water for cooling, and closer to renewable power.",
  "Site facilities away from homes and endangered species habitats.",
];

const SOLUTIONS_RULES = [
  "Require environmental impact assessments, strict noise limits and caps on fresh water use before permits are approved.",
  "Stop passing grid upgrade costs to residents. Make tech companies pay for their own power infrastructure.",
  "Tie corporate tax breaks to sustainability benchmarks, local hiring and community benefit agreements.",
  "Demand transparency on emissions, energy, water, noise and taxes.",
  "Pause new construction until proper safeguards and ordinances are in place.",
];

const CASE_STUDIES = [
  {
    title: "Wind- and solar-powered AI in China",
    body: "Envision Energy, the world’s second-largest wind turbine maker, runs an AI data center powered by wind and solar that could become the world’s largest standalone data center. AI can keep growing without the fossil fuel fallout.",
    sourceId: "src-liu",
  },
  {
    title: "A Maryland community fights back",
    body: "Residents showed up to meetings, voted, signed up for training sessions and gathered signatures over two months to push back against new data centers. Organized communities can shape what gets built.",
    sourceId: "src-stimpson",
  },
];

const TIPS = [
  "Attend city council and county planning hearings when a new data center is proposed.",
  "Donate to or volunteer with local riverkeepers, clean-air coalitions and environmental justice groups.",
  "Hold index funds or a 401(k)? Use proxy voting to back shareholder resolutions on environmental transparency.",
  "Choose tech providers that report water and power use and commit to 24/7 carbon-free energy, not offsets.",
  // TODO: add the source for the 30% / 25% figure
  "Keep AI prompts short: a 30% shorter query uses about 25% less water.",
];

const TEAM = Array.from({ length: 5 }, () => "[Name]");

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="w-full">
      {/* NAV */}
      <nav
        aria-label="Main"
        className="sticky top-0 z-10 border-b border-line bg-cream/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-3.5">
          <a
            href="#top"
            className="navlink flex items-center gap-2.5 font-display text-[19px] font-extrabold"
          >
            <span className="flex size-9 items-center justify-center rounded-[10px] bg-forest text-cream">
              <Icon size={20} strokeWidth={2}>
                {LeafPath}
              </Icon>
            </span>
            {PROJECT_NAME}
          </a>
          <div className="flex flex-wrap gap-x-[22px] gap-y-1.5 text-base font-medium">
            {NAV_LINKS.map((l) => (
              <a key={l.href} className="navlink" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <header id="top" className="relative overflow-hidden bg-sage">
        <div className="rise relative z-[1] mx-auto flex max-w-[860px] flex-col items-center gap-6 px-6 pt-[120px] pb-[260px] text-center">
          <span className="rounded-full bg-cream px-3.5 py-1.5 text-sm font-semibold tracking-[0.08em] text-moss uppercase">
            SYN 100 Class Project
          </span>
          <h1 className="m-0 font-display text-[clamp(40px,6vw,68px)] leading-[1.08] font-extrabold text-forest">
            The Hidden Cost of AI
          </h1>
          <p className="m-0 max-w-[640px] text-[21px] text-body">
            Exploring how each of your prompts affects our environment
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3.5">
            <a
              href="#explainer"
              className="inline-flex min-h-[52px] items-center rounded-full bg-amber px-7 font-semibold text-ink-dark no-underline shadow-[0_4px_14px_rgba(226,162,59,0.35)] hover:bg-amber-dark hover:text-ink-dark"
            >
              Read More
            </a>
            <a
              href="#action"
              className="inline-flex min-h-[52px] items-center rounded-full border-2 border-forest px-7 font-semibold text-forest no-underline hover:bg-forest hover:text-cream"
            >
              Take Action
            </a>
          </div>
        </div>
        <HeroLandscape />
      </header>

      {/* 2. WHAT A DATA CENTER BRINGS */}
      <section
        id="explainer"
        aria-labelledby="explainer-h"
        className="px-6 py-[100px]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader
            id="explainer-h"
            eyebrow="The basics"
            title="What a data center brings to a neighborhood"
          />
          <ol className="m-0 flex list-none flex-wrap gap-6 p-0">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="card flex flex-[1_1_230px] flex-col gap-3.5 px-7 py-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-sage text-forest">
                    <Icon size={28}>{step.icon}</Icon>
                  </span>
                  <span className="font-display text-[32px] font-extrabold text-sage-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="m-0 font-display text-[21px] font-bold text-forest">
                  {step.title}
                </h3>
                <p className="m-0 text-muted">{step.caption}</p>
              </li>
            ))}
          </ol>
          <aside className="flex flex-wrap items-center gap-6 rounded-3xl bg-forest px-10 py-9 text-cream">
            <span className="flex size-16 flex-none items-center justify-center rounded-[18px] bg-moss text-amber">
              <Icon size={32}>
                <path d="M9 18h6M10 21h4" />
                <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
              </Icon>
            </span>
            <figure className="m-0 flex flex-[1_1_400px] flex-col gap-1">
              <span className="eyebrow text-amber">The big picture</span>
              <blockquote className="m-0 text-[21px] leading-normal">
                “Data centers bring together nearly every type of pollution,
                from air, water, and land pollution to harmful noise, EMF, and
                fire risk.”
              </blockquote>
              <figcaption className="text-base text-sage-200">
                <a href="#src-ehs" className="text-sage-200 hover:text-cream">
                  EHS
                </a>
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      {/* 3. HEALTH & ENVIRONMENTAL IMPACT */}
      <section
        id="impact"
        aria-labelledby="impact-h"
        className="bg-sage px-6 py-[100px]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader
            id="impact-h"
            eyebrow="The impact"
            title="The health costs add up"
            intro="Current rules look at a few hazards one at a time. The communities next door live with all of them at once."
          />
          <div className="flex flex-wrap gap-6">
            {IMPACTS.map((item) => (
              <article
                key={item.category}
                className="card flex flex-[1_1_250px] flex-col gap-3 px-7 py-8"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-amber-soft text-rust">
                  <Icon size={28}>{item.icon}</Icon>
                </span>
                <h3 className="label mt-2 mb-0">{item.category}</h3>
                <p className="m-0 font-display text-[44px] leading-[1.1] font-extrabold text-rust">
                  {item.stat}
                </p>
                <p className="m-0 grow text-muted">{item.body}</p>
                {item.sourceId && (
                  <a href={`#${item.sourceId}`} className="text-[15px] font-medium">
                    View source
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. A CLOSER LOOK */}
      <section
        id="perspective"
        aria-labelledby="perspective-h"
        className="px-6 py-[100px]"
      >
        <div className="mx-auto flex max-w-[1000px] flex-col gap-10">
          <SectionHeader
            id="perspective-h"
            eyebrow="A closer look"
            title="Life within one mile of a data center"
            intro="Data centers often rely on diesel generators for backup power, so researchers looked closely at the air people breathe nearby."
          />
          <figure className="m-0 flex flex-col gap-8 rounded-3xl bg-white p-6 shadow-[0_4px_16px_rgba(30,68,51,0.07)] sm:p-10">
            <dl className="m-0 flex flex-wrap gap-6">
              {STUDY_STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-[1_1_200px] flex-col gap-1 rounded-2xl bg-mist px-6 py-5"
                >
                  <dt className="order-2 text-base text-muted">{s.label}</dt>
                  <dd className="order-1 m-0 font-display text-[40px] leading-[1.1] font-extrabold text-forest">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              {STUDY_FINDINGS.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] size-2.5 flex-none rounded-full bg-amber"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <figcaption className="border-t border-sage pt-5 text-base text-muted">
              Source:{" "}
              <a href="#src-edgi">
                Environmental Data &amp; Governance Initiative (EDGI)
              </a>{" "}
              analysis of EPA-regulated data centers.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. WHO IS AFFECTED */}
      <section
        id="affected"
        aria-labelledby="affected-h"
        className="bg-sage px-6 py-[100px]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader
            id="affected-h"
            eyebrow="People & places"
            title="Who pays the price"
          />
          <div className="flex flex-wrap gap-6">
            {AFFECTED.map((group) => (
              <article
                key={group.name}
                className="card flex flex-[1_1_300px] flex-col overflow-hidden"
              >
                <div
                  role="img"
                  aria-label={group.alt}
                  className={`flex h-[190px] flex-col items-center justify-center gap-2 text-[15px] font-medium ${group.tone}`}
                >
                  <Icon size={36} strokeWidth={1.6}>
                    {group.icon}
                  </Icon>
                  [Image placeholder]
                </div>
                <div className="flex flex-col gap-2.5 p-7">
                  <h3 className="m-0 font-display text-[22px] font-bold text-forest">
                    {group.name}
                  </h3>
                  <p className="m-0 text-muted">{group.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOLUTIONS */}
      <section
        id="solutions"
        aria-labelledby="solutions-h"
        className="px-6 py-[100px]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader
            id="solutions-h"
            eyebrow="Moving forward"
            title="How we fix it"
          />
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-[1_1_400px] flex-col gap-5 rounded-3xl bg-white p-8 shadow-[0_4px_16px_rgba(30,68,51,0.07)] sm:p-10">
              <div className="flex items-center gap-3.5">
                <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-sage text-forest">
                  <Icon size={26}>{LeafPath}</Icon>
                </span>
                <h3 className="m-0 font-display text-2xl font-bold text-forest">
                  Build them better
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {SOLUTIONS_BUILD.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon
                      size={22}
                      strokeWidth={2.2}
                      className="mt-[3px] flex-none text-moss"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </Icon>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-[1_1_400px] flex-col gap-5 rounded-3xl bg-forest p-8 text-cream sm:p-10">
              <div className="flex items-center gap-3.5">
                <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-moss text-amber">
                  <Icon size={26}>
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c1-4 4.5-6 8-6s7 2 8 6" />
                  </Icon>
                </span>
                <h3 className="m-0 font-display text-2xl font-bold">
                  Change the rules
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {SOLUTIONS_RULES.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon
                      size={22}
                      strokeWidth={2.2}
                      className="mt-[3px] flex-none text-amber"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </Icon>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="label m-0 text-center">Proof it works</h3>
            <div className="flex flex-wrap gap-6">
              {CASE_STUDIES.map((c) => (
                <article
                  key={c.title}
                  className="card flex flex-[1_1_400px] flex-col gap-3 px-8 py-8"
                >
                  <h4 className="m-0 font-display text-[21px] font-bold text-forest">
                    {c.title}
                  </h4>
                  <p className="m-0 grow text-muted">{c.body}</p>
                  <a href={`#${c.sourceId}`} className="text-[15px] font-medium">
                    View source
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TAKE ACTION */}
      <section
        id="action"
        aria-labelledby="action-h"
        className="bg-sage px-6 py-[100px]"
      >
        <div className="mx-auto flex max-w-[900px] flex-col gap-9">
          <SectionHeader
            id="action-h"
            eyebrow="Take action"
            title="Make your voice heard"
            intro="Decisions about data centers happen at local hearings, utility commissions and shareholder meetings. Pick who you want to reach, copy the letter, and make it your own."
          />
          <LetterBuilder />
          <div className="flex flex-wrap items-stretch gap-6">
            <a
              href="https://www.usa.gov/elected-officials"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-[1_1_260px] items-center gap-3.5 rounded-[20px] bg-forest px-7 py-6 font-semibold text-cream no-underline hover:text-cream"
            >
              <Icon size={26} className="flex-none text-amber">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </Icon>
              Find your elected officials
            </a>
            <div className="flex flex-[2_1_380px] flex-col gap-2.5 rounded-[20px] bg-white px-7 py-6">
              <h3 className="label m-0">More ways to help</h3>
              <ul className="m-0 flex list-disc flex-col gap-1.5 pl-[22px] text-body">
                {TIPS.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOURCES & ABOUT */}
      <section
        id="sources"
        aria-labelledby="sources-h"
        className="px-6 py-[100px]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-12">
          <div className="flex flex-[3_1_460px] flex-col gap-5">
            <h2
              id="sources-h"
              className="m-0 font-display text-[34px] font-extrabold text-forest"
            >
              Sources
            </h2>
            <ol className="m-0 flex list-decimal flex-col gap-3 pl-6 text-[17px] text-body">
              {SOURCES.map((s) => (
                <li key={s.id} id={s.id} className="scroll-mt-24">
                  {s.citation}
                  {s.url && (
                    <>
                      {" "}
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words"
                      >
                        {s.url.replace(/^https?:\/\/(www\.)?/, "")}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-[2_1_340px] flex-col gap-[18px] rounded-3xl bg-white p-9 shadow-[0_4px_16px_rgba(30,68,51,0.07)]">
            <h2 className="m-0 font-display text-[26px] font-extrabold text-forest">
              About this project
            </h2>
            <p className="m-0 text-muted">
              {PROJECT_NAME} is a SYN 100 class project on how AI data centers
              affect the health, water and wallets of the communities around
              them, and what people can do to change it.
            </p>
            <h3 className="label mt-2 mb-0">Team</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {TEAM.map((name, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 rounded-full bg-sage py-1.5 pr-4 pl-1.5 text-base text-forest"
                >
                  <span className="size-8 rounded-full bg-sage-400" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-forest px-6 py-10 text-cream">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 text-base">
          <span>
            <strong className="font-display">{PROJECT_NAME}</strong> · SYN 100
          </span>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 font-medium text-cream hover:text-cream"
          >
            <Icon size={18} strokeWidth={2}>
              <path d="M12 19V5M5 12l7-7 7 7" />
            </Icon>
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

/* Background illustration: data center blending into landscape */
function HeroLandscape() {
  return (
    <svg
      viewBox="0 0 1440 300"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className="absolute bottom-0 left-0 h-[300px] w-full"
    >
      <path
        d="M0 190 C 240 120 420 150 640 170 S 1100 110 1440 160 L1440 300 L0 300 Z"
        fill="#B9CDB3"
      />
      <g stroke="#7E9A79" strokeWidth="3">
        <line x1="980" y1="70" x2="980" y2="190" />
        <line x1="1180" y1="60" x2="1180" y2="180" />
        <line x1="964" y1="84" x2="996" y2="84" />
        <line x1="1164" y1="74" x2="1196" y2="74" />
      </g>
      <path
        d="M980 84 Q 1080 110 1180 74"
        stroke="#7E9A79"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M800 120 Q 890 100 980 84"
        stroke="#7E9A79"
        strokeWidth="2"
        fill="none"
      />
      <rect x="560" y="120" width="300" height="110" rx="8" fill="#1E4433" />
      <rect x="560" y="108" width="300" height="18" rx="6" fill="#2F6B4F" />
      <rect x="590" y="146" width="240" height="10" rx="5" fill="#8FAE8B" />
      <rect x="590" y="170" width="240" height="10" rx="5" fill="#8FAE8B" />
      <rect x="590" y="194" width="240" height="10" rx="5" fill="#8FAE8B" />
      <circle cx="604" cy="151" r="3" fill="#E2A23B" />
      <circle cx="604" cy="175" r="3" fill="#E2A23B" />
      <circle cx="604" cy="199" r="3" fill="#E2A23B" />
      <path
        d="M0 240 C 300 200 520 230 760 228 S 1180 200 1440 230 L1440 300 L0 300 Z"
        fill="#8FAE8B"
      />
      <g fill="#2F6B4F">
        <path d="M180 230 l26 -70 l26 70 z" />
        <rect x="203" y="228" width="6" height="16" />
        <path d="M240 236 l20 -54 l20 54 z" />
        <rect x="257" y="234" width="6" height="12" />
        <path d="M1260 226 l26 -70 l26 70 z" />
        <rect x="1283" y="224" width="6" height="16" />
        <path d="M1320 232 l20 -54 l20 54 z" />
        <rect x="1337" y="230" width="6" height="12" />
        <path d="M420 238 l18 -48 l18 48 z" />
        <path d="M900 236 l18 -48 l18 48 z" />
      </g>
      <path
        d="M0 270 C 360 250 720 280 1080 262 S 1440 268 1440 268 L1440 300 L0 300 Z"
        fill="#FAF7F0"
      />
    </svg>
  );
}
