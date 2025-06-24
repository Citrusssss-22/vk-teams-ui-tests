import { Page } from '@playwright/test';

export class GuestCallPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://call.myteam.mail.ru/8448fdae17b64623b8d62de7022bdee9');
  }

  async enterName(name: string) {
    await this.page.getByPlaceholder('Ваше имя').fill(name);
  }

  async submit() {
    await this.page.getByRole('button', { name: /войти/i }).click();
  }
}