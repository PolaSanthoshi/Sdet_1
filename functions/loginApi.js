exports.handler = async (event, context) => {
	try { // Perform your API logic here
	  const user = { id: 1, name: 'John' };
	  return {
		statusCode: 200,
		body: JSON.stringify(user),
	  };
	} catch (error) {
	  return {
		statusCode: 500,
		body: JSON.stringify({ message: 'Internal server error' }),
	  };
	}
  }