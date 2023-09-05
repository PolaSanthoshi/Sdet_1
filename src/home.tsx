import axios from "axios";
import PopUp from "./designComponents.tsx/popUp";
import { quote } from "./models/quotes";
import { useEffect, useState } from "react";
import {useRouter } from "next/router";
import MenuBox from "./designComponents.tsx/menuBox";
import { FaCaretUp, FaUser } from "react-icons/fa";
import SubmitPopUp from "./designComponents.tsx/submitPopUp";
import Link from "next/link";

export default function Home(props: { menuData: string[],haveLunch:string,id:string,role:string ,name:string}) {
  const router = useRouter();
  const [animate, setAnimate] = useState("");
  const [showPopUp,setShowPopUp]=useState(false);
  const [showAlert,setShowAlert]=useState(false);
  const [haveLunch, setHaveLunch] = useState(props.haveLunch);
  const [isProfileVisible,setProfileVisile]=useState(false);
  const [quoteToDisplay,setQuoteToDisplay]=useState(0);
  useEffect( ()=>{const interval=setInterval(()=>{
   setQuoteToDisplay(quoteToDisplay=>quoteToDisplay<quote.length-1?quoteToDisplay+1:0)},3000)
      return ()=>{
        clearInterval(interval)
      }},[])
  const {id,role,name}=props;
  const  handleLogout = async() => {
   await axios.get('/.netlify/functions/logout')
    .then(list=>console.log(list.data))
    router.push('/')
  };
  function mouseOverfn(e: any) {
    setAnimate(e.target.value);
  }
  function mouseLeavefn(e: any) {
    setAnimate("");
  }
  function buttonClick(e: any) {
    e.target.style.backgroundColor = "#e6dcdcf5";
    setTimeout(() => {
      e.target.style.backgroundColor = "white";
    }, 100);
    e.target.value === "yes" ? setHaveLunch("yes") : setHaveLunch("no");
  }
  function submitClick() {
    haveLunch!==''?setShowPopUp(true):setShowAlert(true)
    axios.post(`/.netlify/functions/confirmation?id=${id}`, { val: haveLunch })
    .then(v=>{
      axios.get('/.netlify/functions/totalCount')
      .then(response=>{
        axios.post(`/.netlify/functions/monthlyCount?count=${response.data}`)
      })
    })
  }
  function onUserIconClick(){
    setProfileVisile(!isProfileVisible)
  }
  function adminButtonClick(){
    router.push('/admin')
  }
  // function loginMouseOver(){
  //        setonProfileHover(true)
  // }
  // function loginMouseLeave(e: any) {
  //        setonProfileHover(false)
  // }
  return (
    <div>
    <div className={`bg-[#16141471] ${showPopUp?'opacity-60 transition-opacity pointer-events-none':''}`}>
      <nav className="pr-4 h-[70px] flex justify-between items-center relative ">
        <div className="flex items-center">
          <div className="bg-black text-white min-w-[130px] p-2 rounded-r-lg">
            Welcome, <span className="font-bold">{name}</span>
          </div>
          <Link href={"https://sdettech.com/"}  target="_blank">          
          <div className=" p-2 text-lg font-semibold   rounded-md ml-5">S D E T</div>
          </Link>
          
          {
          role=='admin'&& <> <div className='h-[30px]  w-[2px] bg-black ml-3 '></div>
          <button className='font-semibold ml-3 hover:text-[#312f2f71]' onClick={adminButtonClick}>Admin</button>
          </>
        }
        </div>
       
        <button
          className="w-8 h-8 bg-black flex justify-center items-center text-white rounded-full hover:bg-neutral-400 focus:ring focus:ring-blue-200"
          onClick={onUserIconClick}
        >
          <FaUser />
        </button>
        {isProfileVisible&&<div className="absolute cursor-pointer   right-4 -bottom-8  " onClick={handleLogout}>  
         <div className="w-full text-right flex justify-end"> <FaCaretUp/></div>
         <div className="p-2 rounded-md text-white bg-black -mt-[6px] ">Logout</div>
        </div>}
      </nav>
      <div className="w-full homeHeight flex">
        <div className="w-[50%] h-full menuBg">
          <div className="text-white mt-5 text-[20px] ml-5 font-semibold opacity-75 relative sloganAnimate">{quote[quoteToDisplay]}
          </div>
        </div>
        <div className="w-[50%] h-full pt-5 text-center">
          {/* <div className="font-semibold text-[20px] text-white bg-[#A16347] w-[180px] rounded-md flex justify-center m-auto z-10">
            MENU
          </div> */}
          <div className="mt-5">
            <MenuBox menuItems={props.menuData} backgroundColor={""} />
          </div>
          <div className="text-md font-medium text-center mt-5">
            Do you want to have lunch?
          </div>
          <div className="flex w-full justify-center items-center gap-10 mt-10 relative">
            <button
              className={`w-20 h-20 font-bold text-[30px] text-green-800 shadow-md bg-white flex items-center justify-center rounded-md relative ${
                animate == "yes" ? "buttonAnimation" : ""
              } ${haveLunch == "yes" ? "Outline" : ""} Border`}
              onMouseOver={mouseOverfn}
              onMouseLeave={mouseLeavefn}
              onClick={buttonClick}
              value="yes"
            >
              ✓
            </button>
            <button
              className={`w-20 h-20 font-bold text-[30px] text-red-800 shadow-md bg-white flex items-center justify-center rounded-md relative ${
                animate == "no" ? "buttonAnimation" : ""
              } ${haveLunch == "no" ? "Outline" : ""} Border`}
              onMouseEnter={mouseOverfn}
              onMouseLeave={mouseLeavefn}
              value="no"
              onClick={buttonClick}
            >
              X
            </button>
          </div>
          <button
            className="mt-5 font-semibold Border p-2 rounded-md text-xs active:bg-blue-200 cursor-pointer"
            onClick={submitClick}
          >
         Submit
          </button>
        </div>
      </div>
    
      <div className="border-box h-[40px] flex items-center justify-center text-center fixed bottom-0 right-0 left-0 bg-[#16141471]">
        &copy; 2023 SDETTECH. All rights reserved.
      </div>
      </div>
      {showPopUp &&<div><SubmitPopUp handleClose={()=>{setShowPopUp(!showPopUp)}}/></div>}
      {showAlert&& <div className="bg-red-300"><PopUp message="Please select one of options" changeView={()=>setShowAlert(!showAlert)}/></div>}
</div>
  );
}