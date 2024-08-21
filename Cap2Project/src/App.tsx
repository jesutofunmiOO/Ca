import React from "react";
import Urlshortener from "./component/Urlshortener";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Scissor URL Shortener</h1>
      <Urlshortener />
    </div>
  );
};

export default App;
