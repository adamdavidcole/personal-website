import React from "react";

export default function ProjectVimeoEmbed({ project }) {
  const { vimeoEmbed, name } = project;
  if (!vimeoEmbed) return null;

  return (
    <div className="p-project__embed_container">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          title={`${name} vimeo embed`}
          src={`${vimeoEmbed}?portrait=0`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
