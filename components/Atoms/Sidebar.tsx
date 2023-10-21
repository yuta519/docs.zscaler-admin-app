import Link from "next/link"

interface Props {
  title: string,
}

const Sidebar: React.FC<Props> = ({
  title,
}) => {
  return <>
    <div className="flex bg-black-100 min-h-screen">
      <aside className="bg-gray-500 w-60 h-screen sticky top-0">
        <div className="flex items-center justify-center mt-10">
          <a href="/" className="text-white">{title}</a>
        </div>
        <nav className="mt-10 bg-black-100 ">
          <Link
            href="/zscaler-admin-app"
            className="flex items-center py-2 px-4 bg-gray-200 text-gray-700 border-r-4 border-gray-700">
            
              What is Zscaler Admin App?
            
          </Link>
          <Link
            href="/zscaler-admin-app/requirements"
            className="flex items-center py-2 px-4 text-white border-white hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700">
            
              Requirements
            
          </Link>
          <Link
            href="/zscaler-admin-app/installation"
            className="flex items-center py-2 px-4 text-white border-white hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700">
            
              Installation
            
          </Link>
          <Link
            href="/zscaler-admin-app/howtouse"
            className="flex items-center py-2 px-4 text-white border-white hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700">
            
              How to use
            
          </Link>
          <Link
            href="zscaler-admin-app/example"
            className="flex items-center py-2 px-4 text-white border-white hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700">
            
              Example
            
          </Link>
        </nav>
      </aside>
    </div>
  </>;
}

export default Sidebar