import Link from 'next/link';

const footerLinks = [
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Support', links: ['Help Center', 'Pricing', 'FAQ'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Refunds'] }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-primary">Tiffin Service</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Wholesome meals delivered to your doorstep across the GTA. Choose your plan, track deliveries, and enjoy fresh food.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
              {section.title}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {section.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} Tiffin Service. All rights reserved.
      </div>
    </footer>
  );
}
