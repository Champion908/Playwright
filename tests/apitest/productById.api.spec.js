import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('API-03 - Get product by ID', async ({ authApi, productApi }) => {

    const token = await authApi.loginAndGetToken(
        users.apiUser.email,
        users.apiUser.password
    );

    expect(token).toBeTruthy();

    const productId = 1;

    const response = await productApi.getProductById(
        productId,
        token
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log('Product:', responseBody);

    // Validate product response
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('price');
    expect(responseBody).toHaveProperty('stock');

    // Verify requested ID
    expect(responseBody.id).toBe(productId);
});