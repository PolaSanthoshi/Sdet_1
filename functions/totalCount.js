import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,context)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const {data,error}=await supabase
    .from('confirmation')
    .select('response')
    .eq('response','yes')
    const count=data.length;
    return{
        statusCode:200,
        body:JSON.stringify(count)
    }

}