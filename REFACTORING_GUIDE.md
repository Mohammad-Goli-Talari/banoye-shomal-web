# پروژے کی Refactoring Guide

## مکمل شدہ اصلاحات ✅

### 1. Axios Race Condition Fix
- **مسئلہ**: متعدد requests بیک وقت 401 دیں تو race condition
- **حل**: Promise queue استفاده - ایک وقت میں صرف ایک refresh
- **فائل**: `src/services/axios.ts`

### 2. API Error Handler Utility
- **بنایا**: `src/lib/api/error-handler.ts`
- **استعمال**:
```typescript
import { showApiError, showApiSuccess } from "@/lib/api/error-handler";

try {
  await api.call();
  showApiSuccess("عملیات موفق");
} catch (error) {
  showApiError(error);
}
```

### 3. React Query Configuration
- **بنایا**: `src/lib/api/query-options.ts`
- **استعمال**:
```typescript
export const useMyData = () => {
  return useQuery({
    queryKey: ["mydata"],
    queryFn: () => api.getData(),
    ...createQueryOptions<MyData>(),
  });
};
```

### 4. Form Wrapper Component
- **بنایا**: `src/components/forms/form-wrapper.tsx`
- **استعمال**:
```typescript
<FormWrapper handleSubmit={handleSubmit} onSubmit={onSubmit}>
  <FormField label="نام" error={errors.name?.message}>
    <Input {...register("name")} />
  </FormField>
</FormWrapper>
```

### 5. Data State Components
- **بنایا**: `src/components/shared/data-states.tsx`
- **استعمال**:
```typescript
<DataState 
  isLoading={isLoading} 
  error={error?.message}
  isEmpty={data?.length === 0}
  emptyFallback={<p>کوئی ڈیٹا نہیں</p>}
>
  {/* Content */}
</DataState>
```

### 6. App Constants
- **بنایا**: `src/lib/constants/app-constants.ts`
- استعمال کریں بجائے hardcoded strings

---

## بہتریاں جو ابھی باقی ہیں 🔄

### Priority 1: فوری ضرورت

#### 1. **تمام Hooks کو نیا Config استعمال کریں**
```
- src/features/*/hooks/use-*.ts
```

#### 2. **تمام Components میں DataState استعمال کریں**
```
- src/features/*/components/*-list.tsx
- src/features/*/components/*-page-content.tsx
```

#### 3. **تمام Forms کو FormWrapper سے update کریں**
```
- src/features/auth/components/*-form.tsx
- src/features/addresses/components/*-form.tsx
- src/features/profile/components/profile-form.tsx
```

### Priority 2: بہتری کے لیے

#### 4. **Large Components کو Split کریں**
- `src/features/products/components/products-page-content.tsx` (180 lines) → تقسیم کریں
- `src/features/checkout/components/checkout-page-content.tsx` → تقسیم کریں

#### 5. **API Services میں Type Safety بڑھائیں**
```
- src/features/*/api/*.ts
- src/features/*/services/*.ts
```

#### 6. **Error Boundaries شامل کریں**
```typescript
// بنائیں: src/components/shared/error-boundary.tsx
export function ErrorBoundary({ children }) {
  // error handling
}
```

---

## Implementation Checklist

### Phase 1: Update Hooks (ہفتہ 1)
- [ ] اردو میں صحیح کریں `src/features/*/hooks/use-*.ts`
- [ ] نیا `createQueryOptions` استعمال کریں
- [ ] `select` property ہٹائیں (اب `createQueryOptions` میں ہے)

### Phase 2: Update Components (ہفتہ 1-2)
- [ ] تمام pages میں `DataState` استعمال کریں
- [ ] تمام forms میں `FormWrapper` استعمال کریں
- [ ] تمام list components میں `Array.isArray()` check ہٹائیں (safe اب ہے)

### Phase 3: Code Splitting (ہفتہ 2)
- [ ] بڑے components کو چھوٹے حصوں میں تقسیم کریں
- [ ] Presentational اور Container الگ کریں

### Phase 4: Type Safety (ہفتہ 3)
- [ ] تمام API responses میں interfaces بنائیں
- [ ] `any` تمام جگہوں سے ہٹائیں

---

## مثال: پہلا Component Update

### پہلے:
```typescript
export function FeaturedProductsSection() {
    const { data: products } = useProducts({ limit: 4 });
    const safeProducts = Array.isArray(products) ? products : [];
    
    return (
        <>
            {isLoading ? <p>Loading...</p> : null}
            {safeProducts.map(...)}
        </>
    );
}
```

### بعد میں:
```typescript
export function FeaturedProductsSection() {
    const { data: products = [], isLoading } = useProducts({ limit: 4 });
    
    return (
        <DataState
            isLoading={isLoading}
            isEmpty={products.length === 0}
        >
            {products.map(...)}
        </DataState>
    );
}
```

---

## Next Steps

کیا آپ چاہتے ہیں کہ میں:

1. **اگلے Phase میں تمام Hooks update کروں**؟
2. **یا تمام Components میں DataState implement کروں**؟
3. **یا بڑے components کو split کروں**؟

کیا ترتیب میں کریں؟
