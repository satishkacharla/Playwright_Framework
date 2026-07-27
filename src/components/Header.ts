import { Page, Locator } from '@playwright/test'
import { Homepage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { BasePage } from '../pages/BasePage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { ProductsPage } from '../pages/ProductsPage';

export class Header extends BasePage {

    readonly homeLink: Locator;
    readonly productsLink: Locator;
    readonly cartLink: Locator;
    readonly signUp_LoginLink: Locator;
    readonly testCasesLink: Locator;
    readonly apiTestingLink: Locator;
    readonly videoTutorialsLink: Locator;
    readonly contactUsLink: Locator

    constructor(page: Page) {
        super(page);
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.cartLink = page.getByRole('link', { name: 'Cart' });
        this.signUp_LoginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.testCasesLink = page.getByRole('link', { name: 'Test Cases' });
        this.apiTestingLink = page.getByRole('link', { name: 'API Testing' });
        this.videoTutorialsLink = page.getByRole('link', { name: 'Video Tutorials' });
        this.contactUsLink = page.getByRole('link', { name: 'Contact us' })
    }

    async openHomepage(): Promise<Homepage> {
        await this.homeLink.click();
        return new Homepage(this.page)
    }

    async openLoginPage(): Promise<LoginPage> {
        await this.signUp_LoginLink.click();
        const loginPage = new LoginPage(this.page);
        await loginPage.waitForPageLoad();
        return loginPage;
    }

    async openContactUsPage(): Promise<ContactUsPage> {
        await this.contactUsLink.click();
        const contactUsPage = new ContactUsPage(this.page);
        contactUsPage.waitForPageLoad();
        return contactUsPage;
    }

    async openProductsPage():Promise<ProductsPage> {
        await this.productsLink.click();
        const productsPage = new ProductsPage(this.page);
        await productsPage.waitForPageLoad();
        return productsPage;
    }

}