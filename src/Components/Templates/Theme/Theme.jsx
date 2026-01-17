import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { FaLightbulb } from "react-icons/fa";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
  }, [theme]);

  const handleClickTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={handleClickTheme} className="cursor-pointer">
      {theme === "light" ? <CiDark size={25} /> : <FaLightbulb size={25} />}
    </div>
  );
}
