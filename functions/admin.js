import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,context)=>{
    const id=parseInt(event.queryStringParameters.id)
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    switch(event.httpMethod){
        case 'GET':
            const {data,error}= await supabase
            .from('admin')
            .select('name')
            .eq('employeeid',id)
           if(data){
            return{
                statusCode:200,
                body:JSON.stringify(data)
            }
           }else{
                return{
                    statusCode:500,
                    body:JSON.stringify(error)
                }
           }
    }
}