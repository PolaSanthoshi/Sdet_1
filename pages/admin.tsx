import Admin from "@/src/admin";
import axios from "axios";
export default function adminn(props:{items:string[],count:number,id:string,name:string}){
    console.log(props)
    return <Admin data={props.items} count={props.count} id={props.id} name={props.name}/>
}


export async function getServerSideProps(context:any){
     const {parseCookies}=require('nookies')
     const jwt=require('jsonwebtoken')
     const {token}=parseCookies(context);
     if(token){
    const decodedPayLoad=jwt.decode(token);
    const {isLoggedIn,id,role,name}=decodedPayLoad;
    const response=await fetch("https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/menu")
    const val=await response.json();
    const data=await fetch(`https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/employee?id=${id}&role=admin`)
    const value=await data.json();    
            if(isLoggedIn&&role==='admin'){
                return {
                    props:{items:JSON.parse(val[0].menu),count:value,id,name}
                    }
           }
                 return {
                  redirect:{
                      destination:'/',
                      permanent:false,
           }
      }
    
}
}

