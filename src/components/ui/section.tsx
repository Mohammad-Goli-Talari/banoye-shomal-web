// src/components/ui/section.tsx

type SectionProps = {
    children: React.ReactNode;
    className: string;
};

export function Section({ children, className = "", }: SectionProps) {
    return (
        <div className={`py-12 lg:py-20 ${className}`}>
            {children}
        </div>
    );
    
}
