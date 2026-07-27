import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

export class ProductCard extends BasePage {
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly viewProductButton: Locator;

    constructor(private readonly card: Locator, page: Page) {
        super(page);
        this.productName = card.locator('.productinfo p');
        this.productPrice = card.locator('.productinfo h2');
        this.addToCartButton = card.locator('.productinfo a.add-to-cart');
        this.viewProductButton = card.locator('.productinfo a[href*="product"]');

    }

    async getProductName(): Promise<string> {
        return (await this.productName.textContent())?.trim() || '';
    }

    async getProductPrice(): Promise<string> {
        return (await this.productPrice.textContent())?.trim() || '';
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async openProduct(): Promise<ProductDetailsPage> {
        await this.viewProductButton.click();
        return new ProductDetailsPage(this.card.page());
    }
    

}