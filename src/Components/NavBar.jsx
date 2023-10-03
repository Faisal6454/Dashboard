import React from 'react';
import './NavBar.css';
import './Home.css';
import logo from '../Asset/logo.png';

import { BsColumnsGap } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa6";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";


const NavBar = () => {
  return (
    <>
      {/* <!-- This is an example component --> */}
      <div>
        <div class="flex overflow-hidden bg-white">
          <aside
            id="sidebar"
            class="fixed hidden z-20 h-full top-0 left-0 pt-10  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
          >
            <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200  pt-0">
              <div className="border-b">
                <span
                  className="flex flex-1 items-center ml-5 gap-2 mb-3 text-white font-bold text-xl"
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
                              xmlns="http://www.w3.org/2000/svg">
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
                        class="text-lg text-white font-normal rounded-lg flex items-center p-2 hover:bg-black group"
                      >
                        <BsColumnsGap className="text-xl font-bold" />
                        <span class="ml-3">Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="analysis"
                        target=""
                        class="text-lg text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <FaFileContract className="text-xl font-bold" />
                        <span class="ml-3 flex-1 whitespace-nowrap">
                          Analysis
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="users"
                        class="text-lg text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <FaUser className="text-xl font-bold" />
                        <span class="ml-3 flex-1 whitespace-nowrap">Users</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="creators"
                        target=""
                        class="text-lg text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <FaUserGear className="text-xl font-bold" />
                        <span class="ml-3 flex-1 whitespace-nowrap">
                          Creators
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="payment"
                        class="text-lg text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <FaCcAmazonPay className="text-xl font-bold" />
                        <span class="ml-3 flex-1 whitespace-nowrap">
                          Payment
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="settings"
                        class="text-lg text-white font-normal rounded-lg hover:bg-black flex items-center p-2 group "
                      >
                        <AiFillSetting className="text-xl font-bold" />
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
