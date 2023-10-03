import React from 'react';
import '../index.css';

import Bar from '../Components/Bar';
import Data from './Data.json';

const Analysis = () => {
  return (
    
    <>
    
    <div class="flex-1 flex flex-wrap bg-gray-100 absolute" id='Dashboard'>
        

      
    <div class="flex-1 p-4 w-full md:w-1/2">
       
        <div class="relative max-w-md w-full">
            <div class="absolute top-1 left-2 inline-flex items-center p-2">
                <i class="fas fa-search text-gray-400"></i>
            </div>
            <h1 className="p-4 text-4xl font-bold text-black ">Analysis</h1>

            {/* <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search..." /> */}
        </div>
<hr />
           
        <div class="mt-8 flex xl:flex-nowrap lg:flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
          
            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 class="text-gray-500 text-lg font-semibold pb-1">Users</h2>
                <div class="my-1"></div>
                 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                
                <div class="chart-container" id='chart-bg'>
                <Bar data={Data} />
                   
                    <canvas id="usersChart"></canvas>
                </div>
            </div>
            {/* <h5 className="flex flex-1">Date <p>Aug 10,2023</p></h5> */}
         
         
            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
               <span className="flex items-center justify-between flex-1"><h2 class="text-gray-500 text-lg font-semibold pb-1">Earnings</h2> <p className="text-lg font-extrabold">3.5K</p> </span> 
                <div class="my-1"></div> 
               
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                
                <div class="chart-container">
                <Bar data={Data} />
                   
                    <canvas id="commercesChart"></canvas>
                </div>
            </div>
        </div>

<div className="flex items-center flex-1 " id='Date'>
    <h4 className="font-semibold">Date <p>Aug 10,2023</p></h4>
    <h4 className="font-semibold">Date <p>Aug 10,2023</p></h4>
</div>
       
        <div class="mt-8 bg-white p-4 shadow rounded-lg" id='Creators'>
            <h2 class="text-gray-500 text-lg font-semibold pb-4"> Creators</h2>
            <div  id='Creators-1'>
            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>   
            <Bar data={Data} />
                </div> 
         
        </div>

          <div className="flex items-center flex-1 " id='Date'>
    <h4 className="font-semibold">Date <p>Aug 10,2023</p></h4>
   
</div>
        
    </div>
</div>
</>

  );
};

export default Analysis;