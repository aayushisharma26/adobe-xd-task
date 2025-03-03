import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">LOGO
          
        </div>

        <div className="input">
          <div className="search-icon">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/020/591/799/small/search-icon-with-outline-style-free-vector.jpg"
              alt="Search"
            />
          </div>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>

        <div className="headerrightside">
          <h1>Become a Seller</h1>
        </div>


      </div>
      
    </>
  );
};

export default Header;


