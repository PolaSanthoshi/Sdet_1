// module.exports = {
//     development: {
//       dialect: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       database: 'demo',
//       username: '',
//       password: 'password',
//     },
//     // Add other environments (production, test) as needed
//   };
const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sdettech',
  password: '123qweA!@#',
  port: 5432,
});
exports.handler = async (event, context) => {
  try {
    await client.connect();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Database operation successful' }),
    };
  } catch (error) {
    console.error('Error connecting to database:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Database connection error' }),
    };
  } finally {
    await client.end();
  }
};