export default function PainPoints() {
  return (
    <section className="light-gray-band py-section">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xxl">
          <span className="font-label-sm text-primary tracking-widest uppercase mb-sm block">
            Sound Familiar?
          </span>
          <h2 className="font-headline-lg text-headline-lg text-inverse-surface">
            The HR Problems Nobody Talks About
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mt-md rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 tonal-elevation text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-lg">
              <span className="material-symbols-outlined text-red-600 text-3xl">
                person_off
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-sm">
              Bad Hires Keep Happening
            </h3>
            <p className="text-on-surface-variant font-body-md">
              Every wrong hire costs 3–5x their salary. CVs and gut-feel
              interviews don&apos;t tell you who will actually perform.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 tonal-elevation text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-lg">
              <span className="material-symbols-outlined text-amber-600 text-3xl">
                schedule
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-sm">
              Screening Takes Forever
            </h3>
            <p className="text-on-surface-variant font-body-md">
              Manually reviewing hundreds of candidates wastes time your team
              doesn&apos;t have, and good candidates drop off.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 tonal-elevation text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-lg">
              <span className="material-symbols-outlined text-blue-600 text-3xl">
                logout
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-sm">
              High Turnover, Same Root Cause
            </h3>
            <p className="text-on-surface-variant font-body-md">
              When people leave fast, it&apos;s usually because they were never
              the right fit to begin with. The cycle repeats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
