import { useEffect, useState } from "react"

const THEME_KEY = "theme"
const LIGHT = "light"
const DARK = "dark"

export const useTheme = () => {
  const [theme, setTheme] = useState(DARK)

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) || DARK
    setTheme(storedTheme)
    document.documentElement.classList.add(storedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
    setTheme(newTheme)
  }

  const isDark = theme === DARK

  return { theme, isDark, toggleTheme }
}
