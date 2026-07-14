export default function Products() {
  return (
    <section className="py-section bg-surface-bright">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xxl">
          <span className="font-label-sm text-primary tracking-widest uppercase mb-sm block">
            Our Solutions
          </span>
          <h2 className="font-headline-lg text-headline-lg">
            Gamified HR Assessment and Performance Management Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Card 1: DEUS Discover */}
          <div className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low p-xxl flex flex-col justify-between min-h-[480px] hover:border-primary/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
            <div>
              <span className="inline-block px-md py-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm mb-md tracking-wider">
                TALENT ASSESSMENT
              </span>
              <h3 className="font-headline-lg text-headline-md mb-xs">
                Find the Right People, Fast
              </h3>
              <p className="font-headline-sm text-on-surface-variant mb-lg">
                Gamified candidate assessment built for mass hiring
              </p>
              <p className="text-on-surface-variant mb-xl font-body-md">
                Engage candidates with science-backed games that measure
                cognitive ability, personality, and culture fit in under 15
                minutes.
              </p>
              <div className="flex flex-wrap gap-sm mb-xl">
                <div className="stats-chip px-md py-sm rounded-lg font-label-md text-label-md">
                  Rp380K / assessment
                </div>
                <div className="stats-chip px-md py-sm rounded-lg font-label-md text-label-md">
                  Instant results
                </div>
                <div className="stats-chip px-md py-sm rounded-lg font-label-md text-label-md">
                  Fully customizable
                </div>
              </div>
            </div>
            <button
              aria-label="Learn More About Discover"
              className="flex items-center gap-2 text-primary font-label-md text-label-md group/btn w-fit"
            >
              Learn More About Discover
              <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Card 2: DEUS Enhance */}
          <div className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-inverse-surface p-xxl flex flex-col justify-between min-h-[480px] hover:bg-[#0f1d32] transition-all duration-300 text-surface-bright">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
            <div>
              <span className="inline-block px-md py-xs rounded-full bg-white/10 text-surface-bright/80 font-label-sm text-label-sm mb-md tracking-wider uppercase">
                PERFORMANCE MANAGEMENT
              </span>
              <h3 className="font-headline-lg text-headline-md mb-xs">
                Grow the People You Already Have
              </h3>
              <p className="font-headline-sm text-surface-dim mb-lg opacity-80">
                Structured performance management for Indonesian companies
              </p>
              <p className="text-surface-dim/80 mb-xl font-body-md">
                Move beyond annual reviews. Enable continuous feedback, OKR
                tracking, and growth plans that actually drive productivity.
              </p>
              <div className="flex flex-wrap gap-sm mb-xl">
                <div className="bg-white/10 text-white px-md py-sm rounded-lg font-label-md text-label-md">
                  Goal alignment
                </div>
                <div className="bg-white/10 text-white px-md py-sm rounded-lg font-label-md text-label-md">
                  Real-time tracking
                </div>
                <div className="bg-white/10 text-white px-md py-sm rounded-lg font-label-md text-label-md">
                  Manager dashboards
                </div>
              </div>
            </div>
            <button
              aria-label="Learn More About Enhance"
              className="flex items-center gap-2 text-primary-fixed-dim font-label-md text-label-md group/btn w-fit"
            >
              Learn More About Enhance
              <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
