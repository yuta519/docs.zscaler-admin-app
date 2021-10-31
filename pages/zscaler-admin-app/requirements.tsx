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
          <div className="mx-4">
            <p className="text-xl">Python3.9+</p>
            <p className="text-xl">
              <a href="https://typer.tiangolo.com/">Typer</a>
            </p>
            <p className="text-xl">
              <a href="https://github.com/psf/black">black</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Requirements