"use clo"
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";

const ToggleButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme === 'system' ? systemTheme : theme);

    useEffect(() => {
        setCurrentTheme(theme === 'system' ? systemTheme : theme);
    }, [theme, systemTheme]);

    return (
        <div className='flex justify-center items-center  transform rotate-90 border-sky-500 border-2 rounded-full'>
            <button className={`text-white py-2 px-5 ${currentTheme === 'light' ? 'bg-sky-500 rounded-l-full' : ''}`} onClick={() => setTheme('light')}>light</button>
            <button className={`text-white py-2 px-5 ${currentTheme === 'dark' ? 'bg-sky-500 rounded-r-full' : ''}`} onClick={() => setTheme('dark')}>dark</button>
        </div>
    )
}

export default ToggleButton
