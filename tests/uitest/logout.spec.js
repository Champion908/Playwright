import { test } from '../../fixtures/baseTest';
import users from '../../test-data/users.json';

test('Logout', async ({page, loginPage}) => {
  await loginPage.goto();
  await  loginPage.login(users.validUser.email, users.validUser.password);
  await page.pause();
  await loginPage.verifyLoginSuccess();
  await page.pause();
  await loginPage.logout();
  await page.pause();
  await loginPage.verifyLogout();
  await page.pause();
});