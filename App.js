import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <dir className="logo">
        <img src="foodlogo.png" alt="foodlogo" />
      </dir>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <h2>Meghana Foods</h2>
        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-continer">
        <RestaurantCard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
