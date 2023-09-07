import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AddMenuBox from './designComponents.tsx/addMenuBox';
import getdate from './models/Date';
import { FaCaretSquareDown } from 'react-icons/fa';
export default function Admin(props:{data:string[],count:number,id:string,name:string,apiMenu:string[]}) {
   const [monthData,setmonthData]=useState([]);
   const [isDropDownActive,setDropDownActive]=useState(false)
//    useEffect(()=>{axios.get('/.netlify/functions/monthlyCount')
// .then(response=>{console.log(response.data);
//    setmonthData(response.data)})},[isDropDownActive])
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
      <div className='flex gap-5 justify-center items-center'>
      <div className='min-w-[100px] bg-black text-white rounded-r-lg p-2 -ml-3'>Hello, {props.name}</div>
      <button className='text-black font-bold hover:text-[#635e5e]' onClick={homeClick}>Home</button>
      </div>
      <div className='flex items-center gap-4'>
      <button className={`font-semibold p-2 rounded-md ${isDropDownActive?'bg-slate-500 text-white':'bg-slate-300'}`}>
       <div className="flex gap-2 items-center " onClick={changeDropDown}>
        <div>Billing</div>
       </div>
      </button>
      <div className='h-full  w-[2px] bg-black'></div>

      <button className='font-bold bg-slate-300 p-2 rounded-md active:bg-slate-400 active:text-white' onClick={handleLogout}>Logout</button>
      </div>
   </div>  
    <div className='flex justify-center mt-10 '>
    <AddMenuBox menuData={props.data} apiMenu={props.apiMenu} />
    </div>
    <div className='mt-5 w-[500px] m-auto flex justify-center bg-blue-500 p-2'>
   <div className='font-semibold'>Count-{props.count}</div>
      </div>
      {/* {isDropDownActive&&<Table data={monthData}/>} */}
 </div>
}