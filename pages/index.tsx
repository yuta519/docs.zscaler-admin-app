import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import AboutMe from '@/components/en-us/IndexPage/AboutMe'
import Careers from '@/components/en-us/IndexPage/Careers'
import Likes from '@/components/en-us/IndexPage/Likes'
import ProfileCover from '@/components/en-us/IndexPage/ProfileCover'


export default function IndexPage() {
  return (
    <>
      <Header />

      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col container mx-auto mt-9 px-8 justify-center">
          <ProfileCover />
          <AboutMe />
          <Likes />
          <Careers />
        </div>
        <div className="col-span-2 pr-5">
          <h3 className="font-mono text-base font-bold py-6">Recently posted Blogs</h3>
          <ul className="list-disc">
            <li className="list-none py-1">hoge</li>
            <li className="list-none py-1">hoge</li>
            <li className="list-none py-1">hoge</li>
            <li className="list-none py-1">hoge</li>
            <li className="list-none py-1">hoge</li>
            <li className="list-none py-1">hoge</li>
            <li className="list-none py-1">hoge</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  )
}
