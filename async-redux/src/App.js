import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav"
import MagicCards from "./components/MagicCards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Nav />
      <hr />
      <MagicCards />
    </div>
  );
}

export default App;
