import type { ReactNode } from 'react'

type Props = {
  title: string
  intro?: ReactNode
  children: ReactNode
}

export function LegalPage({ title, intro, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {intro ? (
        <div className="mt-6 text-sm leading-relaxed text-ink-muted">{intro}</div>
      ) : null}
      <div className="legal-prose mt-10 space-y-8 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
    </article>
  )
}
