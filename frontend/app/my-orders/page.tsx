const orders = [
  { id: 'ORD-1023', status: 'Out for delivery', eta: '12:45 PM', items: 5 },
  { id: 'ORD-1019', status: 'Delivered', eta: 'Yesterday', items: 3 },
  { id: 'ORD-1014', status: 'Cancelled', eta: '-', items: 2 }
];

export default function MyOrdersPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold">My Orders</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Track active orders, reorder previous meals, or manage modifications.</p>
      <div className="mt-8 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between dark:border-slate-700 dark:bg-slate-900">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Order</p>
              <p className="text-lg font-semibold">{order.id}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Status</p>
              <p className="text-sm font-medium text-primary">{order.status}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">ETA</p>
              <p className="text-sm">{order.eta}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Items</p>
              <p className="text-sm">{order.items}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-primary px-4 py-2 text-sm text-primary">View</button>
              <button className="rounded-full bg-primary px-4 py-2 text-sm text-white">Reorder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
