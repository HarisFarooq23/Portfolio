'use client';

interface ExperienceCardData {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  color: string;
  borderColor: string;
  rotation: string;
}

const experienceCards: ExperienceCardData[] = [
  {
    title: 'Advisor',
    org: 'Highbrow Entrepreneurship Society',
    period: 'Aug 2023 – Aug 2024 · 1 yr 1 mo · On-site',
    bullets: [
      'Fostered innovation and practical business skills by connecting students with resources, mentorship, and opportunities to turn ideas into viable ventures.',
      'Led delegations in academic year 2023–24: NASA Space Apps, HU ACE, Generations Negotium, Cedar College AKU Presidents Challenge, and AKU.',
      'Executed an industrial tour to EBM (English Biscuit Manufacturers), giving students firsthand exposure to real-world operations and industry practices.',
    ],
    color: '#151a22',
    borderColor: '#3D7A8C',
    rotation: 'rotate-6',
  },
  {
    title: 'Community & Fundraising Coordinator',
    org: 'OWE',
    period: 'Jan 2024 – Aug 2024',
    bullets: [
      'Contributed 90+ volunteer hours leading fundraising drives.',
      'Expanded program reach to 200+ underprivileged students across 3+ communities.',
    ],
    color: '#1c1914',
    borderColor: '#8A7344',
    rotation: 'rotate-0',
  },
  {
    title: 'Active Member',
    org: 'Team Hammerhead · GIKI',
    period: 'Oct 2024 – Present',
    bullets: [
      'Spearheaded sponsorship outreach to 400+ organizations.',
      'Part of the Automation Team representing Team Hammerhead at Shell Eco-marathon 2027.',
    ],
    color: '#1f1416',
    borderColor: '#9B2D42',
    rotation: '-rotate-6',
  },
  {
    title: 'Officer Operations',
    org: 'Undergraduate Research Organization (UROG) · GIKI',
    period: 'Jan 2026 – Present',
    bullets: [
      'Conducting NLP research for automated chemical entity extraction using NER and transformer-based models.',
      'Targeting 90%+ accuracy on a corpus of 500+ scientific documents.',
    ],
    color: '#141c1f',
    borderColor: '#5A9FB5',
    rotation: 'rotate-0',
  },
];

const CREAM = '#ede0cc';
const BEIGE = '#c9b08c';
const BG = '#0a0907';

export function ExperienceStack() {
  return (
    <section id="experience" className="relative z-10" style={{ background: BG }}>
      <div className="wrapper">
        <div className="sticky top-0 h-[min(70vh,520px)] w-full grid place-content-center z-[1]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(201,176,140,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(201,176,140,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '54px 54px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            }}
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-mono text-lg" style={{ color: BEIGE }}>03.</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: CREAM }}>
                Experience
              </h2>
            </div>
            <p className="text-xl md:text-2xl font-medium tracking-tight leading-[130%]" style={{ color: 'rgba(237,224,204,0.55)' }}>
              Stacking roles across research, engineering &amp; leadership.
              <br />
              <span style={{ color: BEIGE }}>Scroll down</span> 👇
            </p>
          </div>
        </div>
      </div>

      <section className="w-full pb-24" style={{ color: CREAM }}>
        <div className="flex flex-col lg:flex-row justify-between gap-8 px-6 lg:px-16">
          <div className="grid gap-2 flex-1 max-w-3xl mx-auto lg:mx-0">
            {experienceCards.map((card) => (
              <figure key={`${card.title}-${card.org}`} className="sticky top-0 h-screen grid place-content-center">
                <article
                  className={`${card.rotation} min-h-72 w-full max-w-[30rem] rounded-lg p-6 md:p-8 grid place-content-start gap-4 border shadow-[0_24px_64px_rgba(0,0,0,0.45)]`}
                  style={{ backgroundColor: card.color, borderColor: card.borderColor }}
                >
                  <div>
                    <p className="font-mono text-xs tracking-wider uppercase mb-2" style={{ color: card.borderColor }}>
                      {card.period}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: CREAM }}>
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base mt-1 font-mono" style={{ color: 'rgba(237,224,204,0.55)' }}>
                      {card.org}
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(237,224,204,0.78)' }}>
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span style={{ color: card.borderColor }} aria-hidden="true">
                          —
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </figure>
            ))}
          </div>

          <div className="hidden lg:grid sticky top-0 h-screen place-content-center shrink-0 w-64 xl:w-80">
            <h3 className="text-3xl xl:text-4xl font-medium text-center tracking-tight leading-[120%]" style={{ color: CREAM }}>
              What I&apos;ve
              <br />
              <span style={{ color: BEIGE }}>Built &amp; Led</span>
              <span className="inline-block ml-1">😎</span>
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
}
