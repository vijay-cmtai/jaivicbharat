import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import API from "../../../api/axios"; // Aapka Axios instance

// Interfaces
interface OrderCreationData {
  amount: number;
  currency?: string;
}

// Backend se Razorpay order ka response
interface OrderResponse {
  id: string; // Order ID
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: string;
  // Baki zaroori fields...
}

// Payment verification ke liye data
interface VerificationData {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface PaymentState {
  order: OrderResponse | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  isLoading: boolean;
  message: string;
}

const initialState: PaymentState = {
  order: null,
  status: "idle",
  isLoading: false,
  message: "",
};

// Async Thunks

// 1. Backend se payment order create karna
export const createPaymentOrder = createAsyncThunk<OrderResponse, OrderCreationData>(
  "payment/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await API.post("/payment/create-order", orderData);
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Failed to create payment order.";
      return rejectWithValue(message);
    }
  }
);

// 2. Payment ko backend par verify karna
export const verifyPayment = createAsyncThunk<{ success: boolean; message: string }, VerificationData>(
  "payment/verify",
  async (verificationData, { rejectWithValue }) => {
    try {
      const response = await API.post("/payment/verify-payment", verificationData);
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Payment verification failed.";
      return rejectWithValue(message);
    }
  }
);


// Payment Slice
export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    resetPayment: (state) => {
      state.order = null;
      state.status = "idle";
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Order
      .addCase(createPaymentOrder.pending, (state) => {
        state.isLoading = true;
        state.status = "pending";
      })
      .addCase(createPaymentOrder.fulfilled, (state, action: PayloadAction<OrderResponse>) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(createPaymentOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.message = action.payload as string;
      })
      // Verify Payment
      .addCase(verifyPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyPayment.fulfilled, (state) => {
        state.isLoading = false;
        state.status = "succeeded";
        state.message = "Payment successful!";
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.message = action.payload as string;
      });
  },
});

export const { resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;