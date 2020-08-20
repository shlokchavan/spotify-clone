import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />

        <Router>
          <Switch>
            <Route path="/search">
              <h1>library</h1>
            </Route>
            <Route path="library">
              <h1>library</h1>
            </Route>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="musicControls now-playing-bar">
        <div className="now-playing-bar__left">
          {/* Preview File */}
          <div className="now-playing">
            {/* thumbnail */}
            <a href="/playlist/1234">
              <img
                width="64px"
                loading="eager"
                alt="coverimagehere"
                src="https://i.scdn.co/image/ab67616d00001e02c3f29832a01c2b9670d93234"
                className="cover-art-image"
              />
            </a>
            <div className="ellipsis-one-line content">
              <a href="/playlist/1234" className="ellipsis-one-line title">
                Black and White
              </a>
              <a href="/playlist/1234" className="ellipsis-one-line artist">
                Niall Horan
              </a>
            </div>
            {/* title */}
            {/* artist */}
          </div>

          {/* heart */}
        </div>

        <div className="now-playing-bar__center">
          <div className="player-controls">
            <div className="player-controls__buttons">
              <div className="control-button-wrapper">
                <button className="control-button spoticon-shuffle-16"></button>
              </div>
              <div className="control-button-wrapper">
                <button className="control-button spoticon-skip-back-16"></button>
              </div>
              <div className="control-button-wrapper">
                <button className="control-button spoticon-pause-16"></button>
              </div>
              <div className="control-button-wrapper">
                <button className="control-button spoticon-skip-forward-16"></button>
              </div>
              <div className="control-button-wrapper">
                <button className="control-button spoticon-repeat-16"></button>
              </div>
            </div>
            <div className="playback-bar">
              <div className="playback-bar__progress-time">0:53</div>
              <div className="progress-bar">
                <div className="middle-align progress-bar__bg">
                  <div className="progress-bar__fg_wrapper">
                    <div
                      className="progress-bar__fg"
                      // style={{ transform: "translateX(-9.12201%)" }}
                    ></div>
                  </div>
                  <button
                    aria-label="Change progress"
                    className="middle-align progress-bar__slider"
                    // style={{ left: "90.878%" }}
                  ></button>
                </div>
              </div>
              <div className="playback-bar__progress-time">2 :53</div>
            </div>
          </div>
          {/* shuffle */}
          {/* previous */}
          {/* play/pause */}
          {/* next */}
          {/* repeat */}
          {/* duration bar */}
        </div>

        {/* playing que */}
        {/* connect to device */}
        {/* volume control */}
      </div>
    </div>
  );
}

export default App;
