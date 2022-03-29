import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-center gap-4 px-global">
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
