import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from './LogoMark'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm font-medium transition-colors',
    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
  ].join(' ')

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-ink no-underline"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="font-display text-[15px] font-semibold tracking-tight sm:text-base">
            Hillside
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-paper text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-paper px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile primary">
            <NavLink
              to="/"
              end
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
