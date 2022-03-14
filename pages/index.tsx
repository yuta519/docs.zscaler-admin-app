import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import Icons from '@/components/Atoms/Icons'
import AboutMe from '@/components/en-us/IndexPage/AboutMe'
import Careers from '@/components/en-us/IndexPage/Careers'
import Likes from '@/components/en-us/IndexPage/Likes'
import ProfileCover from '@/components/en-us/IndexPage/ProfileCover'
import Projects from '@/components/en-us/IndexPage/Projects'
import RecentBlogs from '@/components/en-us/IndexPage/RecentBlogs'
import Skills from '@/components/en-us/IndexPage/Skills'


export default function IndexPage() {
  return (
    <>
      <Header />

      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="flex-col mx-auto mt-9 justify-center md:col-span-7 md:pr-8 sm:col-span-10">
          <ProfileCover />
          <Icons />
          <AboutMe />
          <Likes />
          <Projects />
          <Careers />
          <Skills />
        </div>
        <div className="md:pr-5 md:col-span-2 sm:invisible">
          <RecentBlogs />
        </div>
      </div>
      <Footer />
    </>
  )
}
