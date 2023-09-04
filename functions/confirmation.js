import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,confirmation)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const date=new Date();
    const formattedDate=date.toISOString().split('T')[0]
       const id=parseInt(event.queryStringParameters.id);
       switch (event.httpMethod){
        case 'POST':{
            const {val}=JSON.parse(event.body)
            const {data,error}=await supabase
            .from('confirmation')
            .select()
            .eq('employeeId',id)
            if(error){
                return{
                    statusCode:500,
                    body:JSON.stringify('Check error')
                }
            }else{
                if(data.length>0){
                    const {data:x,error:y}=await supabase
                    .from('confirmation')
                    .update({response:val})
                    .eq('employeeId',id)
                    if(y){
                        return{
                            statusCode:200,
                            body:JSON.stringify('update error')
                    }
                    }else{
                    return{
                        statusCode:200,
                        body:JSON.stringify(x)
                    }
                }
                }else{
                    const {data,error}=await supabase
                    .from('confirmation')
                    .insert({'employeeId':id,response:val,date:formattedDate})
                    if(error){
                        return{
                            statusCode:200,
                            body:JSON.stringify('Insert error')
                    }
                    }else{
                    return{
                        statusCode:200,
                        body:JSON.stringify(data)
                    }
                }
                }
            }
       }
       case 'GET':{
        const {data:d,error:e}=await supabase
        .from('confirmation')
        .select('response')
        .and(
            supabase
            .from('confirmation')
            .eq('employeeId',id),
            supabase
            .from('confirmation')
            .eq('date',formattedDate)
        )
        if(e){
            return{
                statusCode:500,
                body:JSON.stringify(e)
            }
        }else{
            return{
                statusCode:200,
                body:JSON.stringify(d)
            }
        }
    }
        // case 'DELETE':
        //     const {data,error}=await supabase
        //     .from('confirmation')
        //     .delete();
        //     if(error){
        //         return{
        //             statusCode:500,
        //             body:JSON.stringify(error)
        //         }
        //     }else{
        //         return{
        //             statusCode:200,
        //             body:JSON.stringify('successfully deleted previous data')
        //     }}
}
}