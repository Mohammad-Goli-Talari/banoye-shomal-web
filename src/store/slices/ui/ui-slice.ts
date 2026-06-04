// src/store/auth/ui-slice.ts

import { createSlice } from "@reduxjs/toolkit";

interface UiState {
    sidebarOpen: boolean;
}

const initialState: UiState = {
    sidebarOpen: false,
};

const UiSlice = createSlice({
    name: "ui",

    initialState,

    reducers: {
        toggleSidebar(state) {
            state.sidebarOpen = !state.sidebarOpen;
        },

        openSidebar(state) {
            state.sidebarOpen = true;
        },

        closeSidebar(state) {
            state.sidebarOpen = false;
        },
    },
});

export const {
    toggleSidebar,
    openSidebar,
    closeSidebar,
} = UiSlice.actions;

export default UiSlice.reducer;
