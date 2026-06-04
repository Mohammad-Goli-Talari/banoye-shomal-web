// src/components/layout/header/header.tsx

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

import { DesktopNav } from "./desktop-nav";
import { CartButton } from "./cart-button";
import { AuthActions } from "./auth-actions";
import { MobileNav } from "./mobile-nav";

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Logo />

                    <DesktopNav />

                    <div className="flex items-center gap-3">
                        <CartButton />
                        <AuthActions />
                        <MobileNav />
                    </div>
                </div>
            </Container>
        </header>
    );
}
