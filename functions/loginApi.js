exports.handler = async (event, context) => {
	console.log("api was called")
	try { // Perform your API logic here
	  const user = { id: 1, name: 'John' };
	  return {
		statusCode: 200,
		body: JSON.stringify({body:event.body,path:event.path,event}),
	  };
	} catch (error) {
	  return {
		statusCode: 500,
		body: JSON.stringify({ message: 'Internal server error' }),
	  };
	}
  }