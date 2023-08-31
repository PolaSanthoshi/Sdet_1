import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,confirmation)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const date=new Date();
    const formattedDate=date.toISOString().split('T')[0]
       const id=event.queryStringParameters.id;
       switch (event.httpMethod){
        case 'POST':{
            const {val}=JSON.parse(event.body)=='yes'?true:false;
            const {data,error}=await supabase
            .from('confirmation')
            .upsert([
                {'employeeId':id,'date':formattedDate,'response':val,
            }
        ],{ onConflict: ['employeeId'] })
            if(error){
                return{
                    statusCode:500,
                    body:JSON.stringify(error)
                }
            }else{
                return{
                    statusCode:200,
                    body:JSON.stringify(data)
                }
            }
       }
       case 'GET':
        const {data:d,error:e}=await supabase
        .from('confirmation')
        .select('response')
        .eq('employeeId',id)
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
}