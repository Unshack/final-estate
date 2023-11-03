import { createSlice } from "@reduxjs/toolkit";
import { navLinks } from "../../data/navLinks";

const mode = JSON.parse(localStorage.getItem("Martvilla-theme-mode")) || false;

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  isDropdownOpen: false,
  position: null,
  currentLink: {},
  isSidebarOpen: false,
  isFilterMenuOpen: false,
  darkMode: mode,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    openDropdown: (state, action) => {
      const mainLink = action.payload.link;
      state.currentLink = navLinks.find((link) => link.linkText === mainLink);
      state.isDropdownOpen = true;
      state.position = action.payload.center;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },

    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openFilterMenu: (state) => {
      state.isFilterMenuOpen = true;
    },
    closeFilterMenu: (state) => {
      state.isFilterMenuOpen = false;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const userStore = (state) => state.user;

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
  openDropdown,
  closeDropdown,
  toggleDropdown,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  openFilterMenu,
  closeFilterMenu,
  toggleDarkMode,
} = userSlice.actions;

export default userSlice.reducer;
