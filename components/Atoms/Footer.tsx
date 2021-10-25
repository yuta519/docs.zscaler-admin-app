import Link from 'next/link'

function Footer() {
    return (
        <>
            <footer className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
                <div className="container px-6 mx-auto space-y-6 divide-y divide-coolGray-400 md:space-y-12 divide-opacity-50">
                    <div className="grid grid-cols-12">
                        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <a href="#" className="flex justify-center space-x-3 md:justify-start">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-coolGray-900">
                                        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                    </svg>
                                </div>
                                <span className="self-center text-2xl font-semibold">Brand name</span>
                            </a>
                        </div>
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Projects</p>
                            <ul>
                                <li>
                                    <Link href="zscaler-admin-app">zscaler-admin-app</Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Category</p>
                            <ul>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:dark:text-violet-400">Link</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="grid justify-center pt-6 lg:justify-between">
                        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>©2021 All rights reserved</span>
                            <a href="#">
                                <span>Privacy policy</span>
                            </a>
                            <a href="#">
                                <span>Terms of service</span>
                            </a>
                        </div>
                        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                            <a href="https://github.com/yuta519" title="Github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/yuta519/" title="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer