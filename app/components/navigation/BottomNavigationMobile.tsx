"use client";

import React, { useState } from "react";
import "../../styles/NavbarStyle.css";
import { LuHome } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
import { PiBriefcaseBold } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";

const BottomNavigationMobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#dc143c");

  // Define navigation items
  const navItems = [
    { title: "Home", icon: <LuHome />, color: "#dc143c" },
    { title: "About", icon: <BiSupport />, color: "#3c40c6" },
    { title: "Messages", icon: <FaRegListAlt />, color: "#05c46b" },
    { title: "Help", icon: <PiBriefcaseBold />, color: "#0fbcf9" },
    { title: "Settings", icon: <FaAddressCard />, color: "#ffa801" },
  ];

  // Click handler for navigation items
  const handleNavClick = (index: number, color: string) => {
    setActiveIndex(index);
    setBgColor(color);
  };

  return (
    <div className="top-navigation" style={{ backgroundColor: bgColor }}>
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleNavClick(index, item.color)}
            data-color={item.color}
          >
            <a href="#">
              <span className="icon">{item.icon}</span>
            </a>
          </li>
        ))}
        <div
          className="indicator"
          style={{ transform: `translateX(calc(118% * ${activeIndex}))` }}
        >
          <div
            className="indicator-circle"
            style={{ backgroundColor: navItems[activeIndex].color }}
          />
        </div>
      </ul>
    </div>
  );
};

export default BottomNavigationMobile;
