import { test } from '../../../framework/core/fixtures/ui.fixture';

test.describe('UI Smoke | Login', () => {
  test('user logs in successfully with valid credentials', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('test@test.com', '1234');
    await loginPage.assertSuccessfulLogin('Welcome Roger');
  });
});
