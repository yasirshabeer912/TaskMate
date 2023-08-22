import React, { useEffect, useState } from 'react'
import Logo from './logo.svg'
const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");
  useEffect(() => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <>
        <header>
            <div className="logo">
                <img src={Logo} alt="TaskMate Logo" className='logoPic' />
                <span className='logoText'>Taskmate</span>
            </div>
            <span className="themeSelector">
                <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
                <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
                <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
                <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
                <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
                <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>
            </span>
        </header>
    </>
  )
}

export default Header