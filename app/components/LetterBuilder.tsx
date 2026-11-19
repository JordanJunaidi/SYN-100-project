"use client";

import { useEffect, useRef, useState } from "react";

const SIGN_OFF = `Sincerely,
[Your Name]
[Your City/State]`;

const LETTERS = [
  {
    label: "Local Official",
    body: `Dear [Council Member / Commissioner Name],

I live in [Your City] and am writing about data center development in our community. Data centers can bring diesel generator emissions, round-the-clock noise, heavy water use and new grid costs, yet current rules tend to review these hazards one at a time.

Before any new data center permit is approved, I urge you to:
• Require a full environmental impact assessment
• Set strict noise limits and caps on fresh water use
• Require public reporting of emissions, energy, water use and tax breaks
• Pause new construction until these safeguards are in place

Our community deserves a say in what gets built here. Thank you for your time.

${SIGN_OFF}`,
  },
  {
    label: "Utility Regulator",
    body: `Dear Commissioners,

I am a residential utility customer in [Your City] writing about the cost of new grid infrastructure for data centers. AI data centers need enormous amounts of electricity, and the substations and transmission lines built to serve them are often paid for by everyday ratepayers rather than the companies that need them.

I urge the Commission to:
• Protect residential customers from data center grid upgrade costs
• Create commercial tariffs so large data centers pay for their own power infrastructure
• Ensure fair compensation and public review when eminent domain is used for these projects

Thank you for standing up for residential customers.

${SIGN_OFF}`,
  },
  {
    label: "Tech Company",
    body: `Dear [Company Name] Leadership,

As a user of your products, I am concerned about how your data centers affect nearby communities, including air pollution from backup diesel generators, water drawn for cooling, and constant noise and light.

I ask that you:
• Publicly report Water Usage Effectiveness and Power Usage Effectiveness for every facility
• Commit to 24/7 carbon-free energy instead of relying on carbon offsets
• Invest in water-saving cooling and filtration
• Site new facilities away from homes and sensitive habitats, and sign community benefit agreements where you build

I will choose providers that take these steps.

${SIGN_OFF}`,
  },
];

const RECIPIENTS = LETTERS.map((l) => l.label);

export default function LetterBuilder() {
  const [current, setCurrent] = useState(0);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const recipient = RECIPIENTS[current];
  const letter = LETTERS[current].body;

  async function copy() {
    try {
      await navigator.clipboard?.writeText(letter);
    } catch {
      // Clipboard can be blocked; still show feedback.
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        role="group"
        aria-label="Choose a recipient type"
        className="flex flex-wrap gap-2 self-center rounded-full bg-white p-1.5 shadow-[0_2px_8px_rgba(30,68,51,0.06)]"
      >
        {RECIPIENTS.map((label, i) => {
          const selected = i === current;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setCurrent(i);
                setCopied(false);
              }}
              className={`min-h-11 cursor-pointer rounded-full px-[22px] text-base ${
                selected
                  ? "bg-forest font-semibold text-cream"
                  : "bg-transparent font-medium text-forest"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_8px_30px_rgba(30,68,51,0.10)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-mist px-7 py-[18px]">
          <span className="flex items-center gap-2.5 font-semibold text-forest">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Letter to a {recipient}
          </span>
          <button
            type="button"
            onClick={copy}
            aria-live="polite"
            className={`inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full px-6 text-base font-semibold ${
              copied
                ? "bg-moss text-white"
                : "bg-amber text-ink-dark shadow-[0_4px_14px_rgba(226,162,59,0.35)] hover:bg-amber-dark"
            }`}
          >
            {copied ? (
              <>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="11" height="11" rx="2" />
                  <path d="M5 15V5a2 2 0 0 1 2-2h8" />
                </svg>
                Copy Letter
              </>
            )}
          </button>
        </div>
        <div className="min-h-80 whitespace-pre-line px-6 py-8 font-serif text-[19px] leading-[1.75] text-ink sm:px-11 sm:py-10">
          {letter}
        </div>
      </div>
    </div>
  );
}
