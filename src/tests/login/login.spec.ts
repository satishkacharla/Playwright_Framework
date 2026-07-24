import { test, expect } from '../../fixtures/fixture'
import { Users } from '../../testdata/Users';

test.describe('NC - Login Scenarios', () => {

    const users = [{
        role: 'Admin',
        user: Users.admin
    },
    {
        role: 'customer',
        user: Users.customer
    }
    ]

    // users.forEach(({ role, user }) => {
    test.only(`Verify Login Success for ${Users.admin.email}`, async ({ header }) => {
        await header.navigate();
        const loginPage = await header.openLoginPage(); 
        const homePage = await loginPage.login(Users.admin);
        await expect(homePage.homePageHeader).toContainText('Logged in as');
    });
    // });


})