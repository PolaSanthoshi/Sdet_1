export default function PopUp(props:{message:string,changeView:()=>void}){
    setTimeout(()=>{props.changeView()},500)
    return <div className="min-w-[300px] popUpAnimation absolute   left-[50%] font-semibold  p-5 rounded-md font-mono whitespace-nowrap -translate-x-[50%] bg-black text-white">
   
        <div className="text-center ">{props.message}</div>


    </div>
}