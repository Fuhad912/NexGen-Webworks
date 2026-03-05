import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'

const navLinkClass = ({ isActive }) =>
  `relative pb-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
    isActive
      ? 'text-white after:scale-x-100'
      : 'text-neutral-400 hover:text-white after:scale-x-0 hover:after:scale-x-100'
  } after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-white after:transition-transform`

const contactClass =
  'relative pb-1 text-sm font-medium text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const contactHref = isHome ? '#contact' : `mailto:${profile.contact.email}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <a href={contactHref} className={contactClass}>
            Contact
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-neutral-600 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-200 transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-neutral-800 bg-neutral-950 px-4 transition-all duration-200 md:hidden ${
          menuOpen
            ? 'max-h-64 translate-y-0 py-4 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-2 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4">
          <NavLink
            to="/"
            end
            className="text-sm font-medium text-neutral-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink to="/projects" className="text-sm font-medium text-neutral-100" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <a href={contactHref} className="text-sm font-medium text-neutral-100" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
