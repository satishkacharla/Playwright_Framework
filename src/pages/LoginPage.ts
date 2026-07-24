import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage';
import { Homepage } from './HomePage';
import { User } from '../models/user';

export class LoginPage extends BasePage {

    readonly emailTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page)
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.emailTextbox = page.getByRole('textbox', { name: 'Email Address' });
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async waitForPageLoad() {
        await this.loginButton.waitFor({
            state: 'visible'
        })
    }

    async login(user:User): Promise<Homepage> {
        await this.emailTextbox.first().fill(user.email);
        await this.passwordTextbox.first().fill(user.password);
        await this.loginButton.click();
        const homePage = new Homepage(this.page);
        await homePage.waitForPageLoad();
        return homePage;
    }

}