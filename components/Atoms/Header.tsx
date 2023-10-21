import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const Header: React.VFC = () => {
  return <>
    <Head>
      <title>Yuta Kawamura</title>
      <meta property='og:title' content='My page title' key='title' />
      <meta
        name='google-site-verification'
        content='2IMfs74LH624CAzts4g8FSpFjelnqnbqgkKldVaGZFg'
      />
    </Head>
    <div className='top-0'>
      <header>
        <title>Yuta Kawamura</title>
      </header>
      <nav className='bg-white shadow-lg'>
        <div className='mx-auto px-4'>
          <div className='flex justify-between'>
            <div className='flex space-x-7'>
              <div>
                <Link href='/' className='flex items-center py-4 px-2'>

                  <span className='font-semibold text-gray-500 text-lg'>
                    Yuta Kawamura
                  </span>

                </Link>
              </div>
            </div>
            <div className='hidden md:flex items-center space-x-3 '>
              <Link href='/ja-jp'>日本語</Link>
              <Link href='/'>English</Link>
            </div>
            <div className='md:hidden flex items-center'>
              <Menu as='div' className='relative inline-block text-left'>
                <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                  <svg
                    className=' w-6 h-6 text-gray-500 hover:text-green-500 '
                    x-show='!showMenu'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M4 6h16M4 12h16M4 18h16'></path>
                  </svg>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <Link href='/'>English</Link>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <Link href='/ja-jp'>日本語</Link>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </>;
};

export default Header;
