import { combineReducers, autoMergeLevel2 } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReduce } from "./cartReduce";
import { categoryReduce } from "./categotyReduce";
import { productReduce } from "./productReducer";
import { storyReduce } from "./storyReduce";
const reduxStore = combineReducers({
  products: productReduce,
  storys: storyReduce,
  category: categoryReduce,
  carts: cartReduce,
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, reduxStore);
export default pReducer;
