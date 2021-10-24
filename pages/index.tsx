import AboutMe from '@/components/AboutMe'
import Careers from '@/components/Careers'
import Header from '@/components/Header'
import Likes from '@/components/Likes'
import NormalLists from '@/components/NormalLists'

export default function IndexPage() {
    return (
        <>
            <Header />
            <AboutMe />
            <Likes />
            <Careers />

            {/* <div className="bg-gray-100 container mx-auto px-8"> */}

            {/* <div className="container mx-auto mt-8 px-8">
                <h3 className="font-mono text-2xl font-bold">About Me</h3>
                <hr className="my-2" />

                <div className="flex flex-row">
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">
                        1
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">
                        2
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">
                        3
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">
                        4
                    </div>
                </div>
            </div> */}
            {/* <a className="justify-center items-center bg-black text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-gray-dark hover:text-white">
                <span className="text-lg font-light">トップに戻る</span>
            </a> */}

        </>
    )
}

