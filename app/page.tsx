// app/page.tsx

"use client";

import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Product Strategy & Architecture",
    desc: "We design the right product, choose the right stack, and architect for scale from day one.",
  },
  {
    title: "Mobile Apps (iOS & Android)",
    desc: "React Native / Expo apps with real-time updates, background tracking, and app-store ready builds.",
  },
  {
    title: "Web Apps & Dashboards",
    desc: "Admin panels, analytics dashboards, internal tools, and portals with clean UI and fast UX.",
  },
  {
    title: "Logistics & Mobility Platforms",
    desc: "Uber-style flows, live tracking, bidding systems, routing, and pricing engines for logistics and ride-hailing.",
  },
  {
    title: "AI & Automation",
    desc: "We integrate AI for routing, recommendations, chat, and workflow automation where it actually adds value.",
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, monitoring, and secure deployments on Railway, Vercel, AWS and more.",
  },
];

const products = [
  {
    label: "Logistics · Bidding · Live Tracking",
    name: "TruckInn — Logistics Ecosystem",
    desc: "A complete ecosystem for shippers, drivers, and vendors with real-time bids, live tracking, and admin insights.",
    status: "In active development",
  },
  {
    label: "Maps · Routing · SDK",
    name: "TruckInn Maps",
    desc: "A custom mapping layer optimized for logistics, with distance, time, and route calculations for real-world operations.",
    status: "Private beta",
  },
  {
    label: "Ride-hailing · Urban Mobility",
    name: "BoaCab",
    desc: "A modern mobility platform inspired by the best parts of global ride-hailing apps.",
    status: "Coming soon",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We understand your business, users, and constraints before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We prototype flows, UX, and the technical architecture that will support your product long term.",
  },
  {
    step: "03",
    title: "Build",
    desc: "We develop in focused sprints with regular demos, so you always see progress in real time.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "We help you launch, monitor, and scale — from v1 to your next million requests.",
  },
];

const techStack = {
  frontend: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  infra: ["Railway", "Vercel", "AWS", "Socket.io"],
  practices: [
    "API-first architectures",
    "Real-time event systems",
    "Monitoring & logging",
    "Secure key & secret handling",
  ],
};

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-brief", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Your project brief has been sent successfully!");
      setForm({ name: "", company: "", email: "", budget: "", message: "" });
    } else {
      alert("Failed to send. Please try again.");
    }
  };


  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        {/* Navbar */}
        <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-emerald-400 shadow-lg shadow-sky-500/40">
                <span className="text-lg font-bold tracking-tight text-slate-950">
                  N
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm font-semibold tracking-wide text-slate-100">
                  Nubexs
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                    Software Studio
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Nubexs USA LLC · Digital Product Studio
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#services" className="hover:text-sky-400">
                Services
              </a>
              <a href="#products" className="hover:text-sky-400">
                Products
              </a>
              <a href="#process" className="hover:text-sky-400">
                Process
              </a>
              <a href="#about" className="hover:text-sky-400">
                About
              </a>
              <a href="#contact" className="hover:text-sky-400">
                Contact
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400"
              >
                Start a project
                <ArrowRight className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-4 flex flex-col gap-10 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-300 shadow-sm shadow-slate-900/60">
              <Sparkles className="h-3 w-3 text-amber-300" />
              <span>US-registered · Logistics, Mobility, SaaS & AI</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                We build intelligent software
                <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  for ambitious companies.
                </span>
              </h1>
              <p className="text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
                Nubexs is a focused software studio building AI-powered
                platforms, real-time logistics systems, and mobile apps designed
                to handle millions of requests — with clean UX and solid
                engineering underneath.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 hover:border-slate-500"
              >
                View our products
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>US entity · Nubexs USA LLC</span>
              </div>
              <div className="h-3 w-px bg-slate-700" />
              <span>Real-time architectures · Production-grade systems</span>
            </div>
          </div>

          {/* Hero visual / mockup */}
          <div className="relative mt-6 w-full max-w-md self-stretch md:mt-0 md:self-center">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-500/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-8 h-32 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 shadow-2xl shadow-black/60 backdrop-blur">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                  Testing system snapshot (pre-release)
                </span>
                <span className="text-[10px] text-yellow-300">
                  Internal testing · not final data
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-3">
                  <p className="text-[11px] font-medium text-slate-300">
                    Active drivers
                  </p>
                  <p className="text-2xl font-semibold text-emerald-400">
                    311
                  </p>
                  <p className="text-[10px] text-slate-500">test drivers active</p>
                  <div className="mt-3 h-16 rounded-xl bg-slate-900/80" />
                </div>
                <div className="space-y-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-3">
                  <p className="text-[11px] font-medium text-slate-300">
                    Requests per minute
                  </p>
                  <p className="text-2xl font-semibold text-yellow-300">148</p>
                  <p className="text-[10px] text-slate-500">simulated load</p>
                  <div className="mt-3 h-16 rounded-xl bg-slate-900/80" />
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3 text-[11px] text-slate-300">
                <p className="mb-1 font-medium text-slate-200">
                  Nubexs product snapshot
                </p>
                <p className="text-slate-400">
                  TruckInn, TruckInn Maps, and BoaCab built on the same
                  real-time core — engineered to scale from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients / trust strip */}
        <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 px-4 py-4 shadow-lg shadow-black/50 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
            <p className="text-slate-300">
              Trusted by teams building the next generation of{" "}
              <span className="text-sky-400">logistics & mobility products.</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
              <span className="rounded-full bg-slate-800/80 px-3 py-1">
                TruckInn ecosystem
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1">
                Custom mapping & routing
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1">
                Real-time event systems
              </span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-slate-100">
              Services built for serious products.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              From early idea to production systems handling thousands of
              requests per second — we design, build, and ship complete digital
              products.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm shadow-black/30 transition hover:border-sky-500/70 hover:shadow-sky-900/40"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800/80 text-sky-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-slate-100">
              Products powered by Nubexs.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              We don&apos;t just ship client work — we also build and operate our
              own platforms, battle-tested in real-world logistics and mobility
              environments.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm shadow-black/30"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-medium text-sky-400">
                    {product.label}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {product.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {product.desc}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{product.status}</span>
                  <span className="inline-flex items-center gap-1 text-sky-400">
                    Learn more
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-slate-100">
              A simple, transparent process.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              We keep things clear and predictable — from the first call to your
              next major release.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm shadow-black/30"
              >
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-sky-400">
                    {step.step}
                  </span>
                  <span>Step</span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About + Tech stack */}
        <section
          id="about"
          className="grid gap-10 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-lg shadow-black/50 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-slate-100">
              A focused team with big product ambition.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Nubexs USA LLC is a software studio focused on logistics,
              mobility, SaaS, and AI. We combine deep hands-on engineering with
              an obsession for product detail — from database indexes to the
              last pixel in your app.
            </p>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>US-registered entity (Wyoming)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>
                    Experience with real-time logistics & ride-hailing systems
                  </span>
                </li>
              </ul>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Comfortable working with startups & SMEs globally</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Production-focused, not just prototypes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-xs text-slate-300">
            <h3 className="mb-1 text-sm font-semibold text-slate-100">
              Built with modern, battle-tested tools.
            </h3>
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-400">
                Frontend & Apps
              </p>
              <p>{techStack.frontend.join(" · ")}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-400">
                Backend
              </p>
              <p>{techStack.backend.join(" · ")}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-400">
                Infra
              </p>
              <p>{techStack.infra.join(" · ")}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-400">
                Practices
              </p>
              <ul className="space-y-1">
                {techStack.practices.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-slate-100">
              Ready to build?
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              Tell us a bit about your product. Whether you&apos;re starting from
              scratch or scaling an existing platform, we&apos;ll come back with
              a clear, honest recommendation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-lg shadow-black/50"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5 text-xs">
                  <label className="block text-slate-300" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/60 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5 text-xs">
                  <label className="block text-slate-300" htmlFor="company">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/60 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1"
                    placeholder="Company or project name"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5 text-xs">
                  <label className="block text-slate-300" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/60 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-1.5 text-xs">
                  <label className="block text-slate-300" htmlFor="budget">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/60 focus:border-sky-500 focus:ring-1"
                  >
                    <option value="">Select a range</option>
                    <option value="5-10k">$5k – $10k</option>
                    <option value="10-25k">$10k – $25k</option>
                    <option value="25-50k">$25k – $50k</option>
                    <option value="50k-plus">$50k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="block text-slate-300" htmlFor="message">
                  Tell us about your product
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/60 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1"
                  placeholder="What are you building? Timelines, goals, current status…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400"
              >
                Send project brief
                <ArrowRight className="h-3 w-3" />
              </button>

              <p className="mt-2 text-[11px] text-slate-400">
                Prefer email? Reach us at{" "}
                <a
                  href="mailto:info@nubexs.com"
                  className="text-sky-400 underline-offset-2 hover:underline"
                >
                  info@nubexs.com
                </a>
                .
              </p>
            </form>

            <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-xs text-slate-300">
              <h3 className="mb-2 text-sm font-semibold text-slate-100">
                Project fit checklist
              </h3>
              <p>
                Nubexs is a good fit if you&apos;re building serious digital
                products — not just quick demos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>You care about both UX and engineering quality.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>You want a technical partner, not just coders.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>
                    You&apos;re ready to invest in a product that can scale.
                  </span>
                </li>
              </ul>

              <div className="mt-3 space-y-2 border-t border-slate-800/80 pt-3 text-[11px]">
                <p className="font-semibold text-slate-200">Contact details</p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-sky-400" />
                  <a
                    href="mailto:info@nubexs.com"
                    className="hover:text-sky-400"
                  >
                    info@nubexs.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-sky-400" />
                  <span>Available for scheduled calls upon request.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-800/80 pt-6 text-[11px] text-slate-400">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-slate-200">
                Nubexs USA LLC · Software Studio
              </p>
              <p className="mt-1">
                Building intelligent software for logistics, mobility, and SaaS
                products worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="hover:text-sky-400">
                Services
              </a>
              <a href="#products" className="hover:text-sky-400">
                Products
              </a>
              <a href="#contact" className="hover:text-sky-400">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Nubexs USA LLC. All rights reserved.</p>
            <div className="flex gap-3">
              <a href="/terms-and-conditions" className="hover:text-teal-400">
                Terms & Conditions
              </a>
              <a href="/privacy-policy" className="hover:text-teal-400">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
