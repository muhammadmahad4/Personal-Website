import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Personal Projects"
          description="Full-stack applications, AI platforms, and security tooling."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {project.subtitle && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                        {project.subtitle}
                      </p>
                    )}
                    <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 shrink-0 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
                    >
                      GitHub
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <ul className="mt-3 space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
