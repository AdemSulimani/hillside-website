import { Link } from 'react-router-dom'

export function Contact() {
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
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.65rem] sm:leading-tight">
            Reach the Hillside team
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            For sales, onboarding, account matters, and technical support, use the
            channels below. We aim to respond within one business day for routine
            enquiries; security-sensitive reports are triaged with priority.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-elevated">
        <div className="pointer-events-none absolute inset-0 home-section-glow opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-border bg-paper p-8 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift sm:p-9">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                Privacy &amp; data protection
              </p>
              <a
                href="mailto:privacy@byhillside.com"
                className="mt-4 break-all text-lg font-semibold text-ink underline underline-offset-4 hover:text-accent sm:text-xl"
              >
                privacy@byhillside.com
              </a>
              <p className="mt-3 grow text-sm leading-relaxed text-ink-muted">
                Privacy notices, data subject requests, subprocessors, and
                regulatory correspondence.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-paper p-8 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift sm:p-9">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                Technical &amp; account support
              </p>
              <a
                href="mailto:support@byhillside.com"
                className="mt-4 break-all text-lg font-semibold text-ink underline underline-offset-4 hover:text-accent sm:text-xl"
              >
                support@byhillside.com
              </a>
              <p className="mt-3 grow text-sm leading-relaxed text-ink-muted">
                Product access, billing, integrations, and day-to-day operational
                questions.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-paper p-8 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift sm:p-9">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                Phone
              </p>
              <a
                href="tel:+38343808150"
                className="mt-4 inline-flex w-fit items-center rounded-full border border-border-strong bg-paper-elevated px-5 py-2 font-display text-lg font-semibold text-ink transition-colors hover:border-accent/35 hover:text-accent"
              >
                043 808 150
              </a>
              <p className="mt-4 text-sm text-ink-muted">
                Best for time-sensitive operational questions during business
                hours.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-paper p-8 shadow-soft sm:p-9">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                Mailing address
              </p>
              <address className="mt-4 not-italic font-display text-base font-medium leading-relaxed text-ink sm:text-lg">
                Hillside L.L.C.
                <br />
                St. Ndue Përlleshi, 207, Floor 2, No. 8
                <br />
                Matiçan, Pristina
                <br />
                Kosovo
              </address>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                Formal notices and postal correspondence only—operational support
                is fastest by email or phone.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-border-strong bg-paper/80 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-10">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                New relationship
              </p>
              <p className="mt-2 max-w-xl font-display text-lg font-semibold text-ink">
                Exploring Hillside for your channels?
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                We onboard selectively. Share context about your catalogue volume,
                staffing model, and timeline—we will reply with next steps.
              </p>
            </div>
            <Link
              to="/"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-6 py-2.5 font-medium text-paper shadow-soft transition-[transform,background-color] hover:-translate-y-px hover:bg-ink-muted sm:mt-0"
            >
              Back to overview
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
