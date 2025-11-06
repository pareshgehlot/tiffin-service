'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Bars3Icon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/plans', label: 'Plans' },
  { href: '/order', label: 'Order' },
  { href: '/my-orders', label: 'My Orders' },
  { href: '/checkout', label: 'Checkout' }
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <Link href="/" className="text-lg font-semibold text-primary dark:text-primary">
            Tiffin Service
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-primary underline decoration-2 underline-offset-8'
                  : 'text-slate-600 hover:text-primary dark:text-slate-300'
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin/dashboard"
            className="rounded-full bg-primary px-4 py-2 text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            Admin
          </Link>
          <Link href="/delivery" className="text-sm text-slate-500 hover:text-primary">
            Delivery
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-sm font-medium text-slate-600 hover:text-primary lg:block">
            Login
          </Link>
          <Link
            href="/register"
            className="hidden rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 lg:block"
          >
            Sign up
          </Link>
          <button
            type="button"
            className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? 'font-semibold text-primary'
                    : 'text-slate-600 hover:text-primary dark:text-slate-300'
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/admin/dashboard" className="text-slate-600 hover:text-primary" onClick={() => setOpen(false)}>
              Admin
            </Link>
            <Link href="/delivery" className="text-slate-600 hover:text-primary" onClick={() => setOpen(false)}>
              Delivery
            </Link>
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-center text-sm">
                Login
              </Link>
              <Link href="/register" className="flex-1 rounded-md bg-primary px-3 py-2 text-center text-sm text-white">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
