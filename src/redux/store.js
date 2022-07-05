import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers ({ 
    cart:cartReducer,
    product:productReducer,
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)