import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AiHelperSlice from "./slices/AiHelperSlice";
import WebDevCodeInputSlice from "./slices/WebDevCodeInputSlice";
import pythonCompilerSlice from "./slices/PythonCompilerSlice";
import javaCompilerSlice from "./slices/JavaCompilerSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AiHelperSlice"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    WebDevCodeInputSlice,
    AiHelperSlice,
    pythonCompilerSlice,
    javaCompilerSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
