import React from 'react';
import img from '../Asset/img.png';



const Creators = () => {
  return (
    <>
    
    
<div class="flex-1 flex flex-wrap bg-gray-100 absolute" id='Dashboard'>
    <div class="flex-1 p-4 w-full md:w-1/2">          
       <div class="relative flex flex-1 items-center justify-between  w-full"  id='Serchbar'>         
          <div class="flex flex-1 items-center" id='Serchbar'>

        <h1 class=" text-4xl text-black font-bold p-4">Creators information</h1>

    <span class="flex items-center gap-3">
        <img class="cursor-pointer" src={img} alt="img" />
       <h2 class="font-semibold">James Courtney</h2>
    </span>

   </div>
</div>
<hr />
              
                     
<div class="mt-8 bg-white p-4 shadow rounded-lg">

    <div class="my-1"></div> 
        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
               
        <form class="row">
        <div class="row g-3">
  <div class="col">
    <label for="inputName" class="form-label">Name</label>
    <input type="text" class="form-control" placeholder="" aria-label="Name" />
  </div>
  <div class="col">
  <label for="inputUserName" class="form-label">UserName</label>
    <input type="text" class="form-control" placeholder="" aria-label="UserName" />
  </div>
</div>
<div class="col-md-6 mt-5">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6 mt-5">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="mt-5">
    <label For="inputBio" class="form-label">Bio</label>
  <textarea class="form-control h-48 " placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  
</div>
        </form>       

           </div>   
            <button class="btn mt-5" id='icone'>Load More</button>     
       </div>
   </div>
</>
  )
}

export default Creators