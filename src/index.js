import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { persistStore } from "redux-persist";
import { persistGate } from "redux-persist/lib/integration/react";

const store = configureStore();
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <persistGate loading={<div>loading...</div>} persistor={persistor}>
      <App />
    </persistGate>
  </Provider>,
  document.getElementById("root")
);
