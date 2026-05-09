import { Link } from 'react-router-dom'

export function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-paper">
        <div className="pointer-events-none absolute inset-0 opacity-[0.45]" aria-hidden>
          <div className="absolute -left-20 top-0 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-paper-deep/90 via-transparent to-transparent blur-3xl" />
          <div className="absolute -right-24 top-20 h-[320px] w-[400px] rounded-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent blur-3xl" />
        </div>
        <div className="hero-site-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
            Company
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.65rem] sm:leading-tight">
            About Hillside
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            Hillside L.L.C. builds cloud software for businesses that depend on
            social messaging to sell, support, and coordinate with customers. We are
            a small, product-led company based in{' '}
            <strong className="font-medium text-ink">Pristina, Kosovo</strong>
            —chosen for practical reasons of talent and operations, not as a
            marketing backdrop. Our focus is reliability, clarity of process, and
            respectful handling of the data entrusted to us.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-2.5 font-medium text-paper shadow-soft transition-[transform,background-color] hover:-translate-y-px hover:bg-ink-muted"
          >
            Talk to the team
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border bg-paper-elevated">
        <div className="pointer-events-none absolute inset-0 home-section-glow opacity-85" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-2xl border border-border bg-paper p-8 shadow-soft sm:p-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                Mission
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Calm operations, traceable outcomes
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
                To give businesses a well-structured place to run conversations
                across Meta channels—where AI reduces friction without eroding
                judgment (and can be turned off entirely when you want a purely
                manual workflow), and where orders and customer history stay
                traceable from first message to resolution.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-8 shadow-soft sm:p-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                Trust and data
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Obligation, not optics
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
                We treat customer and end-user data as a serious obligation.
                Access is limited by role; infrastructure choices favour
                encryption in transit and at rest where applicable; and we
                document our practices in plain English in our legal notices. For
                specifics—including retention, subprocessors, international
                transfers where relevant, and your rights—please refer to the{' '}
                <Link
                  to="/privacy-policy"
                  className="font-medium text-ink underline underline-offset-4 hover:text-accent"
                >
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                  to="/terms"
                  className="font-medium text-ink underline underline-offset-4 hover:text-accent"
                >
                  Terms of Service
                </Link>
                . For privacy questions or requests, contact{' '}
                <a
                  href="mailto:privacy@byhillside.com"
                  className="font-medium text-ink underline underline-offset-4 hover:text-accent"
                >
                  privacy@byhillside.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
