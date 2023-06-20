import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CodeInputSlice from "./slices/CodeInputSlice";
import AiHelperSlice from "./slices/AiHelperSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AiHelperSlice"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    CodeInputSlice,
    AiHelperSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
