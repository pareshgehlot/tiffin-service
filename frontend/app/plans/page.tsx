const plans = [
  { name: 'Daily Delight', price: '$15/day', description: 'Perfect for ad-hoc cravings and busy professionals.' },
  { name: 'Weekly Wellness', price: '$90/week', description: 'Balanced meals every weekday with free delivery.' },
  { name: 'Monthly Masterchef', price: '$340/month', description: '30 meals, priority support, and complimentary desserts.' }
];

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Pricing & Plans</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Mix and match plans for your household. Activate multiple delivery addresses and manage pausing directly from your dashboard.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-2xl font-bold text-primary">{plan.price}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{plan.description}</p>
            <button className="mt-6 w-full rounded-full bg-primary px-4 py-2 text-white">Choose plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}
