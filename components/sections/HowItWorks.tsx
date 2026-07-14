export default function HowItWorks() {
  return (
    <section className="py-section border-y border-outline-variant/20 bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xxl">
          <span className="font-label-sm text-primary tracking-widest uppercase mb-sm block">
            Simple Process
          </span>
          <h2 className="font-headline-lg text-headline-lg">
            How DEUS Works: From Setup to Insight in Days
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-xl">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 z-0"></div>

          <div className="relative z-10 flex-1 text-center group">
            <div className="w-24 h-24 bg-surface-container-lowest border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-lg shadow-xl group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">
                handshake
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm mb-sm">
              1. Tell Us What You Need
            </h4>
            <p className="text-on-surface-variant font-body-md px-md">
              Define your ideal candidate profile and performance goals with our
              experts.
            </p>
          </div>

          <div className="relative z-10 flex-1 text-center group">
            <div className="w-24 h-24 bg-surface-container-lowest border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-lg shadow-xl group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">
                videogame_asset
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm mb-sm">
              2. Your Team Gets Access Instantly
            </h4>
            <p className="text-on-surface-variant font-body-md px-md">
              Candidates and employees access our sleek, mobile-friendly
              Indonesian platform.
            </p>
          </div>

          <div className="relative z-10 flex-1 text-center group">
            <div className="w-24 h-24 bg-surface-container-lowest border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-lg shadow-xl group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">
                bar_chart
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm mb-sm">
              3. You Get Results You Can Act On
            </h4>
            <p className="text-on-surface-variant font-body-md px-md">
              Download detailed reports and insights that make talent decisions
              crystal clear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
