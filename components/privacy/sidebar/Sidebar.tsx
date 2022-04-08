import React from 'react'
// @ts-ignore
import Scrollspy from 'react-scrollspy'
import NavBarTitle from './NavBarTitle'
import { navBarLinks } from './constans'

const Sidebar = () => {
  return (
    <div className="flex flex-col pt-20 w-full">
      <NavBarTitle />
      <div
        className="hidden md:flex flex-col
        text-sm leading-4 font-bold text-black"
      >
        <Scrollspy
          items={[
            'purpose',
            'who_we_are',
            'personal_data_we_process',
            'period_of_data_storage',
            'information_of_data_transfer',
            'your_privacy_rights',
            'update',
          ]}
          currentClassName="is-current"
        >
          {navBarLinks.map((item, index) => (
            <li
              data-to-scrollspy-id={item.link}
              key={index}
              className="min-h-5 opacity-70
                  pl-2.5
                 mb-2.5 "
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </Scrollspy>
      </div>
    </div>
  )
}

export default Sidebar
