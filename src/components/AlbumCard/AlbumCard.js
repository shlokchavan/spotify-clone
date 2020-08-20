import React from "react";
import "./AlbumCard.scss";
function AlbumCard({ data, dataKey }) {
  return (
    <div className="albumCard">
      <div className="albumCard__content">
        <img
          className="albumCard__content-image"
          loading="lazy"
          src={data?.image}
          alt={data && data?.title}
        />
        <a
          title={data?.info}
          className="albumCard__content-title"
          href={data && data?.url}
        >
          {data?.title}
        </a>
        <div className="albumCard__content-description">
          <span>{data?.info}</span>
        </div>
      </div>
      {dataKey !== undefined ? (
        <div className="albumCard__action">
          <button
            className="albumCard__action-play"
            title="Pause"
            aria-label="Pause"
          >
            <svg height="16" role="img" width="16" viewBox="0 0 24 24">
              <rect x="5" y="3" width="4" height="18" fill="white"></rect>
              <rect x="15" y="3" width="4" height="18" fill="white"></rect>
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
      {/* img */}
      {/* title */}
      {/* desc */}
      {/* playpausebtn */}
    </div>
  );
}

export default AlbumCard;
