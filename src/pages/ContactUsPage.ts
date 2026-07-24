import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage';
import { ContactUs } from '../models/ContactUs';

export class ContactUsPage extends BasePage {

    readonly contactUsHeading: Locator;
    readonly nameTextbox: Locator;
    readonly emailTextbox: Locator;
    readonly subjectTextbox: Locator
    readonly messageTextbox: Locator;
    readonly uploadFileInputBox: Locator;
    readonly submitButton: Locator;


    constructor(page: Page) {
        super(page);
        this.contactUsHeading = page.getByRole('heading', { name: 'Contact Us' });
        this.nameTextbox = page.getByRole('textbox', { name: 'Name' });
        this.emailTextbox = page.getByRole('textbox', { name: 'Email' });
        this.subjectTextbox = page.getByRole('textbox', { name: 'Subject' });
        this.messageTextbox = page.getByRole('textbox', { name: 'Your Message Here' });
        this.uploadFileInputBox = page.locator('input[type="file"]');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async waitForPageLoad() {
        await this.contactUsHeading.waitFor({ state: 'visible' });
    }

    async fillContactUsForm(contactUsForm: ContactUs) {
        await this.nameTextbox.fill(contactUsForm.name);
        await this.emailTextbox.first().fill(contactUsForm.email);
        await this.subjectTextbox.fill(contactUsForm.subject);
        await this.messageTextbox.fill(contactUsForm.message);
        await this.uploadFileInputBox.setInputFiles('src/testdata/sample.txt');
    }

    async submitContactUsForm(contactUsForm: ContactUs) {
        await this.fillContactUsForm(contactUsForm);
        await this.submitButton.click();
        await this.page.pause();
    }

}