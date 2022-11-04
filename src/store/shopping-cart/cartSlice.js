import { createSlice } from "@reduxjs/toolkit";

// redux slice for the cart functions
const cartSlice = createSlice({
  // name
  name: "cart",
  // state of items we need to control in the cart
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
    showCart: false,
  },

  // the reducers object contains all the functions that requires the cart to function like adding to cart, removing items from cart
  reducers: {
    // Function to add item to cart
    addItem(state, action) {
      // newItem get the item the user clicked on
      const newItem = action.payload;
      // existingItem makes use of find() fucntion to check if the item selcted already exists in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      // increases the total quantity in the cart
      state.totalQuantity++;

      //if item doesnt exist in cart
      if (!existingItem) {
        // we push the item and its properties to the cart
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });

        // if already in the cart
      } else {
        // modify the properties of the cart to increase quantity
        existingItem.quantity++;
        // increase the total price of the selcted item in cart
        existingItem.totalPrice += Number(newItem.price);
      }

      // this increases the total price of all items in cart by using the reduce() method
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    reduceItem(state, action) {
      const removingItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === removingItem.id
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= Number(existingItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    deleteFromCart(state, action) {
      const deletingItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => (item.id = deletingItem.id)
      );
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== deletingItem.id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

// this creates the actions handled by the cartSlice reducer
export const cartActions = cartSlice.actions;

export default cartSlice;
