import axios from "axios";
import { useRouter } from "next/router";

export default function LogoutButton(props:{class:string}){
    const router=useRouter();
    const  handleLogout = async() => {
        await axios.get('/.netlify/functions/logout')
         .then(list=>console.log(list.data))
         router.push('/')
       };
    return <div>
       
         <button className={`font-bold  p-2 rounded-md text-xs md:text-base  ${props.class}`} onClick={handleLogout} >Logout</button>
        
    </div>
}