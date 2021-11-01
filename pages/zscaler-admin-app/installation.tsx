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
            <p className="text-base">To install this repository, please use Poetry</p>
            <p className="text-sm">(What is a <a href="https://python-poetry.org/">Poetry</a>)</p>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">Install Poetry (Optional)</p>
            <p className="text-base">To install this repository, please use Poetry</p>
            <p className="font-mono text-base text-white bg-black">$ curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -</p>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">Install Zscaler Admin App</p>
            <p className="text-base">Install this repository with Poetry</p>
            <p className="font-mono text-base text-white bg-black">$ git clone https://github.com/yuta519/zscaler-admin-app.git</p>
            <p className="font-mono text-base text-white bg-black">$ cd zscaler-admin-app</p>
            <p className="font-mono text-base text-white bg-black">$ poetry shell & poetry install</p>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">Check installation</p>
            <p className="font-mono text-base text-white bg-black">$ zia --help</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Installation