import Link from "next/link"


const Header: React.VFC = () => {
  return (
    <div className="sticky top-0">
      <header>
        <title>
          Yuta Kawamura
        </title>
      </header>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/">
                  <a className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">Yuta Kawamura</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <Link href="ja-jp">日本語</Link>
              <Link href="/">English</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
