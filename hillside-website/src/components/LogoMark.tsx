import logomark from '../assets/Logomark (2).png'

type Props = { className?: string }

/** Hillside logomark (PNG from brand assets) */
export function LogoMark({ className = '' }: Props) {
  return (
    <img
      src={logomark}
      alt=""
      width={32}
      height={32}
      decoding="async"
      className={`h-8 w-8 shrink-0 object-contain ${className}`.trim()}
      aria-hidden
    />
  )
}
