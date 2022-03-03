import NormalLists from '@/components/Atoms/NormalLists';


const Careers: React.VFC = () => {

  const title: string = "Career Summary"
  const lines: { emoji: string; description: string }[] = [
    {
      emoji: "computer",
      description: "Backend Engineer - 2 years"
    },
    {
      emoji: "building_construction",
      description: "Infra Engineer - 5 years"
    },
    {
      emoji: "lock",
      description: "Security Engineer - 5 years"
    },
  ]

  return (
    <>
      <NormalLists title={title} lines={lines} />

      {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Career History
      </button> */}


      <div className="p-4 mt-4 ">
        <h3 className="md:text-2xl sm:text-base text-left font-semibold mb-3">Career Histroy</h3>
        <hr />
        {/* <div className="container"> */}
        <div className="flex flex-col md:grid grid-cols-12 text-gray-50 mt-3">

          <div className="flex md:contents">
            <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                <i className="fas fa-check-circle text-white"></i>
              </div>
            </div>
            <div className="bg-green-500 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 className="font-semibold md:text-lg sm:text-base mb-1">Innoscouter, Inc. (SideWork)</h3>
              <ul className="text-sm mb-1">
                <li className="md:text-base sm:text-xs">Worked on web service as Frontend and Backend Engineer</li>
                <li className="md:text-base sm:text-xs">Using frontend skills like Typescript / React</li>
                <li className="md:text-base sm:text-xs">Using server side skills like Ruby / Hanami / MySQL</li>
              </ul>
              <p className="leading-tight text-justify w-full">
                Nov 2021 ~
              </p>
            </div>
          </div>


          <div className="flex md:contents">
            <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                <i className="fas fa-check-circle text-white"></i>
              </div>
            </div>
            <div className="bg-green-500 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 className="font-semibold md:text-lg sm:text-base mb-1">SoftBank Corp (MainWork)</h3>
              <ul className="text-sm mb-1">
                <li className="md:text-base sm:text-xs">Worked on MSS (Managed Security Service) as service development engineer</li>
                <li className="md:text-base sm:text-xs">Using server side skills like Python / PostgreSQL / Linux</li>
                <li className="md:text-base sm:text-xs">Also experienced some security devices like Zscaler / PaloAlto / Rapid7 / Proofpoint ITM / Fortinet</li>
              </ul>
              <p className="leading-tight text-justify">
                January 2021 ~
              </p>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                <i className="fas fa-exclamation-circle text-gray-400"></i>
              </div>
            </div>
            <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">QuickWork, Inc. (SideWork)</h3>
              <ul className="text-sm mb-1 text-gray-400">
                <li className="md:text-base sm:text-xs">Worked on web service as Backend Engineer</li>
                <li className="md:text-base sm:text-xs">Using server side skills like Python / FastAPI / Pytest / SqlAlchemy / PostgreSQL</li>
              </ul>
              <p className="leading-tight text-justify">
                July 2021 ~ November 2021
              </p>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                <i className="fas fa-exclamation-circle text-gray-400"></i>
              </div>
            </div>
            <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">ITOCHU Techno-Solutions Corporation</h3>
              <ul className="text-sm mb-1 text-gray-400">
                <li className="md:text-base sm:text-xs">as Infra Engineer - VMware / AWS / Trend Micro / Zscaler / Splunk</li>
                <li className="md:text-base sm:text-xs">as Sales Engineer - Trend Micro / Zscaler</li>
              </ul>
              <p className="leading-tight text-justify">
                April 2017 ~ December 2020
              </p>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                <i className="fas fa-exclamation-circle text-gray-400"></i>
              </div>
            </div>
            <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">Interspace Co.,Ltd (Internship)</h3>
              <ul className="text-sm mb-1 text-gray-400">
                <li className="md:text-base sm:text-xs">as Backend Engineer - PHP / Laravel / CodeIgniter / Vagrant</li>
              </ul>
              <p className="leading-tight text-justify">
                July 2015 ~ June 2016
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* </div> */}

    </>
  )
}

export default Careers
