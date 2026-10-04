import { test} from '../../fixtures/baseTest'
import users from '../../test-data/users.json';

test('Invalid Login', async ({ page, loginPage }) => {

    await loginPage.goto();

    await loginPage.login(
        users.invalidUser.email,
        users.invalidUser.password
    );

    await loginPage.verifyLoginError();
  //  await page.pause();


});