import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
import AboutMe from '@/components/ja-jp/IndexPage/AboutMe'
import Careers from '@/components/ja-jp/IndexPage/Careers'
import Likes from '@/components/ja-jp/IndexPage/Likes'


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

