import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-8xl font-semibold text-cloud">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-cloud">
        Looks like this page went offline.
      </h1>
      <p className="mt-2 max-w-sm text-sm text-mist">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cloud px-7 py-3 text-sm font-semibold text-midnight transition-transform hover:scale-105"
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
