import { Page } from '@playwright/test';
import locators from '../locators';

export class HomePage {

    constructor(private page: Page) { }

    async menuAccount() {
        await this.page.click(locators.MENU.SETTINGS);
        await this.page.click(locators.MENU.ACCOUNT);
    }

    async menuTransaction() {
        await this.page.click(locators.MENU.TRANSACTION);
    }

}