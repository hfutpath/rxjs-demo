import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../../store/user/action';
import { USERINFO_UPDATE, CHANGE_CITYNAME } from '../../store/actionType';

const Parent = () => {
  const { username, cityName, configurations } = useSelector(
    ({ userInfo: { username, configurations }, cityInfo: { cityName } }) => ({
      username,
      cityName,
      configurations
    })
  );
  const dispatch = useDispatch();
  return (
    <div>
      这里是父组件: {username},城市名称: {cityName},{' '}
      {JSON.stringify(configurations)}
      <button
        onClick={() => {
          dispatch(updateUserInfo('新的名字111'));
        }}
      >
        点击改变username
      </button>
      <button
        onClick={() => {
          dispatch({ type: CHANGE_CITYNAME, data: '新的城市名字' });
        }}
      >
        点击改变cityName
      </button>
      <button
        onClick={() => {
          dispatch({ type: USERINFO_UPDATE, data: { aa: 4 } });
        }}
      >
        点击改变数据
      </button>
    </div>
  );
};
export default Parent;
// export default connect((state) => {
//   return state.userInfo;
// }, null)(Parent);
