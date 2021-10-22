import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';



export default function Careers() {
    return (
        <>

            <div className="container mx-auto mt-8 px-8">
                <h3 className="font-mono text-2xl font-bold">Careers</h3>
                <hr className="my-2" />

                <ul className="list-disc">
                    <li>
                        <Emoji emoji="computer" size={30} />&nbsp;
                        Backend Engineer - 2 years
                    </li>
                    <li>
                        <Emoji emoji="building_construction" size={30} />&nbsp;
                        Infra Engineer - 5 years
                    </li>
                    <li>
                        <Emoji emoji="lock" size={30} />&nbsp;
                        Security Engineer - 5 years
                    </li>
                    <li>
                        <Emoji emoji="heavy_dollar_sign" size={30} />&nbsp;
                        Sales Engineer - 4 years
                    </li>
                </ul>


                <div className="p-4 mt-4 bg-gray-50">
                    <h3 className="text-4xl text-center font-semibold mb-6">Career Histroy</h3>
                    <div className="container">
                        <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                            <div className="flex md:contents">
                                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 className="font-semibold text-lg mb-1">Quick Work (Side Work)</h3>
                                    <ul className="text-sm mb-1">
                                        <li>as Backend Engineer - Python / FastAPI / Pytest / SqlAlchemy / PostgreSQL</li>
                                    </ul>
                                    <p className="leading-tight text-justify w-full">
                                        July 2021 ~
                                    </p>
                                </div>
                            </div>

                            <div className="flex md:contents">
                                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 className="font-semibold text-lg mb-1">Softbank (Main Work)</h3>
                                    <ul className="text-sm mb-1">
                                        <li>as Backend Engineer - Python / SqlAlchemy / PostgreSQL</li>
                                        <li>as Infra Engineer - Linux</li>
                                    </ul>
                                    <p className="leading-tight text-justify">
                                        January 2021 ~
                                    </p>
                                </div>
                            </div>

                            {/* <div className="flex md:contents">
                                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                                        <i className="fas fa-times-circle text-white"></i>
                                    </div>
                                </div>
                                <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 className="font-semibold text-lg mb-1 text-gray-50">Cancelled</h3>
                                    <p className="leading-tight text-justify">
                                        Customer cancelled the order
                                    </p>
                                </div>
                            </div>
 */}
                            <div className="flex md:contents">
                                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                                        <i className="fas fa-exclamation-circle text-gray-400"></i>
                                    </div>
                                </div>
                                <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 className="font-semibold text-lg mb-1 text-gray-400">CTC</h3>
                                    <ul className="text-sm mb-1 text-gray-400">
                                        <li>as Infra Engineer - VMware / AWS / Trend Micro / Zscaler / Splunk</li>
                                        <li>as Sales Engineer - Trend Micro / Zscaler</li>
                                    </ul>
                                    <p className="leading-tight text-justify">
                                        April 2017 ~ December 2020
                                    </p>
                                </div>
                            </div>

                            <div className="flex md:contents">
                                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                                        <i className="fas fa-exclamation-circle text-gray-400"></i>
                                    </div>
                                </div>
                                <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 className="font-semibold text-lg mb-1 text-gray-400">Interspace inc.</h3>
                                    <ul className="text-sm mb-1 text-gray-400">
                                        <li>as Infra Engineer - VMware / AWS / Trend Micro / Zscaler / Splunk</li>
                                    </ul>
                                    <p className="leading-tight text-justify">
                                        April 2017 ~ December 2020
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

