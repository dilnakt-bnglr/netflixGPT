import React from "react";
import { getBackgroundById } from "../utils/movieData";

function VideoBackground() {
  const backgroundVideo = getBackgroundById(101001);
  const trailer = backgroundVideo.find((video) => video.type === "Trailer");
  const src = trailer ? `https://www.youtube.com/embed/${trailer.key}` : "";

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video block"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
