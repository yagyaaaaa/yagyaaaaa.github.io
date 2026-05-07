import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-[#6366f1] text-sm font-mono mb-4">404</p>
      <h1 className="text-3xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-[#888] mb-8 max-w-sm">
        This page doesn&apos;t exist. Go back and keep building.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
