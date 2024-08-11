import React from "react";
import LightMode from "../assets/website/light-mode-button.png";
import darkMode from "../assets/website/dark-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  console.log(element);

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[theme]);
  
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 ${theme === "dark" ? "opacity-0" : "opacity-100"} `}
        src={LightMode}
        alt=""
      />
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 `}
        src={darkMode}
        alt=""
      />
    </div>
  );
};

export default Darkmode;
