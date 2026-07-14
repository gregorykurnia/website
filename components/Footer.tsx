export default function Footer() {
  return (
    <footer className="bg-inverse-surface w-full py-xxl border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-xl max-w-container-max mx-auto px-gutter">
        <div className="col-span-1 md:col-span-1">
          <span className="font-display-lg text-headline-md text-surface-container-lowest block mb-md">
            DEUS
          </span>
          <p className="text-secondary-fixed-dim/80 font-body-md mb-lg">
            Science-backed HR solutions for modern Indonesian companies.
          </p>
          <div className="flex gap-md">
            <a
              aria-label="Social Media Link"
              className="text-surface-container-lowest hover:text-primary-fixed transition-colors"
              href="#"
            />
            <a
              aria-label="Email Link"
              className="text-surface-container-lowest hover:text-primary-fixed transition-colors"
              href="#"
            />
          </div>
        </div>
        <div>
          <h4 className="text-surface-container-lowest font-label-md text-label-md mb-lg uppercase tracking-widest">
            Solutions
          </h4>
          <ul className="space-y-sm">
            <li>
              <a
                className="text-secondary-fixed-dim/80 hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                className="text-secondary-fixed-dim/80 hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Enhance
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-surface-container-lowest font-label-md text-label-md mb-lg uppercase tracking-widest">
            Company
          </h4>
          <ul className="space-y-sm">
            <li>
              <a
                className="text-secondary-fixed-dim/80 hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-secondary-fixed-dim/80 hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Insights
              </a>
            </li>
            <li>
              <a
                className="text-secondary-fixed-dim/80 hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-surface-container-lowest font-label-md text-label-md mb-lg uppercase tracking-widest">
            Legal
          </h4>
          <ul className="space-y-sm">
            <li>
              <a
                className="text-secondary-fixed-dim/80 hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-secondary-fixed-dim/80 hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-xxl pt-xl border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-secondary-fixed-dim/60 font-label-sm text-label-sm">
          © 2026 DEUS Human Capital Services. All rights reserved.
        </p>
        <div className="flex gap-lg">
          <span className="text-secondary-fixed-dim/40 font-label-sm text-label-sm">
            Powered by Science
          </span>
          <span className="text-secondary-fixed-dim/40 font-label-sm text-label-sm">
            Built for Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}
