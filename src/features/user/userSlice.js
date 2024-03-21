import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  light: "light",
  dracula: "dracula",
};

const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getThemeLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserLocalStorage(),
  theme: getThemeLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    //login
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));

      // console.log("action -", action.payload);
    },

    //logout
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },

    // change theme
    toggleTheme: (state) => {
      const { dracula, light } = themes;
      state.theme = state.theme === dracula ? light : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
