import { createClient } from "@supabase/supabase-js";

exports.handler=async(event,context)=>{
    const id=parseInt(event.queryStringParameters.id)
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const { data, error } = await supabase
      .from('employees')
      .select('name','employeeid')
      .eq('employeeid',id);
      
    if (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error })
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };


}