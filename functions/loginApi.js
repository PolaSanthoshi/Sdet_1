import { setCookie } from "nookies";
exports.handler = async (event, context) => {
  const users = [
    { id: 1000, role: 'employee' },
    { id: 1001, role: 'employee' },
    { id: 1002, role: 'employee' },
    { id: 1003, role: 'employee' },
    { id: 1004, role: 'admin' },
    { id: 1005, role: 'admin' }
  ];
  const { id, role } = JSON.parse(event.body); // Parse the JSON body
  const validUser = users.findIndex((e) => id == e.id && e.role == role);
  if (validUser >= 0) {
    // Construct the cookie path based on the function's route
    const cookiePath = `/`;
    setCookie(null, 'isLoggedIn', 'true', {
      path: cookiePath,
      httpOnly: true
    });
    setCookie(null, 'id', id, {
      path: cookiePath,
      httpOnly: true
    });
    setCookie(null, 'role', role, {
      path: cookiePath,
      httpOnly: true
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ valid: true, isLoggedIn: true, validUser: validUser })
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ valid: false, isLoggedIn: false, validUser: validUser, id })
    };
  }
};



