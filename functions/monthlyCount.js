import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,confirmation)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const count=parseInt(event.queryStringParameters.count);
    const date=new Date();
    const formattedDate=date.toISOString().split('T')[0]
    switch (event.httpMethod){
        case 'POST':{
            const {data,error}=await supabase
            .from('count')
            .select()
            .eq('date',formattedDate)
            if(error){
                return{
                    statusCode:500,
                    body:JSON.stringify('Check error')
                }
            }else{
                if(data.length>0){
                    const {data:x,error:y}=await supabase
                    .from('count')
                    .update({count:count})
                    .eq('date',formattedDate)
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
                    .from('count')
                    .insert({date:formattedDate,count:count})
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
        case 'GET':
           const {data,error}= await supabase
            .from('count')
            .select()
        
        if(error){
            return{
            statusCode:500,
            body:JSON.stringify(error)
            }
        }else{
            const sortedData=data.sort((a,b)=>new Date(a.date)-new Date(b.date));
            return{
                statusCode:200,
                body:JSON.stringify(sortedData)
            }
        }
    }
}