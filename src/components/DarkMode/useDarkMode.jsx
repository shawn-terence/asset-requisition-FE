import { useState,useEffect } from "react"

const useDarkMode = () => {
const [isDarkMode, setIsDarkMode] = useState(() => {
  const savedMode = localStorage.getItem('dark-mode')
  return savedMode ? JSON.parse(savedMode) : false
});

useEffect(()=>{
  isDarkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  localStorage.setItem('dark-mode',JSON.stringify(isDarkMode))
},[isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    [isDarkMode,toggleDarkMode]
  )
}

export default useDarkMode