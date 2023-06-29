import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="navbar_text"
    >
      {children}
    </Link>
  )
}