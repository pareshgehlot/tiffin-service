import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Welcome back</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Sign in with email, Google, Apple, or OTP.
      </p>
      <form className="mt-8 space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
        />
        <button type="submit" className="w-full rounded-full bg-primary px-4 py-2 text-white">
          Sign in
        </button>
        <button type="button" className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm dark:border-slate-700">
          Continue with Google
        </button>
        <button type="button" className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm dark:border-slate-700">
          Continue with Apple
        </button>
        <button type="button" className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm dark:border-slate-700">
          Sign in with OTP
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        New here? <Link href="/register" className="text-primary">Create an account</Link>
      </p>
    </div>
  );
}
