// src/features/home/section/hero-section.tsx

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { HeroVisual } from "../components/hero-visual";

export function HeroSection() {
    return (
        <Section className="">
            <Container>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                    <div className="space-y-6">

                        <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm">
                            محصولات اصیل شمالی
                        </span>

                        <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                            طعم اصیل شمال
                            <br />
                            در خانه شما
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground">
                            محصولات خانگی، غذاهای آماده،
                            آموزش‌های تخصصی آشپزی
                            و خدمات کترینگ حرفه‌ای.
                        </p>

                        <div >
                            <Button size="lg">
                                مشاهده محصولات
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                            >
                                مشاهده آموزش‌ها
                            </Button>
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <HeroVisual />
                    </div>

                </div>
            </Container>
        </Section>
    );
}
