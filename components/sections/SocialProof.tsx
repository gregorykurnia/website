export default function SocialProof() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl">
          <span className="font-label-sm text-primary tracking-widest uppercase mb-sm block">
            Trusted By
          </span>
          <h2 className="font-headline-lg text-headline-lg">
            Indonesian Companies Trust DEUS
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-xxl mb-xxl">
          <div className="w-[120px] h-[40px] bg-[#E5E7EB] rounded opacity-40 grayscale"></div>
          <div className="w-[120px] h-[40px] bg-[#E5E7EB] rounded opacity-40 grayscale"></div>
          <div className="w-[120px] h-[40px] bg-[#E5E7EB] rounded opacity-40 grayscale"></div>
          <div className="w-[120px] h-[40px] bg-[#E5E7EB] rounded opacity-40 grayscale"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-surface-container-low p-xxl rounded-xl border border-outline-variant/30 text-center italic relative">
          <span className="material-symbols-outlined text-primary/20 text-6xl absolute -top-4 left-4">
            format_quote
          </span>
          <p className="font-headline-sm text-on-surface mb-lg">
            &ldquo;DEUS helped us assess over 200 candidates in a fraction of
            the time — with results we could actually act on. The gamified
            aspect significantly improved our candidate conversion rates.&rdquo;
          </p>
          <cite className="not-italic font-label-md text-primary">
            — HR Director, Leading Indonesian Retail Company
          </cite>
        </div>
      </div>
    </section>
  );
}
