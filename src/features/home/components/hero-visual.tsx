// src/features/home/components/hero-visual.tsx

export function HeroVisual() {
  return (
    <div className="relative flex h-[450px] items-center justify-center">

      <div className="absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-[380px] w-[380px] items-center justify-center rounded-[32px] border bg-white shadow-lg">

        <div className="space-y-4 text-center">

          <div className="text-6xl">
            🍯
          </div>

          <div className="text-lg font-semibold">
            محصولات غذایی شمالی
          </div>

          <div className="text-muted-foreground text-sm">
            غذاهای آماده و آموزش‌های تخصصی
          </div>

        </div>

      </div>

    </div>
  );
}