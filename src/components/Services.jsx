import React from 'react';
import { Layout, Server, Bot, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData, personalInfo } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Bot: Bot,
  Zap: Zap,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            What I Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Freelance & Engineering <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-converting solutions designed for businesses, startups, and clients seeking fast execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            return (
              <div
                key={index}
                className="card-glass p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-6 group hover:-translate-y-1 duration-300"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Custom & Scalable
                  </span>

                  <a
                    href={personalInfo.fiverr}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-emerald-400 transition"
                  >
                    <span>Hire on Fiverr</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fiverr Banner Callout */}
        <div className="mt-16 card-glass p-8 rounded-3xl border border-emerald-500/30 relative overflow-hidden bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20">
                Fiverr Seller • Top Tier Delivery
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Need a Custom Gig or Urgent Delivery?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                I take on direct contracts and Fiverr milestones with 100% money-back satisfaction and fast turnaround times.
              </p>
            </div>

            <a
              href={personalInfo.fiverr}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 shrink-0"
            >
              Order on Fiverr Profile →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

