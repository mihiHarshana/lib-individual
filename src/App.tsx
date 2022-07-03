import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainApp from "./MainApp";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>

  );
}
export default App;
