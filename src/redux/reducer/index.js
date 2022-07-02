import { combineReducers, autoMergeLevel2 } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categotyReducer";
import { productReducer } from "./productReducer";
import { storyReducer } from "./storyReducer";
const reduxStore = combineReducers({
  products: productReducer,
  storys: storyReducer,
  category: categoryReducer,
  carts: cartReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  // stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, reduxStore);
export default pReducer;
