"use client";

import { Lock, Mail, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginClient() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-cream">
      {/* Image side */}
      <div className="relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1400&auto=format&fit=crop"
          alt="Coco Delight pastry chef finishing a celebration cake"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-cacao/90 via-cacao/30 to-cacao/10" />

        <div className="relative z-10 h-full flex flex-col justify-between p-12">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl text-cream">
              Coco Delight
            </span>
            <span className="eyebrow text-[0.6rem] mt-1 text-gold">
              Patisserie &amp; Academy
            </span>
          </Link>

          <div className="max-w-md">
            <p className="font-serif text-3xl text-cream leading-snug mb-4">
              &ldquo;The mentorship after graduation mattered as much as the
              classes.&rdquo;
            </p>

            <p className="text-cream/70 text-sm uppercase tracking-[0.1em]">
              Ngozi P. &middot; Academy Graduate
            </p>
          </div>
        </div>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center px-6 py-16 lg:py-0">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="flex flex-col leading-none mb-12 lg:hidden"
          >
            <span className="font-serif text-2xl text-cacao">
              Coco Delight
            </span>
            <span className="eyebrow text-[0.6rem] mt-1">
              Patisserie &amp; Academy
            </span>
          </Link>

          <span className="eyebrow mb-4 block">Welcome Back</span>

          <h1 className="font-serif text-4xl leading-tight mb-3">
            Sign in to your account.
          </h1>

          <p className="text-cacao/65 font-light mb-10">
            Manage orders, track your academy progress, and revisit your saved
            designs.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.1em] text-cacao/60 mb-2"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-cacao/40"
                />

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="w-full bg-transparent border-b border-cacao/25 py-2.5 pl-7 focus:border-gold-dark outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs uppercase tracking-[0.1em] text-cacao/60"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs text-gold-dark hover:underline underline-offset-4"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-cacao/40"
                />

                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent border-b border-cacao/25 py-2.5 pl-7 pr-9 focus:border-gold-dark outline-none transition-colors"
                />

                <button
                  type="button"
                  aria-label="Show password"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-cacao/40 hover:text-cacao/70 transition-colors"
                >
                  <Eye size={17} />
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#3B2417] rounded-sm border border-cacao/30"
              />

              <span className="text-sm text-cacao/70">
                Keep me signed in
              </span>
            </label>

            <button
              type="submit"
              className="btn-primary w-full justify-center !py-4 flex items-center gap-2"
            >
              Sign In
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="flex items-center gap-4 my-9">
            <span className="h-px flex-1 bg-cacao/15" />

            <span className="text-xs uppercase tracking-[0.1em] text-cacao/45">
              or
            </span>

            <span className="h-px flex-1 bg-cacao/15" />
          </div>

          <button
            type="button"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/about",
              })
            }
            className="w-full flex items-center justify-center gap-3 border border-cacao/20 rounded-sm py-3.5 text-sm font-medium hover:bg-beige/60 transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62Z"
              />
              <path
                fill="#34A853"
                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.55-1.84.86-3.06.86-2.36 0-4.36-1.59-5.07-3.74H.9v2.33A9 9 0 0 0 9 18Z"
              />
              <path
                fill="#FBBC05"
                d="M3.93 10.68A5.4 5.4 0 0 1 3.64 9c0-.58.1-1.15.29-1.68V4.99H.9A9 9 0 0 0 0 9c0 1.45.35 2.83.9 4.01l3.03-2.33Z"
              />
              <path
                fill="#EA4335"
                d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8.97 8.97 0 0 0 9 0 9 9 0 0 0 .9 4.99l3.03 2.33C4.64 5.17 6.64 3.58 9 3.58Z"
              />
            </svg>

            Continue with Google
          </button>

          <p className="text-center text-sm text-cacao/65 mt-10">
            New to Coco Delight?{" "}
            <Link
              href="/signup"
              className="text-gold-dark font-medium hover:underline underline-offset-4"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}