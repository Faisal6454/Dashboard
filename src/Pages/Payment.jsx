import React from 'react';
import img from '../Asset/img.png';

import plogo from '../Asset/p-logo.png';
import pen from '../Asset/pen-logo.png';
import card from '../Asset/card-image-standard-credit-card 1.png';
import Bag from '../Asset/$-bag.png';
import Bin from '../Asset/Bin.png';
import Clogo from '../Asset/C-logo.png';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Payment = () => {
  return (
    <>
      <div class="flex-1 flex flex-wrap bg-gray-100 absolute" id="Dashboard">
        <div class="flex-1 p-4 w-full md:w-1/2">
          <div class="flex flex-1 items-center" id="Serchbar">
            <h1 class=" text-4xl text-black font-bold p-4">
              Creators information
            </h1>

            <span class="flex items-center gap-3">
              <img class="cursor-pointer" src={img} alt="img" />
              <h2 class="font-semibold">James Courtney</h2>
            </span>
          </div>
          <hr />

          <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <div class="flex-1 p-4 rounded-lg md:w-1/2">
              <div class="my-1"></div>

              {/* <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>  */}

              <div class="chart-container flex flex-1">
                <div
                  id="P-Card"
                  class="flex flex-1 rounded-md shadow justify-between p-2 "
                >
                  <div id="P-Card-Innr">
                    <h4 className="mb-3"> Current Balance</h4>
                    <h1 className="mb-3 text-4xl font-bold">$200/00</h1>
                    <h4 className="mb-3">Due Date</h4>
                    <button className="text-lg font-medium bg-white black btn hover:text-black">
                      Withdrawal
                    </button>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                  >
                    <circle
                      cx="23"
                      cy="23"
                      r="23"
                      fill="white"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M33.9216 20.5276C33.8264 20.251 33.6471 20.007 33.406 19.8259C33.1649 19.6448 32.8726 19.5345 32.5655 19.5089L26.7339 19.0348L24.4479 13.9083C24.3289 13.6393 24.1282 13.4095 23.871 13.2479C23.6138 13.0862 23.3116 13 23.0025 13C22.6935 13 22.3913 13.0862 22.1341 13.2479C21.8769 13.4095 21.6761 13.6393 21.5571 13.9083L19.2781 19.0348L13.4395 19.5117C13.1312 19.5361 12.8375 19.6459 12.595 19.8271C12.3526 20.0084 12.1723 20.2531 12.0768 20.5306C11.9812 20.8081 11.9747 21.1061 12.058 21.3871C12.1413 21.6681 12.3107 21.9196 12.545 22.1102L16.9745 25.7606L15.6469 31.1816C15.5767 31.4653 15.5967 31.7622 15.7045 32.0352C15.8122 32.3082 16.0029 32.5452 16.2527 32.7166C16.5025 32.8879 16.8004 32.986 17.109 32.9986C17.4176 33.0112 17.7233 32.9377 17.9878 32.7874L22.9957 29.9166L28.0143 32.7874C28.2788 32.9377 28.5845 33.0112 28.8931 32.9986C29.2017 32.986 29.4996 32.8879 29.7494 32.7166C29.9992 32.5452 30.1899 32.3082 30.2976 32.0352C30.4054 31.7622 30.4254 31.4653 30.3552 31.1816L29.0286 25.755L33.4571 22.1102C33.6914 21.9189 33.8604 21.6667 33.9431 21.3851C34.0257 21.1035 34.0182 20.8052 33.9216 20.5276ZM32.4271 20.9906L27.9986 24.6355C27.783 24.8123 27.6227 25.0412 27.5348 25.2975C27.4469 25.5538 27.4348 25.8279 27.4998 26.0903L28.8303 31.5205L23.8156 28.6498C23.5709 28.5093 23.29 28.435 23.0035 28.435C22.717 28.435 22.4361 28.5093 22.1915 28.6498L17.1836 31.5205L18.5053 26.094C18.5702 25.8316 18.5581 25.5575 18.4702 25.3012C18.3823 25.0449 18.222 24.816 18.0065 24.6392L13.576 20.9961C13.5757 20.9934 13.5757 20.9906 13.576 20.9878L19.4126 20.5118C19.6976 20.4881 19.9702 20.3915 20.2013 20.2324C20.4323 20.0733 20.6128 19.8577 20.7235 19.6089L23.0025 14.4889L25.2806 19.6089C25.3912 19.8577 25.5718 20.0733 25.8028 20.2324C26.0338 20.3915 26.3065 20.4881 26.5915 20.5118L32.429 20.9878V20.9943L32.4271 20.9906Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div>
                  {" "}
                  <div
                    id="P-Card-2"
                    class="flex flex-1 rounded-md shadow justify-between p-2"
                  >
                    <div id="P-Card-Innr-2">
                      <h4 className="mb-3">Next Payment</h4>
                      <h1 className="mb-3 text-4xl font-bold">$200/00</h1>
                      <h4 className="mb-3">On August 20, 2023</h4>
                      <button className="text-lg font-medium btn" id="icone">
                        Manage Payment
                      </button>
                    </div>
                    <svg
                      className="relative"
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <circle
                        cx="23"
                        cy="23"
                        r="23"
                        fill="url(#paint0_linear_685_8732)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_685_8732"
                          x1="-0.0740732"
                          y1="32.285"
                          x2="47.689"
                          y2="25.1615"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F0C2D5" />
                          <stop offset="1" stop-color="#BDABDA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <img
                      src={plogo}
                      alt="logo"
                      className="text-black"
                      id="icone-2"
                    />
                  </div>
                </div>

                <canvas id="usersChart"></canvas>
              </div>
            </div>

            <div class="flex-1 p-4  rounded-lg md:w-1/2">
              <div class="my-1"></div>

              <div class="chart-container">
                <div id="bg-box">
                  <div className="flex items-center justify-between flex-1 cursor-pointer">
                    <h1>Payment information</h1>
                    <img src={pen} alt="logo" id="pen" />
                  </div>
                  <div className="flex flex-1 mt-3">
                    <div className="px-2">
                      <img src={card} alt="img" />
                    </div>
                    <div>
                      <p>
                        MasterCard <span>/5412</span>
                      </p>
                      <p>
                        Expiry Date <span>/12/23</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* ======= bg-2 */}

                <div id="bg-box">
                  <div>
                    <h1>Recent Recipient</h1>
                    <hr />
                  </div>
                  <div className="flex flex-1 items-center mt-2">
                    <div className="px-2">
                      <img className="w-6 h-6" src={img} alt="img" />
                    </div>
                    <div>
                      <h1 className="text-xs font-semibold">James Courtney</h1>
                      <p className="text-xs font-extralight">
                        A/C: 5412 7512 3412 3254
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="px-2">
                      <img className="w-6 h-6" src={img} alt="img" />
                    </div>
                    <div>
                      <h1 className="text-xs font-semibold">James Courtney</h1>
                      <p className="text-xs font-extralight">
                        A/C: 5412 7512 3412 3254
                      </p>
                    </div>
                  </div>
                </div>

                {/*==========bg-3  */}

                <div id="bg-box">
                  <div className="flex flex-1 items-center justify-between">
                    <h1>Recent invoice</h1>
                    <p className="cursor-pointer ml-5 text-sm font-extralight">
                      + Create New
                    </p>
                    <hr />
                  </div>
                  <div className="">
                    <div className="px-2 flex flex-1 items-center gap-3">
                      <img className="w-6 h-6" src={Bag} alt="img" />
                      <span className="font-semibold text-sm">
                        <p className="font-extralight text-xs">invoice #22</p>{" "}
                        $175.00
                      </span>
                      <img
                        src={Bin}
                        alt="logo"
                        className="cursor-pointer ml-24"
                      />
                    </div>
                    <div className="px-2 flex flex-1 items-center gap-3">
                      <img className="w-6 h-6" src={Bag} alt="img" />
                      <span className="font-semibold text-sm">
                        <p className="font-extralight text-xs">invoice #22</p>{" "}
                        $175.00
                      </span>
                      <img
                        src={Bin}
                        alt="logo"
                        className="cursor-pointer ml-24"
                      />
                    </div>
                  </div>
                </div>
                <canvas id="commercesChart"></canvas>
              </div>
            </div>
          </div>

          <div class="p-4 rounded-lg" id="Creators">
            <div id="Creators-1">
              <h1 className="font-bold text-2xl">Transaction History</h1>

              <div
                className="flex flex-1 items-center p-4 mt-4 justify-between bg-white shadow rounded-md w-2/4 h-8"
                id="bg-line"
              >
                <h3>Amount</h3>
                <h3>Status</h3>
                <h3>Recipient</h3>
                <h3>Date</h3>
                <h3>Payment Method</h3>
              </div>

              {/*Drop Down Menu-  Bar-1  */}

              <Menu as="div" className="relative inline-block text-left mt-4 ">
                <div>
                  <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <div
                      className="flex flex-1 items-center p-2 px-4 justify-between gap-10 w-2/4 h-8"
                      id="bg-line"
                    >
                      <h3>$ 200.00</h3>
                      <p className="text-yellow-300">Pending</p>
                      <span className="flex flex-1 items-center">
                        <img className="w-8" src={img} alt="img" />{" "}
                        <p className="font-extralight text-xs">James Curtney</p>
                      </span>
                      <h3>Aug 20,2023</h3>
                      <span className="flex flex-1 items-center">
                        <img className="w-8" src={Clogo} alt="logo" />
                        <p>5412</p>
                      </span>
                    </div>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute w-full left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Status
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              invoice Date
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Amount Due
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ======l2 */}
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Pending
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Aug 20, 2023
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              $ 200.00
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ======l3 */}
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              invoice Number
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Date Paid
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            ></a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ======l4 */}
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              EKG2SJFN
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Aug 20, 2023
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            ></a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ====== */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/*Drop Down Menu-  Bar-2  */}
              <br />
              <Menu as="div" className="relative inline-block text-left mt-4 ">
                <div>
                  <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <div
                      className="flex flex-1 items-center p-2 px-4 justify-between gap-10 w-2/4 h-8"
                      id="bg-line"
                    >
                      <h3>$ 175.00</h3>
                      <p>Completed</p>
                      <span className="flex flex-1 items-center">
                        <img className="w-8" src={img} alt="img" />{" "}
                        <p className="font-extralight text-xs">James Curtney</p>
                      </span>
                      <h3>Jul 18,2023</h3>
                      <span className="flex flex-1 items-center">
                        <img className="w-8" src={Clogo} alt="logo" />
                        <p>5412</p>
                      </span>
                    </div>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute w-full left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Status
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              invoice Date
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Amount Due
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ======l2 */}
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Completed
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Jul 22, 2023
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              $ 175.00
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ======l3 */}
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              invoice Number
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Date Paid
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            ></a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ======l4 */}
                      <div className="flex flex-1 justify-between">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              EKG2SJFN
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Jul 22, 2023
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            ></a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              ></button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                      {/* ====== */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <button className="btn" id="icone">
              Commission Shop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment