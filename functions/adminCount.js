import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,context)=>{
    const date=new Date();
    const formattedDate=date.toISOString().split('T')[0];
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    switch(event.httpMethod){
    case 'GET':{
           const {data,error}=await supabase
           .from('admin_count')
           .select('count')
           .eq(date,formattedDate)
           if(error){
            return {
                statusCode:200,
                body:JSON.stringify('error occured',error)
            }
           }else{
            return{
                statusCode:200,
                body:JSON.stringify(data)
            }
           }
    }
         case 'POST':{
            const adminCount=parseInt(event.queryStringParameters.adminCount);
            const {data,error}=await supabase
            .from('admin_count')
            .select('count')
            .eq('date',formattedDate)
            if(error){
                return{
                    statusCode:500,
                    body:JSON.stringify('Check error')
                }
            }else{
                if(data.length>0){
                    const{data:d1,error:e1}=await supabase
                    .from('admin_count')
                    .update({'count':adminCount})
                    .eq('date',formattedDate)
                    if(e1){
                        return{
                            statusCode:500,
                            body:JSON.stringify('error while updating admincount')
                        }
                    }else{
                        return{
                            statusCode:200,
                            body:JSON.stringify(d1)

                        }
                    }
                    
                }else{
                    const {data,error}=await supabase
                    .from('admin_count')
                    .insert({count:adminCount,date:formattedDate})
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
           
    }

      
}