import getdate from "../models/Date"
import { months } from "../models/Date";
import { useState ,useEffect} from "react";
export default function Table(props:{monthDataToDisplayInTable:number,everyMonthData:[{date:string,count:number,id:number}]}){
   const data=props.everyMonthData;
   const monthDataToDisplay=props.monthDataToDisplayInTable;
    const  response  =[{id:1,date:'2023-09-07',count:5},{id:1,date:'2023-09-07',count:5},{id:1,date:'2023-09-07',count:5},{id:1,date:'2023-09-06',count:5}]
    const tableDataOfSelectedMonth=data.filter(((item:{date:string,count:number,id:number})=>new Date(item.date).getMonth()==monthDataToDisplay));
    return <div>
         <div className="w-full justify-center flex ">
         <div className="mt-3 max-w-[700px] w-full m-5 min-h-[300px] max-h-[550px] overflow-scroll scrollbar bg-zinc-200 shadow-lg rounded-lg p-3">
          <div className="flex w-full gap-5 justify-center">
        <div className="flex  rounded-md p-1 items-center gap-3">
     <div className="font-semibold font-mono ">
        {`${months[monthDataToDisplay]}-${getdate('year')}`}
     </div>
     </div>
           </div>
           <div className="flex w-full mt-3 font-medium bg-slate-800 text-white">
            <div className="w-[50%] text-center">Date</div>
            <div className="w-[50%] text-center">Count</div>
           </div>
          {tableDataOfSelectedMonth.length>0?tableDataOfSelectedMonth.map((item: any)=> <div key={item.id} className="flex w-full mt-1  text-sm border-b-[0.5px] border-solid border-slate-400 pb-1 ">
            <div className="w-[50%] text-center">{item.date}</div>
            <div className="w-[50%] text-center">{item.count}</div>
             </div>  ):<div className="text-center">Data Not Found</div>}    
    </div>
    </div>
    </div>
} 