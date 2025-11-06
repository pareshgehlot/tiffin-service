export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Create an Account</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Set up your customer profile or request delivery partner access.</p>
      <form className="mt-8 grid gap-4 md:grid-cols-2">
        <input type="text" placeholder="First name" className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        <input type="text" placeholder="Last name" className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        <input type="email" placeholder="Email" className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 md:col-span-2" />
        <input type="tel" placeholder="Phone (for OTP)" className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        <select className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
          <option>Customer</option>
          <option>Delivery Partner</option>
        </select>
        <input type="password" placeholder="Password" className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        <textarea
          rows={3}
          placeholder="Dietary preferences, allergies, or delivery notes"
          className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 md:col-span-2"
        />
        <button type="submit" className="rounded-full bg-primary px-6 py-3 text-white md:col-span-2">
          Create account
        </button>
      </form>
    </div>
  );
}
