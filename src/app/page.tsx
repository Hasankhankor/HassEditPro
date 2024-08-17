'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Importing the edit icon from react-icons

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="bg-gray-50">
        <header className="relative z-10 py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
  <a href="#" title="">
    <Image
      className="w-auto h-8"
      src="https://ik.imagekit.io/os33grffu/Black_White_Bold_Modern_Studio_Logo-removebg-preview.png?updatedAt=1723915793054"
      alt="Logo"
      layout="intrinsic" // or "responsive"
      width={162}
      height={162}
      quality={100} // Increase quality for sharper images
    />
  </a>
</div>


              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-900"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                >
                  {expanded ? (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Features
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Pricing
                </a>


              </div>

              <div className="hidden md:flex">
                <a
                  href="/editor"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-purple-500 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Try for free
                </a>
              </div>
            </div>

            {expanded && (
              <nav>
                <div className="px-1 py-8">
                  <div className="grid gap-y-7">
                    <a
                      href="#"
                      title=""
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      title=""
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      title=""
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      Support
                    </a>

                    <a
                      href="/editor"
                      title=""
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Try for free
                    </a>
                  </div>
                </div>
              </nav>
            )}
          </div>
        </header>

        <section className="relative py-12 sm:py-16 lg:pb-40">


          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
              <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  An <span className="text-purple-500"> Editor </span>
                   that helps you Edit Videos.
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
                </p>

                <a
                  href="/editor"
                  title=""
                  className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Try our free editor
                </a>

                <div className="mt-8 sm:mt-16">
                  <div className="flex items-center justify-center lg:justify-start">
                    {/* Stars */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-2 text-base font-bold text-gray-900 font-pj">
                    Rated 4.9 out of 5 stars from over 300 reviews.
                  </p>
                </div>
              </div>

              <div className="relative glow-effect">
  <Image
    className="relative z-10 object-cover w-full mx-auto max-w-lg rounded-xl shadow-xl lg:rounded-none lg:max-w-none"
    src="https://ik.imagekit.io/os33grffu/01b4GWdIDy2hlLfEmihhSbv-1..v1678307759-removebg-preview.png?updatedAt=1723915190837"
    alt="Hero Image"
    width={500}
    height={500}
  />
  <div className="absolute -inset-x-0 bottom-0 flex items-end justify-center overflow-hidden transform translate-x-0 translate-y-0 bg-gradient-to-t from-white to-transparent h-2/3">
    <FaEdit className="text-white w-12 h-12" />
  </div>
</div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
