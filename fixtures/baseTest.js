import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { AuthApi } from '../api/AuthApi';
import { ProductApi } from '../api/ProductApi';



export const test = base.extend({

loginPage: async({page}, use) => {
 const loginPage = new LoginPage(page);
 await use(loginPage);

},
productPage: async ({ page}, use) => {
   const productPage =  new ProductPage(page);
   await use(productPage);
        
    },

    checkoutPage: async ({ page }, use) => {
    const checkoutPage =  new CheckoutPage(page);
    await use(checkoutPage);
},

// API Fixtures
 authApi: async ({ request }, use) => {
        const authApi = new AuthApi(request);
        await use(authApi);
    },

 productApi: async ({ request }, use) => {
    const productApi = new ProductApi(request);
    await use(productApi);
},




})
