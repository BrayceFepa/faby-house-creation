import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartState from "./Context/Cart/CartState";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartState>
        <App />
      </CartState>
    </Provider>
  </React.StrictMode>
);
