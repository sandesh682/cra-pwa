import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersReducer);

const store = configureStore({
  reducer: {
    usersData: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
