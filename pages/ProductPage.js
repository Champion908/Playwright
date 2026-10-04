import { expect } from '@playwright/test';

export class ProductPage {

    constructor(page) {
        this.page = page;

        this.home = page.locator("//*[text()='Home']");
        this.searchBox = page.locator('#search-query');
        this.searchButton = page.locator("//*[@data-test='search-submit']");
        this.searchResult = page.locator("//p[@class='mb-2']");
        this.thorHammer = page.locator("//*[text()=' Thor Hammer ']");
        this.productImage = page.locator("//img[@alt='Thor Hammer']");
        this.addToCartButton = page.locator('#btn-add-to-cart');
        this.cart = page.locator("//a[@aria-label='cart']");
        this.cartTable = page.locator("//table[@class='table table-hover']");
        this.removeButton = page.locator("//a[@class='btn btn-danger']");
        this.removeSuccessMessage = page.getByRole('alert', {
        name: 'Product deleted.'});
    }

    async searchProduct(productName) {
        await this.home.click();
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async verifySearchResult(productName) {
        await expect(this.searchResult)
            .toContainText(`products found for '${productName}'`);
    }

    async selectThorHammer() {
    await this.thorHammer.click();
}

async verifyProductDetails() {
    await expect(this.productImage).toBeVisible();
    
}

async addToCart() {
    await this.addToCartButton.click();
}

async openCart() {
    await this.cart.click();
}

async verifyProductInCart(productName) {
    const productRow = this.cartTable.locator('tbody tr')
        .filter({ hasText: productName });
    await expect(productRow).toBeVisible();
}

async removeProduct(){
    await this.removeButton.click();
}

async verifyProductRemoved(){

    await expect(this.removeSuccessMessage).toBeVisible();
}


}