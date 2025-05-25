import { Page, expect } from '@playwright/test';
import locators from '../locators';

export class TransactionPage {

    constructor(private page: Page) { }

    async createTransaction(date:string, description: string, value: number, owner: string, accountName: string) {
        await this.page.fill(locators.TRANSACTION.DATA, date);
        await this.page.fill(locators.TRANSACTION.DESCRIPTION, description);
        await this.page.fill(locators.TRANSACTION.VALUE, value.toString());
        await this.page.fill(locators.TRANSACTION.OWNER, owner);
        await this.page.selectOption(locators.TRANSACTION.ACCOUNT, { label: accountName });
        await this.page.click(locators.TRANSACTION.BTN_SAVE);
    }
}