// src/features/products/components/ingredients-section.tsx

type Props = {
    ingredients: string[];
};

export function IngredientsSection({
    ingredients = [],
}: Props) {
    const safeIngredients = Array.isArray(ingredients) ? ingredients : [];
    
    if (!safeIngredients || !safeIngredients.length) {
        return null;
    }

    return (
        <section className="mt-12">

            <h2 className="mb-4 text-2xl font-bold">
                مواد تشکیل‌دهنده
            </h2>

            <ul className="space-y-2">

                {safeIngredients.map((ingredient) => (
                    <li
                        key={ingredient}
                        className="rounded-xl border p-3"
                    >
                        {ingredient}
                    </li>
                ))}

            </ul>

        </section>
    );
}
