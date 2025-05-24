import { test as base, expect } from '@playwright/test';
import { AccountPage } from '../../pages/AccountPage';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { ToastPage } from '../../pages/ToastPage';
import { TransactionPage } from '../../pages/TransactionPage';
import { ExtractPage } from '../../pages/ExtractPage';

type Fixtures = {
  account: AccountPage;
  home: HomePage;
  login: LoginPage;
  toast: ToastPage;
  transaction: TransactionPage;
  extract: ExtractPage;
};

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => {
    const toast = new ToastPage(page);
    const login = new LoginPage(page, toast);
    await use(login);
  },
  account: async ({ page }, use) => {
    const account = new AccountPage(page);
    await use(account);
  },
  home: async ({ page }, use) => {
    const home = new HomePage(page);
    await use(home);
  },
  toast: async ({ page }, use) => {
    const toast = new ToastPage(page);
    await use(toast);
  },
  transaction: async ({ page }, use) => {
    const transaction = new TransactionPage(page);
    await use(transaction);
  },
  extract: async ({ page }, use) => {
    const extract = new ExtractPage(page);
    await use(extract);
  },
});

export { expect };