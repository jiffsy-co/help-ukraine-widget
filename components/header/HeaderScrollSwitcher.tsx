import React, { useEffect } from 'react'

const bgColorClass = (tailwindColor: string | null | undefined): string => {
  return tailwindColor ? `bg-${tailwindColor}` : ''
}

const scrollColorSwitcher = () => {
  const header = document.querySelector<HTMLElement>('header')
  const triggerList = document.querySelectorAll<HTMLElement>('[data-switcher-color]')
  if (!header || !triggerList) {
    return
  }
  triggerList.forEach((elem) => {
    header.classList.add(bgColorClass(elem?.dataset.switcherColor))
  })
  const colorList = header.classList
    .toString()
    .split(' ')
    .filter((className) => className.includes('bg-'))
  window.addEventListener('scroll', () => {
    triggerList.forEach((elem) => {
      const { top } = elem.getBoundingClientRect()
      const currentColor = bgColorClass(elem?.dataset.switcherColor)
      colorList.forEach((className) => {
        header.classList.replace(`!${className}`, className)
      })
      if (top < header.clientHeight && !header.classList.contains(`!${currentColor}`)) {
        header.classList.replace(currentColor, `!${currentColor}`)
      }
    })
  })
}

type IHeaderSwitchColor = {
  tailwindColor: string
  children: React.ReactNode
}
const HeaderScrollSwitcher = ({ tailwindColor, children }: IHeaderSwitchColor) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child
        }
        return React.cloneElement(child, {
          className: `bg-${tailwindColor} ${child.props.className}`,
          'data-switcher-color': tailwindColor,
        })
      })}
    </>
  )
}

const useColorSwitcher = (): void => {
  useEffect(() => {
    scrollColorSwitcher()
  }, [])
}

export { useColorSwitcher, HeaderScrollSwitcher }
