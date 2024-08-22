import React from "react";
import Urlshortener from "./component/Urlshortener";
import "./App.css";
//import firebase from "./firebase"

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Scissor URL Shortener</h1>
      <Urlshortener />
    </div>
  );
};

export default App;
