// src/store/index.ts

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

import uiReducer from "./slices/ui/ui-slice";
import cartReducer from "./slices/cart/cart-slice";
import authReducer from "./slices/auth/auth-slice";

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["cart", "auth"],
};

const rootReducer = combineReducers({
   ui: uiReducer,
   
   cart: cartReducer,

   auth: authReducer,
});

const persistedReducer = persistReducer(
   persistConfig,
   rootReducer
);

export const store = configureStore({
   reducer: persistedReducer,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [
               "persist/PERSIST",
               "persist/REHYDRATE",
            ],
         },
      }),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
