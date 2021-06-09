import React from 'react';
import './App.css';
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import orders from "./fixtures";

function App() {
  return (
      <div className="main__wrapper">
        <Header text="Список заказов"/>
        <ControlPanel/>
        <Table orders={orders} selectedAll={false}/>
      </div>
  );
}

export default App;
