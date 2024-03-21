import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartLocalStorage(),
  reducers: {
    // add item to cart
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to cart");
    },

    // clear cart
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    // remove item from cart
    removeItem: (state, action) => {
      // get the cartID from the payload:
      const { cartID } = action.payload;
      // find the product from the cart:
      const product = state.cartItems.find((item) => item.cartID === cartID);
      // remove the product from the cart:
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );
      // update the cart totals:
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Product removed from cart");
    },

    // edit item in cart
    editItem: (state, action) => {
      // get cartId and amount from the payload:
      const { cartID, amount } = action.payload;
      // find the product from the cart:
      const product = state.cartItems.find((item) => item.cartID === cartID);
      // update the amount: if (amount-product.amount) is -mount, or +amount
      const diff = amount - product.amount;
      state.numItemsInCart += diff;
      state.cartTotal += product.price * (amount - product.amount);
      product.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },

    // calculate totals function:
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
