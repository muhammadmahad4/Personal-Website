import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Work Experience"
          description="Professional roles in software engineering, cloud, and automation."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <article
                key={job.id}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="hidden md:block" />

                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-500 bg-white dark:bg-slate-950 md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                </div>

                <div className="ml-10 md:ml-0">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="text-brand-600 dark:text-brand-400">{job.company}</p>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 40)}
                          className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
