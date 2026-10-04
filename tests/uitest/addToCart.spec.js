import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('Add Product to Cart', async ({page, loginPage, productPage }) => {

    await loginPage.goto();

    await loginPage.login(
        users.validUser.email,
        users.validUser.password
    );

    await loginPage.verifyLoginSuccess();

    await productPage.searchProduct('Hammer');

    await productPage.selectThorHammer();

    await productPage.addToCart();
    await page.pause();

    await productPage.openCart();
    await page.pause();

    await productPage.verifyProductInCart('Thor Hammer');
});