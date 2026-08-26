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

export const checkoutData = {
  customer: {
    firstName: 'Daniel',
    lastName: 'Espinosa',
    postalCode: '80123',
  },

  product: {
    name: 'Sauce Labs Bike Light',
  },
};

export const invalidCheckoutScenarios = [
  {
    id: 'E2E-002',
    name: 'Checkout with missing First Name',
    firstName: '',
    lastName: 'Espinosa',
    postalCode: '80123',
    expectedError: 'Error: First Name is required',
  },
  {
    id: 'E2E-003',
    name: 'Checkout with missing Last Name',
    firstName: 'Daniel',
    lastName: '',
    postalCode: '80123',
    expectedError: 'Error: Last Name is required',
  },
  {
    id: 'E2E-004',
    name: 'Checkout with missing ZIP/Postal Code',
    firstName: 'Daniel',
    lastName: 'Espinosa',
    postalCode: '',
    expectedError: 'Error: Postal Code is required',
  },
];