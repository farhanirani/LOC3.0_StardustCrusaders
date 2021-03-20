import React from "react";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";

function Leaderboard() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("https://images5.alphacoders.com/387/thumb-1920-387340.jpg")`,
        backgroundSize: "cover",
        opacity: "0.5",
      }}
    >
      <div>
        <Header
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
        />
      </div>
    </div>
  );
}

export default Leaderboard;
