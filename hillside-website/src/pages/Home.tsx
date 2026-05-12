import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeroPipelineVisual } from '../components/HeroPipelineVisual'

function IconInbox({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 9l4 3 4-3 4 3 4-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconChannels({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13 8h6M5 16h6M16 5v5M8 19v-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconOrders({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 7h14l-1 12H8L7 7zm0 0L6 3H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1" fill="currentColor" />
      <circle cx="18" cy="20" r="1" fill="currentColor" />
    </svg>
  )
}

function IconCatalog({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 4h10v16l-5-3-5 3V4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconChart({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M7 16V10M12 16V6M17 16v-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconPostOffice({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10l8-5 8 5v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 10l8 5 8-5M9 14h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconLock({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 11V8a5 5 0 0110 0v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="16" r="1.25" fill="currentColor" />
    </svg>
  )
}

const PLATFORM_PRINCIPLES = [
  'One surface for channels and fulfilment context.',
  'Automation where it helps—never at the cost of trust.',
  'We register your orders at your post office automatically, without you having to do the boring work.',
  'AI assistance is optional; turn it off whenever you want a purely operator-led workflow.',
  'Reporting your CFO can actually use.',
] as const

function PlatformPrinciplesRail() {
  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-border-strong bg-paper/85 p-6 shadow-lift backdrop-blur-[2px] sm:p-7">
      <div className="pointer-events-none absolute inset-0 platform-live-shimmer opacity-60" aria-hidden />
      <div className="relative flex shrink-0 items-center justify-between gap-3 border-b border-border pb-4">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
          Principles
        </p>
        <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-medium text-accent">
          Non‑negotiables
        </span>
      </div>
      <div className="relative flex min-h-0 flex-1 flex-col">
        <ol className="relative mt-6 space-y-5">
          {PLATFORM_PRINCIPLES.map((text, i) => (
            <li key={text} className="relative flex gap-4 pl-1">
              {i < PLATFORM_PRINCIPLES.length - 1 ? (
                <span
                  className="absolute left-[22px] top-9 h-[calc(100%+0.25rem)] w-px platform-rail-line"
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-paper font-mono text-[11px] font-semibold text-ink shadow-soft">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="pt-1.5 font-display text-[15px] font-medium leading-snug text-ink">
                {text}
              </p>
            </li>
          ))}
        </ol>
        <div className="min-h-0 flex-1" aria-hidden />
      </div>
    </div>
  )
}

function PlatformFeaturedCard() {
  return (
    <div className="relative rounded-[1.35rem] bg-gradient-to-br from-accent/40 via-paper-deep to-border-strong p-[1px] shadow-lift">
      <div className="relative overflow-hidden rounded-[1.29rem] bg-ink text-paper platform-featured-inner">
        <div className="pointer-events-none absolute inset-0 platform-featured-scan" aria-hidden />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-paper/10 platform-orbit-slow"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full border border-accent/25 opacity-80 platform-orbit-slow"
          style={{ animationDuration: '72s' }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col gap-10 p-8 sm:p-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-paper/15 bg-paper/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/70">
                Flagship capability
              </span>
              <span className="hidden rounded-full border border-accent/25 bg-accent/15 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgb(255_230_220)] sm:inline-flex">
                AI · optional
              </span>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-paper/12 bg-paper/10 text-[rgb(255_220_210)] shadow-[0_0_0_1px_rgb(255_255_255_/_0.06)_inset]">
                <IconInbox className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-paper sm:text-[1.65rem]">
                  AI that assists, not replaces
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-paper/72 sm:text-base">
                  Draft and refine replies from a unified thread view. Your team
                  stays in control of tone, policy, and final send—while repetitive
                  work gets lighter. Prefer a manual inbox? Disable AI assistance
                  entirely; Hillside keeps working as a disciplined messaging and
                  operations surface without drafts or suggestions.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full shrink-0 overflow-hidden rounded-2xl border border-paper/12 bg-paper/[0.06] p-5 shadow-[0_0_0_1px_rgb(255_255_255_/_0.04)_inset] backdrop-blur-md sm:max-w-sm lg:w-[min(100%,18.5rem)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent" aria-hidden />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/55">
                  Live snapshot
                </p>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
              </div>
              <dl className="mt-5 space-y-4 font-mono text-[11px] leading-none text-paper/65">
                <div className="flex items-baseline justify-between gap-6 border-b border-paper/10 pb-4">
                  <dt>Threads today</dt>
                  <dd className="text-paper tabular-nums text-sm font-semibold tracking-tight">
                    428
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-paper/10 pb-4">
                  <dt>Median first reply</dt>
                  <dd className="text-paper tabular-nums text-sm font-semibold tracking-tight">
                    6m 12s
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt>AI-assisted drafts</dt>
                  <dd className="text-paper tabular-nums text-sm font-semibold tracking-tight">
                    72%
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-[10px] leading-relaxed text-paper/45">
                Illustrative metrics when AI assistance is enabled—your rollout is
                modeled against real staffing and SKUs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlatformTile({
  title,
  children,
  icon,
  highlight,
  className = '',
}: {
  title: string
  children: ReactNode
  icon: ReactNode
  highlight?: boolean
  className?: string
}) {
  const tileEase =
    'duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-150 motion-reduce:ease-linear'

  return (
    <div
      className={[
        'group relative overflow-hidden rounded-2xl border border-border-strong bg-paper transition-[transform,border-color] hover:-translate-y-1',
        tileEase,
        'motion-reduce:hover:translate-y-0',
        highlight ? 'platform-tile-highlight' : 'platform-tile-glow',
        'hover:border-accent/25',
        className,
      ].join(' ')}
    >
      <div
        className={[
          'pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100 home-marquee-border',
          tileEase,
          highlight ? 'opacity-70' : '',
        ].join(' ')}
        aria-hidden
      />
      <div className="relative p-7 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div
              className={`absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/18 via-transparent to-transparent opacity-0 blur-md transition-opacity group-hover:opacity-100 ${tileEase}`}
              aria-hidden
            />
            <div
              className={[
                'relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-accent platform-icon-ring transition-transform group-hover:scale-[1.03]',
                tileEase,
                'motion-reduce:group-hover:scale-100',
              ].join(' ')}
            >
              {icon}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
              {title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          aria-hidden
        >
          <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-paper-deep/80 via-transparent to-transparent blur-3xl" />
          <div className="absolute -right-32 top-24 h-[380px] w-[480px] rounded-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent blur-3xl" />
        </div>
        <div className="hero-site-grid pointer-events-none absolute inset-0 opacity-[0.55]" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="flex flex-col items-center gap-12 lg:gap-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-[2.35rem] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl sm:leading-[1.08] lg:text-[2.85rem] lg:leading-[1.06]">
                One calm inbox for social messages, orders, and AI-assisted
                replies.
              </h1>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-muted sm:text-lg">
                Hillside connects Facebook, Instagram, and WhatsApp Business into
                a single operating layer—so your team can triage faster, draft
                with context-aware AI (or switch AI off entirely). We register
                your orders at your post office automatically, without you having
                to do the boring work—and keep fulfilment aligned with the thread.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-2.5 font-medium text-paper shadow-soft transition-[transform,background-color] hover:-translate-y-px hover:bg-ink-muted"
                >
                  Book a walkthrough
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-paper px-6 py-2.5 font-medium text-ink transition-[transform,border-color,background-color] hover:-translate-y-px hover:border-ink/15 hover:bg-paper-elevated"
                >
                  How we work with teams
                </Link>
              </div>
              <p className="mx-auto mt-8 max-w-2xl font-mono text-[11px] leading-relaxed text-ink-faint sm:text-xs">
                Humans stay in control: AI proposes when enabled, policy
                enforces, operators approve—and you can disable AI assistance
                anytime for a strictly manual inbox.
              </p>
            </div>

            <div className="relative mx-auto w-[min(100%,42rem)] sm:w-[min(100%,48rem)] lg:w-[min(100%,56rem)]">
              <div
                className="pointer-events-none absolute inset-x-0 -bottom-4 top-1/3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-accent/12 via-paper-deep/35 to-transparent blur-2xl"
                aria-hidden
              />
              <HeroPipelineVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border bg-paper-elevated">
        <div className="pointer-events-none absolute inset-0 platform-shell-bg" aria-hidden />
        <div className="pointer-events-none absolute inset-0 platform-shell-grid" aria-hidden />
        <div className="pointer-events-none absolute inset-0 home-section-glow opacity-70" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <header className="relative mb-14 lg:mb-20">
            <p
              className="platform-watermark absolute -left-2 -top-6 sm:-left-4 sm:-top-10 text-[clamp(3.5rem,14vw,9rem)]"
              aria-hidden
            >
              Platform
            </p>
            <div className="relative max-w-3xl">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
                Capabilities
              </p>
              <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.15rem]">
                Serious tooling for teams who live in the inbox.
              </h2>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-muted sm:text-lg">
                A deliberate surface where throughput meets taste: crisp routing,
                humane defaults, and leadership-grade clarity—without turning your
                operation into a science fair.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-7">
            <div className="flex min-h-0 flex-col lg:col-span-8">
              <PlatformFeaturedCard />
            </div>

            <aside className="flex min-h-0 flex-col lg:col-span-4">
              <PlatformPrinciplesRail />
            </aside>

            <div className="lg:col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-6">
              <PlatformTile
                className="xl:col-span-2"
                title="Meta channels, one operating picture"
                icon={<IconChannels />}
              >
                Facebook, Instagram, and WhatsApp Business conversations flow into
                the same inbox and routing logic your staff already rely on.
              </PlatformTile>
              <PlatformTile
                className="xl:col-span-2"
                title="Orders from message to fulfilment"
                icon={<IconOrders />}
              >
                Connect catalog, pricing, and workflow steps so common purchase
                paths can be confirmed, documented, and handed off consistently.
              </PlatformTile>
              <PlatformTile
                className="xl:col-span-2"
                title="Post office order registration"
                icon={<IconPostOffice />}
                highlight
              >
                We register your orders at your post office automatically, without
                you having to do the boring work.
              </PlatformTile>
              <PlatformTile
                className="xl:col-span-3"
                title="Catalog and inventory context where it matters"
                icon={<IconCatalog />}
              >
                Surface the right product details alongside the conversation so
                agents and automations speak from a single source of truth.
              </PlatformTile>
              <PlatformTile
                className="xl:col-span-3"
                title="Analytics you can explain in a meeting"
                icon={<IconChart />}
              >
                Volume, response times, conversion-oriented milestones, and channel
                mix—presented plainly for leadership review.
              </PlatformTile>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border bg-paper">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
              Flow
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.15rem] sm:leading-snug">
              From first connection to steady-state operations.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              A deliberate sequence—clear checkpoints, tight permissions, and room
              to refine once your team is fluent on the rails.
            </p>
          </div>

          <div className="relative mt-16">
            <div
              className="pointer-events-none absolute left-0 right-0 top-[2.85rem] hidden h-px md:block home-flow-line"
              aria-hidden
            />
            <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                step: '01',
                title: 'Connect channels securely',
                body: 'Link your Meta business assets and WhatsApp Business presence with permissions scoped to what Hillside needs to operate the inbox and automations you enable.',
              },
              {
                step: '02',
                title: 'Configure catalog, routing, and guardrails',
                body: 'Define product data, team ownership, working hours, shipment defaults (including registering orders at your post office automatically where enabled), and whether AI assistance is on—globally or per team—so every thread is handled with clear accountability.',
              },
              {
                step: '03',
                title: 'Run, measure, refine',
                body: 'Operate day to day from a single surface, review analytics, and adjust workflows as your business and channel mix evolve.',
              },
            ].map((item) => (
              <li
                key={item.step}
                className="relative flex flex-col rounded-2xl border border-border bg-paper-elevated/90 p-8 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift"
              >
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-paper bg-ink font-mono text-sm font-semibold text-paper shadow-soft">
                  {item.step}
                </span>
                <span
                  className="pointer-events-none absolute right-5 top-5 select-none font-display text-6xl font-semibold leading-none text-ink/[0.06]"
                  aria-hidden
                >
                  {item.step}
                </span>
                <span className="mt-6 font-display text-lg font-semibold text-ink">
                  {item.title}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{item.body}</p>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative bg-paper-elevated">
        <div className="pointer-events-none absolute inset-0 home-section-glow opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
            <div className="flex flex-col rounded-2xl border border-border bg-paper p-8 shadow-soft sm:p-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                Next step
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-[1.65rem] sm:leading-snug">
                See Hillside with your own workflows
              </h2>
              <p className="mt-4 max-w-xl grow text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                We walk through your channels, staffing model, and order path—then
                map what a controlled rollout looks like for your organisation.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-2.5 font-medium text-paper shadow-soft transition-[transform,background-color] hover:-translate-y-px hover:bg-ink-muted"
              >
                Schedule conversation
              </Link>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border-strong bg-ink p-8 text-paper shadow-lift sm:p-10">
              <div
                className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-paper/15 bg-paper/10 text-paper">
                  <IconLock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-paper/55">
                    Private product
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-paper">
                    Custom-built for each company—invitation only.
                  </h3>
                </div>
              </div>
              <p className="relative mt-5 grow text-[15px] leading-relaxed text-paper/72">
                Hillside is not a mass-market, self-serve app. Every deployment is
                tailored to your catalogue, policies, approval chains, and channel
                mix. Access is extended only when we agree there is a fit—and
                accounts are provisioned with our team&apos;s permission after
                alignment on scope, security expectations, and readiness.
              </p>
              <ul className="relative mt-8 space-y-3 border-t border-paper/12 pt-8 font-mono text-[12px] leading-relaxed text-paper/55">
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    —
                  </span>
                  No public signup; onboarding is deliberate and assisted.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    —
                  </span>
                  Workflows, integrations, and AI guardrails shaped to your business—not copied from a template tenant.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-dashed border-border-strong bg-paper/70 px-6 py-8 sm:px-10">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">
              Policies
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Privacy, terms, and data deletion are documented for teams that need
              predictable compliance posture.{' '}
              <Link
                to="/privacy-policy"
                className="font-medium text-ink underline underline-offset-4 hover:text-accent"
              >
                Privacy Policy
              </Link>
              ,{' '}
              <Link
                to="/terms"
                className="font-medium text-ink underline underline-offset-4 hover:text-accent"
              >
                Terms of Service
              </Link>
              , and{' '}
              <Link
                to="/data-deletion"
                className="font-medium text-ink underline underline-offset-4 hover:text-accent"
              >
                Data deletion requests
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
