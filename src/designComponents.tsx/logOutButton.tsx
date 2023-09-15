import axios from "axios";
import Link from "next/link";
export default function LogoutButton(props:{class:string}){
    function onLogoutClick(){
        axios.get('/api/logout')
    }
    return <div>
         <Link href='/'>
         <button className={`font-bold  p-2 rounded-md text-xs md:text-base  ${props.class}`} onClick={()=>onLogoutClick()} >Logout</button>
         </Link> 
    </div>
}