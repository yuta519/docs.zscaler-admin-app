import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import Icons from '@/components/Atoms/Icons'
import AboutMe from '@/components/en-us/IndexPage/AboutMe'
import Careers from '@/components/en-us/IndexPage/Careers'
import Likes from '@/components/en-us/IndexPage/Likes'
import ProfileCover from '@/components/en-us/IndexPage/ProfileCover'
import Projects from '@/components/en-us/IndexPage/Projects'
import RecentBlogs from '@/components/en-us/IndexPage/RecentBlogs'


export default function IndexPage() {
  return (
    <>
      <Header />

      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col mx-auto mt-9 pr-8 justify-center">
          <ProfileCover />
          <Icons />
          <AboutMe />
          <Likes />
          <Projects />
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
