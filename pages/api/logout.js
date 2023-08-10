import { serialize } from "cookie"
import { destroyCookie } from "nookies"
export default function handler(req,res){
    // const cookie_options = {
    //     httpOnly: true,
    //     maxAge: -1,
    //   };
    
    //   res.setHeader('Set-Cookie', serialize('isLoggedIn', 'false', cookie_options));
    //   res.setHeader('Set-Cookie', 'isLoggedIn=true; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');   
    //   res.setHeader('Set-Cookie', 'id=1003; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');   
    //   res.setHeader('Set-Cookie', [
    //     'isLoggedIn=true; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
    //     'id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    //   ]);
      
    destroyCookie({res},'isLoggedIn',{
       path:'/',
       maxAge:-1
    })
    destroyCookie({res},'id',{
        path:'/',
        maxAge:-1
    })
    destroyCookie({res},'role',{
        path:'/',
        maxAge:-1
    })
    return res.status(200).json('You have been Logged Out')
}
