import { useCallback, useEffect, useState } from 'react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== undefined) {
        const consent = localStorage.getItem('cookie-consent') === 'true'
        setShow(!consent)
      }
    }, 1000)
  }, [])
  const onClick = useCallback(() => {
    localStorage.setItem('cookie-consent', 'true')
    setShow(false)
  }, [])
  return (
    <div
      className={
        'fixed bottom-4 left-2 sm:left-4 right-2 sm:right-auto sm:max-w-xs p-3 rounded-xl bg-white z-10 border border-gray-200 shadow-md transition-all duration-300' +
        (show
          ? 'block opacity-100 translate-y-0'
          : 'pointer-events-none hidden opacity-0 translate-y-8')
      }
    >
      <p className="m-0 text-black">This website uses cookies to improve your experience 🍪</p>
      <div className="flex w-full gap-3 justify-start items-center pt-3">
        <button
          className="text-black font-medium rounded-full border border-black px-3 py-1"
          onClick={onClick}
        >
          Agree
        </button>
        <a
          className="text-black text-md font-medium"
          href="https://en.wikipedia.org/wiki/HTTP_cookie"
          rel="noreferrer"
          target="_blank"
        >
          Learn more
        </a>
      </div>
    </div>
  )
}
