import React from "react";

const VideoBlock = () => (
  <div
    className="w-full md:w-11/12  rounded-3xl px-2.5 pb-2.5 pt-10 md:px-0
    "
  >
    <video autoPlay controls style={{ width: "100%", borderRadius: "24px" }}>
      <source src="/movie.mp4" type="video/mp4" />
    </video>
  </div>
);

export default VideoBlock;
