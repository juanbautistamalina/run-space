import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}

export default ThemeToggle;
