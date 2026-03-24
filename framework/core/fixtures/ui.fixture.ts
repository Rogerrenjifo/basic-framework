import { test as base } from '@playwright/test';
import { LoginPage } from '../../ui/pages/LoginPage';

type UiFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<UiFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';
