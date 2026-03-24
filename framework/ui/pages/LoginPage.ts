import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly loginPage = this.page.getByTestId('login-page');
  private readonly emailInput = this.page.getByTestId('email-input');
  private readonly passwordInput = this.page.getByTestId('password-input');
  private readonly loginButton = this.page.getByTestId('login-button');
  private readonly loader = this.page.getByTestId('loader');
  private readonly dashboard = this.page.getByTestId('dashboard');
  private readonly welcomeMessage = this.page.getByTestId('welcome-message');

  async open(): Promise<void> {
    await this.goto('/');
    await expect(this.loginPage).toBeVisible();
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertSuccessfulLogin(expectedWelcomeText: string): Promise<void> {
    await expect(this.loader).toBeHidden();
    await expect(this.dashboard).toBeVisible();
    await expect(this.welcomeMessage).toHaveText(expectedWelcomeText);
  }
}
