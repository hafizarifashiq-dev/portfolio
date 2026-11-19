import React from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-semibold tracking-wider uppercase">
            Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on professional training combined with a strong computer science academic foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Work Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Work Experience</h3>
                <p className="text-xs text-slate-400">Professional internships & software roles</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative pl-9 space-y-2">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 -translate-x-1/2 ${
                      exp.current
                        ? 'bg-emerald-400 border-emerald-950 shadow-md shadow-emerald-400/50 animate-pulse'
                        : 'bg-slate-700 border-slate-900'
                    }`}
                  ></div>

                  <div className="card-glass p-5 rounded-2xl border border-slate-800 space-y-3 hover:border-slate-700 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">{exp.role}</h4>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">
                          Active Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400">
                      <span className="text-emerald-300 font-medium">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Achievements Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <p className="text-xs text-slate-400">Formal university degree & credentials</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative pl-9 space-y-2">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 -translate-x-1/2 bg-purple-400 border-purple-950 shadow-md shadow-purple-400/40"></div>

                  <div className="card-glass p-5 rounded-2xl border border-slate-800 space-y-3 hover:border-slate-700 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 text-[11px] font-semibold border border-purple-500/20 font-mono">
                        {edu.grade}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400">
                      <span className="text-purple-300 font-medium">{edu.institution}</span>
                      <span className="flex items-center gap-1 font-mono text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}

              {/* Special Recognition Box */}
              <div className="relative pl-9">
                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-purple-950/30 border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white">Continuous Professional Learning</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Currently expanding expertise into <strong className="text-slate-200">Advanced React State Patterns</strong>, <strong className="text-slate-200">Autonomous AI Agents (n8n & Python)</strong>, and <strong className="text-slate-200">Enterprise Cloud Automations</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

