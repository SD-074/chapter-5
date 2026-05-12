import { use } from "react"
import { ThemeContext } from "../context/ThemeProvider"

export default function ThemeSwitcher() {

    const {setisDark} = use(ThemeContext)

  return (
          <button className="btn btn-primary" onClick={() => setisDark(i => !i)}> Change theme color</button>

  )
}
