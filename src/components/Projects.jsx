import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) =>
        selectedFilter === 'ai'
          ? p.techStack.includes('n8n') || p.techStack.includes('Gemini AI API')
          : p.techStack.includes('React.js')
      );

  return (
    <section id="projects" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            Proof of Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects & Automations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world applications and workflows engineered for scalability, responsiveness, and automation.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedFilter === 'all'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setSelectedFilter('web')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedFilter === 'web'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Web & Full Stack (2)
            </button>
            <button
              onClick={() => setSelectedFilter('ai')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedFilter === 'ai'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              AI & Automations (1)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-glass rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition flex flex-col group hover:-translate-y-1 duration-300 shadow-xl"
            >
              {/* Project Visual Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-semibold font-mono">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Links */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Discuss Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

