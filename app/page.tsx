"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  Network,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

const platforms = [
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Klaviyo",
  "AWS",
  "PostgreSQL",
  "Zendesk",
];

const services = [
  {
    title: "Identity Resolution & RevOps",
    description:
      "We engineer data layers that unmask anonymous web traffic and pipe verified leads directly into custom outbound orchestration flows.",
    icon: DatabaseZap,
  },
  {
    title: "Enterprise Infrastructure",
    description:
      "Preparing mid-market tech for enterprise procurement. We architect SAML/SSO integrations and manage migrations to highly-available cloud infrastructure.",
    icon: CloudCog,
  },
  {
    title: "AI-Native CX Architecture",
    description:
      "We deploy enterprise-grade AI agents and conversational commerce flows that autonomously resolve tier-1 support tickets and capture revenue 24/7.",
    icon: Bot,
  },
  {
    title: "CRM & Ecosystem Orchestration",
    description:
      "Breaking down data silos. We build custom API middleware to migrate fragmented legacy data into unified platforms like HubSpot and ActiveCampaign.",
    icon: Network,
  },
];

const steps = [
  {
    title: "Audit",
    description: "We map your current data bottlenecks.",
  },
  {
    title: "Architect",
    description: "We design a scalable, serverless integration layer.",
  },
  {
    title: "Deploy",
    description:
      "We integrate the partner software and train your team.",
  },
];

const fadeUp: Pick<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <Navigation />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowWeWork />
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#" className="tracking-tight">
          <span className="text-sm font-semibold text-slate-500 sm:text-base">
            Modern<span className="text-slate-950">Day</span>
            <span className="text-blue-600">Solutions</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:partners@moderndaysolutions.agency?subject=Request%20Audit"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
        >
          Request Audit
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className="relative isolate px-5 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8"
    >
      <div className="absolute left-1/2 top-24 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 size-[360px] rounded-full bg-indigo-500/10 blur-3xl" />

      <motion.div
        {...fadeUp}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
          <ShieldCheck className="size-4" />
          Certified System Integration Partners
        </div>

        <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl md:text-7xl lg:text-8xl">
          The Digital Glue For Your Business Apps.
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
          We engineer autonomous workflows and custom API integrations to bridge
          the gap between your legacy infrastructure and modern SaaS.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:partners@moderndaysolutions.agency?subject=Book%20an%20Architecture%20Audit"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Book an Architecture Audit
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </a>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <CheckCircle2 className="size-4 text-blue-600" />
            Enterprise API reviews, documentation, and deployment readiness
          </div>
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="mx-auto mt-16 grid max-w-5xl gap-4 rounded-[2rem] border border-white bg-white/70 p-3 shadow-2xl shadow-slate-200/70 backdrop-blur sm:grid-cols-3"
      >
        <Metric label="Partner APIs" value="200+" />
        <Metric label="Deployment Model" value="Serverless" />
        <Metric label="Review Focus" value="Compliance" />
      </motion.div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200/80 bg-white/80 px-5 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm font-medium text-slate-500">
          Connecting 200+ Enterprise APIs including:
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 grayscale">
          {platforms.map((platform) => (
            <span key={platform}>{platform}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <motion.div {...fadeUp} className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Services
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Integration systems built for partner scrutiny.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white shadow-md shadow-slate-950/10">
            <Icon className="size-5" />
          </div>
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950 sm:text-xl">
            {title}
          </h3>
        </div>
        <CloudCog className="size-8 shrink-0 text-slate-100 transition group-hover:text-blue-100" />
      </div>
      <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">{description}</p>
    </article>
  );
}

function HowWeWork() {
  return (
    <section
      id="process"
      className="relative px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="absolute inset-x-0 top-1/2 -z-10 h-48 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent blur-3xl" />
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-10 lg:p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              <ShieldCheck className="size-3.5" />
              How We Work
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A practical path from audit to adoption.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Each engagement is structured to produce clear technical evidence:
              architecture maps, integration plans, deployment notes, and team
              enablement.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={String(index + 1).padStart(2, "0")}
                {...step}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/20">
          {step}
        </span>
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
          <p className="mt-1 leading-7 text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-100 bg-white p-5 text-left">
      <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-950">
            Copyright 2026 Modern Day Solutions
          </p>
          <p className="mt-2 max-w-xl">
            Modern Day Solutions is a specialized technical consultancy and
            verified integration partner.
          </p>
        </div>
        <a
          href="mailto:partners@moderndaysolutions.agency"
          className="font-semibold text-blue-600 transition hover:text-blue-500"
        >
          partners@moderndaysolutions.agency
        </a>
      </div>
    </footer>
  );
}
