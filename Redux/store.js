import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "./MyProductSlice";
import MyCardReducer from "./MyCardSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";

let persistConfig = {
  ket: "root",
  storage,
};

let rootReducer = combineReducers({
  product: MyProductReducer,
  card: MyCardReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
