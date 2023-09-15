import { months } from "../models/Date"
export default function SideNav(props:{changeSideNavVisibility?:()=>void,onMonthclick:(monthClicked:number)=>void}){
  function onIconClick(index:number){
    props.onMonthclick(index);
    props.changeSideNavVisibility&&props.changeSideNavVisibility();
  }
   return <div>
    <div className={`w-full sideNavHeight overflow-scroll  bg-blue-300   scrollbar flex justify-center }`}>
      <div>
      {months.map((item,index)=><div key={index} onClick={()=>onIconClick(index)}  className={`sm:font-bold sm:text-base text-xs font-semibold lg:w-[200px] md:w-[130px] xs:w-[110px] p-[6px] bg-white rounded-md my-2  cursor-pointer active:bg-blue-500 overflow-hidden`}
      >{item}</div>)}
       <div className="h-1"></div>
      </div>
    </div>
    </div>
}