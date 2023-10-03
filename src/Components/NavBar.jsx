import React from 'react';
import './NavBar.css';
import './Home.css';
import logo from '../Asset/logo.png';

const NavBar = () => {
  return (
    <>
      {/* <!-- This is an example component --> */}
      <div>
        <div class="flex overflow-hidden bg-white">
          <aside
            id="sidebar"
            class="fixed hidden z-20 h-full top-0 left-0 pt-10 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
          >
            <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200  pt-0">
              <div className="border-b">
                <span
                  className="flex flex-1 items-center ml-5 gap-2 mb-3"
                  id="side-pro"
                >
                  <img src={logo} alt="pro-img" />
                  UnMasked
                </span>
              </div>
              <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3  divide-y space-y-1">
                  <ul class="space-y-2 pb-2">
                    <li>
                      {/* <form action="#" method="GET" class="lg:hidden">
                        <label for="mobile-search" class="sr-only">
                          Search
                        </label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              class="w-5 h-5 text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="email"
                            id="mobile-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                            placeholder="Search"
                          />
                        </div>
                      </form> */}
                    </li>
                    <li>
                      <a
                        href="/dashboard"
                        class="text-base text-white font-normal rounded-lg flex items-center p-2 hover:bg-black group"
                      >
                        <svg
                          class="w-6 h-6 text-white group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="analysis"
                        target=""
                        class="text-base text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <svg
                          class="w-6 h-6 text-white flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">
                          Analysis
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="creators"
                        target=""
                        class="text-base text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <svg
                          class="w-6 h-6 text-white flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">Creators</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="users"
                        class="text-base text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <svg
                          class="w-6 h-6 text-white flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">Users</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="payment"
                        class="text-base text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <svg
                          class="w-6 h-6 text-white flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">
                          Payment
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="settings"
                        class="text-base text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <svg
                          class="w-6 h-6 text-white flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">
                          Settings
                        </span>
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
      </div>
    </>
  );
}

export default NavBar