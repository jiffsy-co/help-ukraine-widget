import React from 'react'
import Link from 'next/link'

import { IButton } from '../../types'

const Button = ({ isExternal, className, ...options }: IButton) => {
  const Component = options.as || 'a'
  const props = isExternal
    ? {
        rel: 'noreferrer',
        target: '_blank',
      }
    : {}

  return (
    <Link href={options.href} passHref>
      <Component
        {...options}
        {...props}
        className={`flex items-center
  bg-black
  w-full
  h-full
  justify-center text-sm leading-4 text-white
  opacity-70 font-bold
  hover:opacity-100
  rounded-full
  border
  border-solid
  border-white
  transition
  gap-3
  px-5 ${className}`}
      >
        {options.children && options.children}
        {options.title}
      </Component>
    </Link>
  )
}

export default Button
