import { Page, Locator } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { ProductCard } from "./ProductCard";

export class ProductGrid extends BasePage {

    readonly productCards: Locator;
    readonly productName: Locator;

    constructor(page: Page) {
        super(page);
        this.productCards = page.locator(".single-products");
        this.productName = page.locator('.productinfo p');
    }

    async getProduct(productName: string): Promise<ProductCard | null> {
        const productCount = await this.productCards.count();
        for (let i = 0; i < productCount; i++) {
            const card = this.productCards.nth(i);
            const productNameText = (await this.productName.textContent())?.trim() || '';
            if (productNameText === productName) {
                return new ProductCard(card, this.page);
            }
        }
        throw new Error(`Product '${productName}' not found.`);
    }
}