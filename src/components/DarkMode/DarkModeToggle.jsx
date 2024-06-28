import useDarkMode from "./useDarkMode"

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  return (
    <div>
      <input onChange={toggleDarkMode} type="checkbox" className="dark-mode-toggle-input | hidden" name="darkModeToggleBtn" id="darkModeToggleBtn"></input>
      <label className="dark-mode-toggle-label | rounded-full " htmlFor="darkModeToggleBtn"></label>
    </div>
  )
}

export default DarkModeToggle