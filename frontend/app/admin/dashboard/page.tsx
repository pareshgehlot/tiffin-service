const analytics = [
  { label: 'Daily Sales', value: '$1,840', trend: '+12%' },
  { label: 'Active Orders', value: '128', trend: '+5%' },
  { label: 'Delivery SLA', value: '94%', trend: '+3%' },
  { label: 'Customer Retention', value: '87%', trend: '+8%' }
];

export default function AdminDashboardPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="mt-2 text-slate-400">Manage menus, monitor live orders, configure API keys, and review analytics.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {analytics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
              <p className="text-xs text-emerald-400">{item.trend} vs last week</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Live Orders</h2>
            <p className="mt-2 text-sm text-slate-400">Integrate Google Maps to view driver locations and optimize routes.</p>
            <div className="mt-4 h-64 rounded-xl bg-slate-950/60"></div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Configuration</h2>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              <li>• Payment gateways: Stripe (live), Interac (manual confirmation)</li>
              <li>• Notifications: Twilio SMS + SendGrid email templates</li>
              <li>• Integrations: Google Maps, Cloudinary, Firebase push</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
