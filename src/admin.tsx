import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import AddMenuBox from './designComponents.tsx/addMenuBox';
import LogoutButton from './designComponents.tsx/logOutButton';
import { FaCheck } from 'react-icons/fa';
import PopUp from './designComponents.tsx/popUp';
export default function Admin(props:{data:string[],count:number,id:string,name:string,apiMenu:string[],adminCount:number}) {
   const adminCount=props.adminCount;
   const employeeCount=props.count;
   const strAdminCount=adminCount.toString();
   const [inputActive,setInputActive]=useState(false)
   const [adminInput,setAdminInput]=useState(strAdminCount)
   const [totalCount,setTotalCount]=useState(adminCount+props.count)
   const [showConfirmation,setShowConfimation]=useState(false)
   useEffect(()=>{axios.get('.netlify/functions/monthlyCount')
.then(response=>{console.log(response.data);
   })},[])
   useEffect(()=>{
      axios.post(`.netlify/functions/monthlyCount?count=${totalCount}`)
   },[totalCount])
   const router=useRouter();
  async function checkClick(){
     await axios.post(`.netlify/functions/adminCount?adminCount=${adminInput}`)
     .then(()=>{
      setTotalCount(parseInt(adminInput)+props.count)
      setShowConfimation(true)
   })
   }
   function adminInputChange(e:any){
      const x=e.target.value;
      (x>=0||x=='')&& setAdminInput(x)
   }
   function homeClick(){
      router.push('/home')
   }
 return <div className='adminBg  min-h-screen w-full '>
     {showConfirmation&& <PopUp message='Count is added successfully' changeView={()=>setShowConfimation(false)} />}
   <div className='flex bg-blue-400 justify-between p-3 '>
      <div className='flex md:gap-5 gap-2 justify-center items-center'>
      <div className='min-w-[100px] bg-black text-white rounded-r-lg p-2 -ml-3'>Hello, {props.name}</div>
      <button className='text-black font-bold text-sm  md:text-base active:text-[#635e5e]' onClick={homeClick}>Home</button>
      </div>
      <div className='flex items-center md:gap-4 gap-2'>
    <Link href='/admin/billing  '> 
    <button className='font-bold bg-slate-300 p-2 rounded-md text-xs md:text-base active:bg-slate-400  active:text-white'>Billing</button>
    </Link>
   
      {/* <div className={` bg-gray-300 p-2 rounded-md right-[120px] font-mono top-[70px] ${showMessage?'absolute':'hidden'}`}>Coming soon</div>  */}
      <div className='h-full  w-[2px] bg-black'></div>

      <LogoutButton class='bg-slate-300 active:bg-slate-400'/> 
    </div>
   </div>  
    <div className='flex justify-center sm:mt-10 mt-6 m-auto mx-2'>
    <AddMenuBox menuData={props.data} apiMenu={props.apiMenu} />
    </div>
    <div className='flex justify-center gap-[20px] mt-5'>
       <div className='font-semibold  p-2 bg-white rounded-md pointer-events-none '>Employee :  {props.count}</div>
       <div className='flex w-[220px]  justify-center overflow-hidden rounded-md bg-white' >
       <div className='font-semibold bg-white p-2 rounded-l-md'>Admin :</div>
       <div className='flex  overflow-hidden' onMouseOver={()=>setInputActive(true) } onMouseOut={()=>setInputActive(false)}>
       <input type='number' className={`h-full w-7  font-semibold ${inputActive?'hoverInput':'noHoverInput'} px-[2px] `} value={adminInput} onChange={adminInputChange}/>
       <div className={ ` h-full  items-center text-xs px-2 cursor-pointer bg-white rounded-r-md   ${inputActive?'flex':'hidden'} active:text-gray-500`} onClick={checkClick}><FaCheck/></div>
       </div>  
       </div> 
      </div>
      <div className='mt-5 w-[200px] m-auto flex justify-center bg-blue-500 p-1'>
       <div className='font-semibold'>Total Count-{totalCount} </div>
      </div>
 </div>
}