import { test, expect } from '../../fixtures/fixture'
import { ContactUs } from '../../models/ContactUs';
import { Users } from '../../testdata/Users';

test.describe('NC - Contact Us Scenarios', () => {

    test('Contact Us Form Submission Successfull', async ({ header }) => {
        const contactUsForm = new ContactUs('Satish', 'kacharlasatish546@gmail.com', 'Service Required', 'Please schedule for a service')
        await header.navigate();
        const loginPage = await header.openLoginPage();
        await loginPage.login(Users.admin);
        const contactUsPage = await header.openContactUsPage();
        await contactUsPage.waitForPageLoad();
        await contactUsPage.submitContactUsForm(contactUsForm);
    })

});