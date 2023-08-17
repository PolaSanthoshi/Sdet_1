import { userAgent } from "next/server";
import { test } from "node:test";

export const userData=[];
exports.handler=async(event,context)=>{
    const id=event.queryStringParameters.id;
    const val=JSON.parse(event.body.val)
        switch(event.httpMethod){
            case 'POST':{
            //    !userData.id?userData.id=id:''
            //     userData.haveLunch=val;
                const x=userData.findIndex((element)=>element.id==id);
                if(x==-1){
                    userData.push({id,haveLunch:val}) 
                }else{
                    userData[x].haveLunch=val
                }
               
               return{
                  statuscode:200,
                  body:JSON.stringify(userData)
               }
        }
            default:
               
                const data=userData.find((element)=>element.id==id)
                // console.log(data,'employeeDataOfAPi',userData)
                // console.log(userData.find((element)=>element.id==id),'find')
                data?res.status(200).json(data):res.status(200).json('not found')
                if(data){
                    return{
                        statuscode:200,
                        body:JSON.stringify(userData)

                    }
                }else{
                    return{
                        statuscode:200,
                        body:JSON.stringify('not found')
                    }
                }    
    }
}
