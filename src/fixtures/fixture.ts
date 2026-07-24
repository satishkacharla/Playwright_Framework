import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Header } from '../components/Header';
import { Homepage } from '../pages/HomePage';
import { User } from '../models/user';
import { Users } from '../testdata/Users';

type myFixtures = {
    // validUser: User
    homePage: Homepage;
    loginPage: LoginPage;
    header: Header;
}

export const test = base.extend<myFixtures>({
    // validUser: async ({ }, use) => {
    //     await use(Users.validUser)
    // },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    header: async ({ page }, use) => {
        const header = new Header(page);
        await use(header);
    },
    homePage: async ({ page }, use) => {
        const homePage = new Homepage(page);
        await use(homePage);
    }
});

export { expect };