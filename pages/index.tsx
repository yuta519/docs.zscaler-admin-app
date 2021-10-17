// import Image from "next/image"
import { Typography } from '@material-ui/core'

import Header from '@/components/Header'
// import profileimg from '@/public/profile.jpeg'

export default function Home() {
    return (
        <>
            <Header />
            <div className="bg-gray-100 container mx-auto px-8">

                {/* <h1 className="text-4xl font-bold text-center">About Me</h1> */}
                <hr className="my-2" />
                <h3 className="text-2xl font-bold">About Me :</h3>

                <div className="flex flex-row">
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">1
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">2
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">3
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">4
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">1
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">2
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">3
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">4
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">1
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">2
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">3
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">4
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">1
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">2
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">3
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">4
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">1
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">2
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">3
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">4
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">1
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">2
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">3
                    </div>
                    <div className="flex-1 bg-blue-400 text-center text-white p-2 m-1">4
                    </div>
                </div>

            </div>
            {/* <a className="justify-center items-center bg-black text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-gray-dark hover:text-white">
                <span className="text-lg font-light">トップに戻る</span>
            </a> */}

        </>
    )
}

