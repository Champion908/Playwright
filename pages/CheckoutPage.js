import { expect } from '@playwright/test';

export class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Cart → Already Logged In page
        this.proceedFromCart = page.locator(
            '[data-test="proceed-1"]'
        );

        // Already Logged In → Billing
        this.proceedFromLogin = page.locator(
            '[data-test="proceed-2"]'
        );

        // Billing → Payment
        this.proceedFromBilling = page.locator(
            '[data-test="proceed-3"]'
        );

        // Already logged-in message
        this.alreadyLoggedInMessage = page.getByText(
            /you are already logged in\. You can proceed to checkout/i
        );

        // Billing
        this.country = page.locator('[data-test="country"]');
        this.postalCode = page.locator('[data-test="postal_code"]');
        this.houseNumber = page.locator('[data-test="house_number"]');

        // Payment
        this.paymentMethod = page.locator(
            '[data-test="payment-method"]'
        );

        this.finishButton = page.locator(
            '[data-test="finish"]'
        );

        this.paymentSuccess = page.getByText(
            'Payment was successful'
        );

        // Final confirmation
        this.orderConfirmation = page.getByText(
            /Thanks for your order! Your invoice number is/
        );
    }

    async proceedFromCartPage() {
        await this.proceedFromCart.click();
    }

    async verifyAlreadyLoggedIn() {
        await expect(this.alreadyLoggedInMessage)
            .toBeVisible();
    }

    async proceedFromLoginPage() {
        await this.proceedFromLogin.click();
    }

    async fillBillingAddress() {
        await this.country.selectOption('AU');

        await this.postalCode.fill('2000');

        await this.houseNumber.fill('007');
    }

    async proceedFromBillingPage() {
        await this.proceedFromBilling.click();
    }

    async makePayment() {
        await this.paymentMethod.selectOption(
            'cash-on-delivery'
        );

        await this.finishButton.click();
    }

    async verifyPaymentSuccess() {
        await expect(this.paymentSuccess)
            .toBeVisible();
    }

    async confirmOrder() {
        await this.finishButton.click();
    }

    async verifyOrderConfirmation() {
        await expect(this.orderConfirmation)
            .toBeVisible();
    }
}