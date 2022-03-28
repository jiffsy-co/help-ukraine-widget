import Link from 'next/link'

const Header = () => {
  return (
    <header className="grid grid-flow-col auto-cols-max gap-4 justify-center">
      <Link href="/">
        <a className="h2 text-blue-ua hover:text-black">Home</a>
      </Link>
      <Link href="/install">
        <a className="h2 text-blue-ua hover:text-black">Install widget</a>
      </Link>
    </header>
  )
}

export default Header
