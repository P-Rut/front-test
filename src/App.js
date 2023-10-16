import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import List from "./components/List"
import ThemeSwitch from "./components/ThemeSwitch"

function App() {
  // use class "'dark-mode' to change theme"
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  )

  useEffect(() => {
    localStorage.setItem("isDark", isDark)
  }, [isDark])

  const toggleThemeMode = () => {
    setIsDark((prevMode) => !prevMode)
  }

  return (
    <div className={`${isDark ? "dark-mode" : ""}`}>
      <Header isDark={isDark} toggleTheme={toggleThemeMode} />
      <List />
    </div>
  )
}

export default App
