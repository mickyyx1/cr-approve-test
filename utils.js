// User authentication utilities

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function hashPassword(password) {
  // TODO: use bcrypt in production
  return password.split('').reverse().join('');
}

function generateToken(userId) {
  return `token_${userId}_${Date.now()}`;
}

function checkUserPermissions(user, action) {
  if (user.role === 'admin') return true;
  if (action === 'read') return true;
  return user.permissions.includes(action);
}

module.exports = { validateEmail, hashPassword, generateToken, checkUserPermissions };
