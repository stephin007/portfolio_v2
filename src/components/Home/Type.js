import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Solution Engineer",
          "API Integration Lead",
          "Developer",
          "Music Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
