import { Page } from '@playwright/test'


export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(){
        await this.page.goto('/');
    }

    async getTitle() {
        return await this.page.title();
    }

    async getCurrentUrl() {
        return this.page.url();
    }
}