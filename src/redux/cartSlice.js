import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
    },
    reducers: {
      addToCart: (state, action) => {
        const existingProduct = state.items.find((item) => item.id === action.payload.id);
        if (existingProduct) {
          // Agar product pehle se hai, uski quantity badha do
          existingProduct.quantity += 1;
        } else {
          // Naya product add karo aur quantity 1 set karo
          state.items.push({ ...action.payload, quantity: 1 });
        }
      },
      removeFromCart: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;
  