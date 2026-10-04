import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('Checkout Product', async ({
    loginPage,
    productPage,
    checkoutPage
}) => {

    // Login
    await loginPage.goto();

    await loginPage.login(
        users.validUser.email,
        users.validUser.password
    );

    await loginPage.verifyLoginSuccess();


    // Search Product
    await productPage.searchProduct('Hammer');


    // Select Product
    await productPage.selectThorHammer();


    // Add Product to Cart
    await productPage.addToCart();


    // Open Cart
    await productPage.openCart();


    // Cart → Already Logged In
    await checkoutPage.proceedFromCartPage();

    await checkoutPage.verifyAlreadyLoggedIn();


    // Already Logged In → Billing
    await checkoutPage.proceedFromLoginPage();


    // Billing Address
    await checkoutPage.fillBillingAddress();


    // Billing → Payment
    await checkoutPage.proceedFromBillingPage();


    // Payment
    await checkoutPage.makePayment();

    await checkoutPage.verifyPaymentSuccess();


    // Confirm Order
    await checkoutPage.confirmOrder();


    // Order Confirmation
    await checkoutPage.verifyOrderConfirmation();
});