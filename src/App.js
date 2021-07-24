import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ParallaxProvider>
          <div className="App">
            <Main />
          </div>
        </ParallaxProvider>
      </BrowserRouter>
    );
  }
}

export default App;
