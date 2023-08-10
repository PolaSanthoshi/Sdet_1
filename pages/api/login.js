import { serialize } from "cookie";
import { parseCookies, setCookie }  from 'nookies'
export default function handler(req,res){
    const users=[{id:1000,role:'employee'},{id:1001,role:'employee'},
                              {id:1002,role:'employee'},{id:1003,role:'employee'},{id:1004,role:'admin'},{id:1005,role:'admin'}]
    const {id,role}=req.body;
   
  
    const validUser=users.find((each)=>id==each.id&&each.role===role)
    if(validUser){
        // const cookie_options={
        //     httpOnly:true,
        //     path:'/'
        // }
        // const isLoggedInCookie = serialize('isLoggedIn', 'true', cookie_options);
        // const idCookie = serialize('id', id, cookie_options);
        // const combinedCookies = [idCookie, isLoggedInCookie].join('; ');
    
        // res.setHeader('Set-Cookie', combinedCookies );
        setCookie({res},'isLoggedIn',true,{
            path:'/',
            httpOnly:true
        })
        setCookie({res},'id',id,{
            path:'/',
            httpOnly:true
        })
        setCookie({res},'role',role,{
            httpOnly:true,
            path:'/'
        })
     res.status(200).json({valid:true,isLoggedIn:true})
      
    }else{
        res.status(200).json({valid:false,isLoggedIn:false})
    }
}



 


  