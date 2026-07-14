export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-section overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #dce6ff 0%, #eaf0ff 45%, #d3e4fe 100%)",
        }}
      />

      {/* Full-canvas SVG */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#004ac6"
              strokeWidth="0.6"
              opacity="0.2"
            />
          </pattern>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="blob1" cx="65%" cy="35%" r="45%">
            <stop offset="0%" stopColor="#93b4ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#93b4ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob2" cx="20%" cy="75%" r="35%">
            <stop offset="0%" stopColor="#b4c5ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#b4c5ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Colour blobs */}
        <rect width="100%" height="100%" fill="url(#blob1)" />
        <rect width="100%" height="100%" fill="url(#blob2)" />

        {/* ── Circuit lines — left zone ── */}
        <g stroke="#2563eb" strokeWidth="1.5" opacity="0.35" fill="none">
          <polyline points="0,300 140,300 140,180 280,180" />
          <polyline points="140,300 140,420 300,420 300,520" />
          <polyline points="280,180 400,180 400,90 560,90" />
          <polyline points="300,420 440,420 440,320 600,320" />
          <polyline points="0,520 100,520 100,620 240,620 240,520 400,520" />
          <polyline points="400,90 400,40 580,40" />
          <polyline points="440,320 440,220 560,220 560,90" />
        </g>

        {/* ── Circuit lines — right zone ── */}
        <g stroke="#004ac6" strokeWidth="1.5" opacity="0.3" fill="none">
          <polyline points="920,60 780,60 780,180 620,180 620,320" />
          <polyline points="1120,140 980,140 980,280 820,280 820,440 680,440" />
          <polyline points="1300,260 1140,260 1140,160 980,160" />
          <polyline points="680,440 680,560 540,560 540,440 440,440" />
          <polyline points="1220,480 1060,480 1060,380 880,380 880,260" />
          <polyline points="1440,200 1300,200 1300,340 1160,340" />
          <polyline points="1440,520 1340,520 1340,420 1200,420 1200,300" />
        </g>

        {/* ── Nodes ── */}
        <g filter="url(#glow)">
          {/* Left */}
          <circle cx="140" cy="300" r="6" fill="#2563eb" opacity="0.7" />
          <circle cx="280" cy="180" r="5" fill="#004ac6" opacity="0.65" />
          <circle cx="140" cy="420" r="5" fill="#2563eb" opacity="0.6" />
          <circle cx="300" cy="420" r="7" fill="#2563eb" opacity="0.65" />
          <circle cx="400" cy="90" r="5" fill="#004ac6" opacity="0.6" />
          <circle cx="400" cy="520" r="8" fill="#2563eb" opacity="0.55" />
          <circle cx="440" cy="320" r="5" fill="#2563eb" opacity="0.6" />
          <circle cx="560" cy="90" r="6" fill="#004ac6" opacity="0.55" />
          <circle cx="600" cy="320" r="5" fill="#2563eb" opacity="0.55" />
          <circle cx="240" cy="620" r="5" fill="#004ac6" opacity="0.5" />
          <circle cx="100" cy="520" r="4" fill="#2563eb" opacity="0.5" />
          <circle cx="440" cy="220" r="4" fill="#004ac6" opacity="0.5" />

          {/* Right */}
          <circle cx="780" cy="60" r="6" fill="#2563eb" opacity="0.6" />
          <circle cx="780" cy="180" r="5" fill="#004ac6" opacity="0.55" />
          <circle cx="620" cy="180" r="7" fill="#2563eb" opacity="0.65" />
          <circle cx="620" cy="320" r="5" fill="#004ac6" opacity="0.55" />
          <circle cx="980" cy="140" r="6" fill="#2563eb" opacity="0.55" />
          <circle cx="820" cy="280" r="5" fill="#004ac6" opacity="0.5" />
          <circle cx="680" cy="440" r="7" fill="#2563eb" opacity="0.6" />
          <circle cx="540" cy="560" r="5" fill="#004ac6" opacity="0.5" />
          <circle cx="440" cy="440" r="5" fill="#2563eb" opacity="0.55" />
          <circle cx="1060" cy="380" r="5" fill="#004ac6" opacity="0.5" />
          <circle cx="1140" cy="160" r="6" fill="#2563eb" opacity="0.55" />
          <circle cx="1300" cy="200" r="5" fill="#004ac6" opacity="0.5" />
          <circle cx="1160" cy="340" r="6" fill="#2563eb" opacity="0.5" />
          <circle cx="1200" cy="300" r="5" fill="#004ac6" opacity="0.45" />
          <circle cx="880" cy="260" r="5" fill="#2563eb" opacity="0.5" />
          <circle cx="1340" cy="420" r="5" fill="#004ac6" opacity="0.45" />
        </g>

        {/* Concentric arcs — top right corner */}
        <g stroke="#2563eb" fill="none" opacity="0.18">
          <path d="M 1440 0 A 560 560 0 0 1 1440 780" strokeWidth="1.2" />
          <path d="M 1440 0 A 420 420 0 0 1 1440 620" strokeWidth="1.2" />
          <path d="M 1440 0 A 280 280 0 0 1 1440 460" strokeWidth="1" />
          <path d="M 1440 0 A 150 150 0 0 1 1440 300" strokeWidth="0.8" />
        </g>
      </svg>

      {/* Text-side gradient mask */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(220,230,255,0.88) 0%, rgba(220,230,255,0.72) 40%, rgba(220,230,255,0.15) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
        <div className="max-w-2xl">
          <h1 className="font-display-lg text-display-lg mb-md leading-tight text-on-surface">
            Stop Making HR Decisions Based on Gut Feeling
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed">
            DEUS helps Indonesian companies hire smarter and develop talent
            better — with gamified assessments candidates actually want to
            complete and performance tools managers actually use.
          </p>
          <div className="flex flex-wrap gap-md items-center">
            <button
              aria-label="Book a Demo"
              className="bg-primary-container text-on-primary-container px-xxl py-md rounded-full font-label-md text-label-md shadow-lg hover:shadow-primary/20 transition-all"
            >
              Book a Demo
            </button>
            <button
              aria-label="See How It Works"
              className="border-[1.5px] border-inverse-surface text-inverse-surface px-xxl py-md rounded-full font-label-md text-label-md hover:bg-surface-container transition-all"
            >
              See How It Works
            </button>
          </div>
          <p className="mt-lg text-label-md text-outline font-medium">
            Trusted by HR teams across Indonesia · Science-backed · Results in
            minutes
          </p>
        </div>
      </div>
    </section>
  );
}
