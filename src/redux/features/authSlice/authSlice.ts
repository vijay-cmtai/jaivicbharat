import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import API from "../../../api/axios";

export interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: "advertiser" | "subscriber" | "investor" | "donor" | "admin";
}

interface AuthResponseData {
  user: User;
  token: string;
  message?: string;
}

interface RegisterData {
  fullName: string;
  email: string;
  phone: string;
  password?: string;
  role: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk<AuthResponseData, RegisterData>(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/register", userData);
      if (response.data && response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      return rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk<AuthResponseData, LoginData>(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/login", userData);
      if (response.data && response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Invalid credentials.";
      return rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<AuthResponseData>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<AuthResponseData>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isSuccess = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
          state.token = null;
        }
      );
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
