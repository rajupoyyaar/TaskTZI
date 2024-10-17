import { createSlice } from '@reduxjs/toolkit';

const storedCustomerDetails = JSON.parse(localStorage.getItem("CustomerDetails")) || {};
const localStorageProductDetails = storedCustomerDetails.ProductDetails

const initialState = {
  products: localStorageProductDetails || [],
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
