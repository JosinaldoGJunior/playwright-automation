import { Page } from '@playwright/test';
import locators from '../locators';

export class ExtractPage {

  constructor(private page: Page) {}

  getItem(description: string) {
    return this.page.locator('li.list-group-item', { hasText: description });
  }

  async editTransaction(description: string) {
    await this.getItem(description).locator('.fa-edit').click();
    await this.page.fill(locators.TRANSACTION.DESCRIPTION,`Edit-transaction ${description}`);
  }

  async deleteTransaction(description: string) {
    await this.getItem(description).locator('.fa-trash-alt').click();
  }
}
