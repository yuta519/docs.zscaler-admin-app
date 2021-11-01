import Footer from "@/components/Atoms/Footer"
import Header from "@/components/Atoms/Header"
import Sidebar from "@/components/Atoms/Sidebar"

function Requirements() {
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
          <h2 className="text-4xl mt-8">Requirements</h2>
          <hr className="mb-4" />
          <div className="mx-4 mt-4">
            <p className="text-base mb-2">In Zscaler Admin App, use these libraries.</p>
            <p className="text-xl"><a href="https://docs.python.org/3.9/">Python3.9+</a></p>
            <p className="text-xl"><a href="https://typer.tiangolo.com/">Typer</a></p>
            <p className="text-xl"><a href="https://github.com/psf/black">black</a></p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Requirements