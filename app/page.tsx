import type { ReactNode } from "react";
import LetterBuilder from "./components/LetterBuilder";

const PROJECT_NAME = "[Project Name]";

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

/* ---------- Content (placeholders from the design) ---------- */

const STEPS: { title: string; caption: string; icon: ReactNode }[] = [
  {
    title: "[Step Title]",
    caption: "[Short caption]",
    icon: (
      <>
        <path d="M4 5h16v11H9l-5 4z" />
        <path d="M8 9h8M8 12h5" />
      </>
    ),
  },
  {
    title: "[Step Title]",
    caption: "[Short caption]",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </>
    ),
  },
  {
    title: "[Step Title]",
    caption: "[Short caption]",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
  },
  {
    title: "[Step Title]",
    caption: "[Short caption]",
    icon: (
      <>
        <path d="M9 14 4 9l5-5" />
        <path d="M4 9h11a5 5 0 0 1 0 10h-3" />
      </>
    ),
  },
];

const IMPACTS: { category: string; stat: string; body: string; icon: ReactNode }[] = [
  {
    category: "[Category Name] · Energy",
    stat: "[Big Stat]",
    body: "[1–2 sentence explanation]",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  },
  {
    category: "[Category Name] · Water",
    stat: "[Big Stat]",
    body: "[1–2 sentence explanation]",
    icon: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  },
  {
    category: "[Category Name] · Carbon",
    stat: "[Big Stat]",
    body: "[1–2 sentence explanation]",
    icon: <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9z" />,
  },
  {
    category: "[Category Name] · Land",
    stat: "[Big Stat]",
    body: "[1–2 sentence explanation]",
    icon: (
      <>
        <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

const COMPARISONS = [
  { label: "[Comparison 1]", value: "[Value]", width: 32, color: "bg-sage-400" },
  { label: "[Comparison 2]", value: "[Value]", width: 58, color: "bg-moss" },
  { label: "[Comparison 3]", value: "[Value]", width: 88, color: "bg-amber" },
];

const AFFECTED: {
  name: string;
  description: string;
  alt: string;
  tone: string;
  icon: ReactNode;
}[] = [
  {
    name: "[Group/Community Name]",
    description: "[Short description]",
    alt: "[Image alt text placeholder]",
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
    name: "[Group/Community Name]",
    description: "[Short description]",
    alt: "[Image alt text placeholder]",
    tone: "bg-sand text-bark",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  },
  {
    name: "[Group/Community Name]",
    description: "[Short description]",
    alt: "[Image alt text placeholder]",
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

const SOLUTIONS_INDUSTRY = ["[Bullet point]", "[Bullet point]", "[Bullet point]", "[Bullet point]"];
const SOLUTIONS_PEOPLE = ["[Bullet point]", "[Bullet point]", "[Bullet point]", "[Bullet point]"];
const TIPS = ["[Tip]", "[Tip]", "[Tip]"];
const SOURCES = Array.from({ length: 6 }, () => "[Source citation]");
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
            [Main Headline]
          </h1>
          <p className="m-0 max-w-[640px] text-[21px] text-body">
            [Subheading – 1–2 sentences]
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3.5">
            <a
              href="#explainer"
              className="inline-flex min-h-[52px] items-center rounded-full bg-amber px-7 font-semibold text-ink-dark no-underline shadow-[0_4px_14px_rgba(226,162,59,0.35)] hover:bg-amber-dark hover:text-ink-dark"
            >
              [Primary Button]
            </a>
            <a
              href="#action"
              className="inline-flex min-h-[52px] items-center rounded-full border-2 border-forest px-7 font-semibold text-forest no-underline hover:bg-forest hover:text-cream"
            >
              [Secondary Button]
            </a>
          </div>
        </div>
        <HeroLandscape />
      </header>

      {/* 2. WHAT IS A DATA CENTER */}
      <section id="explainer" aria-labelledby="explainer-h" className="px-6 py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader id="explainer-h" eyebrow="The basics" title="[Section Heading]" />
          <ol className="m-0 flex list-none flex-wrap gap-6 p-0">
            {STEPS.map((step, i) => (
              <li
                key={i}
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
            <div className="flex flex-[1_1_400px] flex-col gap-1">
              <span className="eyebrow text-amber">Think of it like…</span>
              <p className="m-0 text-[21px] leading-normal">
                [Simple analogy or comparison]
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. ENVIRONMENTAL IMPACT */}
      <section id="impact" aria-labelledby="impact-h" className="bg-sage px-6 py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader
            id="impact-h"
            eyebrow="The impact"
            title="[Section Heading]"
            intro="[Intro sentence]"
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
                <a href="#sources" className="text-[15px] font-medium">
                  [Source link]
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PUT IT IN PERSPECTIVE */}
      <section id="perspective" aria-labelledby="perspective-h" className="px-6 py-[100px]">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-10">
          <SectionHeader id="perspective-h" eyebrow="In perspective" title="[Section Heading]" />
          <figure className="m-0 flex flex-col gap-7 rounded-3xl bg-white p-6 shadow-[0_4px_16px_rgba(30,68,51,0.07)] sm:p-10">
            <div
              role="img"
              aria-label="[Chart description placeholder: comparison of three items]"
              className="flex flex-col gap-[26px]"
            >
              {COMPARISONS.map((c) => (
                <div key={c.label} className="flex flex-col gap-2">
                  <div className="flex justify-between gap-4 font-semibold text-forest">
                    <span>{c.label}</span>
                    <span>{c.value}</span>
                  </div>
                  <div className="h-[22px] rounded-full bg-track">
                    <div
                      className={`h-full rounded-full ${c.color}`}
                      style={{ width: `${c.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="border-t border-sage pt-5 text-base text-muted">
              [Caption] · Bar lengths are placeholders until data is added.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. WHO IS AFFECTED */}
      <section id="affected" aria-labelledby="affected-h" className="bg-sage px-6 py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader id="affected-h" eyebrow="People & places" title="[Section Heading]" />
          <div className="flex flex-wrap gap-6">
            {AFFECTED.map((group, i) => (
              <article
                key={i}
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
      <section id="solutions" aria-labelledby="solutions-h" className="px-6 py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <SectionHeader id="solutions-h" eyebrow="Moving forward" title="[Section Heading]" />
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-[1_1_400px] flex-col gap-5 rounded-3xl bg-white p-8 shadow-[0_4px_16px_rgba(30,68,51,0.07)] sm:p-10">
              <div className="flex items-center gap-3.5">
                <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-sage text-forest">
                  <Icon size={26}>{LeafPath}</Icon>
                </span>
                <h3 className="m-0 font-display text-2xl font-bold text-forest">
                  [Column Title 1]
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {SOLUTIONS_INDUSTRY.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={22} strokeWidth={2.2} className="mt-[3px] flex-none text-moss">
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
                <h3 className="m-0 font-display text-2xl font-bold">[Column Title 2]</h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {SOLUTIONS_PEOPLE.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={22} strokeWidth={2.2} className="mt-[3px] flex-none text-amber">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </Icon>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TAKE ACTION */}
      <section id="action" aria-labelledby="action-h" className="bg-sage px-6 py-[100px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-9">
          <SectionHeader
            id="action-h"
            eyebrow="Take action"
            title="[Section Heading]"
            intro="[Short intro paragraph]"
          />
          <LetterBuilder />
          <div className="flex flex-wrap items-stretch gap-6">
            <a
              href="#"
              className="flex flex-[1_1_260px] items-center gap-3.5 rounded-[20px] bg-forest px-7 py-6 font-semibold text-cream no-underline hover:text-cream"
            >
              <Icon size={26} className="text-amber">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </Icon>
              [Find your representative link]
            </a>
            <div className="flex flex-[2_1_380px] flex-col gap-2.5 rounded-[20px] bg-white px-7 py-6">
              <h3 className="label m-0">Tips</h3>
              <ul className="m-0 flex list-disc flex-col gap-1.5 pl-[22px] text-body">
                {TIPS.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOURCES & ABOUT */}
      <section id="sources" aria-labelledby="sources-h" className="px-6 py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-12">
          <div className="flex flex-[3_1_460px] flex-col gap-5">
            <h2 id="sources-h" className="m-0 font-display text-[34px] font-extrabold text-forest">
              [Sources Heading]
            </h2>
            <ol className="m-0 flex list-decimal flex-col gap-3 pl-6 text-[17px] text-body">
              {SOURCES.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
          <div className="flex flex-[2_1_340px] flex-col gap-[18px] rounded-3xl bg-white p-9 shadow-[0_4px_16px_rgba(30,68,51,0.07)]">
            <h2 className="m-0 font-display text-[26px] font-extrabold text-forest">
              [About This Project]
            </h2>
            <p className="m-0 text-muted">[About this project blurb]</p>
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
      <path d="M0 190 C 240 120 420 150 640 170 S 1100 110 1440 160 L1440 300 L0 300 Z" fill="#B9CDB3" />
      <g stroke="#7E9A79" strokeWidth="3">
        <line x1="980" y1="70" x2="980" y2="190" />
        <line x1="1180" y1="60" x2="1180" y2="180" />
        <line x1="964" y1="84" x2="996" y2="84" />
        <line x1="1164" y1="74" x2="1196" y2="74" />
      </g>
      <path d="M980 84 Q 1080 110 1180 74" stroke="#7E9A79" strokeWidth="2" fill="none" />
      <path d="M800 120 Q 890 100 980 84" stroke="#7E9A79" strokeWidth="2" fill="none" />
      <rect x="560" y="120" width="300" height="110" rx="8" fill="#1E4433" />
      <rect x="560" y="108" width="300" height="18" rx="6" fill="#2F6B4F" />
      <rect x="590" y="146" width="240" height="10" rx="5" fill="#8FAE8B" />
      <rect x="590" y="170" width="240" height="10" rx="5" fill="#8FAE8B" />
      <rect x="590" y="194" width="240" height="10" rx="5" fill="#8FAE8B" />
      <circle cx="604" cy="151" r="3" fill="#E2A23B" />
      <circle cx="604" cy="175" r="3" fill="#E2A23B" />
      <circle cx="604" cy="199" r="3" fill="#E2A23B" />
      <path d="M0 240 C 300 200 520 230 760 228 S 1180 200 1440 230 L1440 300 L0 300 Z" fill="#8FAE8B" />
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
      <path d="M0 270 C 360 250 720 280 1080 262 S 1440 268 1440 268 L1440 300 L0 300 Z" fill="#FAF7F0" />
    </svg>
  );
}
