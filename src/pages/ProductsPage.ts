import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductGrid } from "../components/ProductGrid";
import { ProductCard } from "../components/ProductCard";

export class ProductsPage extends BasePage {
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    productGird: ProductGrid

    constructor(page: Page) {
        super(page);
        this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
        this.searchButton = page.locator('#submit_search');
        this.productGird = new ProductGrid(page);
    }

    async waitForPageLoad() {
        await this.searchButton.waitFor({
            state: 'visible'
        })
    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async getProduct(productName: string): Promise<ProductCard | null> {
        return await this.productGird.getProduct(productName);
    }
}