import { create } from "zustand";
import axios from "axios";
import { AppState } from "@/hooks/interfaces";

export const BASE_URL = "https://sho-ol-dashboard-be.vercel.app";

// Configure Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Define the store
const useAppStore = create<AppState>((set: any) => ({
  // Initial state
  user: null,
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  // Actions
  register: async (username: any, email: any, password: any) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post(`/api/users/create`, {
        username,
        email,
        password,
      });
      console.log(response);
      set({
        accessToken: response.data.result.accessToken,
        isAuthenticated: true,
        loading: false,
      });
      localStorage.setItem("authorization", response.data.result.accessToken);
      await useAppStore.getState().fetchCurrentUser();
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Registration failed",
        loading: false,
      });
    }
  },

  login: async (email: any, password: any) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post(`/api/users/login`, {
        email,
        password,
      });
      console.log(response.data.result.accessToken);
      set({
        accessToken: response.data.result.accessToken,
        isAuthenticated: true,
        loading: false,
      });
      localStorage.setItem("authorization", response.data.result.accessToken);
      await useAppStore.getState().fetchCurrentUser();
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Login failed",
        loading: false,
      });
    }
  },

  fetchCurrentUser: async () => {
    set({ loading: true, error: null });
    const token = localStorage.getItem("authorization");
    if (token) {
      try {
        const response = await axiosInstance.get(`/api/users/own`, {
          headers: { Authorization: `${token}` },
        });
        set({
          user: response.data.result,
          isAuthenticated: true,
          loading: false,
        });
      } catch (error) {
        set({ error: "Failed to fetch user data", loading: false });
      }
    } else {
      set({ loading: false });
    }
  },

  logout: () => {
    // Clear user data and tokens
    localStorage.removeItem("accessToken");
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    });
  },
}));

// Axios Interceptor to automatically add Authorization header

export default useAppStore;

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      useAppStore.getState().accessToken ||
      localStorage.getItem("authorization");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
