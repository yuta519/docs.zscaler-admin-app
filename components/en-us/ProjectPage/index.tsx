import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import RecentBlogs from '@/components/en-us/IndexPage/RecentBlogs'

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col container mx-auto mt-8 pr-8 sm:pr-2 justify-center">
        </div>
        <div className="col-span-2 pr-5">
          <RecentBlogs />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
