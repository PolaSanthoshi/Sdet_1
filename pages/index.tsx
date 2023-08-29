
import Login from "@/src/login"
export default function LLogin(){
  return <div>
    <Login/>
  </div>
}
export function getServerSideProps(context:any){
  const jwt=require('jsonwebtoken')
  const {parseCookies}=require('nookies')
  const {token}=parseCookies(context);
  if(token){
      const decodedPayLoad=jwt.decode(token);
      const {isLoggedIn,id,role}=decodedPayLoad;
      if(isLoggedIn && role=='employee'){
        return{
             redirect:{
            destination:`/home`,
            permanent:false
        }
    } }
    if(isLoggedIn && role=='admin'){
      return{
           redirect:{
          destination:`/admin`,
          permanent:false
      }
  }
     }
    }
          return {
              props:{value:'Invalid ID'}
          }
   

}