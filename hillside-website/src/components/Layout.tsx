import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-paper">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
