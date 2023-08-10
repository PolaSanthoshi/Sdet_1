import { FaArrowRight, FaPlane } from "react-icons/fa";

export default function MenuBox(props: { menuItems: string[]; backgroundColor: string }) {

    return <div className="flex justify-center items-center ">
      <div className=" w-[300px] h-[300px]  relative Border rounded-3xl">
      <div className="absolute w-[150px] h-[px] bg-white -left-5 -top-5 rounded-full flex justify-center items-center overflow-hidden ">
        <img src='/images/menuLogo.jpg'/>
      </div>
      <div className="absolute p-1 text-sm font-semibold -top-3 right-3 rounded-md bg-yellow-400">Today's Menu</div>
      {/* <img src='/images/arrow.jpg '/> */}
      <div className="mt-20 font-semibold font-mono ">
      {props.menuItems.map((element,index)=><div className="flex gap-3 items-center w-[150px] ml-[140px] break-all ">
       <div className="text-[10px]"><FaArrowRight/></div>
        {element[0].toUpperCase()+element.slice(1)}</div>
     )}
      </div>
   
    </div>
    </div>
  }
 
  
  
  
  
  
  
  
  