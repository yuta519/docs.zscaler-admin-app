import Footer from "@/components/Atoms/Footer"
import Header from "@/components/Atoms/Header"
import Sidebar from "@/components/Atoms/Sidebar"

function IndexPage() {
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
          <h2 className="text-4xl mt-8">What is Zscaler Admin App?</h2>
          <hr className="mb-4" />
          <div className="mx-4">
            <p className="text-xl">This is a repository to manage Zscaler Internet Access.</p>
            <p className="text-xl">You could create Custom URL category, URL Filtering RUles, Admin User and many thins from CLI.</p>
            <p className="text-xl">Especially, if you are managing multi tenants of ZIA, you don't need to switch account by tenants.</p>
            <p className="text-xl">If you are intersted in this project, please contact me with ease.</p>
            <p className="text-xl">If interested, please check<a href="https://github.com/yuta519/zscaler-admin-app">GitHub Repository</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage