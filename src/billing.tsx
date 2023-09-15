import { useState ,useEffect} from "react";
import getdate from "@/src/models/Date";
import Link from "next/link";
import LogoutButton from "./designComponents.tsx/logOutButton";
import SideNav from "@/src/designComponents.tsx/sideNav";
import Table from "@/src/designComponents.tsx/Table";
import { FaBars, FaCross} from "react-icons/fa";
export default function Billing( props:{data:any}){
   const data=props.data;
   console.log(props.data,'fromSrcBillingPage')
   const [showSideNav,setShowSideNav]=useState(false)
   const date=new Date();
   const [monthDataToDisplay,setMonthToDisplay]=useState(date.getMonth())
   function HamBurgerClick(){
        setShowSideNav(!showSideNav)
   }
   useEffect(()=>{console.log(monthDataToDisplay)},[monthDataToDisplay])
   return <div className="mt-0 ">
       <div className='flex bg-blue-400 justify-between h-[60px] p-2'>
      <div className='flex md:gap-5 gap-2 justify-center items-center'>
      <div className="md:hidden " onClick={HamBurgerClick}>
         {showSideNav?<div className=" w-5 h-5 flex justify-center items-center font-bold"> x </div>:<FaBars/>}
      </div>
      <button className='text-black font-bold text-sm  md:text-base active:text-[#635e5e]'>Home</button>  
      </div>
      <div className='flex items-center md:gap-4 gap-2'>
         <Link href='/admin'>
         <button className='font-bold bg-slate-300 p-2 rounded-md text-xs md:text-base active:bg-slate-400 active:text-white'>Admin</button>
         </Link>
      <div className='h-full  w-[2px] bg-black'></div>

      <LogoutButton class="bg-slate-300 active:bg-slate-400"/>
      </div> </div>
      
      <div className="flex  w-full">
      <div className={`w-[20%] md:block hidden`}><SideNav onMonthclick={(monthClicked:number)=>setMonthToDisplay(monthClicked)}/></div>
      <div className={`w-[30%]  md:hidden block ${showSideNav?'sideNavAnimate':'hidden'} fixed md:relative `}><SideNav onMonthclick={(monthClicked:number)=>setMonthToDisplay(monthClicked)} changeSideNavVisibility={()=>setShowSideNav(!showSideNav)}/></div>
     <div className="md:w-[80%] w-[100%] "> <Table monthDataToDisplayInTable={monthDataToDisplay} everyMonthData={data}/></div> 
      </div>
 </div>
}