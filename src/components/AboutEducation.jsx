import SectionHeading from "./SectionHeading.jsx";
import { about, education, extracurriculars } from "../data/portfolioData.js";

export default function AboutEducation() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="About & Education"
          description={about.summary}
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {about.highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-brand-600 dark:text-brand-400">{edu.degree}</p>
                  {edu.gpa && (
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
              {edu.honors?.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {edu.honors.map((honor) => (
                    <li
                      key={honor}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {honor}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
            Extracurriculars
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {extracurriculars.map((item) => (
              <div
                key={item.role}
                className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <p className="font-medium text-slate-900 dark:text-white">{item.role}</p>
                <p className="mt-1 text-sm text-brand-600 dark:text-brand-400">{item.org}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
