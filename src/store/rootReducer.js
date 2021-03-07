// rootReducer.ts
// 合并所有的reducer
import { combineReducers } from 'redux';
import userInfo from './user/reducer';
import cityInfo from './city/reducer';
const rootReducer = combineReducers({
  userInfo,
  cityInfo
  /*...其他的reducer...*/
});

export default rootReducer;
