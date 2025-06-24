import { test, expect } from '@playwright/test';
import { GuestCallPage } from '../pages/GuestCallPage';

test('Гость может войти в звонок', async ({ page }) => {
  const guest = new GuestCallPage(page);
  await guest.goto();
  await guest.enterName('Тест QA');
  await guest.submit();

  await expect(page).toHaveURL(/call\.myteam\.mail\.ru/);
});