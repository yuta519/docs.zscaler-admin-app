import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import PostedBlogs from './PostedBlogs'


export default function BlogListPage() {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col container mx-auto mt-9 px-8 justify-center">
          <PostedBlogs />
        </div>
      </div>
      <Footer />
    </>
  )
}
