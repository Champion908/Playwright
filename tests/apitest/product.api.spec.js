import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('API-02 - Get products', async ({ authApi, productApi }) => {

    // Login and get token
    const token = await authApi.loginAndGetToken(
        users.apiUser.email,
        users.apiUser.password
    );

    expect(token).toBeTruthy();

    // Get products
    const response = await productApi.getProducts(token);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    //Assertion
    // Validate response structure
expect(responseBody).toHaveProperty('current_page');
expect(responseBody).toHaveProperty('data');

// Validate products array
expect(Array.isArray(responseBody.data)).toBe(true);

// Validate first product
expect(responseBody.data[0]).toHaveProperty('id');
expect(responseBody.data[0]).toHaveProperty('name');
expect(responseBody.data[0]).toHaveProperty('price');
expect(responseBody.data[0]).toHaveProperty('stock');

console.log('Total products:', responseBody.data.length);
console.log('First product:', responseBody.data[0].name);
   
});