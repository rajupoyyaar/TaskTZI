import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: JSON.parse(localStorage.getItem("ProductDetails")) || [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;

export const selectProducts = (state) => state.products.products;

export default productSlice.reducer;
