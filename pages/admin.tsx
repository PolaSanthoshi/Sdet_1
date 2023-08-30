import Admin from "@/src/admin";
import axios from "axios";
export default function adminn(props:{items:string[],count:number,id:string}){
    return <Admin data={props.items} count={props.count} id={props.id}/>
}


export async function getServerSideProps(context:any){
     const {parseCookies}=require('nookies')
     const jwt=require('jsonwebtoken')
     const {token}=parseCookies(context);
     if(token){
      
    const secretKey=process.env.SECRET_KEY;
    const decodedPayLoad=jwt.verify(token,secretKey);
    const {isLoggedIn,id,role}=decodedPayLoad;
    const response=await fetch("https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/menu")
    const val=await response.json();
    const data=await fetch(`https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/employee?id=${id}&role=admin`)
    const value=await data.json();    
            if(isLoggedIn&&role==='admin'){
                return {
                    props:{items:val,count:value,id}
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

