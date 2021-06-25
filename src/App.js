import React from 'react';
import {Provider} from "react-redux";
import './App.css';
import {ControlPanel, Table, ThemeSwitcher} from "./modules";
import {Header} from './lib';
import {store} from "./store";
import orders from "./resources/fixtures";

function App() {
  return (
      <Provider store={store}>
          <div className="main__wrapper">
              <div className="inline-space-between margin-bottom-32">
                  <Header text="Список заказов"/>
                  <ThemeSwitcher theme="light"/>
              </div>
            <ControlPanel/>
            <Table orders={orders}/>
          </div>
      </Provider>
  );
}

export default App;
