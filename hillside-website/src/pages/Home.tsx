import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

function BenefitCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-border bg-paper p-8 shadow-soft">
      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{children}</p>
    </div>
  )
}

export function Home() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
            Hillside L.L.C. · Kosovo
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-[1.08] lg:text-[2.75rem] lg:leading-[1.1]">
            One inbox for social messages, orders, and AI-assisted replies—built
            for how businesses actually work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            Hillside is a cloud platform that brings Facebook, Instagram, and
            WhatsApp Business into a single workflow: triage conversations,
            accelerate responses with AI, automate orders from catalog to
            fulfilment, and measure outcomes with clear analytics.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-paper-elevated">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Built for operators and decision-makers
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              Reduce context switching, shorten response times, and keep revenue
              and support conversations aligned—without noisy gimmicks or
              unnecessary complexity.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard title="AI that assists, not replaces">
              Draft and refine replies from a unified thread view. Your team
              stays in control of tone, policy, and final send—while repetitive
              work gets lighter.
            </BenefitCard>
            <BenefitCard title="Meta channels, one operating picture">
              Facebook, Instagram, and WhatsApp Business conversations flow into
              the same inbox and routing logic your staff already rely on.
            </BenefitCard>
            <BenefitCard title="Orders from message to fulfilment">
              Connect catalog, pricing, and workflow steps so common purchase
              paths can be confirmed, documented, and handed off consistently.
            </BenefitCard>
            <BenefitCard title="Catalog and inventory context where it matters">
              Surface the right product details alongside the conversation so
              agents and automations speak from a single source of truth.
            </BenefitCard>
            <BenefitCard title="Analytics you can explain in a meeting">
              Volume, response times, conversion-oriented milestones, and channel
              mix—presented plainly for leadership review.
            </BenefitCard>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            How it works
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
            A straightforward path from connection to steady-state operations.
          </p>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                step: '1',
                title: 'Connect channels securely',
                body: 'Link your Meta business assets and WhatsApp Business presence with permissions scoped to what Hillside needs to operate the inbox and automations you enable.',
              },
              {
                step: '2',
                title: 'Configure catalog, routing, and guardrails',
                body: 'Define product data, team ownership, working hours, and AI assistance rules so every thread is handled with clear accountability.',
              },
              {
                step: '3',
                title: 'Run, measure, refine',
                body: 'Operate day to day from a single surface, review analytics, and adjust workflows as your business and channel mix evolve.',
              },
            ].map((item) => (
              <li key={item.step} className="relative flex flex-col">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  Step {item.step}
                </span>
                <span className="mt-3 font-display text-lg font-semibold text-ink">
                  {item.title}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-elevated">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="rounded-2xl border border-border bg-paper p-8 shadow-soft sm:p-10">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              See Hillside with your own workflows
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
              We will walk through your channels, staffing model, and order
              path—and map what a controlled rollout would look like.
            </p>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">
              Policies
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Privacy, terms, and data deletion are documented for teams that
              need predictable compliance posture.{' '}
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
