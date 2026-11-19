import React from 'react';
import { Award, Briefcase, GraduationCap, Zap, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    "Frontend Developer Intern at Experts Cloud Software, Lahore",
    "BS Computer Science Graduate (CGPA: 3.44 / 4.0)",
    "Specialist in React.js, Tailwind CSS & State Management",
    "Hands-on AI Automation builder using n8n and Gemini AI API",
    "Built KisanMarket (MERN Stack FYP) & MyStore E-Commerce",
    "Fluent in English & Urdu with strong team communication skills"
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            Get to Know Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Frontend Design with <span className="gradient-text">Intelligent Automation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I don't just build UI; I craft digital experiences that solve real business bottlenecks.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>Hi, I'm Muhammad Arif</span>
              <span className="text-emerald-400">👋</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a <strong className="text-white">Computer Science graduate</strong> from MNS-University of Agriculture, Multan (CGPA: 3.44/4.0), currently sharpening my professional development chops as a <strong className="text-emerald-400 font-semibold">Frontend Developer Intern at Experts Cloud Software, Lahore</strong>.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My engineering journey is driven by two strong passions: creating seamless, responsive user interfaces with <strong className="text-slate-200">React.js & Tailwind CSS</strong>, and implementing <strong className="text-slate-200">AI-driven workflow automations</strong> using tools like <strong className="text-slate-200">n8n, Gemini AI API, and Google Cloud services</strong>.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Whether building full-stack platforms like <strong className="text-white">KisanMarket</strong> (MERN stack FYP connecting agricultural farmers directly to wholesale buyers) or automating lead qualifications with zero-touch AI agents, I focus on clean code, user happiness, and real commercial impact.
            </p>

            {/* Checklist items */}
            <div className="grid sm:grid-cols-2 gap-3 pt-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 group"
              >
                <span>Have an idea or need an automation? Get in touch</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stats & Milestones */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="card-glass p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-emerald-500/30 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">BS in Computer Science</h4>
                <p className="text-xs text-slate-400">MNS-University of Agriculture, Multan</p>
                <div className="mt-2 inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300">
                  CGPA: 3.44 / 4.0
                </div>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-cyan-500/30 transition">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Current Industry Role</h4>
                <p className="text-xs text-slate-400">Frontend Intern @ Experts Cloud Software</p>
                <p className="text-xs text-slate-500 mt-1">Bahria Town, Lahore • Working with React, JS, and enterprise UI</p>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-purple-500/30 transition">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">AI Automation Edge</h4>
                <p className="text-xs text-slate-400">n8n, Gemini AI, REST APIs & Sheets</p>
                <p className="text-xs text-slate-500 mt-1">Automating tedious tasks into intelligent 24/7 background workflows</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

