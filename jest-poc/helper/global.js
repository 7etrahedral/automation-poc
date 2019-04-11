const response = {
  ok: 200,
  created: 201, // for created success
  accepted: 202,
  noContent: 204,
  badRequest: 400, // for blank or no key sent
  unauthorized: 401, // for no login
  forbidden: 403,
  invalidAuth: 403,
  notFound: 404,
  internalServerError: 500,
};

const codes = {
  unauthorized: 'UNAUTHORIZED', // 401
  invalidToken: 'INVALID_TOKEN', // 403
  badRequest: 'BadRequest', // 400
  notFound: 'NotFound', // 404
  forbidden: 'Forbidden', // 403
};


const testData = ({
  username: 'username@user.name',
  password: 'thisispassword',
});

module.exports = {
  response,
  codes,
  testData,
};
