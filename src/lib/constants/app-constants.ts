// درخواست/جواب پیغام
export const API_MESSAGES = {
    SUCCESS: "عملیات با موفقیت انجام شد",
    ERROR: "خطای نامعلوم رخ داده است",
    LOADING: "درحال بارگذاری...",
    EMPTY: "هیچ داده‌ای پیدا نشد",
    CONFIRM_DELETE: "آیا از حذف این مورد مطمئن هستید؟",
    DELETED: "مورد با موفقیت حذف شد",
    CREATED: "مورد جدید اضافه شد",
    UPDATED: "مورد به‌روزرسانی شد",
    UNAUTHORIZED: "شما مجاز نیستید این عملیات را انجام دهید",
} as const;

// Validation پیغام
export const VALIDATION_MESSAGES = {
    REQUIRED: "این فیلد الزامی است",
    INVALID_EMAIL: "ایمیل نامعتبر است",
    INVALID_PHONE: "شماره تلفن نامعتبر است",
    PASSWORD_MIN: "رمز عبور حداقل 6 کاراکتر باید باشد",
    PASSWORD_MISMATCH: "رمز عبور مطابقت ندارد",
} as const;

// API Endpoints
export const API_ENDPOINTS = {
    // Auth
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",

    // Products
    PRODUCTS: "/products",
    CATEGORIES: "/categories",
    RELATED_PRODUCTS: "/products/:id/related",

    // Cart
    CART: "/cart",

    // Addresses
    ADDRESSES: "/addresses",
    ADDRESS: "/addresses/:id",

    // Orders
    ORDERS: "/orders",
    ORDER: "/orders/:id",

    // Payment
    VERIFY_PAYMENT: "/payment/verify",

    // Profile
    PROFILE: "/profile",
    CHANGE_PASSWORD: "/profile/change-password",

    // Wishlist
    WISHLIST: "/wishlist",
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
    ACCESS_TOKEN: "access_token",
    REFRESH_TOKEN: "refresh_token",
    USER: "user",
} as const;

// Query Cache Keys
export const QUERY_KEYS = {
    PRODUCTS: ["products"],
    CATEGORIES: ["categories"],
    ADDRESSES: ["addresses"],
    ORDERS: ["orders"],
    WISHLIST: ["wishlist"],
    PAYMENT: ["payment"],
    PROFILE: ["profile"],
} as const;
