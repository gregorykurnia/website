import Image from "next/image";

const articles = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKzxOUQxjHaxieFf2gWDDmOa0A9rU1-8oUWl-5EBODU4z2I8uxRGljLyyDByaxJrBbjnqQCeDZD0roVPN_vegzkqebsFgMdtRO_4P--fv3CjF61n2ck_ASq__3ZpQeQ_ZFp5Rlzt-ESWjKkwY3BbmyMbzEvGqcvo0F_G-W4DwE9RYKYEGLvvcGq01EidaSRPHOENZtpjrbUkpmuHAEvOm_kap0eZL9HSD3aseZbsVfW1HS7JJfdZzxrQ",
    alt: "Gamified HR recruitment assessment illustration",
    tag: "Recruitment",
    tagClass: "bg-primary/90",
    title: "Why Most Indonesian Companies Still Hire the Wrong People",
    excerpt:
      "CVs show experience. Interviews show confidence. Neither predicts performance. Here's what actually does.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS4I0IOoFJjYBv2jAW_jWh2PUPwgLjP0TDY3DIUNE83YGqC03y3g-0rTm7UpDIEbUFPVJUNPKJeZ_aZVYl2ZqpHNPj_EgsKHT0iS0J-cfduOGG6Qx5BJnJIiRCiX6Y2yA-pjXSgR2PIvd7JHLZhVubXpSVeF_1sBblAtXEczaWZUUJICkuiSB5B9iH6B_ctSXGtr-sgYASJuNOXva5LLk02qE-D3Cwtu3My5OHfwrMNikzIuebx40uMg",
    alt: "Workforce performance analytics dashboard",
    tag: "Assessment",
    tagClass: "bg-secondary/90",
    title: "What Is Gamified Assessment and Why Does It Work?",
    excerpt:
      "Candidates hate boring tests. Gamified assessments get 90%+ completion rates — and better data. Here's the science.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5BJoZ0V7qoQyTz8DspMeC3tD8ccxeeQMwxh5VXlJwLNx0VshsKl6jwsrukiYW3wM1y2gGLUcmqftWB5mq0CTvYM_FtVfjRUbDAeubdeUOShOPl7tM_IWIOZC2DXP7uAf6Ev2TyxN75ilOQX5hum5HICplRSOyTGGZjUiM_RA-C5Q2w0QLaNbNtV5Dyqp5ncxA7pNKg7rpAP7AuNIYT539Roof9qCONVSUuw4pmmClOE1XjelLjFoz6w",
    alt: "Modern Indonesian office team collaborating",
    tag: "Performance",
    tagClass: "bg-outline/90",
    title: "The Real Cost of High Turnover in Indonesian Companies",
    excerpt:
      "Most companies underestimate what losing an employee actually costs. The number might surprise you.",
  },
];

export default function ArticlesTeaser() {
  return (
    <section className="py-section light-gray-band">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex justify-between items-end mb-xxl">
          <div>
            <span className="font-label-sm text-primary tracking-widest uppercase mb-sm block">
              From Our Blog
            </span>
            <h2 className="font-headline-lg text-headline-lg">
              HR Insights Worth Reading
            </h2>
          </div>
          <button
            aria-label="View All Insights"
            className="hidden md:flex items-center gap-2 text-primary font-label-md text-label-md group"
          >
            View All Insights
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {articles.map((article) => (
            <div
              key={article.title}
              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden tonal-elevation transition-all hover:shadow-lg"
            >
              <div className="h-48 bg-surface-container relative overflow-hidden">
                <Image
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  src={article.src}
                  alt={article.alt}
                  fill
                />
                <div className="absolute top-sm left-sm">
                  <span
                    className={`${article.tagClass} text-white px-md py-xs rounded-lg font-label-sm text-label-sm`}
                  >
                    {article.tag}
                  </span>
                </div>
              </div>
              <div className="p-lg">
                <h3 className="font-headline-sm text-headline-sm mb-sm group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-on-surface-variant font-body-md line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
