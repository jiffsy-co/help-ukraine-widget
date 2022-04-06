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
  const headerIntersection = (elem: HTMLElement): boolean => {
    const { bottom, top } = elem.getBoundingClientRect()
    const headerHeight = header.clientHeight
    return bottom > headerHeight && top <= headerHeight
  }
  const colorClassList = () =>
    header.classList
      .toString()
      .split(' ')
      .filter((className) => className.startsWith('bg-'))

  const setHeaderColor = (color: string): void => {
    colorClassList().forEach((className) => {
      if (className !== color) {
        header.classList.remove(className)
      }
      if (!header.classList.contains(color)) {
        header.classList.add(color)
      }
    })
  }
  const defaultClass = colorClassList()?.[0]
  if (!defaultClass) {
    return
  }

  window.addEventListener('scroll', () => {
    let intersection = 0
    triggerList.forEach((elem) => {
      if (headerIntersection(elem)) {
        intersection++
        const currentColor = bgColorClass(elem?.dataset.switcherColor)
        setHeaderColor(currentColor)
      }
    })
    if (!intersection) {
      setHeaderColor(defaultClass)
    }
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
