// src/components/layout/main-layout.tsx

import { Header } from "@/components/layout/header/header";
import { Footer } from "./footer";

type Props = {
    children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
    return (
        <>
            <Header />
            
            <main>
                {children}
            </main>

            <Footer />         
        </>
    );
}
