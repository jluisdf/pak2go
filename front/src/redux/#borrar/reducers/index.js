import { combineReducers } from "redux";
import { isLoggedIn } from "./authentication.reducer";
import { profile } from "./profile.reducer";
import { catalogos } from "./caralogos.reducer";
import { child } from "./child.reducer";
import { error } from "./error.reducer";
import { isLoading } from "./loading.reducer";
import { contact } from "./contact.reducer";
import { pension } from "./pension.reducer";
import { redesComerciales } from "./redesComerciales.reducer";
import { indicators } from "./indicators.reducer";
import { calculatorKids } from "./calculatorKids.reducer";

const rootReducer = combineReducers({
  isLoggedIn,
  profile,
  catalogos,
  child,
  error,
  isLoading,
  pension,
  contact,
  redesComerciales,
  indicators,
  calculatorKids});

export default rootReducer;
