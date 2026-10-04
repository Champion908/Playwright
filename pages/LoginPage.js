import { expect } from '@playwright/test';
export class LoginPage{

    constructor(page){
        this.page = page;
        this.email = page.locator("#email");
        this.password = page.locator("#password");
        this.loginButton = page.locator('[data-test="login-submit"]');
        this.loginError = page.locator("//*[text()='Invalid email or password']");
        this.dropDown =  page.locator("#menu");
        this.signOut = page.locator("//*[text()='Sign out']");
        this.home = page.locator("//*[text()='Home']");
        this.searchBox = page.locator('#search-query');
        this.searchButton = page.locator("//*[@data-test='search-submit']");
        this.searchResult = page.locator("//p[@class='mb-2']");

    }

   async goto()
   {
       await this.page.goto("https://practicesoftwaretesting.com/auth/login");
   }

   async login(email, password)
   {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
   }

   async verifyLoginSuccess() {
        await expect(this.page)
            .toHaveURL('https://practicesoftwaretesting.com/account');
    }

     async verifyLoginError() {
        await expect(this.loginError)
            .toHaveText('Invalid email or password');
    }

    async logout() {
        await this.dropDown.click();
        await this.signOut.click();
    }

    async verifyLogout() {
        await expect(this.page)
            .toHaveURL('https://practicesoftwaretesting.com/auth/login');
    }

    async searchProduct(productName) {
    await this.home.click();
    await this.searchBox.fill(productName);
    await this.searchButton.click();
}


    async verifySearchResult(productName) {
    await expect(this.searchResult)
        .toHaveText(`6 products found for '${productName}'`);
}


}