import { setCookie } from "nookies";
const cookie=require('cookie')
exports.handler=async(event,context)=>{
const users=[{id:1000,role:'employee'},{id:1001,role:'employee'},
	{id:1002,role:'employee'},{id:1003,role:'employee'},{id:1004,role:'admin'},{id:1005,role:'admin'}]
const {id,role}=JSON.parse(event.body)
const validUser=users.findIndex((e)=>id==e.id && e.role==role)
const myCookie = cookie.serialize('isLoggedIn', 'true', {
        secure: true,
        path: '/',
      })
if(validUser>=0){
//         setCookie({res:event},'isLoggedIn',true,{
//         path:'/',
//         httpOnly:true
// })
//          setCookie({res:event},'id',id,{
//          path:'/',
//          httpOnly:true
// })         
//         setCookie({res:event},'role',role,{
//     	httpOnly:true,
//      	path:'/'
// })
        return {
			statusCode:200,
                        headers:{
                                'Set-Cookie':myCookie
                        },
			body:JSON.stringify({valid:true,isLoggedIn:true,validUser:validUser})
		}
}else{
        return {
			statusCode:200,
                    
			body:JSON.stringify({valid:false,isLoggedIn:false,validUser:validUser,event:event})
		}
}
	
}