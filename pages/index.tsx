import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import Icons from '@/components/Atoms/Icons'
import AboutMe from '@/components/en-us/IndexPage/AboutMe'
import Careers from '@/components/en-us/IndexPage/Careers'
import Likes from '@/components/en-us/IndexPage/Likes'
import ProfileCover from '@/components/en-us/IndexPage/ProfileCover'
import RecentBlogs from '@/components/en-us/IndexPage/RecentBlogs'


export default function IndexPage() {
  return (
    <>
      <Header />

      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col container mx-auto mt-9 px-8 justify-center">
          <ProfileCover />
          <Icons />
          <AboutMe />
          <Likes />
          <Careers />
        </div>
        <div className="col-span-2 pr-5">
          <RecentBlogs />
        </div>
      </div>

      <Footer />
    </>
  )
}
