import Admin from "@/src/admin";
import axios from "axios";
export default function adminn(props:{items:string[],count:number,id:string}){
    return <Admin data={props.items} count={props.count} id={props.id}/>
}
export async function getServerSideProps(context:any){
     const {parseCookies}=require('nookies')
     const {id,role,isLoggedIn}=parseCookies(context)
    const response=await fetch("http://localhost:3000/api/menu")
    const val=await response.json();
    const data=await fetch("http://localhost:3000/api/totalUsers")
    const value=await data.json();
    console.log(role,isLoggedIn,"noorol")
    if(isLoggedIn&&role=='admin'){
        return {
            props:{items:val,count:value,id}
        }  
    }else{
        return{
            redirect:{
                destination:`/login`,
                permanent:false
        }
    }
    
}
}
