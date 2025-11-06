export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Select your payment method. Stripe, Interac e-transfer, or cash on delivery—toggle in the admin portal.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">Payment Options</h2>
          <label className="flex items-center gap-3">
            <input type="radio" name="payment" defaultChecked />
            <span className="text-sm">Credit/Debit Card (Stripe)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="payment" />
            <span className="text-sm">Interac e-Transfer</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="payment" />
            <span className="text-sm">Cash on Delivery</span>
          </label>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p className="flex justify-between">
              <span>Weekly Wellness Plan</span>
              <span>$90.00</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery (5 days)</span>
              <span>$10.00</span>
            </p>
            <p className="flex justify-between text-primary">
              <span>Referral discount</span>
              <span>- $5.00</span>
            </p>
            <hr className="border-slate-200 dark:border-slate-700" />
            <p className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>$95.00</span>
            </p>
          </div>
          <button className="mt-6 w-full rounded-full bg-primary px-4 py-2 text-white">Confirm & Pay</button>
        </div>
      </div>
    </div>
  );
}
