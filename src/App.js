import React from 'react';
import './App.css';
import './components/common/constants.css';
import orders from "./resources/fixtures";
import Header from "./components/common/Header";
import ControlPanel from "./components/control_panel/ControlPanel";
import Table from "./components/table/Table";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
      <div className="main__wrapper">
          <div className="inline-space-between margin-bottom-32">
              <Header text="Список заказов"/>
              <ThemeSwitcher theme="light"/>
          </div>
        <ControlPanel/>
        <Table orders={orders}/>
      </div>
  );
}

export default App;
