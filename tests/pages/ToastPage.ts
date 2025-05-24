import { Page, expect } from '@playwright/test';
import locators from '../locators';


export class ToastPage {

    constructor(private page: Page) { }

    async checkToast(message: string) {
        const toast = this.page.locator(locators.MESSAGE).first();
        await expect(toast).toBeVisible();
        await expect(toast).toContainText(message);
    }

}