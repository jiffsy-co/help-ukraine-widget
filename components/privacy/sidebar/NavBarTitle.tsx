import React from 'react'

const NavBarTitle = () => (
  <div
    className="flex flex-col text-titleBlack
     text-base md:text-xl
     items-center md:items-start
     leading-5  md:leading-7
     md:mb-12
     md:ml-2.5
     pr-5% md:pr-12%
     "
  >
    <span>Help Ukraine Widget</span>
    <div>
      <span>Last update:</span>
      <span className="font-bold">18 March, 2022</span>
    </div>
  </div>
)

export default NavBarTitle
