exports.handler = async (event, context) => {
    console.log(event,'aaaaaaaaaaaaaa')
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from Netlify Function!' }),
    };
  };
  

