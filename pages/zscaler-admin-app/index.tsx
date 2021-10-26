import Footer from "@/components/Atoms/Footer"
import Header from "@/components/Atoms/Header"
import Sidebar from "@/components/Atoms/Sidebar"

function ZscalerAdminApp() {
  const title: string = "Zscaler Admin App"
  const contents: { ref: string; index: string; }[] = [
    {
      ref: "",
      index: "",
    },
  ]
  return (
    <>
      <Header />
      <div className="flex flex-row bg-gray-80">
        <div className="flex-1 text-center p-2 m-1">
          <Sidebar title={title} />
        </div>
        <div className="flex-1 text-center p-2 m-1">
          2
        </div>
        <div className="flex-1 text-center p-2 m-1">
          3
        </div>
        <div className="flex-1 text-center p-2 m-1">
          4
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ZscalerAdminApp