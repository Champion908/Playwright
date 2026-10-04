import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('API-01 - Login with valid credentials', async ({ authApi }) => {


   const response = await authApi.login(
        users.apiUser.email,
        users.apiUser.password
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody).toHaveProperty('access_token');
    expect(responseBody.token_type).toBe('bearer');
    const token = responseBody.access_token;
    expect(token).toBeTruthy();
    console.log('Token received successfully');
});

test.only('API-2 - Login with valid credentials', async ({ authApi }) => {

    const token = await authApi.loginAndGetToken(
        users.apiUser.email,
        users.apiUser.password
    );

    expect(token).toBeTruthy();

    console.log('Token received successfully');
});