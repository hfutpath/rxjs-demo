import React from 'react';
import ReactDom from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store/index.js';
import Parent from './components/Parent';
import WhiskyGrid from './components/WhiskyGrid';
import { fetchWhiskies } from './store/user/action';

const App = () => {
  const { isLoading, error, whiskies } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchWhiskies());
        }}
      >
        Fetch whiskies
      </button>
      {isLoading && <h1>Fetching data</h1>}
      {!isLoading && !error && <WhiskyGrid whiskies={whiskies} />}
      {error && <h1>{error}</h1>}
    </div>
  );
};
export default App;
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
