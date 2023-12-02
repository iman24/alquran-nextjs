import React from 'react'
import SwitchDemo from './Switch'

const Header = () => {

    return (
        <div className='dark:bg-gray-950 dark:text-slate-300 dark:shadow-gray-800 flex justify-between bg-amber-300 shadow-sm  items-center px-10'>
            <div className='text-xl h-15 py-5'>
                Alquran Online
            </div>

            <div>
                {/* <SwitchDemo /> */}
            </div>
        </div>
    )
}

export default Header