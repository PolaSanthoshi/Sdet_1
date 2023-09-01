import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AddMenuBox from './designComponents.tsx/addMenuBox';
import getdate from './models/Date';
export default function Admin(props:{data:string[],count:number,id:string,name:string}) {
   const router=useRouter();
   const name=props.name;
   function handleLogout(){
       axios.get('.netlify/functions/logout')
      .then(list=>{console.log(list.data)
      router.push('/')}) 
   }
   function homeClick(){
      router.push('/home')
   }
 return <div className='adminBg bg-cover h-screen w-full'>
   <div className='flex bg-blue-400 justify-between p-3 '>
      <div className='flex gap-5 justify-center items-center'>
      <div className='min-w-[100px] bg-black text-white rounded-r-lg p-2 -ml-3'>Hello ,{props.name}</div>
      <button className='text-black font-bold hover:text-[#635e5e]' onClick={homeClick}>Home</button>
   
      </div>
      <div className='flex items-center gap-4'>
      <div className='font-semibold'>Date : {getdate()}</div>
      <div className='h-full  w-[2px] bg-black'></div>

      <button className='font-bold bg-slate-300 p-2 rounded-md' onClick={handleLogout}>Logout</button>
      </div>
   </div>
    <div className='flex justify-center mt-10 '>
    <AddMenuBox menuData={props.data} />
    </div>
    <div className='mt-5 w-[500px] m-auto flex justify-center bg-blue-500 p-2'>
   <div className='font-semibold'>Count-{props.count}</div>
      </div>
 </div>
}