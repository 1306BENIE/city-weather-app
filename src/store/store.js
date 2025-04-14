import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "../slices/WeatherSlice";
import { thunk } from "redux-thunk";

const globalStore = configureStore({
  reducer: { weather: weatherReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat,
});

export default globalStore;
