export default function CTABanner() {
  return (
    <section className="py-xxl">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="bg-inverse-surface rounded-xxl p-xxl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg text-surface-bright mb-md">
              Ready to Make Better HR Decisions?
            </h2>
            <p className="text-surface-dim font-body-lg max-w-xl mx-auto mb-xl">
              Talk to our team — no hard sell, just a real conversation about
              your HR challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-md">
              <button
                aria-label="Book a Demo Today"
                className="bg-surface-bright text-on-surface px-xxl py-md rounded-full font-label-md text-label-md hover:scale-105 transition-all"
              >
                Book a Demo Today
              </button>
              <button
                aria-label="WhatsApp Us"
                className="border border-surface-bright text-surface-bright px-xxl py-md rounded-full font-label-md text-label-md hover:bg-surface-container-highest/10 transition-all flex items-center gap-2"
              >
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
