import { useState } from "react";
import ContactForm from "./SimpleForm";

/*
Requirements:
- Create a toggle between light mode and dark mode
- Change background color and text color
- Button text should update based on current mode
  (e.g., "Switch to Dark Mode")
*/

/**
 * light, dark mode
 */

/**
 * localStorage: themePreference: dark
 */

export default function ThemeToggle() {
  const [color, setColor] = useState("light");

  function checkColor() {
    if (color === "light") {
      setColor("dark");
    } else {
      setColor("light");
    }
  }

  return (
    <div className={color === "light" ? "bg-red-200" : "bg-blue-300"}>
      <h1>Current Theme {color}</h1>
      <button onClick={checkColor}>Toggle Theme</button>
    </div>
  );
}
