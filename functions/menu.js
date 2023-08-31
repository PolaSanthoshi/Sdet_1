import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,context)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    switch (event.httpMethod){
        case 'POST':
         const menu=JSON.parse(event.body)
         const menu_tostring=menu.join(',')
         const {data,error}=await supabase
         .from('admin')
         .update({menu:menu_tostring})
         .eq('adminid',1031)
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
            const  {data:d,error:e}=await supabase
            .from('admin')
            .select('menu')
            .eq('adminid',1031)
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