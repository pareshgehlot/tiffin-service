import Link from 'next/link';

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Create an Order</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Select your tiffin plan, delivery preference, and schedule your first drop-off.</p>
      <form className="mt-10 space-y-6">
        <div>
          <label className="block text-sm font-medium">Preferred Plan</label>
          <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
            <option>Daily Delight</option>
            <option>Weekly Wellness</option>
            <option>Monthly Masterchef</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Delivery Method</label>
          <div className="mt-3 flex gap-4">
            <label className="flex flex-1 items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <span>
                <span className="block font-semibold">Home Delivery</span>
                <span className="text-sm text-slate-500">$2 per drop</span>
              </span>
              <input type="radio" name="delivery" defaultChecked />
            </label>
            <label className="flex flex-1 items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <span>
                <span className="block font-semibold">Pickup</span>
                <span className="text-sm text-slate-500">Collect from nearest kitchen</span>
              </span>
              <input type="radio" name="delivery" />
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Delivery Slot</label>
          <input
            type="datetime-local"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Special Instructions</label>
          <textarea
            rows={3}
            placeholder="Ring the bell twice, leave at concierge, etc."
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div className="flex items-center justify-between">
          <Link href="/checkout/" className="rounded-full border border-primary px-5 py-2 text-primary">
            Save & Continue Later
          </Link>
          <button type="submit" className="rounded-full bg-primary px-6 py-3 text-white">
            Proceed to Checkout
          </button>
        </div>
      </form>
    </div>
  );
}
