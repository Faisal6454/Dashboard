import React from 'react'
import './Home.css';

import logo from '../Asset/logo.png'
import { BsColumnsGap} from "react-icons/bs";
import { FaFileContract } from "react-icons/fa6";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";



const Home = () => {

  const Chart = () => {

 
 var usersChart = new Chart(document.getElementById('usersChart'), {
  type: 'doughnut',
  data: {
      labels: ['Nuevos', 'Registrados'],
      datasets: [{
          data: [30, 65],
          backgroundColor: ['#00F0FF', '#8B8B8D'],
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          position: 'bottom' 
      }
  }
});


var commercesChart = new Chart(document.getElementById('commercesChart'), {
  type: 'doughnut',
  data: {
      labels: ['Nuevos', 'Registrados'],
      datasets: [{
          data: [60, 40],
          backgroundColor: ['#FEC500', '#8B8B8D'],
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          position: 'bottom' 
      }
  }
});


const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

menuBtn.addEventListener('click', () => {
  sideNav.classList.toggle('hidden'); 

});

  };

  return (
    <>
{/* <!-- component --> */}

<div className="fixed flex bg-gray-100 screen flex-col">

    <div class="p-4 w-full md:w-60 flex flex-col md:flex" id="sideNav">

 <div class="text-white  w-full p-2 flex items-center justify-center">
        <div class="flex items-center">
            <div class="flex items-center mb-4"> 
            
                <img src={logo} alt="Logo" class="w-28 h-18 mr-2" />
                <h2 class="font-bold text-xl">UnMasked</h2>
              
            </div>
         
            
            <div class="md:hidden flex items-center"> 
           
                <button id="menuBtn" className="menuBtn">
                    <i class="fas fa-bars text-gray-500 text-lg"></i> 
                    {/* <!-- Icon  menu --> */}
                </button>
            </div>
        </div>

        {/* <!-- Icon Notification y Profile --> */}
        <div class="space-x-5">
            <button>
                <i class="fas fa-bell text-gray-500 text-lg"></i>
            </button>
            {/* <!-- Button  Profile --> */}
            <button>
                <i class="fas fa-user text-gray-500 text-lg"></i>
            </button>
        </div>
    </div>


            <nav>
                <a class=" text-white py-2.5 px-5 my-4 hover:text-black flex gap-4 items-center text-xl font-semibold" href="dashboard">
                    <  BsColumnsGap /> Dashboard
                </a>
                <a class="text-white py-2.5 px-5 my-4  hover:text-black flex gap-4 items-center text-xl font-semibold" href="analysis">
                  <FaFileContract /> Analysis
                </a>
                <a class="text-white py-2.5 px-5 my-4  hover:text-black flex gap-4 items-center text-xl font-semibold" href="users">
                  <FaUser />  User
                </a>
                <a class="text-white py-2.5 px-5 my-4  hover:text-black flex gap-4 items-center text-xl font-semibold" href="creators">
                  < FaUserGear />   Creators
                </a>
                <a class="text-white py-2.5 px-5 my-4  hover:text-black flex gap-4 items-center text-xl font-semibold" href="payment">
                  <FaCcAmazonPay />  Payment
                </a>
                <a class="text-white py-2.5 px-5 my-4  hover:text-black mt-auto flex gap-4 items-center text-xl font-semibold" href="settings">
              <AiFillSetting />   Settings
            </a>
            </nav>

           
        
        </div>
</div>

    </>
  )
}

export default Home
