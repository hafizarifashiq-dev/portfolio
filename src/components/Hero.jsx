import React from 'react';
import { ArrowRight, Download, Github, Mail, Sparkles, MapPin, ExternalLink, Code2, Bot, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="glow-bg w-96 h-96 bg-emerald-500 top-10 left-1/4 -z-10"></div>
      <div className="glow-bg w-96 h-96 bg-cyan-500 top-40 right-1/4 -z-10"></div>
      <div className="glow-bg w-80 h-80 bg-purple-600 bottom-10 left-1/3 -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Freelance & Full-time Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="text-white">{personalInfo.name}</span>
              <br />
              <span className="gradient-text">
                Full Stack Developer
              </span>
              <br />
              <span className="text-slate-300 font-semibold text-3xl sm:text-4xl lg:text-5xl flex items-center gap-2 mt-1">
                & AI Automation Builder
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Computer Science graduate specializing in <strong className="text-slate-200 font-semibold">Full Stack MERN Architecture</strong> and modern engineering, paired with practical <strong className="text-slate-200 font-semibold">AI Automation (n8n, Gemini API)</strong> to build high-performance web applications that automate business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.fiverr}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-emerald-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Hire on Fiverr</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Muhammad_Arif_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium text-sm border border-slate-800 hover:text-white transition"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Fast Stats / Location */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Layyah & Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-4 h-4 text-slate-400" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 underline underline-offset-4">
                  github.com/hafizarifashiq-dev
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400">
                  {personalInfo.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md card-glass rounded-2xl p-6 shadow-2xl border border-slate-800">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">arif.config.js</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  v2.0 active
                </span>
              </div>

              {/* Code-like snippet card */}
              <div className="space-y-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                  <div className="text-slate-500">// Quick profile snapshot</div>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">'Muhammad Arif'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span> <span className="text-emerald-300">'Frontend & AI Automation Dev'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">currentWork:</span> <span className="text-cyan-300">'Intern @ Experts Cloud Software'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span> <span className="text-amber-300">'BSCS (CGPA 3.44/4.0)'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [<span className="text-emerald-300">'React.js'</span>, <span className="text-emerald-300">'n8n'</span>, <span className="text-emerald-300">'Tailwind'</span>, <span className="text-emerald-300">'APIs'</span>]
                  </div>
                  <div>{'};'}</div>
                </div>

                {/* Feature Pills */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Modern React</div>
                      <div className="text-[10px] text-slate-400">Hooks, Redux, Tailwind</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">AI Automation</div>
                      <div className="text-[10px] text-slate-400">n8n, Gemini API, Sheets</div>
                    </div>
                  </div>
                </div>

                {/* Interactive Status Footer */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 border border-emerald-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-slate-300">Ready for new client projects</span>
                  </div>
                  <a href="#contact" className="text-emerald-400 font-semibold hover:underline">
                    Let's Talk →
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

