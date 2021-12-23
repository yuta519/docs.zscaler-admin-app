import NormalLists from '@/components/Atoms/NormalLists';


const Careers: React.VFC = () => {

  const title: string = "Careers"
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
    {
      emoji: "heavy_dollar_sign",
      description: "Sales Engineer - 4 years"
    },
  ]

  return (
    <>
      <NormalLists title={title} lines={lines} />

      <div className="container mx-auto mt-8 px-8">
        <div className="p-4 mt-4 ">
          <h3 className="text-2xl text-center font-semibold mb-6">Career Histroy</h3>
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
                  <h3 className="font-semibold text-lg mb-1">Innoscouter, Inc. (Side Work)</h3>
                  <ul className="text-sm mb-1">
                    <li>Worked on web service as Frontend and Backend Engineer</li>
                    <li>Using frontend skills like Typescript / React</li>
                    <li>Using server side skills like Ruby / Hanami / MySQL</li>
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
                  <h3 className="font-semibold text-lg mb-1">SoftBank Corp (Main Work)</h3>
                  <ul className="text-sm mb-1">
                    <li>Worked on MSS (Managed Security Service) as service development engineer</li>
                    <li>Using server side skills like Python / PostgreSQL / Linux</li>
                    <li>Also experienced some security devices like Zscaler / PaloAlto / Rapid7 / Proofpoint ITM / Fortinet</li>
                  </ul>
                  <p className="leading-tight text-justify">
                    January 2021 ~
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
                  <h3 className="font-semibold text-lg mb-1 text-gray-400">QuickWork, Inc. (Side Work)</h3>
                  <ul className="text-sm mb-1 text-gray-400">
                    <li>Worked on web service as Backend Engineer</li>
                    <li>Using server side skills like Python / FastAPI / Pytest / SqlAlchemy / PostgreSQL</li>
                  </ul>
                  <p className="leading-tight text-justify">
                    July 2021 ~ November 2021
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
                  <h3 className="font-semibold text-lg mb-1 text-gray-400">ITOCHU Techno-Solutions Corporation</h3>
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
                  <h3 className="font-semibold text-lg mb-1 text-gray-400">Interspace Co.,Ltd (Internship)</h3>
                  <ul className="text-sm mb-1 text-gray-400">
                    <li>as Backend Engineer - PHP / Laravel / CodeIgniter / Vagrant</li>
                  </ul>
                  <p className="leading-tight text-justify">
                    July 2015 ~ June 2016
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

export default Careers
