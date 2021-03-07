// user/action.ts
import * as ActionTypes from '../actionType';

/**
 * @func
 * @desc 更新用户信息
 * @param data
 */
export function updateUserInfo(data = {}) {
  return {
    type: ActionTypes.CHANGE_USERNAME,
    data
  };
}

export function updateConfig(data = {}) {
  return {
    type: ActionTypes.USERINFO_UPDATE,
    data
  };
}

export const fetchWhiskies = () => ({
  type: ActionTypes.FETCH_WHISKIES
});

export const fetchWhiskiesSuccess = (whiskies) => ({
  type: ActionTypes.FETCH_WHISKIES_SUCCESS,
  payload: whiskies
});

export const fetchWhiskiesFailure = (message) => ({
  type: ActionTypes.FETCH_WHISKIES_FAILURE,
  payload: message
});
