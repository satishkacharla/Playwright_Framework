
import { expect, test } from "../../fixtures/fixture";
import { ProductsPage } from "../../pages/ProductsPage";
import { Users } from "../../testdata/Users";
import { getLogger } from "../../utils/logger";
import { stepWithShot } from "../../utils/reportStep";

const log = getLogger('Products.spec');

test.describe('Products Page Tests', () => {
    let productsPage: ProductsPage;
    test('Add a product to cart', async ({ header, page }) => {
        await stepWithShot('Navigate to Login Page and login with valid credentials', page, async () => {
            log.info('Navigate to Login Page and login with valid credentials');
            await header.navigate();
            const loginPage = await header.openLoginPage();
            await loginPage.login(Users.admin
            );
        });
        await stepWithShot('Open Products Page', page, async () => {
            log.info('Opening Products Page');
            productsPage = await header.openProductsPage();
        });
        await stepWithShot('Search Product', page, async () => {
            log.info('Searching for product: Frozen Tops For Kids');
            await productsPage.searchProduct('Frozen Tops For Kids');
        });
        await stepWithShot('Verify Search Results', page, async () => {
            log.info('Verifying search results for product: Frozen Tops For Kids');
            const product = await productsPage.getProduct('Frozen Tops For Kids');
            expect(product).not.toBeNull();
        });
        await stepWithShot('Add Product to Cart', page, async () => {
            log.info('Adding product to cart: Frozen Tops For Kids');
            const product = await productsPage.getProduct('Frozen Tops For Kids');
            if (product) {
                await product.addToCart();
            } else {
                throw new Error("Product not found");
            }
        });
    });
});