import React from "react";
import { FaHome, FaBell, FaShoppingBag, FaComments, FaWallet, FaClipboardList, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      
      <ul className="menu">
        <li><FaHome className="icon" /> Home</li>
        <li><FaBell className="icon" /> Notifications</li>
        <li><FaShoppingBag className="icon" /> Shop</li>
        <li><FaComments className="icon" /> Conversation</li>
        <li><FaWallet className="icon" /> Wallet</li>
        <li><FaClipboardList className="icon" /> Subscription</li>
        <li><FaUser className="icon" /> My Profile</li>
        <li><FaCog className="icon" /> Settings</li>
      </ul>

      <div className="logout">
        <FaSignOutAlt className="icon" /> Log out
      </div>
    </div>
  );
};

export default Sidebar;
