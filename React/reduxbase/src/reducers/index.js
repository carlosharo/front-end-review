import { combineReducers } from "redux";
import albumsReducer from "./albums";

const reducers = combineReducers({
  albums: albumsReducer
});

export default reducers;
