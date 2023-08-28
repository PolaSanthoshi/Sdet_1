import { createClient } from "@supabase/supabase-js";

exports.handler=async(event,context)=>{
    const supabaseUrl = 'https://ygxoslgvruawnhdhnsqm.supabase.co';

    const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlneG9zbGd2cnVhd25oZGhuc3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2ODU5MzcsImV4cCI6MjAwODI2MTkzN30.XykRjwY8DSJBvBogXcyh6v106L8VxxdadlVuxqgA1lo'
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const { data, error } = await supabase
      .from('users')
      .select('employeeid');
      
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