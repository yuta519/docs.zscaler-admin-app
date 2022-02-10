import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import Blog from '@/components/Atoms/Blog'
import RecentBlogs from '@/components/en-us/IndexPage/RecentBlogs'


export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col container mx-auto mt-9 px-8 justify-center">
          <Blog markdown_path="What+is+Golang+copy.txt" />
        </div>
        <div className="col-span-2 pr-5">
          <RecentBlogs />
        </div>
      </div>
      <Footer />
    </>
  )
}
