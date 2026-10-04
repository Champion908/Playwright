import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('Remove Product from Cart', async ({ loginPage, productPage }) => {

    await loginPage.goto();

    await loginPage.login(
        users.validUser.email,
        users.validUser.password
    );

    await loginPage.verifyLoginSuccess();

    await productPage.searchProduct('Hammer');

    await productPage.selectThorHammer();

    await productPage.addToCart();

    await productPage.openCart();

    await productPage.removeProduct();

    await productPage.verifyProductRemoved();
});