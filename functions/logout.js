const cookie=require('cookie');
exports.handler=async(event,context)=>{
     const parsedCookies=cookie.parse(event.headers.cookie)
     const cookieVal=parsedCookies.token;
    const cookieToRemove = 'token'; 
    
    // Construct a Set-Cookie header to clear the cookie
    const clearCookieHeader = `token=${cookieVal}; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  
    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': clearCookieHeader,
      },
      body: JSON.stringify({ message: 'Cookie cleared successfully' })
    };
}