import Admin from "@/src/admin";
import axios from "axios";
export default function adminn(props:{items:string[],count:number,id:string}){
    return <Admin data={props.items} count={props.count} id={props.id}/>
}
export async function getServerSideProps(context:any){
     const {parseCookies}=require('nookies')
     const {id,role,isLoggedIn}=parseCookies(context)
    const response=await fetch("https://netlify-code--transcendent-toffee-89a6b6.netlify.app/.netlify/functions/menu")
    const val=await response.json();
    const data=await fetch(`https://netlify-code--transcendent-toffee-89a6b6.netlify.app/.netlify/functions/employee?id=${id}&role=admin`)
    const value=await data.json();
    console.log(role,isLoggedIn,"noorol")
    // if(1){
        return {
            props:{items:val,count:value,id}
//         }  
//     }else{
//         return{
//             redirect:{
//                 destination:`/login`,
//                 permanent:false
//         }
//     }
    
}
}
