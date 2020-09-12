import React, { Suspense } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>Hello </h1>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
