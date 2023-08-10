import Login from "@/src/login"
export default function LoginFunc(){
    
    return <div>
          <Login/>
    </div>
}
// export function getServerSideProps({req,res}:any){
//      const value=req.cookies["isLoggedIn"]
//      const ID=req.cookies['id']
//      console.log(value,ID,1111111111)
   
//      if(value==='true'){
//         return{
//              redirect:{
//             destination:`/home?id=${ID}`,
//             permanent:false
//         }
//     } }
//     return {
//         props:{value:'Invalid ID'}
//     }

// }