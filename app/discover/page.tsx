"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DiscoverPage() {
  function switchTab(tab: string) {
    const tabs = ["personality", "cognitive", "neuro", "simulation"];
    tabs.forEach((t) => {
      const content = document.getElementById(`${t}-content`);
      const btn = document.getElementById(`tab-${t}`);
      if (t === tab) {
        content?.classList.remove("hidden");
        btn?.classList.add("active-tab");
        btn?.classList.remove("text-on-surface-variant", "hover:text-primary");
      } else {
        content?.classList.add("hidden");
        btn?.classList.remove("active-tab");
        btn?.classList.add("text-on-surface-variant", "hover:text-primary");
      }
    });
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[665px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/30 to-background z-0"></div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-center md:text-left">
            <div className="max-w-2xl">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
                Find the Right People. <span className="text-primary">Fast.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                A modular game-based assessment platform that reveals how candidates truly think,
                feel, and perform, not just what they&apos;ve prepared to say.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-title-lg shadow-xl hover:shadow-2xl transition-all active:scale-95">
                  Book a Demo
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-full font-title-lg hover:bg-primary/5 transition-all">
                  See How It Works
                </button>
              </div>
              <p className="mt-6 text-on-surface-variant font-label-sm tracking-wide opacity-80">
                Science Backed · Fully Customizable · Same-Day Results
              </p>
            </div>
          </div>
        </section>

        {/* What is Discover */}
        <section className="py-20 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline-md text-headline-md mb-8">
                Not a Test. <span className="text-primary">An Experience.</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant font-body-md">
                <p>
                  Traditional psychometric tests are long, boring, and easy to fake. Candidates
                  study how to pass personality tests. Abstract cognitive tests don&apos;t reveal
                  how someone actually thinks under pressure. HR teams spend days scoring results
                  manually.
                </p>
                <p>
                  DEUS Discover fixes all of this. It&apos;s a modular game-based assessment
                  platform built on Big Five personality science, neuroscience behavioral paradigms,
                  and cognitive psychology frameworks. Candidates cannot fake how they play where
                  every choice and hesitation becomes data.
                </p>
                <p>
                  Choose one module or combine all four. Each works independently and integrates
                  seamlessly through one Enterprise CMS. Fully customizable to your
                  organization&apos;s competency framework, role requirements, and industry context.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-outline-variant">
                <img
                  className="w-full h-auto"
                  alt="A clean and modern UI dashboard of the DEUS Discover HR assessment platform showing candidate spider charts."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgzqzL_r3gxofb0IwE6oVWn_QvMU887OequjAiISKuiEtVc1YQ9aqAl3zxjZLg3RPoFJtyypX6gxijBo_WzAUQn-A6VBd-E3n3ipnevZU75om_jweckpxM482JG-HA7JpbGNnFY3Qs4F9vCppZz-Rpus_vYq86lbUz_SC3YpIe6yc4owwTiuFe29KZhRAa1I5Y_9Pns7mjVC-Jebe0H5GYopU3lY1CC2-DZ0JDMd2P6-Ph8adLXi6DdQ"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Modules (Tabbed) */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-12">
              <h2 className="font-headline-md text-headline-md mb-4">
                Four Modules. One Complete Picture.
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Mix and match based on your hiring context. Each module targets a different
                dimension of candidate potential.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 bg-surface-container-high p-2 rounded-full w-fit mx-auto overflow-x-auto">
              <button
                className="px-8 py-3 rounded-full font-label-md transition-all active-tab"
                id="tab-personality"
                onClick={() => switchTab("personality")}
              >
                Personality
              </button>
              <button
                className="px-8 py-3 rounded-full font-label-md transition-all text-on-surface-variant hover:text-primary"
                id="tab-cognitive"
                onClick={() => switchTab("cognitive")}
              >
                Cognitive
              </button>
              <button
                className="px-8 py-3 rounded-full font-label-md transition-all text-on-surface-variant hover:text-primary"
                id="tab-neuro"
                onClick={() => switchTab("neuro")}
              >
                Neuroscience
              </button>
              <button
                className="px-8 py-3 rounded-full font-label-md transition-all text-on-surface-variant hover:text-primary"
                id="tab-simulation"
                onClick={() => switchTab("simulation")}
              >
                Simulation
              </button>
            </div>

            {/* Tab Contents */}
            <div id="content-container">
              {/* Personality Tab */}
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start"
                id="personality-content"
              >
                <div className="md:col-span-7 space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="font-title-lg text-title-lg mb-4 text-primary">
                      The Narrative RPG Experience
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-6">
                      In traditional personality tests, candidates can sometimes study how to give
                      the &apos;right&apos; answers. Our Personality module uses an immersive RPG
                      narrative game (&apos;Heroes of a Fallen Land&apos;) where story choices
                      reveal true character. Candidates cannot prepare for it their decisions,
                      hesitations, and priorities are the data.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span className="font-label-md">32 Personality Subtraits</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span className="font-label-md">24 Competencies</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span className="font-label-md">Digital Situational Judgment Profiling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span className="font-label-md">
                          Inspired by Big Five Model and Universal Competency Framework
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fully Customizable Callout */}
                  <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                    <h4 className="font-label-md text-primary mb-4 uppercase">
                      Fully Customizable
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">tune</span>
                        <span className="text-sm font-semibold">
                          Customized to Your Competency Language
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">
                          assignment_ind
                        </span>
                        <span className="text-sm font-semibold">
                          Adjusted to Your Role Requirements
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">business</span>
                        <span className="text-sm font-semibold">Apply Your Industry Context</span>
                      </div>
                    </div>
                    <p className="text-sm mt-4 text-on-surface-variant italic">
                      Map the results to your internal competency framework
                    </p>
                  </div>

                  {/* Individual Profile Suitability Report */}
                  <div className="bg-primary/10 p-8 rounded-xl border border-primary/30">
                    <h4 className="font-label-md text-primary mb-4 uppercase">
                      Individual Profile Suitability Report
                    </h4>
                    <p className="font-body-md text-on-surface-variant">
                      Every candidate receives a Profile Suitability Index — a score out of 100
                      showing alignment with your specific role requirements. Includes percentile
                      ranking against the candidate pool, AI-generated capability profile with
                      strength patterns and development risks, and a clear Recommended / Not
                      Recommended verdict framed around your competency framework.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-outline-variant aspect-video bg-surface">
                    <img
                      className="w-full h-full object-cover"
                      alt="A cinematic 2D stylized narrative RPG screenshot."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXXejZDUCe9Jo-kFeDJh3mXe6ksb4RrV-ckflCuNsqtZEXlrRxKbpKKEqZO9pD2092lRSvWj_0yytTWbSKgzXYF7RvXfB5TY-HjyI4omPVNtwLEL1EX8M_MVD7C16LCN6SUH0XtHD5nmFatf02e4533ygR4FFDvrpYchufxWTNx0WTtWrGh98KLKjQvsUWw5HPLAcSJhktHWLZDFnK2kLn9cQBmTzgwebhfAaOncqgsOCfg32q7kmdrA"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <span className="bg-white px-4 py-2 rounded-full text-center font-label-sm border border-outline-variant shadow-sm">
                      Rapid Same Day Results
                    </span>
                    <span className="bg-white px-4 py-2 rounded-full text-center font-label-sm border border-outline-variant shadow-sm">
                      Custom Competencies
                    </span>
                    <span className="bg-white px-4 py-2 rounded-full text-center font-label-sm border border-outline-variant shadow-sm">
                      Mass Dashboards
                    </span>
                    <span className="bg-white px-4 py-2 rounded-full text-center font-label-sm border border-outline-variant shadow-sm">
                      End-to-End Process
                    </span>
                  </div>
                </div>
              </div>

              {/* Cognitive Tab */}
              <div
                className="hidden grid grid-cols-1 md:grid-cols-12 gap-gutter items-start"
                id="cognitive-content"
              >
                <div className="md:col-span-7 space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="font-title-lg text-title-lg mb-4 text-primary">
                      How Fast and Sharp Do They Think?
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-6">
                      Abstract cognitive tests fail because answers can be coached or memorized. Our
                      Cognitive module uses 7 gamified mini-games that measure actual thinking speed,
                      accuracy, and consistency in real time. You cannot memorize your way through a
                      timed game.
                    </p>
                    <div className="space-y-3">
                      {[
                        { icon: "timer", name: "Objective Shooter", desc: "Processing speed & precision" },
                        { icon: "memory", name: "Reverse Retention", desc: "Working memory" },
                        { icon: "grid_view", name: "Odd One Out", desc: "Pattern recognition" },
                        { icon: "calculate", name: "Mallet Math", desc: "Arithmetic & problem solving" },
                        { icon: "rotate_right", name: "Object Turn", desc: "Spatial reasoning" },
                        { icon: "hub", name: "Match Blast", desc: "Logical reasoning" },
                        { icon: "speed", name: "Speed Sorting", desc: "Cognitive agility" },
                      ].map(({ icon, name, desc }) => (
                        <div
                          key={name}
                          className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4"
                        >
                          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded">
                            {icon}
                          </span>
                          <div>
                            <p className="font-bold font-label-md">{name}</p>
                            <p className="text-label-sm text-on-surface-variant">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div className="rounded-xl border border-outline-variant bg-surface-container-low aspect-video flex items-center justify-center">
                    <p className="text-on-surface-variant font-label-sm">
                      Cognitive Games Screenshot
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-inverse-surface text-surface-bright p-8 rounded-2xl">
                      <p className="font-label-sm uppercase mb-4 opacity-70">
                        What Traditional Tests Miss
                      </p>
                      <ul className="space-y-2 text-sm opacity-80">
                        <li>• Answers can be coached or memorized</li>
                        <li>• No insight into speed or consistency</li>
                        <li>• Difficult to scale for large hiring volumes</li>
                      </ul>
                    </div>
                    <div className="bg-primary-container/10 border border-primary/20 p-8 rounded-2xl">
                      <p className="font-label-sm uppercase mb-4 text-primary">
                        What This Gives You
                      </p>
                      <ul className="space-y-2 text-sm text-on-surface-variant">
                        <li>• Accuracy and speed metrics in real time</li>
                        <li>• Learning agility benchmark</li>
                        <li>• Unlimited scalability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neuro Tab */}
              <div
                className="hidden grid grid-cols-1 md:grid-cols-12 gap-gutter items-start"
                id="neuro-content"
              >
                <div className="md:col-span-7 space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="font-title-lg text-title-lg mb-4 text-primary">
                      What Drives Them When No One&apos;s Watching?
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-6">
                      Motivation is often misjudged in interviews. Risk appetite only appears too
                      late — after the hire. EQ is nearly impossible to assess fairly in a 30-minute
                      conversation. The Neuro module captures all of this through 6
                      neuroscience-based mini-games that reveal unconscious behavior — things
                      candidates literally cannot fake.
                    </p>
                    <div className="space-y-3">
                      {[
                        { icon: "air", name: "Balloon Game", desc: "Risk taking & learning ability" },
                        { icon: "domain", name: "Tower Game", desc: "Planning & problem solving" },
                        { icon: "keyboard", name: "Keypress Game", desc: "Motivation & processing speed" },
                        { icon: "tune", name: "Hard or Easy Task", desc: "Effort allocation & decision making" },
                        { icon: "straighten", name: "Lengths Game", desc: "Attention to detail" },
                        { icon: "face", name: "Faces Game", desc: "EQ, empathy & emotional recognition" },
                      ].map(({ icon, name, desc }) => (
                        <div
                          key={name}
                          className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4"
                        >
                          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded">
                            {icon}
                          </span>
                          <div>
                            <p className="font-bold font-label-md">{name}</p>
                            <p className="text-label-sm text-on-surface-variant">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm italic text-on-surface-variant mt-4">
                      Six neuroscience-based mini-games capturing motivation, risk tolerance, effort
                      allocation, and emotional intelligence through unconscious behavior.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-inverse-surface text-surface-bright p-8 rounded-2xl">
                      <p className="font-label-sm uppercase mb-4 opacity-70">
                        What Interviews Miss
                      </p>
                      <ul className="space-y-2 text-sm opacity-80">
                        <li>• Motivation is often misjudged</li>
                        <li>• Risk appetite appears too late</li>
                        <li>• EQ is difficult to assess fairly</li>
                      </ul>
                    </div>
                    <div className="bg-primary-container/10 border border-primary/20 p-8 rounded-2xl">
                      <p className="font-label-sm uppercase mb-4 text-primary">
                        What This Gives You
                      </p>
                      <ul className="space-y-2 text-sm text-on-surface-variant">
                        <li>• Behavioral data from actual actions</li>
                        <li>• Early visibility into risk profile</li>
                        <li>• Emotional recognition insights for leadership and service roles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div className="rounded-xl border border-outline-variant bg-surface-container-low aspect-video flex items-center justify-center">
                    <p className="text-on-surface-variant font-label-sm">Neuro Games Screenshot</p>
                  </div>
                </div>
              </div>

              {/* Simulation Tab */}
              <div
                className="hidden grid grid-cols-1 md:grid-cols-12 gap-gutter items-start"
                id="simulation-content"
              >
                <div className="md:col-span-7 space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="font-title-lg text-title-lg mb-4 text-primary">
                      Can They Actually Do the Job?
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-6">
                      Case interviews can be memorized. Assessment centers are costly and hard to
                      scale. Generic cases lack company relevance. The Simulation module puts
                      candidates into real business scenarios — fully customizable to your industry
                      and company context through the CMS — so you see how they actually perform
                      under pressure.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                        <p className="font-bold font-label-md mb-2">Game 1: Business Operations</p>
                        <p className="text-sm text-on-surface-variant mb-4">
                          Review cases, investigate information, and create a business report.
                        </p>
                        <p className="font-label-sm text-primary uppercase mb-2">Measures:</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            Judgment
                          </span>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            Accuracy
                          </span>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            Analytical communication
                          </span>
                        </div>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                        <p className="font-bold font-label-md mb-2">Game 2: Event Operations</p>
                        <p className="text-sm text-on-surface-variant mb-4">
                          Allocate budget under a live timer and generate a report.
                        </p>
                        <p className="font-label-sm text-primary uppercase mb-2">Measures:</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            Prioritization
                          </span>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            Resource allocation
                          </span>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            Decision speed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-inverse-surface text-surface-bright p-8 rounded-2xl">
                      <p className="font-label-sm uppercase mb-4 opacity-70">
                        What Case Interviews Miss
                      </p>
                      <ul className="space-y-2 text-sm opacity-80">
                        <li>• Candidates can memorize frameworks</li>
                        <li>• Assessment centers are costly and hard to scale</li>
                        <li>• Generic cases lack company relevance</li>
                      </ul>
                    </div>
                    <div className="bg-primary-container/10 border border-primary/20 p-8 rounded-2xl">
                      <p className="font-label-sm uppercase mb-4 text-primary">
                        What This Gives You
                      </p>
                      <ul className="space-y-2 text-sm text-on-surface-variant">
                        <li>• Candidates tested in YOUR industry context</li>
                        <li>• Prioritization and analysis under real time pressure</li>
                        <li>• Consistent and scalable across hundreds of candidates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div className="rounded-xl border border-outline-variant bg-surface-container-low aspect-video flex items-center justify-center">
                    <p className="text-on-surface-variant font-label-sm">Simulation Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Every Stage */}
        <section className="py-20 bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-md text-headline-md text-center mb-16">
              Designed for Every Stage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="p-8 bg-surface-container-low rounded-2xl hover:shadow-lg transition-all border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">groups</span>
                <h3 className="font-title-lg mb-3">Recruitment Process</h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  High volume of candidates - need to shortlist quickly and fairly.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    COGNITIVE
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    NEUROSCIENCE
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    SIMULATION
                  </span>
                </div>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl hover:shadow-lg transition-all border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">badge</span>
                <h3 className="font-title-lg mb-3">Internal Talent Mapping</h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  Visualize capability distribution across the organization. Maps strengths, gaps,
                  and hidden high-potentials across teams.
                </p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    PERSONALITY
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    COGNITIVE
                  </span>
                </div>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl hover:shadow-lg transition-all border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">
                  trending_up
                </span>
                <h3 className="font-title-lg mb-3">Talent &amp; Development Programs</h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  Use assessment data to prioritize L&amp;D investment and build personalized paths
                  for HiPos and succession candidates.
                </p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    ALL MODULES
                  </span>
                </div>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl hover:shadow-lg transition-all border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">star</span>
                <h3 className="font-title-lg mb-3">Leadership Identification</h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  Identifying internal talent for supervisor and manager pipeline. Neuro
                  module&apos;s risk, motivation, and EQ data is uniquely suited here.
                </p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    NEUROSCIENCE
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    PERSONALITY
                  </span>
                </div>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl hover:shadow-lg transition-all border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">
                  bar_chart
                </span>
                <h3 className="font-title-lg mb-3">Job Fit and Competency Mapping</h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  Match individual profiles against role competency frameworks. Identify gaps and
                  build targeted development plans.
                </p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    PERSONALITY
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    NEUROSCIENCE
                  </span>
                </div>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl hover:shadow-lg transition-all border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">school</span>
                <h3 className="font-title-lg mb-3">Campus Recruitment</h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  Large applicant pools across universities. Personality + Cognitive gives a clear
                  differentiated ranking.
                </p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    PERSONALITY
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">
                    COGNITIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-md text-headline-md text-center mb-16">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 -z-0"></div>
              {[
                {
                  num: "01",
                  title: "Define Your Role",
                  desc: "Tell us the position and which modules fit. We configure the right assessment mix, competency weights, and industry context.",
                },
                {
                  num: "02",
                  title: "Send the Link",
                  desc: "Bulk upload candidates via CSV. They receive branded invitations automatically. No app download, no login friction.",
                },
                {
                  num: "03",
                  title: "They Play, You Wait",
                  desc: "Candidates complete their assessment on any device, anywhere in Indonesia. Anti-cheat proctoring runs silently.",
                },
                {
                  num: "04",
                  title: "Get Your Ranked List",
                  desc: "Reports generate automatically the moment a candidate finishes. Individual PDF, batch report, or interactive live dashboard.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex-1 text-center group relative z-10">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-background group-hover:scale-110 transition-transform">
                    <span className="text-primary text-2xl font-bold">{num}</span>
                  </div>
                  <h4 className="font-title-lg mb-2">{title}</h4>
                  <p className="text-on-surface-variant text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Results */}
        <section className="py-20 bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md">The Results</h2>
              <p className="text-on-surface-variant mt-2">
                Three report formats designed for different decision makers, from hiring managers to
                C-suite talent reviews.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Individual Report */}
              <div className="border border-outline-variant rounded-2xl p-8 flex flex-col h-full bg-surface-bright">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4">
                  INDIVIDUAL
                </span>
                <h4 className="font-title-lg mb-4">Suitability Profile</h4>
                <ul className="space-y-3 flex-grow mb-8 text-sm text-on-surface-variant">
                  {[
                    "Executive Summary",
                    "Overall Score and Norm Percentile",
                    "Core Personality and Competency",
                    "Strengths and Development Areas",
                    "Profile Suitability Index Customized to Company Framework",
                    "AI Generated Capability Profile",
                    "Final Hire Recommendation with Narrative",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-primary">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Batch/Cohort Report */}
              <div className="border border-primary rounded-2xl p-8 flex flex-col h-full bg-surface-bright shadow-xl ring-1 ring-primary/50 relative">
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4">
                  BATCH / COHORT
                </span>
                <h4 className="font-title-lg mb-4">Talent Analytics</h4>
                <ul className="space-y-3 flex-grow mb-8 text-sm text-on-surface-variant">
                  {[
                    "Cohort Overview and Domain Averages",
                    "Full Ranked Candidate List",
                    "Cut-Off Indicators",
                    "Individual Position Summaries Per Role",
                    "Domain Statistics: Mean, Median, SD",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-primary">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Live Report */}
              <div className="border border-outline-variant rounded-2xl p-8 flex flex-col h-full bg-surface-bright">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4">
                  INTERACTIVE LIVE
                </span>
                <h4 className="font-title-lg mb-4">Decision Portals</h4>
                <ul className="space-y-3 flex-grow mb-8 text-sm text-on-surface-variant">
                  {[
                    "Live Filterable Dashboard",
                    "Sorting by Role, Module, Score Band, Cut Off",
                    "Candidate Full Profiles",
                    "Multi-domain radar chart vs batch average",
                    "Band distribution visualization",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-primary">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="py-20 bg-inverse-surface text-surface-bright">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <h2 className="font-display-lg text-headline-md md:text-display-lg">
                Built on Standards of Behavioral Science
              </h2>
              <p className="text-surface-variant font-body-lg">
                DEUS Discover is built on established scientific frameworks: Big Five personality
                model, neuroscience behavioral paradigms, and cognitive psychology. Developed through
                a rigorous 4-phase process: Theory → Item Development → Validation → Norming. All
                guided by psychometricians and I/O psychology researchers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="p-8 bg-on-surface rounded-xl border border-surface-variant/10">
                <h4 className="text-primary-fixed font-title-lg mb-4">
                  Built on Established Science
                </h4>
                <p className="text-surface-variant text-sm">
                  Big Five personality model, neuroscience behavioral paradigms, and classical
                  cognitive assessment frameworks.
                </p>
              </div>
              <div className="p-8 bg-on-surface rounded-xl border border-surface-variant/10">
                <h4 className="text-primary-fixed font-title-lg mb-4">Expert-Guided Creation</h4>
                <p className="text-surface-variant text-sm">
                  4-phase development: Theory → Item Development → Validation → Norming. Guided by
                  psychometricians and I/O psychology researchers.
                </p>
              </div>
              <div className="p-8 bg-on-surface rounded-xl border border-surface-variant/10">
                <h4 className="text-primary-fixed font-title-lg mb-4">
                  Validated Against Traditional Tools
                </h4>
                <p className="text-surface-variant text-sm">
                  Game-based assessments show convergent validity with traditional cognitive tests.
                </p>
              </div>
              <div className="p-8 bg-on-surface rounded-xl border border-surface-variant/10">
                <h4 className="text-primary-fixed font-title-lg mb-4">
                  Normed for Indonesian Population
                </h4>
                <p className="text-surface-variant text-sm">
                  Benchmarks and score distributions derived from local data — not imported Western
                  norms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20 bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="bg-inverse-surface rounded-[2rem] overflow-hidden border-l-8 border-primary shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Success Story: Management Trainee Recruitment for Telkom Indonesia
                  </h3>
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                      <p className="text-primary-fixed font-display-lg text-headline-md">2 Years</p>
                      <p className="text-surface-variant text-[10px] uppercase font-bold tracking-widest">
                        Partnership and counting
                      </p>
                    </div>
                    <div>
                      <p className="text-primary-fixed font-display-lg text-headline-md">1,000+</p>
                      <p className="text-surface-variant text-[10px] uppercase font-bold tracking-widest">
                        Candidates assessed in one time
                      </p>
                    </div>
                    <div>
                      <p className="text-primary-fixed font-display-lg text-headline-md">30+</p>
                      <p className="text-surface-variant text-[10px] uppercase font-bold tracking-widest">
                        Provinces across indonesia
                      </p>
                    </div>
                    <div>
                      <p className="text-primary-fixed font-display-lg text-headline-md">1 Day</p>
                      <p className="text-surface-variant text-[10px] uppercase font-bold tracking-widest">
                        Results delivered
                      </p>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-primary pl-6 py-2 text-surface-variant italic text-lg">
                    Senang sekali bisa bekerja sama dengan tim DEUS dalam penyiapan seleksi untuk
                    karyawan Telkom Group. Kami sangat terbantu dengan profesionalitas sepanjang
                    persiapan hingga proses akhirnya. Semoga kerja sama kami tetap berjalan dengan
                    baik.
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      L
                    </div>
                    <div>
                      <p className="text-surface-bright font-bold">Lina</p>
                      <p className="text-surface-variant text-sm">
                        Telkom Group Selection Team
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 relative min-h-[400px]">
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt="Engaged Indonesian candidates"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGKrsUVTZh3SLJutZ1gyb5Z6iMQqZKc5SLAzwepQeKOP0bP6awZiLOx3Dz8sG_Exx4gBi9U4Aj1so2zrRT3rP5L3791I-8R_Ju3TnRh9ZSfZ6qj-JEYHEfnZI9y6xD7mSW2wT64OUomO8wl1ZkuVu5ycjfTvbNJ8Zt_PKrhL5IX1RbD6p9OPNvqto1oX86hytG2L5HHUji7qvCCQiuHzFEph9rYiRRu7aX6s9nWeXChwbf4lvqTlzYRg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seamless Enterprise Integration */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-md text-headline-md text-center mb-12">
              Seamless Enterprise Integration
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              {[
                { icon: "api", label: "Bulk Upload, No Manual Entry" },
                { icon: "cloud_sync", label: "Real Time Status Tracking" },
                { icon: "security", label: "Cut-Off Scoring With Minimum Threshold" },
                { icon: "language", label: "Anti-Cheat Detection and Proctoring" },
                { icon: "support_agent", label: "Role-Based Access Control" },
              ].map(({ icon, label }) => (
                <div
                  key={icon}
                  className="flex-1 bg-white p-6 rounded-xl border border-outline-variant shadow-sm text-center hover:scale-105 transition-transform"
                >
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl">
                    {icon}
                  </span>
                  <p className="font-bold text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-inverse-surface">
          <div className="max-w-4xl mx-auto px-margin-mobile text-center">
            <h2 className="text-surface-bright font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
              Ready to Transform How You Hire?
            </h2>
            <p className="text-surface-variant font-body-lg mb-12 max-w-2xl mx-auto">
              Get in touch with our team to explore how DEUS Discover can be tailored to your
              specific recruitment goals.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-primary text-on-primary px-12 py-4 rounded-full font-title-lg shadow-2xl hover:scale-105 transition-all">
                Book a Demo
              </button>
              <button className="border border-surface-bright text-surface-bright px-12 py-4 rounded-full font-title-lg hover:bg-white/10 transition-all">
                WhatsApp Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
