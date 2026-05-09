import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )
}

const PIPELINE_PHASES = [
  {
    key: 'ingest',
    className: 'text-[rgb(235_232_225)]',
    label: '→ ingest',
    detail:
      'Facebook · Instagram · WhatsApp threads stream into one operator-grade inbox.',
  },
  {
    key: 'vision',
    className: 'text-[rgb(232_200_188)]',
    label: '→ multimodal',
    detail:
      'Incoming photos & catalog tiles get encoded—models reason over pixels + SKUs.',
  },
  {
    key: 'orders',
    className: 'text-[rgb(235_232_225)]',
    label: '→ order radar',
    detail:
      'Purchase signals, SKUs, and totals surface before your team asks for them.',
  },
  {
    key: 'respond',
    className: 'text-[rgb(212_209_200)]',
    label: '→ reply',
    detail:
      'Draft in your voice · human approval · AI optional (off anytime) · one send.',
  },
] as const

type PhaseIndex = 0 | 1 | 2 | 3

function IconFeed({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h11M4 17h14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="18.5" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function IconDmVisual({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="9" cy="11" r="2.2" fill="currentColor" opacity="0.35" />
      <path
        d="M14 14l4-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconChatPhone({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3h8a2 2 0 012 2v14l-4-3H8a2 2 0 01-2-2V5a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 8h6M9 11h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PipelineTicker({
  animated,
  phase,
}: {
  animated: boolean
  phase: PhaseIndex
}) {
  if (!animated) {
    return (
      <div className="rounded-lg border border-[rgb(250_249_245_/_0.08)] bg-[rgb(0_0_0_/_0.22)] px-3 py-2.5">
        <ul className="flex flex-col gap-2 font-mono text-[11px] leading-relaxed sm:text-xs">
          {PIPELINE_PHASES.map((p) => (
            <li key={p.key} className={p.className}>
              <span className="text-[rgb(138_136_132)]">{p.label} </span>
              {p.detail}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const current = PIPELINE_PHASES[phase]

  return (
    <div className="rounded-lg border border-[rgb(250_249_245_/_0.08)] bg-[rgb(0_0_0_/_0.22)] px-3 py-2.5">
      <p
        key={current.key}
        className={`hero-phase-enter font-mono text-[11px] leading-relaxed sm:text-xs ${current.className}`}
      >
        <span className="text-[rgb(138_136_132)]">{current.label} </span>
        {current.detail}
      </p>
      <div className="mt-2 flex gap-1.5" aria-hidden>
        {PIPELINE_PHASES.map((p, i) => (
          <span
            key={p.key}
            className={
              i === phase
                ? 'h-1 w-6 rounded-full bg-[rgb(250_249_245_/_0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
                : 'h-1 w-1.5 rounded-full bg-[rgb(250_249_245_/_0.12)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
            }
          />
        ))}
      </div>
    </div>
  )
}

/**
 * Interactive hero scene: live channels, multimodal processing, order hints, draft replies.
 */
export function HeroPipelineVisual() {
  const reducedMotion = usePrefersReducedMotion()
  const motion = !reducedMotion
  const gid = useId().replace(/:/g, '')
  const glow = `hero-glow-${gid}`
  const grid = `hero-grid-${gid}`

  const shellRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [phase, setPhase] = useState<PhaseIndex>(0)
  const [pulseIdx, setPulseIdx] = useState(0)

  useEffect(() => {
    if (!motion) return
    const id = window.setInterval(() => {
      setPhase((p) => (((p + 1) % 4) as PhaseIndex))
    }, 3400)
    return () => window.clearInterval(id)
  }, [motion])

  useEffect(() => {
    if (!motion || phase !== 0) return
    const id = window.setInterval(() => {
      setPulseIdx((i) => (i + 1) % 3)
    }, 1050)
    return () => window.clearInterval(id)
  }, [motion, phase])

  const onPointerMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!motion || !shellRef.current) return
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const r = shellRef.current!.getBoundingClientRect()
        const px = ((e.clientX - r.left) / r.width - 0.5) * 2
        const py = ((e.clientY - r.top) / r.height - 0.5) * 2
        setTilt({ rx: py * -5, ry: px * 6 })
      })
    },
    [motion],
  )

  const onPointerLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 })
  }, [])

  const parallaxStyle =
    motion && (tilt.rx !== 0 || tilt.ry !== 0)
      ? {
          transform: `perspective(960px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }
      : undefined

  const channels = [
    {
      label: 'Facebook',
      sub: 'Feed & ads',
      Icon: IconFeed,
      pillClass: 'border-[#3d6fd6]/45 bg-[#2b52a3]/25 text-[#dbe8ff]',
      iconDelay: '',
    },
    {
      label: 'Instagram',
      sub: 'DMs · visuals',
      Icon: IconDmVisual,
      pillClass: 'border-[#c97aa8]/45 bg-[#6d2d4f]/28 text-[#fce3f0]',
      iconDelay: 'hero-social-float-delay-1',
    },
    {
      label: 'WhatsApp',
      sub: 'Business chat',
      Icon: IconChatPhone,
      pillClass: 'border-[#35b878]/45 bg-[#13492e]/30 text-[#d6ffe9]',
      iconDelay: 'hero-social-float-delay-2',
    },
  ] as const

  return (
    <div
      ref={shellRef}
      role="img"
      aria-label="Interactive preview: messages from social apps flow into an AI core that reads images, detects orders, and drafts replies."
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
      className="hero-pipeline-shell relative mx-auto w-full max-w-full cursor-default overflow-hidden rounded-xl border border-[rgb(230_228_221_/_0.14)] bg-[#141413] shadow-[0_0_0_1px_rgb(20_20_19_/_0.06),0_16px_48px_-12px_rgb(20_20_19_/_0.4)] sm:rounded-2xl"
    >
      <div className="pointer-events-none absolute inset-0 hero-pipeline-bg" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-overlay hero-scanlines" />

      <div className="relative px-3 pb-3 pt-3 sm:px-5 sm:pb-4 sm:pt-4">
        <div className="mb-2 flex items-center justify-between gap-2 border-b border-[rgb(250_249_245_/_0.08)] pb-2">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[rgb(212_209_200)] sm:text-[11px]">
            Live control room
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-medium text-[rgb(232_210_200)]">
            <span className="relative flex h-1.5 w-1.5">
              {motion ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-55 motion-reduce:animate-none" />
              ) : null}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Interactive preview
          </span>
        </div>

        <div
          className="relative mx-auto min-h-[240px] w-full overflow-hidden rounded-lg sm:min-h-[260px] lg:min-h-[272px] motion-reduce:!transform-none motion-reduce:!transition-none"
          style={{
            ...parallaxStyle,
            transition: motion ? 'transform 120ms ease-out' : undefined,
          }}
        >
          {/* Wire mesh background */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.38]"
            viewBox="0 0 440 260"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <filter
                id={glow}
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <pattern
                id={grid}
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 22 0 L 0 0 0 22"
                  fill="none"
                  stroke="rgba(230,228,221,0.05)"
                  strokeWidth="0.5"
                />
              </pattern>
              <linearGradient id={`${gid}-wire`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ebe8e1" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#c15a3a" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#f3f2ed" stopOpacity="0.28" />
              </linearGradient>
            </defs>
            <rect width="440" height="260" fill={`url(#${grid})`} opacity="0.55" />
            <path
              d="M 108 52 C 175 48 210 95 248 118"
              stroke={`url(#${gid}-wire)`}
              strokeWidth="1.2"
              strokeDasharray="5 6"
              strokeLinecap="round"
              className={motion ? 'hero-dash-flow opacity-70' : 'opacity-70'}
            />
            <path
              d="M 108 128 H 248"
              stroke={`url(#${gid}-wire)`}
              strokeWidth="1.2"
              strokeDasharray="5 6"
              strokeLinecap="round"
              className={
                motion ? 'hero-dash-flow hero-dash-delay-1 opacity-70' : 'opacity-70'
              }
            />
            <path
              d="M 108 206 C 178 212 212 148 248 118"
              stroke={`url(#${gid}-wire)`}
              strokeWidth="1.2"
              strokeDasharray="5 6"
              strokeLinecap="round"
              className={
                motion ? 'hero-dash-flow hero-dash-delay-2 opacity-70' : 'opacity-70'
              }
            />
            <path
              d="M 292 118 H 396"
              stroke={`url(#${gid}-wire)`}
              strokeWidth="1.2"
              strokeDasharray="4 5"
              strokeLinecap="round"
              className={motion ? 'hero-dash-flow-reverse opacity-55' : 'opacity-55'}
            />
            {motion ? (
              <>
                <circle r="3.2" fill="#faf9f5" filter={`url(#${glow})`} opacity="0.9">
                  <animateMotion
                    dur="2.8s"
                    repeatCount="indefinite"
                    path="M 108 52 C 175 48 210 95 248 118"
                  />
                </circle>
                <circle r="2.8" fill="#c15a3a" filter={`url(#${glow})`} opacity="0.92">
                  <animateMotion
                    dur="2.3s"
                    begin="0.35s"
                    repeatCount="indefinite"
                    path="M 108 128 H 248"
                  />
                </circle>
                <circle r="3.2" fill="#d4d1c8" filter={`url(#${glow})`} opacity="0.92">
                  <animateMotion
                    dur="3s"
                    begin="0.75s"
                    repeatCount="indefinite"
                    path="M 108 206 C 178 212 212 148 248 118"
                  />
                </circle>
                <circle r="2.6" fill="#e8a090" opacity="0.95">
                  <animateMotion
                    dur="1.85s"
                    begin="0.15s"
                    repeatCount="indefinite"
                    path="M 264 118 H 392"
                  />
                </circle>
              </>
            ) : null}
          </svg>

          {/* Social column */}
          <div className="absolute left-[3%] top-[10%] z-10 flex w-[26%] max-w-[7.25rem] flex-col gap-3 sm:gap-4">
            {channels.map((ch, i) => {
              const Icon = ch.Icon
              const emphasize =
                phase === 0 && pulseIdx === i ? 'ring-2 ring-accent/55 shadow-[0_0_24px_-4px_rgb(193_90_58_/_0.55)]' : ''
              const phaseLift =
                phase === 1 && i === 1 ? 'ring-2 ring-[#f9a8d4]/35' : ''
              return (
                <div
                  key={ch.label}
                  className={[
                    'flex items-center gap-2 rounded-xl border px-2 py-2 shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.06)] backdrop-blur-[1px] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-2.5 sm:px-2.5 sm:py-2.5',
                    ch.pillClass,
                    emphasize,
                    phaseLift,
                    motion ? `hero-social-float ${ch.iconDelay}` : '',
                  ].join(' ')}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/35 text-[rgb(250_249_245)]">
                    <Icon className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" />
                  </div>
                  <div className="min-w-0 leading-tight">
                    <p className="truncate font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-[rgb(250_249_245_/_0.92)] sm:text-[10px]">
                      {ch.label}
                    </p>
                    <p className="truncate font-mono text-[8px] text-[rgb(250_249_245_/_0.45)] sm:text-[9px]">
                      {ch.sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* AI core */}
          <div className="absolute left-1/2 top-[46%] z-10 w-[46%] max-w-[13.5rem] -translate-x-1/2 -translate-y-1/2 sm:top-[48%] sm:max-w-[14.5rem]">
            <div
              className={[
                'relative mx-auto rounded-2xl border border-[rgb(250_249_245_/_0.12)] bg-[rgb(10_10_10_/_0.65)] p-3 shadow-[0_0_0_1px_rgb(193_90_58_/_0.12)_inset] backdrop-blur-md sm:p-3.5',
                phase === 1 ? 'ring-1 ring-accent/35' : '',
                phase === 2 ? 'ring-1 ring-emerald-400/25' : '',
              ].join(' ')}
            >
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-accent/12 blur-3xl hero-scene-glow-pulse opacity-60" aria-hidden />
              <div className="relative flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[rgb(250_249_245_/_0.45)] sm:text-[9px]">
                    Hillside AI core
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold leading-none text-[rgb(250_249_245_/_0.92)] sm:text-[0.95rem]">
                    Multimodal + orders
                  </p>
                </div>
                <div
                  className={[
                    'relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgb(250_249_245_/_0.1)] bg-black/40',
                    motion ? 'hero-orbit-icons text-accent/90' : 'text-accent/80',
                  ].join(' ')}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      opacity="0.35"
                    />
                    <path
                      d="M12 7v10M7 12h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
                {[0, 1, 2].map((slot) => (
                  <div
                    key={slot}
                    className={[
                      'relative aspect-square overflow-hidden rounded-lg border border-[rgb(250_249_245_/_0.08)] bg-gradient-to-br shadow-inner',
                      slot === 0
                        ? 'from-violet-500/35 via-accent/25 to-paper/5'
                        : slot === 1
                          ? 'from-emerald-500/25 via-paper/8 to-black/40'
                          : 'from-amber-400/20 via-paper/6 to-black/35',
                    ].join(' ')}
                  >
                    {motion && phase === 1 ? (
                      <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="hero-scan-line absolute inset-x-0 top-0 h-[42%] w-full opacity-90" />
                      </div>
                    ) : null}
                    <span className="absolute bottom-1 left-1 font-mono text-[7px] uppercase tracking-wider text-paper/35">
                      {slot === 0 ? 'IMG' : slot === 1 ? 'SKU' : 'CTX'}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={[
                  'mt-3 overflow-hidden rounded-lg border border-emerald-400/15 bg-emerald-500/10 px-2 py-1.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  phase === 2
                    ? 'max-h-14 translate-y-0 opacity-100'
                    : 'max-h-0 translate-y-1 border-transparent bg-transparent py-0 opacity-0',
                ].join(' ')}
              >
                <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-emerald-200/90 sm:text-[9px]">
                  Order signal detected
                </p>
                <p className="mt-0.5 font-mono text-[9px] text-emerald-100/75 sm:text-[10px]">
                  2× SKU · €58 · ship tomorrow
                </p>
              </div>
            </div>
          </div>

          {/* Reply column */}
          <div className="absolute right-[3%] top-[28%] z-10 w-[34%] max-w-[10.5rem] sm:top-[26%]">
            <div
              className={[
                'rounded-2xl border border-[rgb(250_249_245_/_0.1)] bg-[rgb(12_12_12_/_0.72)] p-2.5 shadow-[0_12px_40px_-16px_rgb(0_0_0_/_0.65)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-3',
                phase === 3 ? 'border-accent/35 shadow-[0_0_36px_-10px_rgb(193_90_58_/_0.35)]' : '',
              ].join(' ')}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-[rgb(250_249_245_/_0.38)] sm:text-[9px]">
                  Draft reply
                </p>
                <span className="rounded-full bg-accent/20 px-2 py-0.5 font-mono text-[7px] font-medium uppercase tracking-wide text-[rgb(255_232_220)] sm:text-[8px]">
                  Human approval
                </span>
              </div>
              <div className="mt-2 flex gap-1">
                <span className="hero-typing-dot h-1.5 w-1.5 rounded-full bg-[rgb(250_249_245_/_0.45)]" />
                <span className="hero-typing-dot h-1.5 w-1.5 rounded-full bg-[rgb(250_249_245_/_0.45)]" />
                <span className="hero-typing-dot h-1.5 w-1.5 rounded-full bg-[rgb(250_249_245_/_0.45)]" />
              </div>
              <p
                className={[
                  'mt-2 font-mono text-[9px] leading-relaxed text-[rgb(250_249_245_/_0.72)] transition-opacity duration-500 sm:text-[10px]',
                  phase === 3 ? 'opacity-100' : 'opacity-45',
                ].join(' ')}
              >
                Thanks for your order—we&apos;ll confirm tracking within the hour.
              </p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-[rgb(250_249_245_/_0.08)]">
                <div
                  className={[
                    'h-full rounded-full bg-accent/75 transition-[width] duration-700 ease-out',
                    phase === 3 ? 'w-[82%]' : 'w-[28%]',
                  ].join(' ')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 space-y-1.5 font-mono text-[10px] leading-relaxed text-[rgb(212_209_200)] sm:text-[11px]">
          <PipelineTicker animated={motion} phase={phase} />
        </div>
      </div>
    </div>
  )
}
