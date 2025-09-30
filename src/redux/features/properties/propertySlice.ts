import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import API from "../../../api/axios";

// --- Types defined directly in the file ---
export interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: {
    fullAddress: string;
    city: string;
    district: string;
    area: string;
    pincode: string;
  };
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  transaction_type: "sale" | "rent" | "lease";
  property_type: string;
  images: string[];
  amenities: string[];
  yearBuilt?: number;
  isVerified?: boolean;
  isFeatured?: boolean;
  user?: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface FilterState {
  search?: string;
  transaction_type?: "sale" | "rent" | "lease";
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: string;
  property_type?: string;
}

interface PropertyState {
  properties: Property[];
  property: Property | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}
// --- End of Types ---

const initialState: PropertyState = {
  properties: [],
  property: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

interface UpdatePropertyPayload {
  id: string;
  propertyData: FormData; // Usually FormData for images
}

// Thunk to get all properties with optional filters
export const getProperties = createAsyncThunk<
  Property[],
  Partial<FilterState> | void
>("properties/getAll", async (filters, thunkAPI) => {
  try {
    const response = await API.get("/properties", { params: filters || {} });
    return response.data.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Thunk to get a single property by its ID
export const getPropertyById = createAsyncThunk<Property, string>(
  "properties/getById",
  async (id, thunkAPI) => {
    try {
      const response = await API.get(`/properties/${id}`);
      return response.data.data;
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Thunk to create a new property
export const createProperty = createAsyncThunk<Property, FormData>(
  "properties/create",
  async (propertyData, thunkAPI) => {
    try {
      const response = await API.post("/properties", propertyData);
      return response.data.data;
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Thunk to update an existing property
export const updateProperty = createAsyncThunk<Property, UpdatePropertyPayload>(
  "properties/update",
  async ({ id, propertyData }, thunkAPI) => {
    try {
      const response = await API.put(`/properties/${id}`, propertyData);
      return response.data.data;
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Thunk to delete a property
export const deleteProperty = createAsyncThunk<string, string>(
  "properties/delete",
  async (id, thunkAPI) => {
    try {
      await API.delete(`/properties/${id}`);
      return id;
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.property = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All Properties
      .addCase(getProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getProperties.fulfilled,
        (state, action: PayloadAction<Property[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.properties = action.payload;
        }
      )
      .addCase(getProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      // Get Single Property By ID
      .addCase(getPropertyById.pending, (state) => {
        state.isLoading = true;
        state.property = null;
      })
      .addCase(
        getPropertyById.fulfilled,
        (state, action: PayloadAction<Property>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.property = action.payload;
        }
      )
      .addCase(getPropertyById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      // Create Property
      .addCase(createProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        createProperty.fulfilled,
        (state, action: PayloadAction<Property>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.properties.push(action.payload);
        }
      )
      .addCase(createProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      // Update Property
      .addCase(updateProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateProperty.fulfilled,
        (state, action: PayloadAction<Property>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.properties = state.properties.map((p) =>
            p._id === action.payload._id ? action.payload : p
          );
        }
      )
      .addCase(updateProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      // Delete Property
      .addCase(deleteProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteProperty.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.properties = state.properties.filter(
            (p) => p._id !== action.payload
          );
        }
      )
      .addCase(deleteProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = propertySlice.actions;
export default propertySlice.reducer;
