import React from 'react';
import '../index.css';
import img from '../Asset/img.png';

import { TfiSearch } from "react-icons/tfi";


const Users = () => {
  return (
    
    <>
    
    
    <div class="flex-1 flex flex-wrap bg-gray-100 absolute" id='Dashboard'>
       

     
       <div class="flex-1 p-4 w-full md:w-1/2">
          
           <div className="relative flex flex-1 items-center  w-full"  id='Serchbar'>
              
               <h1 className=" text-4xl text-black font-bold p-4">Users</h1>

               <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-white shadow rounded-lg" id='icone' type="submit"> <TfiSearch /></button>
     
    </form>
    </div>
<hr />
              
           

          
           <div class="mt-8 bg-white p-4 shadow rounded-lg">
             {/* <h2 class="text-gray-500 text-lg font-semibold pb-4">List of Top Creators</h2> */}
              
              <div className="flex flex-1" id='dubble-btn'>
              <button className="btn" id='icone'>Active</button>
              <button className="btn shadow border">Inactive</button>
              </div>
              
               <div class="my-1"></div> 
            
               <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
               
               <table class="w-full table-auto text-sm">
                  
                   <tbody>
                       <tr class="hover:bg-grey-lighter">
                           <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light"><img src={img} alt="Foto Perfil" class="rounded-full h-10 w-10" />James Courtney</td>
                           <td class="py-2 px-4 border-b border-grey-light">Oct 01,2023</td>
                           <td class="py-2 px-4 border-b border-grey-light">Subscribe Date</td>
                           <td class="py-2 px-4 border-b border-grey-light"><span>123.2K<p>Subscribe</p></span> </td>
                           <button className="btn  py-2 px-3 border-b border-grey-light shadow">View Details</button>
                       </tr>
                      
                       <tr class="hover:bg-grey-lighter">
                           <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light"><img src={img} alt="Foto Perfil" class="rounded-full h-10 w-10" />James Courtney</td>
                           <td class="py-2 px-4 border-b border-grey-light">Oct 01,2023</td>
                           <td class="py-2 px-4 border-b border-grey-light">Subscribe Date</td>
                           <td class="py-2 px-4 border-b border-grey-light"><span>123.2K<p>Subscribe</p></span> </td>
                           <button className="btn  py-2 px-3 border-b border-grey-light shadow">View Details</button>
                       </tr>
                       
                       <tr class="hover:bg-grey-lighter">
                           <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light"><img src={img} alt="Foto Perfil" class="rounded-full h-10 w-10" />James Courtney</td>
                           <td class="py-2 px-4 border-b border-grey-light">Oct 01,2023</td>
                           <td class="py-2 px-4 border-b border-grey-light">Subscribe Date</td>
                           <td class="py-2 px-4 border-b border-grey-light"><span>123.2K<p>Subscribe</p></span> </td>
                           <button className="btn  py-2 px-3 border-b border-grey-light shadow">View Details</button>
                       </tr>
                       <tr class="hover:bg-grey-lighter">
                           <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light"><img src={img} alt="Foto Perfil" class="rounded-full h-10 w-10" />James Courtney</td>
                           <td class="py-2 px-4 border-b border-grey-light">Oct 01,2023</td>
                           <td class="py-2 px-4 border-b border-grey-light">Subscribe Date</td>
                           <td class="py-2 px-4 border-b border-grey-light"><span>123.2K<p>Subscribe</p></span> </td>
                           <button className="btn  py-2 px-3 border-b border-grey-light shadow">View Details</button>
                       </tr>
                       <tr class="hover:bg-grey-lighter">
                           <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light"><img src={img} alt="Foto Perfil" class="rounded-full h-10 w-10" />James Courtney</td>
                           <td class="py-2 px-4 border-b border-grey-light">Oct 01,2023</td>
                           <td class="py-2 px-4 border-b border-grey-light">Subscribe Date</td>
                           <td class="py-2 px-4 border-b border-grey-light"><span>123.2K<p>Subscribe</p></span> </td>
                           <button className="btn  py-2 px-3 border-b border-grey-light shadow">View Details</button>
                       </tr>
                       <tr class="hover:bg-grey-lighter">
                           <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light"><img src={img} alt="Foto Perfil" class="rounded-full h-10 w-10" />James Courtney</td>
                           <td class="py-2 px-4 border-b border-grey-light">Oct 01,2023</td>
                           <td class="py-2 px-4 border-b border-grey-light">Subscribe Date</td>
                           <td class="py-2 px-4 border-b border-grey-light"><span>123.2K<p>Subscribe</p></span> </td>
                           <button className="btn  py-2 px-3 border-b border-grey-light shadow">View Details</button>
                       </tr>
                       <tr class="hover:bg-grey-lighter">
                           <td class="flex items-center gap-3 py-2 px-4 border-b border-grey-light"><img src={img} alt="Foto Perfil" class="rounded-full h-10 w-10" />James Courtney</td>
                           <td class="py-2 px-4 border-b border-grey-light">Oct 01,2023</td>
                           <td class="py-2 px-4 border-b border-grey-light">Subscribe Date</td>
                           <td class="py-2 px-4 border-b border-grey-light"><span>123.2K<p>Subscribe</p></span> </td>
                           <button className="btn  py-2 px-3 border-b border-grey-light shadow">View Details</button>
                       </tr>
                   </tbody>
               </table>
               

           </div>   
            <button className="btn mt-5" id='icone'>Load More</button>     
       </div>
   </div>
</>

  );
};

export default Users;