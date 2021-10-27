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
      <main className="flex">
        <Sidebar title={title} />

        <div className="w-screen">
          <p className="text-4xl mt-8">What is Zscaler Admin App?</p>
          <hr className="mb-4" />
          <p className="text-xl">This is a repository to manage Zscaler Internet Access.</p>
          <p className="text-xl">aaaa</p>
          <p className="text-xl">aaaa</p>
          <p className="text-xl">aaaa</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ZscalerAdminApp