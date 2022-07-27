import { combineReducers } from 'redux';
import FilterReducer from './FilterReducer';
import LoginAndRegisterReducer from './LoginAndRegisterReducer';
export default combineReducers({
  LoginAndRegisterReducer,
  FilterResponse:FilterReducer
});
