export default function handler() {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'This is what will be returned!'
		})
	}
}