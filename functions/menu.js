import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,context)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    switch (event.httpMethod){
        case 'POST':
         const menu=event.body
         const {data,error}=await supabase
         .from('admin')
         .update({menu:menu})
         .eq('id',1031)
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

        case 'GET':
            const  {data1,error1}=await supabase
            .from('admin')
            .select('menu')
            .eq('id',1031)
            if(error1){
            return{
                statusCode:500,
                body:JSON.stringify(error1)
            }
        }else{
            return{
                statusCode:200,
                body:JSON.stringify(data1)
            }
        }
    }
}