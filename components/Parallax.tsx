import { ReactNode, useEffect, useRef } from 'react'

const inViewport = (elem: HTMLElement): boolean => {
  const { bottom, top } = elem.getBoundingClientRect()
  return bottom > 0 && top - window.innerHeight < 0
}

const parallax = (wrapper: HTMLElement | null) => {
  if (!wrapper) {
    return
  }
  const list = wrapper.querySelectorAll<HTMLElement>('.parallax-item')
  const applyTransform = () => {
    list?.forEach((elem) => {
      const span = elem.querySelector('span')
      if (!span) {
        return
      }
      const index = parseInt(span.dataset?.parallax || '1', 10)
      const y = wrapper.getBoundingClientRect().top / (30 + 30 * index)
      span.style.transform = `translateY(${y}rem)`
    })
  }

  applyTransform()
  window.addEventListener('scroll', () => {
    inViewport(wrapper) && applyTransform()
  })
}

const Parallax = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null)
  useEffect(() => {
    parallax(ref.current)
  }, [ref])
  return (
    <div ref={ref} className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {children}
    </div>
  )
}

export default Parallax
