import React from 'react';
import './App.css';
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";

function App() {
  return (
      <div className="main__wrapper">
        <Header/>
        <ControlPanel/>
        <Table/>
      </div>
  );
}

export default App;
