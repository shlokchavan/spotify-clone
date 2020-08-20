import React, { useState } from "react";
import "./GroupSection.scss";
import AlbumCard from "./../AlbumCard/AlbumCard";
function GroupSection() {
  const [shortcutList] = useState([
    {
      groupName: "Shortcuts",
      data: [
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba",
          title: "Mood Booster",
          info:
            "Get happy with this pick-me-up playlist full of current feel-good songs!",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f0000000229fb5514aa0a2ebf3518e398",
          title: "Meditate to the Sounds of Nature",
          info: "Calm ambient music with gentle nature sounds.",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f00000003a088a35ef6e638c42f88deda",
          title: "Motivation Mix",
          info: "Uplifting and energetic music that helps you stay motivated.",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f0000000321aab90a9c6d10ccca8d6c78",
          title: "Chill Vibes",
          info: "Just chill...",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f000000038257266b22638a81f18ad2bb",
          title: "Sleepy Piano",
          info: "Sleepy Piano",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f00000003661da3e1d0b7f3ac8be56a62",
          title: "Mellow Lo-Fi Morning",
          info: "Laid-back beats for an easygoing morning.",
        },
      ],
    },
    {
      groupName: "Popular and trending",
      data: [
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba",
          title: "Mood Booster",
          info:
            "Get happy with this pick-me-up playlist full of current feel-good songs!",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f0000000229fb5514aa0a2ebf3518e398",
          title: "Meditate to the Sounds of Nature",
          info: "Calm ambient music with gentle nature sounds.",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f00000003a088a35ef6e638c42f88deda",
          title: "Motivation Mix",
          info: "Uplifting and energetic music that helps you stay motivated.",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f0000000321aab90a9c6d10ccca8d6c78",
          title: "Chill Vibes",
          info: "Just chill...",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f000000038257266b22638a81f18ad2bb",
          title: "Sleepy Piano",
          info: "Sleepy Piano",
        },
        {
          url: "/playlist/37i9dQZF1DX3rxVfibe1L0",
          image:
            "https://i.scdn.co/image/ab67706f00000003661da3e1d0b7f3ac8be56a62",
          title: "Mellow Lo-Fi Morning",
          info: "Laid-back beats for an easygoing morning.",
        },
      ],
    },
  ]);

  return (
    <>
      {shortcutList.map((section, index) => (
        <section  className="groupSection">
          <div className="groupSection__header">
            <h1 className="m-0">{section?.groupName}</h1>
            <a href="/">
              <span>See All</span>
            </a>
          </div>
          {/* Cards here */}
          <div className="section__List">
            {section?.data.map((card, key) => (
              <AlbumCard dataKey={key} data={card} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default GroupSection;
