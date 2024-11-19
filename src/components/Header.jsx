import React from 'react'

function Header() {
  return (
    <div className=' p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 '>
       <header className=' flex justify-between dark:text-white items-center '>
         <div>
            <h1>Task Manager</h1>
         </div>
         <div>
            <h1>Dark Mode</h1>
         </div>
       </header>
    </div>
  )
}


export default Header
