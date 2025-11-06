import Link from 'next/link';

const features = [
  {
    title: 'Flexible Plans',
    description: 'Choose from daily, weekly, or monthly subscriptions tailored to your appetite.'
  },
  {
    title: 'Chef-crafted Menus',
    description: 'Rotating dishes crafted by local chefs with vegetarian, vegan, and Jain options.'
  },
  {
    title: 'Real-time Tracking',
    description: 'Track your order, chat with drivers, and receive updates via SMS or email.'
  }
];

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white via-orange-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Fresh meals, every day
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Personalized tiffin plans delivered on your schedule.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Discover curated weekly menus, manage your dietary preferences, and enjoy doorstep delivery throughout the GTA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="rounded-full bg-primary px-6 py-3 text-white shadow-lg shadow-primary/30" href="/menu">
                Explore Menu
              </Link>
              <Link className="rounded-full border border-primary px-6 py-3 text-primary" href="/plans">
                View Plans
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <div className="grid gap-4 p-6">
                <div className="rounded-2xl bg-orange-100 p-6 text-orange-900">
                  <h3 className="text-lg font-semibold">Today&apos;s Special</h3>
                  <p className="mt-2 text-sm">
                    Punjabi Paneer Bowl • Millet Roti • Cucumber Mint Raita • Gulab Jamun
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-500">
                    High protein
                  </span>
                </div>
                <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-500">This Week</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Monday: Gujarati Comfort</li>
                    <li>• Wednesday: Vegan Mediterranean</li>
                    <li>• Friday: Keto Thai Fusion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-semibold">Ready to taste the difference?</h2>
            <p className="mt-2 text-sm text-slate-300">Sign up in minutes and schedule your first delivery for tomorrow.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/register" className="rounded-full bg-white px-6 py-3 text-slate-900">
              Create Account
            </Link>
            <Link href="/login" className="rounded-full border border-white px-6 py-3 text-white">
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
