import { useEffect, useId, useState, useSyncExternalStore } from 'react'

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

/**
 * Decorative hero visual: social channels → AI core → drafted reply.
 * SVG + SMIL animation; swaps to a static schematic when reduced motion is requested.
 */
export function HeroPipelineVisual() {
  const reducedMotion = usePrefersReducedMotion()
  const gid = useId().replace(/:/g, '')
  const glow = `hero-glow-${gid}`
  const grid = `hero-grid-${gid}`
  const motion = !reducedMotion

  return (
    <div
      className="hero-pipeline-shell relative mx-auto w-full max-w-full overflow-hidden rounded-xl border border-[rgb(230_228_221_/_0.14)] bg-[#141413] shadow-[0_0_0_1px_rgb(20_20_19_/_0.06),0_16px_48px_-12px_rgb(20_20_19_/_0.4)] sm:rounded-2xl"
      role="img"
      aria-label="Animated diagram: messages from social channels flow into an AI core and return as replies."
    >
      <div className="pointer-events-none absolute inset-0 hero-pipeline-bg" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-overlay hero-scanlines" />

      <div className="relative px-3 pb-3 pt-3 sm:px-5 sm:pb-4 sm:pt-4">
        <div className="mb-2 flex items-center justify-between gap-2 border-b border-[rgb(250_249_245_/_0.08)] pb-2">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[rgb(212_209_200)] sm:text-[11px]">
            Live routing preview
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-medium text-[rgb(232_210_200)]">
            <span className="relative flex h-1.5 w-1.5">
              {motion ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-55" />
              ) : null}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            In sync
          </span>
        </div>

        <div className="relative mx-auto w-full max-w-full">
          <svg
            className="mx-auto h-auto w-full max-h-[14rem] overflow-visible sm:max-h-[15rem] lg:max-h-[16rem]"
            viewBox="0 0 420 260"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <pattern
                id={grid}
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 24 0 L 0 0 0 24"
                  fill="none"
                  stroke="rgba(230,228,221,0.06)"
                  strokeWidth="0.5"
                />
              </pattern>
              <linearGradient id={`${gid}-wire`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ebe8e1" stopOpacity="0.2" />
                <stop offset="45%" stopColor="#c15a3a" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#f3f2ed" stopOpacity="0.35" />
              </linearGradient>
              <radialGradient id={`${gid}-core`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c15a3a" stopOpacity="0.28" />
                <stop offset="42%" stopColor="#faf9f5" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#141413" stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`${gid}-phase`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c15a3a" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#ebe8e1" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="420" height="260" fill={`url(#${grid})`} opacity="0.6" />

            {/* Wires */}
            <path
              id={`${gid}-p-fb`}
              d="M 52 68 C 118 62 162 108 214 128"
              stroke={`url(#${gid}-wire)`}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className={motion ? 'hero-dash-flow opacity-80' : 'opacity-80'}
            />
            <path
              id={`${gid}-p-ig`}
              d="M 52 132 H 214"
              stroke={`url(#${gid}-wire)`}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className={
                motion ? 'hero-dash-flow hero-dash-delay-1 opacity-80' : 'opacity-80'
              }
            />
            <path
              id={`${gid}-p-wa`}
              d="M 52 196 C 118 204 162 156 214 128"
              stroke={`url(#${gid}-wire)`}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className={
                motion ? 'hero-dash-flow hero-dash-delay-2 opacity-80' : 'opacity-80'
              }
            />
            <path
              d="M 254 128 H 372"
              stroke={`url(#${gid}-phase)`}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeDasharray="5 5"
              className={motion ? 'hero-dash-flow-reverse opacity-70' : 'opacity-70'}
            />

            {/* Inbound packets */}
            {motion ? (
              <>
                <circle r="3.5" fill="#faf9f5" filter={`url(#${glow})`} opacity="0.92">
                  <animateMotion
                    dur="2.9s"
                    repeatCount="indefinite"
                    path="M 52 68 C 118 62 162 108 214 128"
                  />
                </circle>
                <circle r="3" fill="#c15a3a" filter={`url(#${glow})`} opacity="0.92">
                  <animateMotion
                    dur="2.4s"
                    begin="0.4s"
                    repeatCount="indefinite"
                    path="M 52 132 H 214"
                  />
                </circle>
                <circle r="3.5" fill="#d4d1c8" filter={`url(#${glow})`} opacity="0.95">
                  <animateMotion
                    dur="3.2s"
                    begin="0.9s"
                    repeatCount="indefinite"
                    path="M 52 196 C 118 204 162 156 214 128"
                  />
                </circle>
              </>
            ) : (
              <>
                <circle
                  cx="133"
                  cy="95"
                  r="3.5"
                  fill="#faf9f5"
                  filter={`url(#${glow})`}
                  opacity="0.92"
                />
                <circle cx="133" cy="132" r="3" fill="#c15a3a" filter={`url(#${glow})`} opacity="0.92" />
                <circle
                  cx="133"
                  cy="165"
                  r="3.5"
                  fill="#d4d1c8"
                  filter={`url(#${glow})`}
                  opacity="0.95"
                />
              </>
            )}

            {/* Core glow */}
            <circle cx="232" cy="128" r="52" fill={`url(#${gid}-core)`} opacity="0.85" />

            {/* Orbiting hex */}
            <g transform="translate(232 128)" className={motion ? 'hero-orbit' : undefined}>
              <polygon
                points="0,-34 29.4,-17 29.4,17 0,34 -29.4,17 -29.4,-17"
                fill="none"
                stroke="rgba(193,90,58,0.35)"
                strokeWidth="1"
              />
              <polygon
                points="0,-26 22.5,-13 22.5,13 0,26 -22.5,13 -22.5,-13"
                fill="rgba(26,25,23,0.72)"
                stroke="rgba(235,232,225,0.22)"
                strokeWidth="1"
              />
            </g>

            {/* Core nucleus */}
            <circle
              cx="232"
              cy="128"
              r="14"
              fill="#141413"
              stroke="rgba(193,90,58,0.85)"
              strokeWidth="1.5"
              filter={`url(#${glow})`}
              className={motion ? 'hero-core-pulse' : undefined}
            />
            <circle cx="232" cy="128" r="5" fill="#faf9f5" opacity="0.88" />

            {/* Outbound reply burst */}
            {motion ? (
              <circle r="2.8" fill="#e8a090" opacity="0.95">
                <animateMotion
                  dur="2s"
                  begin="0.2s"
                  repeatCount="indefinite"
                  path="M 246 128 H 368"
                />
              </circle>
            ) : (
              <circle cx="310" cy="128" r="2.8" fill="#e8a090" opacity="0.95" />
            )}

            {/* Channel nodes */}
            <g filter={`url(#${glow})`}>
              <rect
                x="18"
                y="54"
                width="56"
                height="28"
                rx="8"
                fill="rgba(26,25,23,0.92)"
                stroke="rgba(235,232,225,0.28)"
              />
              <text
                x="46"
                y="73"
                textAnchor="middle"
                fill="#ebe8e1"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                fontWeight="600"
              >
                Meta
              </text>

              <rect
                x="18"
                y="118"
                width="56"
                height="28"
                rx="8"
                fill="rgba(26,25,23,0.92)"
                stroke="rgba(193,90,58,0.45)"
              />
              <text
                x="46"
                y="137"
                textAnchor="middle"
                fill="#e8cfc6"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                fontWeight="600"
              >
                DM
              </text>

              <rect
                x="18"
                y="182"
                width="56"
                height="28"
                rx="8"
                fill="rgba(26,25,23,0.92)"
                stroke="rgba(212,209,200,0.45)"
              />
              <text
                x="46"
                y="201"
                textAnchor="middle"
                fill="#d4d1c8"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                fontWeight="600"
              >
                Chat
              </text>
            </g>

            {/* Reply capsule */}
            <g>
              <rect
                x="318"
                y="104"
                width="92"
                height="48"
                rx="12"
                fill="rgba(26,25,23,0.94)"
                stroke="rgba(193,90,58,0.42)"
              />
              <text
                x="332"
                y="126"
                fill="#ebe8e1"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
              >
                Draft reply
              </text>
              <rect x="332" y="132" width="64" height="6" rx="3" fill="rgba(250,249,245,0.08)" />
              <rect
                x="332"
                y="132"
                width="28"
                height="6"
                rx="3"
                fill="rgba(193,90,58,0.72)"
                className={motion ? 'hero-reply-bar' : undefined}
              >
                {motion ? (
                  <animate
                    attributeName="width"
                    values="22;56;30;56;22"
                    dur="3.6s"
                    repeatCount="indefinite"
                  />
                ) : null}
              </rect>
            </g>
          </svg>

          <div className="mt-2 space-y-1.5 font-mono text-[10px] leading-relaxed text-[rgb(212_209_200)] sm:text-[11px]">
            <PipelineTicker animated={motion} />
          </div>
        </div>
      </div>
    </div>
  )
}

const PIPELINE_PHASES = [
  {
    key: 'ingest',
    className: 'text-[rgb(235_232_225)]',
    label: '→ ingest',
    detail:
      'Normalize threads · strip noise · attach customer history & catalog signals.',
  },
  {
    key: 'reason',
    className: 'text-[rgb(232_200_188)]',
    label: '→ reason',
    detail:
      'Policy checks · intent routing · tone guardrails · inventory-aware answers.',
  },
  {
    key: 'respond',
    className: 'text-[rgb(212_209_200)]',
    label: '→ respond',
    detail:
      'Draft in your brand voice · human approval · AI optional (off anytime) · one send surface.',
  },
] as const

function PipelineTicker({ animated }: { animated: boolean }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!animated) return
    const id = window.setInterval(() => {
      setPhase((p) => (p + 1) % PIPELINE_PHASES.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [animated])

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
                ? 'h-1 w-6 rounded-full bg-[rgb(250_249_245_/_0.35)] transition-all duration-300'
                : 'h-1 w-1.5 rounded-full bg-[rgb(250_249_245_/_0.12)] transition-all duration-300'
            }
          />
        ))}
      </div>
    </div>
  )
}
