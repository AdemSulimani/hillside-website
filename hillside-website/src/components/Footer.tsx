import { Link } from 'react-router-dom'

const link =
  'text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline'

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper-elevated">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-sm font-semibold text-ink">
              Hillside L.L.C.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Cloud software for unified social messaging, AI-assisted
              responses, and order workflow automation for businesses.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">
              Legal
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link to="/privacy-policy" className={link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className={link}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/data-deletion" className={link}>
                  Data deletion requests
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-ink-faint">
          © {new Date().getFullYear()} Hillside L.L.C. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
