import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import Blog from '@/components/Atoms/Blog'
import RecentBlogs from '@/components/en-us/IndexPage/RecentBlogs'



const BlogPage = (id: string | string[]) => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col container mx-auto mt-9 px-8 justify-center">
          {/* <Blog markdown_path="Why_I_use_Notion!.md" /> */}
          <Blog markdown_path={id} />
        </div>
        <div className="col-span-2 pr-5">
          <RecentBlogs />
        </div>
      </div>
      <Footer />
    </>
  )
}


export default BlogPage
