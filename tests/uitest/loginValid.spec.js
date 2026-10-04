import { test} from '../../fixtures/baseTest'
import users from '../../test-data/users.json';

test('Valid Login', async ({page, loginPage}) => {
  await loginPage.goto();
  await  loginPage.login(users.validUser.email, users.validUser.password);
 // await page.pause();
  await loginPage.verifyLoginSuccess();
});





  

