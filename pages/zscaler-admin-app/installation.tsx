import Footer from "@/components/Atoms/Footer"
import Header from "@/components/Atoms/Header"
import Sidebar from "@/components/Atoms/Sidebar"

function Installation() {
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
          <h2 className="text-4xl mt-8">Installation</h2>
          <hr className="mb-4" />
          <div className="mx-4">
            <p className="text-xl">Use poetry</p>
            <p className="text-xl">
              Please install poetry
            </p>
            <p className="text-xl">
              poetry install
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Installation