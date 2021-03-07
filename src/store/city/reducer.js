import * as ActionTypes from '../actionType';

const initialState = { cityName: '上海' };

function userInfo(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_CITYNAME:
      return { ...state, cityName: action.data };
    default:
      return state;
  }
}

export default userInfo;
