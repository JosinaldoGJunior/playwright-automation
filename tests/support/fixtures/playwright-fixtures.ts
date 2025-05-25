import { test as base, expect } from '@playwright/test';
import { AccountPage } from '../../pages/account-page';
import { HomePage } from '../../pages/home-page';
import { LoginPage } from '../../pages/hogin-page';
import { ToastPage } from '../../pages/toast-page';
import { TransactionPage } from '../../pages/transaction-page';
import { ExtractPage } from '../../pages/extract-page';

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