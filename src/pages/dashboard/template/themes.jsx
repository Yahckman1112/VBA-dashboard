import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
function Theme(props) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  useEffect(() => {
    if (isDarkModeEnabled) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.add("white_mode");
    }
  }, [isDarkModeEnabled]);

  const handleDarkModeToggle = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <div>
      <DarkModeToggle
        onChange={handleDarkModeToggle}
        checked={isDarkModeEnabled}
        size={60}
      /> 
   

      <span
        style={{ paddingLeft: "10px" }}
        className={isDarkModeEnabled ? "white" : "dark"}
      >
        {!isDarkModeEnabled ? "White Mode" : "Dark Mode"}
      </span>
    </div>
  );
}

export default Theme;
