import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('View Product Details', async ({page, loginPage,productPage}) => {
  await loginPage.goto();
  await  loginPage.login(users.validUser.email, users.validUser.password);
  await loginPage.verifyLoginSuccess();
  //await page.pause();
  await  productPage.searchProduct('Hammer');
 // await page.pause();
  await productPage.verifySearchResult('Hammer');
 // await page.pause();
  await productPage.selectThorHammer();
  // await page.pause();
  await productPage.verifyProductDetails();
  
});