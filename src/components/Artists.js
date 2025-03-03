import React from "react";

const artists = [
  { name: "Thomas Edward", username: "@thewildwithyou", image: "/assets/image1.png" },
  { name: "Chris Doe", username: "@thewildwithyou", image: "/assets/image2.png" },
  { name: "Emilie Jones", username: "@thewildwithyou", image: "/assets/image3.png" },
  { name: "Jessica Williams", username: "@thewildwithyou", image: "/assets/image4.png" },
  { name: "Jessica Williams", username: "@thewildwithyou", image: "/assets/image5.png" },

];

const Artists = () => {
  return (
    <div className="right-sidebar">
      <h3>Artists</h3>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="artist-card"
            style={{ backgroundImage: `url(${artist.image})` }}
          >
            <div className="artist-info">
              <p className="artist-name">{artist.name}</p>
              <p className="artist-username">{artist.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
