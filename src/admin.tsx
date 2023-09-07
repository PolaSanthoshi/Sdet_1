import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AddMenuBox from './designComponents.tsx/addMenuBox';
import getdate from './models/Date';
export default function Admin(props:{data:string[],count:number,id:string,name:string,apiMenu:string[]}) {
   const [monthData,setmonthData]=useState([]);
   const [isDropDownActive,setDropDownActive]=useState(false)
   useEffect(()=>{axios.get('/.netlify/functions/monthlyCount')
.then(response=>{console.log(response.data);
   setmonthData(response.data)})},[isDropDownActive])
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
   function changeDropDown(){
      setDropDownActive(!isDropDownActive)
}
 return <div className='adminBg bg-cover min-h-screen w-full '>
   <div className='flex bg-blue-400 justify-between p-3 '>
      <div className='flex md:gap-5 gap-2 justify-center items-center'>
      <div className='min-w-[100px] bg-black text-white rounded-r-lg p-2 -ml-3'>Hello, {props.name}</div>
      <button className='text-black font-bold text-sm  md:text-base active:text-[#635e5e]' onClick={homeClick}>Home</button>
      </div>
      <div className='flex items-center md:gap-4 gap-2'>
      <button className='font-bold bg-slate-300 p-2 rounded-md text-xs md:text-base'>Billing</button>
 
      <div className='h-full  w-[2px] bg-black'></div>

      <button className='font-bold bg-slate-300 p-2 rounded-md active:bg-slate-400  text-xs md:text-base active:text-white' onClick={handleLogout}>Logout</button>
      </div>
   </div>  
    <div className='flex justify-center mt-10 m-auto'>
    <AddMenuBox menuData={props.data} apiMenu={props.apiMenu} />
    </div>
    <div className='mt-5 w-[200px] m-auto flex justify-center bg-blue-500 p-2'>
   <div className='font-semibold'>Count-{props.count}</div>
      </div>
      {/* {isDropDownActive&&<Table data={monthData}/>} */}
 </div>
}