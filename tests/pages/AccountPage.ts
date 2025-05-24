import { Page, expect } from '@playwright/test';
import locators from '../locators';


export class AccountPage {

    constructor(private page: Page) { }

    async createAccount(accountName: string) {
        await this.page.fill(locators.ACCOUNT.NAME, accountName);
        await this.page.click(locators.ACCOUNT.BTN_SAVE);
        await this.page.waitForSelector(`tr:has-text("${accountName}")`, {
            timeout: 30000
        });
    }

    async editAccount(accountName: string) {
        await this.page.locator('tr', { hasText: accountName }).locator('.fa-edit').click();
        await this.page.fill(locators.ACCOUNT.NAME, `edit ${accountName}`);
        await this.page.click(locators.ACCOUNT.BTN_SAVE);
        await expect(this.page.locator('tr', { hasText: `edit ${accountName}` })).toBeVisible();
    }

    async deleteAccount(deleteAccount: string) {
        await this.page.locator('tr', { hasText: deleteAccount }).locator('.fa-trash-alt').click();
    }

}