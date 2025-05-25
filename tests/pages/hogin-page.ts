import { Page } from '@playwright/test';
import { ToastPage } from './toast-page';
import locators from '../locators';

export class LoginPage {

    constructor(private page: Page, private toast: ToastPage) { }

    async navigate() {
        const baseUrl = process.env.BASE_URL || '/';
        await this.page.goto(baseUrl);
    }

    async signIn() {
        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;

        if (!email || !password) {
            throw new Error('EMAIL or PASSWORD are not defined in .env');
        }
        await this.navigate();
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.submit();
        await this.toast.checkToast('Bem vindo, Josinaldo Playwright!');
    }


    async fillEmail(email: string) {
        await this.page.fill(locators.LOGIN.USER, email);
    }

    async fillPassword(password: string) {
        await this.page.fill(locators.LOGIN.PASSWORD, password);
    }

    async submit() {
        await this.page.click(locators.LOGIN.BTN_LOGIN);
    }

}