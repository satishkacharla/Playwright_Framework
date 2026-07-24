import { expect, Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage';

export class Homepage extends BasePage {

     readonly homePageHeader: Locator;

    constructor(page: Page) {
        super(page);
        this.homePageHeader = page.locator('#header');
    }

    async waitForPageLoad() {
        await expect(this.homePageHeader).toContainText('Logged in as');
    }

}