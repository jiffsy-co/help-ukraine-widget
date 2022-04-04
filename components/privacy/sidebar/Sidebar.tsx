import React from 'react'
import NavBarTitle from './NavBarTitle'
import { navBarLinks } from './constans'

const Sidebar = () => {
  return (
    <div className="flex flex-col pt-10 w-full">
      <NavBarTitle />
      <div
        className="hidden md:flex flex-col
        text-sm leading-4 font-bold text-black"
      >
        {navBarLinks.map((item, index) => (
          <div
            key={index}
            className="min-h-5 opacity-70
                 hover:border-l-4
                 border-solid border-logoBlue
                 hover:opacity-100 pl-2.5
                 mb-2.5 "
          >
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
