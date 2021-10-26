import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import AboutMe from '@/components/en-us/IndexPage/AboutMe'
import Careers from '@/components/en-us/IndexPage/Careers'
import Likes from '@/components/en-us/IndexPage/Likes'


export default function IndexPage() {
  return (
    <>
      <Header />
      <AboutMe />
      <Likes />
      <Careers />
      <Footer />
    </>
  )
}

