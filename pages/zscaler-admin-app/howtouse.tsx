import Footer from "@/components/Atoms/Footer"
import Header from "@/components/Atoms/Header"
import Sidebar from "@/components/Atoms/Sidebar"

function HowToUse() {
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
          <h2 className="text-4xl mt-8">How to use</h2>
          <hr className="mb-4" />
          <div className="mx-4">
            <p className="text-base">In this article, you could learn how to use Zscaler Admin App.</p>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">Confirm app version</p>
            <div className="font-mono text-sm text-white bg-black">$ zia --help</div>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">Confirm app version</p>
            <div className="font-mono text-sm text-white bg-black">$ zia </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HowToUse