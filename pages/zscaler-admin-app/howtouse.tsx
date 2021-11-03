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
            <p className="text-xl">Aadmin Role</p>
            <p className="font-mono text-sm text-white bg-black">$ zia adminrole ls</p>
            <p className="text-base">Above command return a list of admin roles.</p>
            <p className="text-base">Using option `--all`, you could fetch more details of admin roles.</p>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">Admin User</p>
            <p className="font-mono text-sm text-white bg-black">$ zia adminuser ls</p>
            <p className="text-base">Above command return a list of admin users.</p>
            <p className="text-base">Using option `--all`, you could fetch more details of admin users.</p>
            <p className="text-base">Below command return a list of url categories.</p>
            <p className="font-mono text-sm text-white bg-black">$ zia adminuser create</p>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">URL Category</p>
            <p className="text-base">Below command return a list of url categories.</p>
            <p className="font-mono text-sm text-white bg-black">$ zia urlcategory ls</p>
            <p className="text-base">Using option `--all`, you could fetch more details of url cateogories.</p>
            <p className="text-base mt-2">Also you can create new custom categories.</p>
            <p className="font-mono text-sm text-white bg-black">$ zia urlcategory create --file custom_category.json</p>
            <p className="text-base">Using option `--file`, could create custom category from json file.</p>
          </div>
          <div className="mx-4 mt-4">
            <p className="text-xl">URL Filtering Rule</p>
            <p className="text-base">Below command return a list of url filtering rules.</p>
            <p className="font-mono text-sm text-white bg-black">$ zia urlfilter ls</p>
            <p className="text-base">Using option `--all`, you could fetch more details of url filtering rules.</p>
            <p className="text-base mt-2">Also you can create new url filtering rules.</p>
            <p className="font-mono text-sm text-white bg-black">$ zia urlfilter create --file custom_category.json</p>
            <p className="text-base">Using option `--file`, could create url filtering rules from json file.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HowToUse