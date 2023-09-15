import getdate from "../models/Date"
import { months } from "../models/Date";
export default function Table(props:{monthDataToDisplayInTable:number,everyMonthData:[{date:string,count:number,id:number}]}){
   const data=props.everyMonthData;
   const monthDataToDisplay=props.monthDataToDisplayInTable;
    const tableDataOfSelectedMonth=[...data].filter(((item:{date:string,count:number,id:number})=>new Date(item.date).getMonth()==monthDataToDisplay));
  const totalCountOfMonth=tableDataOfSelectedMonth.reduce((accumulator,currentItem)=>accumulator+currentItem.count,0)
    return <div>
         <div className="w-full justify-center flex ">
         <div className="mt-3 max-w-[700px] w-full m-5  bg-zinc-200 shadow-lg rounded-lg p-3">
          <div className="flex w-full gap-5 justify-center">
        <div className="flex  rounded-md h-5 items-center ">
     <div className="font-semibold font-mono ">
        {`${months[monthDataToDisplay]}-${getdate('year')}`}
     </div>
     </div>
           </div>
           <div className="flex w-full items-center h-[24px] mt-2 font-medium bg-slate-800 text-white">
            <div className="w-[50%] text-center">Date</div>
            <div className="w-[50%] text-center">Count</div>
           </div>
           <div className="min-h-[300px] lg:max-h-[440px] md:max-h-[350px] sm:max-h-[340px] max-h-[330px] overflow-scroll scrollbar mt-2">
          {tableDataOfSelectedMonth.length>0?tableDataOfSelectedMonth.map((item: any)=> <div key={item.id} className="flex w-full mt-1  text-sm border-b-[0.5px] border-solid border-slate-400 pb-1 ">
            <div className="w-[50%] text-center">{item.date}</div>
            <div className="w-[50%] text-center">{item.count}</div>
             </div>  ):<div className="text-center">Data Not Found</div>}
             </div> 
          <div className="mt-2 text-center bg-zinc-400">
            Total count-{totalCountOfMonth}
          </div>    
    </div>
    </div>
    </div>
} 