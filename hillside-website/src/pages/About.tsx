export function About() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        About Hillside
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-muted">
        Hillside L.L.C. builds cloud software for businesses that depend on
        social messaging to sell, support, and coordinate with customers. We are
        a small, product-led company based in{' '}
        <strong className="font-medium text-ink">Pristina, Kosovo</strong>
        —chosen for practical reasons of talent and operations, not as a
        marketing backdrop. Our focus is reliability, clarity of process, and
        respectful handling of the data entrusted to us.
      </p>
      <h2 className="mt-14 font-display text-xl font-semibold text-ink">
        Mission
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
        To give businesses a calm, well-structured place to run conversations
        across Meta channels—where AI reduces friction without eroding judgment,
        and where orders and customer history stay traceable from first message
        to resolution.
      </p>
      <h2 className="mt-14 font-display text-xl font-semibold text-ink">
        Trust and data
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
        We treat customer and end-user data as a serious obligation. Access is
        limited by role; infrastructure choices favour encryption in transit and
        at rest where applicable; and we document our practices in plain English
        in our legal notices. For specifics—including retention, subprocessors,
        international transfers where relevant, and your rights—please refer to
        the Privacy Policy and Terms of Service. For privacy questions or
        requests, contact{' '}
        <a
          href="mailto:privacy@byhillside.com"
          className="font-medium text-ink underline underline-offset-4 hover:text-accent"
        >
          privacy@byhillside.com
        </a>
        .
      </p>
    </article>
  )
}
