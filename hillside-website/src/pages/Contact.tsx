export function Contact() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Contact
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-muted">
        For sales, onboarding, account matters, and technical support, reach the
        team at the addresses below. We aim to respond in one business day for
        routine enquiries; security-sensitive reports are triaged with priority.
      </p>

      <dl className="mt-12 space-y-10 border-t border-border pt-12">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-ink-faint">
            Privacy &amp; data protection
          </dt>
          <dd className="mt-2">
            <a
              href="mailto:privacy@byhillside.com"
              className="text-base font-medium text-ink underline underline-offset-4 hover:text-accent"
            >
              privacy@byhillside.com
            </a>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Privacy notices, data subject requests, subprocessors, and
              regulatory correspondence.
            </p>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-ink-faint">
            Technical &amp; account support
          </dt>
          <dd className="mt-2">
            <a
              href="mailto:support@byhillside.com"
              className="text-base font-medium text-ink underline underline-offset-4 hover:text-accent"
            >
              support@byhillside.com
            </a>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Product access, billing, integrations, and day-to-day operational
              questions.
            </p>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-ink-faint">
            Phone
          </dt>
          <dd className="mt-2 text-sm text-ink-muted">
            <a
              href="tel:+38343808150"
              className="font-medium text-ink underline underline-offset-4 hover:text-accent"
            >
              043 808 150
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-ink-faint">
            Mailing address
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
            Hillside L.L.C.
            <br />
            St. Ndue Përlleshi, 207, Floor 2, No. 8
            <br />
            Matiçan, Pristina
            <br />
            Kosovo
          </dd>
        </div>
      </dl>
    </article>
  )
}
