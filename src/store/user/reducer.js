// user/reducer.ts
import * as ActionTypes from '../actionType';

const initialState = {
  username: 233,
  configurations: { aa: 1, bb: 2 },
  whiskies: [], // for this example we'll make an app that fetches and lists whiskies
  isLoading: false,
  error: false
};

function userInfo(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.USERINFO_UPDATE:
      return {
        ...state,
        configurations: { ...state.configurations, ...action.data }
      }; // {a: 4}, state.a 4
    case ActionTypes.CHANGE_USERNAME:
      return { ...state, username: action.data };
    case ActionTypes.FETCH_WHISKIES:
      return {
        ...state,
        // whenever we want to fetch the whiskies, set isLoading to true to show a spinner
        isLoading: true,
        error: null
      };
    case ActionTypes.FETCH_WHISKIES_SUCCESS:
      return {
        whiskies: [...action.payload],
        // whenever the fetching finishes, we stop showing the spinner and then show the data
        isLoading: false,
        error: null
      };
    case ActionTypes.FETCH_WHISKIES_FAILURE:
      return {
        whiskies: [],
        isLoading: false,
        // same as FETCH_WHISKIES_SUCCESS, but instead of data we will show an error message
        error: action.payload
      };
    default:
      return state;
  }
}

export default userInfo;
