"use client"
import React, { useEffect, useState } from 'react';
import * as Switch from '@radix-ui/react-switch';

const SwitchDemo = () => {

    
    // const getdark = () => {
        // if(localStorage !== undefined) {
    //         return localStorage.getItem("darkmode")
    //     }
    // }
    
    const [darkMode, setDarkMode] = useState(false)


    useEffect(() => {
        localStorage.setItem("darkmode", darkMode)
        if(darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])


    return (


        <form>
            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                <label className="dark:text-white text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
                    Dark mode
                </label>
                <Switch.Root
                
                    onCheckedChange={(e) => setDarkMode(!darkMode)}
                    checked={darkMode}
                    className="w-[42px] h-[25px] rounded-full relative bg-gray-900 data-[state=checked]:bg-gray-500 outline-none cursor-default"
                    id="airplane-mode"
                    style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                >
                    <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>
            </div>
        </form>
    );
}

export default SwitchDemo;
