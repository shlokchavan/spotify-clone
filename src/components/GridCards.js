import React from "react";

function GridCards() {
  return (
    <section className="horizantalSection">
      <div className="sectionGrid">
        <div className="headerGrid">
          <div className="actionContainer">
            <div className="header">
              <h1>Shortcuts</h1>
            </div>
            <a href="/">
              <span className="seeAll">see all</span>
            </a>
          </div>
        </div>
        {/* Card List horizantal */}
        {shortcutList.map((card) => (
          <div className="cardGrid">
            <div className="contentWrapper">
              <div className="content">
                <div className="artwork">
                  <img
                    loading="lazy"
                    src="https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"
                    alt=""
                  />
                </div>
                <div className="information">
                  <div className="title">
                    <a
                      title="Mood Booster"
                      s
                      href="/playlist/37i9dQZF1DX3rxVfibe1L0"
                    >
                      Mood Booster
                    </a>
                  </div>
                  <div className="description">
                    <span>
                      Get happy with this pick-me-up playlist full of current
                      feel-good songs!
                    </span>
                  </div>
                </div>
                <div className="playStatusIndicator">
                  <button
                    className="theme-play"
                    title="Pause"
                    aria-label="Pause"
                  >
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24">
                      <rect
                        x="5"
                        y="3"
                        width="4"
                        height="18"
                        fill="white"
                      ></rect>
                      <rect
                        x="15"
                        y="3"
                        width="4"
                        height="18"
                        fill="white"
                      ></rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GridCards;
