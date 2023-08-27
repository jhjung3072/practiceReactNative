import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./recucers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const server = "https://localhost:5000/api/v1";
