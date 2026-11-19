import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code, Bot, Server, Wrench, Check } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Code },
    { id: 'frontend', label: 'Frontend & UI', icon: Code },
    { id: 'ai', label: 'AI & Automation', icon: Bot },
    { id: 'backend', label: 'Backend & DB', icon: Server },
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The modern frameworks, languages, and automation platforms I work with daily.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === cat.id
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend Section */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="card-glass p-6 rounded-2xl border border-slate-800 space-y-5 hover:border-emerald-500/30 transition">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">Frontend Ecosystem</h3>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-900 text-emerald-400 font-mono border border-slate-800">
                  Specialty
                </span>
              </div>

              <div className="space-y-4">
                {skillsData.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-emerald-400 font-mono">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI & Automation Section */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <div className="card-glass p-6 rounded-2xl border border-slate-800 space-y-5 hover:border-cyan-500/30 transition">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">AI & Automation</h3>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-900 text-cyan-400 font-mono border border-slate-800">
                  Competitive Edge
                </span>
              </div>

              <div className="space-y-4">
                {skillsData.aiAutomation.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400 font-mono">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend & Databases Section */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="card-glass p-6 rounded-2xl border border-slate-800 space-y-5 hover:border-purple-500/30 transition">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">Backend & Database</h3>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-900 text-purple-400 font-mono border border-slate-800">
                  MERN Foundations
                </span>
              </div>

              <div className="space-y-4">
                {skillsData.backend.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-purple-400 font-mono">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Developer Workflow & Tools Bar */}
        <div className="mt-12 p-6 rounded-2xl card-glass border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800/80 text-emerald-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Tools & Version Control</h4>
              <p className="text-xs text-slate-400">Daily driver software and developer tooling</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.tools.map((tool) => (
              <span
                key={tool.name}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-emerald-500/40 hover:text-emerald-400 transition"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

