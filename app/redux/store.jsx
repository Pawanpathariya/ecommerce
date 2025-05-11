import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favSlice from './favSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedFavReducer = persistReducer(persistConfig, favSlice);

const store = configureStore({
  reducer: {
    addtocart: persistedCartReducer,
    addtofav: persistedFavReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
export default store;

