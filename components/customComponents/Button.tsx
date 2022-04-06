import React from 'react'
import { IButton } from '../../types'

const Button = (options: IButton) => {
  const handleClickLink = () => {
    if (options.link) {
      window.location.href = options.link
    }
    if (options.location) {
      window.location = options.location
    }
  }
  return (
    <button
      onClick={handleClickLink}
      className="flex items-center
          bg-black
          w-full
          h-full
          justify-evenly text-sm leading-4 text-white
          opacity-70 font-bold
          hover:opacity-100
          rounded-full
          border
          border-solid
          border-white
          transition
          "
    >
      {options.children && options.children}
      {options.title}
    </button>
  )
}

export default Button
