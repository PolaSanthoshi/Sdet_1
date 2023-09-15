import axios from "axios";
import { useRouter } from "next/router";

export default function LogoutButton(props:{class:string}){
    const router=useRouter();
    function onLogoutClick(){
        axios.get('/api/logout')
        .then(response=>router.push('/'))
       
    }
    return <div>
       
         <button className={`font-bold  p-2 rounded-md text-xs md:text-base  ${props.class}`} onClick={()=>onLogoutClick()} >Logout</button>
        
    </div>
}