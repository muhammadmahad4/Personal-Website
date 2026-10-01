import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data/portfolioData.js";

function SkillTags({ items, colorClass }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className={`rounded-full px-3 py-1.5 text-sm font-medium ${colorClass}`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Languages & Skills"
          description="Technologies, tools, and certifications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Languages / Frameworks
            </h3>
            <SkillTags
              items={skills.languages}
              colorClass="bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Infra & Data
            </h3>
            <SkillTags
              items={skills.infraAndData}
              colorClass="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Cybersecurity
            </h3>
            <SkillTags
              items={skills.aiAndSecurity}
              colorClass="bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              AI & Automation
            </h3>
            <SkillTags
              items={skills.aiAndAutomation}
              colorClass="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Soft Skills
            </h3>
            <SkillTags
              items={skills.softSkills}
              colorClass="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
            />
          </div>

          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Spoken Languages
            </h3>
            <SkillTags
              items={skills.spokenLanguages}
              colorClass="bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300"
            />
          </div>

          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Certifications
            </h3>
            <div className="space-y-3">
              {skills.certifications.map((cert) => (
                <div key={cert.name} className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{cert.name}</p>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${cert.status === "In Progress" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"}`}>
                      {cert.status}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
