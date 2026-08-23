export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },

  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },

  invalidPassword: {
    username: 'standard_user',
    password: 'invalidpass_sauce',
  },

  missingPassword: {
    username: 'standard_user',
  },


};

export const invalidLoginScenarios = [
  {
    id: 'AUTH-002',
    name: 'Invalid password',
    username: 'standard_user',
    password: 'invalidpass_sauce',
    expectedError: 'Username and password do not match',
  },
  {
    id: 'AUTH-003',
    name: 'Password is required',
    username: 'standard_user',
    password: undefined,
    expectedError: 'Password is required',
  },
  {
    id: 'AUTH-004',
    name: 'Locked-out user cannot log in',
    username: 'locked_out_user',
    password: 'secret_sauce',
    expectedError: 'Sorry, this user has been locked out',
  },
];