import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/"},
    { label: "Issues", href: "/issues"}
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'>logo</Link>
        <ul key="nav-list" className='flex space-x-6'>
        {links.map((link) => (
            <li><Link key={link.href} className="text-zinc-500 hover:text-zinc-800" href={link.href}>{link.label}</Link></li>
        ))}
        </ul>
    </nav>
  )
}

export default NavBar