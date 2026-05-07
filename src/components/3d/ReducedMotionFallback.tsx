export function ReducedMotionFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border border-[#6366f1]/20" />
        <div className="absolute inset-4 rounded-full border border-[#6366f1]/30" />
        <div className="absolute inset-8 rounded-full border border-[#6366f1]/40" />
        <div className="absolute inset-12 rounded-full bg-[#6366f1]/10 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#6366f1]" />
        </div>
      </div>
    </div>
  );
}
