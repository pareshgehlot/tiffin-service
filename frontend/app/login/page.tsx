'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { API_BASE_URL } from '../../lib/config';

type AuthSuccessResponse = {
  user: { role: string; [key: string]: any };
  accessToken: string;
  refreshToken: string;
};

type AuthErrorResponse = {
  message?: string | string[];
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const payload = (await response.json().catch(() => null)) as (AuthSuccessResponse & AuthErrorResponse) | null;

      if (!response.ok || !payload) {
        const message =
          payload?.message && Array.isArray(payload.message)
            ? payload.message.join(', ')
            : typeof payload?.message === 'string'
              ? payload.message
              : 'Unable to sign in. Please verify your credentials and try again.';

        throw new Error(message);
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('tiffin_access_token', payload.accessToken);
        window.localStorage.setItem('tiffin_refresh_token', payload.refreshToken);
        window.localStorage.setItem('tiffin_user', JSON.stringify(payload.user));
      }

      setSuccess('Login successful! Redirecting you to your dashboard...');

      const isAdmin = payload.user.role === 'super-admin' || payload.user.role === 'admin';
      const destination = isAdmin ? '/admin/dashboard/' : '/my-orders/';

      setTimeout(() => {
        router.push(destination);
      }, 600);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to sign in. Please try again later.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Welcome back</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sign in with your email and password to continue.</p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Signing in…' : 'Sign in'}
        </button>

        <div className="space-y-2 pt-2">
          <button type="button" className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm dark:border-slate-700" disabled>
            Continue with Google
          </button>
          <button type="button" className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm dark:border-slate-700" disabled>
            Continue with Apple
          </button>
          <button type="button" className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm dark:border-slate-700" disabled>
            Sign in with OTP
          </button>
        </div>

        {(error || success) && (
          <div className="space-y-2 pt-2 text-sm" aria-live="polite">
            {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-700 dark:border-red-400/50 dark:bg-red-500/10 dark:text-red-200">{error}</p>}
            {success && <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700 dark:border-emerald-400/50 dark:bg-emerald-500/10 dark:text-emerald-200">{success}</p>}
          </div>
        )}
      </form>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        New here?{' '}
        <Link href="/register/" className="text-primary">
          Create an account
        </Link>
      </p>
    </div>
  );
}
