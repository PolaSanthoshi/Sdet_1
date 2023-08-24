exports.handler=async(event,context)=>{
     
    const cookieToRemove = 'token'; 
    
    // Construct a Set-Cookie header to clear the cookie
    const clearCookieHeader = `${cookieToRemove}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  
    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': clearCookieHeader,
      },
      body: JSON.stringify({ message: 'Cookie cleared successfully' })
    };
}