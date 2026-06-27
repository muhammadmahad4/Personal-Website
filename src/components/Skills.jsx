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
    <section id="skills" className="bg-slate-50 px-6 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="Languages, frameworks, and tools I use to build secure, scalable systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Languages
            </h3>
            <SkillTags
              items={skills.languages}
              colorClass="bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Frameworks & Tools
            </h3>
            <SkillTags
              items={skills.frameworksAndTools}
              colorClass="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
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

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Spoken Languages
            </h3>
            <SkillTags
              items={skills.spokenLanguages}
              colorClass="bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
