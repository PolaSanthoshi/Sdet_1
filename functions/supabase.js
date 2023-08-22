import { createClient } from "@supabase/supabase-js";

exports.handler=async(event,context)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const { data, error } = await supabase
      .from('users')
      .select('*');
      
    if (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Error querying database' })
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };


}