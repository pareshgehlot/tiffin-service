const assignments = [
  { id: 'ORD-1023', customer: 'Ananya Sharma', address: '120 Bay St, Toronto', status: 'Accepted' },
  { id: 'ORD-1019', customer: 'Mark Patel', address: '55 Lakeshore Blvd, Mississauga', status: 'Out for Delivery' }
];

export default function DeliveryPartnerPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Delivery Partner Portal</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">View assigned orders, launch navigation, and capture proof of delivery.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-wide text-slate-500">{assignment.id}</p>
              <h2 className="text-xl font-semibold">{assignment.customer}</h2>
              <p className="mt-1 text-sm text-slate-500">{assignment.address}</p>
              <p className="mt-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {assignment.status}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-full border border-primary px-4 py-2 text-sm text-primary">Open Route</button>
                <button className="rounded-full bg-primary px-4 py-2 text-sm text-white">Mark Delivered</button>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">Delivery Checklist</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>• Confirm order items and packaging</li>
            <li>• Start navigation with Google Maps</li>
            <li>• Capture signature/photo on delivery</li>
            <li>• Send automated SMS confirmation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
