import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test('API-001 - Retrieve a valid user', async ({ request }) => {
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.name).toBeTruthy();
    expect(body.email).toBeTruthy();
  });

  test('API-002 - Create a new user', async ({ request }) => {
  const newUser = {
    name: 'QA Portfolio User',
    username: 'qa_portfolio',
    email: 'qa.portfolio@example.com',
  };

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: newUser,
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.name).toBe(newUser.name);
  expect(body.username).toBe(newUser.username);
  expect(body.email).toBe(newUser.email);
  expect(body.id).toBeTruthy();
});

test('API-003 - Request a non-existing user', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/9999'
  );

  expect(response.status()).toBe(404);

  const body = await response.json();

  expect(body).toEqual({});
});

test('API-004 - Validate user response structure and data types', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(typeof body.id).toBe('number');
  expect(typeof body.name).toBe('string');
  expect(typeof body.username).toBe('string');
  expect(typeof body.email).toBe('string');

  expect(body.address).toBeTruthy();
  expect(typeof body.address.city).toBe('string');

  expect(body.company).toBeTruthy();
  expect(typeof body.company.name).toBe('string');
});
});