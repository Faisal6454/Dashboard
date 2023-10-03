import React from 'react';
import Bar from '../Components/Bar';
import Data from '../Pages/Data.json';
import '../index.css'
import img from '../Asset/img.png'


const Dashboard = () => {
  return (
    <>
      <div
        class="flex flex-1 flex-wrap md:flex-nowrap absolute"
        id="Dashboard"
      >
        <div class="flex-1 p-4 w-full md:w-1/2">
          <div class="relative max-w-md w-full">
            <div class="absolute top-1 left-2 inline-flex items-center p-2">
              <i class="fas fa-search text-gray-400"></i>
            </div>
            <h1 className=" text-4xl text-black font-bold p-4">Dashboard</h1>

            {/* <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search..." /> */}
          </div>
          <hr />

          <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0 ">
            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
              <h2 class="text-gray-500 text-lg font-semibold pb-1">
                10K Users Increase
              </h2>
              <div class="my-1"></div>

              <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

              <div class="chart-container" id="chart-bg">
                <Bar data={Data} />

                <canvas id="usersChart"></canvas>
              </div>
            </div>
            {/* <h5 className="flex flex-1">Date <p>Aug 10,2023</p></h5> */}

            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
              <span className="flex flex-1 justify-between items-center">
                <h2 class="text-gray-500 text-lg font-semibold pb-1">
                  Total Users
                </h2>{" "}
                <p className="text-lg font-extrabold">3.5K</p>{" "}
              </span>
              <div class="my-1"></div>

              <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

              <div class="chart-container">
                <div className="scrollbar scrollbar-danger">
                  <div className="force-overflow" id="user-bg">
                    <div id="user-top">
                      <div id="user-top-dtl">
                        <img src={img} alt="img" />
                        <h5>James Courtney</h5>
                        <p>Oct 01,2023</p>
                      </div>

                      <div id="user-top-dtl">
                        <img src={img} alt="img" />
                        <h5>James Courtney</h5>
                        <p>Oct 01,2023</p>
                      </div>

                      <div id="user-top-dtl">
                        <img src={img} alt="img" />
                        <h5>James Courtney</h5>
                        <p>Oct 01,2023</p>
                      </div>

                      <div id="user-top-dtl">
                        <img src={img} alt="img" />
                        <h5>James Courtney</h5>
                        <p>Oct 01,2023</p>
                      </div>

                      <div id="user-top-dtl">
                        <img src={img} alt="img" />
                        <h5>James Courtney</h5>
                        <p>Oct 01,2023</p>
                      </div>

                      <div id="user-top-dtl">
                        <img src={img} alt="img" />
                        <h5>James Courtney</h5>
                        <p>Oct 01,2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                <canvas id="commercesChart"></canvas>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center " id="Date">
            <h4 className="font-semibold">
              Date <p>Aug 10,2023</p>
            </h4>
          </div>

          <div class="mt-8 bg-white p-4 shadow rounded-lg">
            <h2 class="text-gray-500 text-lg font-semibold pb-4">
              List of Top Creators
            </h2>
            <div class="my-1"></div>

            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

            <table class="w-full table-auto text-sm">
              <tbody>
                <tr class="hover:bg-grey-lighter">
                  <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light">
                    <img
                      src={img}
                      alt="profile pic"
                      class="rounded-full h-10 w-10"
                    />
                    James Courtney
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Oct 01,2023
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Subscribe Date
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    <span>
                      123.2K<p>Subscribe</p>
                    </span>{" "}
                  </td>
                  <button className="btn  py-2 px-3 border-b border-grey-light shadow">
                    View Details
                  </button>
                </tr>

                <tr class="hover:bg-grey-lighter">
                  <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light">
                    <img
                      src={img}
                      alt="profile pic"
                      class="rounded-full h-10 w-10"
                    />
                    James Courtney
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Oct 01,2023
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Subscribe Date
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    <span>
                      123.2K<p>Subscribe</p>
                    </span>{" "}
                  </td>
                  <button className="btn  py-2 px-3 border-b border-grey-light shadow">
                    View Details
                  </button>
                </tr>

                <tr class="hover:bg-grey-lighter">
                  <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light">
                    <img
                      src={img}
                      alt="profile pic"
                      class="rounded-full h-10 w-10"
                    />
                    James Courtney
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Oct 01,2023
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Subscribe Date
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    <span>
                      123.2K<p>Subscribe</p>
                    </span>{" "}
                  </td>
                  <button className="btn  py-2 px-3 border-b border-grey-light shadow">
                    View Details
                  </button>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light">
                    <img
                      src={img}
                      alt="profile pic"
                      class="rounded-full h-10 w-10"
                    />
                    James Courtney
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Oct 01,2023
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Subscribe Date
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    <span>
                      123.2K<p>Subscribe</p>
                    </span>{" "}
                  </td>
                  <button className="btn  py-2 px-3 border-b border-grey-light shadow">
                    View Details
                  </button>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light">
                    <img
                      src={img}
                      alt="profile pic"
                      class="rounded-full h-10 w-10"
                    />
                    James Courtney
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Oct 01,2023
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    Subscribe Date
                  </td>
                  <td class="py-2 px-4 border-b border-grey-light">
                    <span>
                      123.2K<p>Subscribe</p>
                    </span>{" "}
                  </td>
                  <button className="btn  py-2 px-3 border-b border-grey-light shadow">
                    View Details
                  </button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard