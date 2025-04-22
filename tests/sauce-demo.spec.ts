import { test, expect } from '@playwright/test';
import {LoginPage} from './pages/loginpage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

test('Demo E2E Test with POM', async({page}) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.loginToApplication('standard_user', 'secret_sauce');

    await productsPage.addProductToCart();

    await productsPage.goToCart();

    await cartPage.proceedToCheckout();

    await checkoutPage.fillInformation('John', 'Doe', '12345');

    await checkoutPage.finishOrder();

    await checkoutPage.verifyConfirmation();


    await expect(checkoutPage.confirmationMessage).toHaveText('Thank you for your order!');

});