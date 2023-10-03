import React from 'react';


import img from '../Asset/img.png';
import pen from '../Asset/pen-logo.png';

const Settings = () => {
  return (
    <>
      <div class="flex-1 flex flex-wrap absolute" id="Dashboard">
        <div class="flex-1 p-4 w-full md:w-1/2">
          <div class="relative max-w-md w-full">
            
            <h4 className=" text-4xl text-black font-bold p-4">
              Account Settings
            </h4>

            {/* <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search..." /> */}
          </div>
          <hr />

          <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            {/* side - 1 */}
            <div class="flex-1 p-4  rounded-lg md:w-1/2" id="f-side-1">
              <div class="my-1"></div>

              {/* <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> */}

              <div
                class="chart-container lg:border-r-2 border-gray-600"
                id="left-side"
              >
                <button className="btn mb-5" id="icone">
                  My Profile
                </button>
                <h1 className="mb-4">Security</h1>
                <h1 className="mb-4">Teams</h1>
                <h1 className="mb-4">Notifications</h1>
                <h1 className="mb-5">Billing</h1>
                <p className="text-red-500 font-normal cursor-pointer">
                  Delete Account
                </p>

                <canvas id="usersChart"></canvas>
              </div>
            </div>

            {/* side - 2  */}

            <div class="flex-1 p-2 rounded-lg md:w-1/2" id="f-side-2">
              <h1 className="text-xl font-semibold">My Profile</h1>
              <div class="my-1"></div>

              <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

              <div class="chart-container">
                <div className="row">
                  <div className=" col-12 flex items-center justify-between gap-x-96">
                    <span className="flex flex-1 items-center gap-2">
                      {" "}
                      <img src={img} alt="pro-img" />
                      James Courtney
                    </span>
 
                   <button id="right-btn" className="btn flex flex-1 items-center gap-2 ">
                    Edit <img src={pen} alt="logo" />
                  </button> 
                  </div>

                  <div className="col-md-10">
                    <h1 className="font-semibold text-base mt-2">
                      Personal information
                    </h1>

                    <form>
                      <div class="form-row flex flex-1 items-center gap-5 w-2/3 mt-4">
                        <div class="col-6">
                          <label for="validationTextarea">Name</label>
                          <input
                            type="text"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>
                        <div class="col-6  rounded-md">
                          <label for="validationTextarea">UserName</label>
                          <input
                            type="text"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>

                        <button
                          id="right-btn"
                          className="btn flex flex-1 items-center gap-2"
                        >
                          Edit <img src={pen} alt="logo" />
                        </button>
                      </div>

                      <div class="form-row flex flex-1 items-center gap-5 w-2/3 mt-4">
                        <div class="col-6  rounded-md">
                          <label for="validationTextarea">Email </label>
                          <input
                            type="email"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>
                        <div class="col-6  rounded-md">
                          <label for="validationTextarea">Password</label>
                          <input
                            type="password"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div class="mt-4 w-2/3 rounded-md">
                        <label for="validationTextarea">Bio</label>
                        <textarea
                          class="form-control shadow-md rounded-md bg-white h-36"
                          id="validationTextarea"
                          placeholder="Required example text"
                          required
                        ></textarea>
                      </div>

                      <h1 className="text-base font-semibold mt-5">Address</h1>

                      <div class="form-row flex flex-1 items-center gap-5 w-2/3 mt-4">
                        <div class="col-6">
                          <label for="validationTextarea">Country</label>
                          <input
                            type="text"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>
                        <div class="col-6  rounded-md">
                          <label for="validationTextarea">City / State</label>
                          <input
                            type="text"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>

                        <button
                          id="right-btn"
                          className="btn flex flex-1 items-center gap-2"
                        >
                          Edit <img src={pen} alt="logo" />
                        </button>
                      </div>

                      <div class="form-row flex flex-1 items-center gap-5 w-2/3 mt-4">
                        <div class="col-6  rounded-md">
                          <label for="validationTextarea">Postal Code</label>
                          <input
                            type="email"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>
                        <div class="col-6  rounded-md">
                          <label for="validationTextarea">TAX ID</label>
                          <input
                            type="password"
                            class="form-control shadow-md rounded-md bg-white"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <canvas id="commercesChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings
