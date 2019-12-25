import { browser, protractor } from "protractor";
import { HomePage } from "../pages/homePage";
import { Given, TableDefinition } from "cucumber";
import { config } from "../config/config";
import { CheckoutPage } from "../pages/checkoutPage";
import { async } from "q";
const { When, Then } = require("cucumber");

const homePage: HomePage = new HomePage();
const checkoutPage: CheckoutPage = new CheckoutPage();

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

 // Load chai-as-promised support
 chai.use(chaiAsPromised);
 var expect = chai.expect;

Given('I navigate to homepage', async ()=> {
    await browser.get(config.baseUrl);
    await homePage.dressHeader.isDisplayed().then(async()=>{
        await homePage.dressHeader.click().then(async()=>{
            await browser.sleep(2000);
            await homePage.productLink.isDisplayed().then(async()=>{

                await browser.actions().mouseMove(homePage.productLink).perform();
                await expect(homePage.addToCartBtn()).to.exist;
                await browser.sleep(3000);
            });
        });
    });
});

Given('I add a dress to the cart', async () => {
    await homePage.addToCartBtn().click().then(async()=>{
        await expect(checkoutPage.proceedToCheckoutBtn).to.exist;
        await browser.sleep(2000);
    })
});

When('I proceed to checkout', async ()=> {
    await checkoutPage.proceedToCheckoutBtn.click().then(async()=>{
        await expect(checkoutPage.checkOutBtn).to.exist;
    })
});

Then('the dress shoud be successfully added to the cart', async ()=> {

    await expect(checkoutPage.cartQuantityEle.getText()).to.eventually.equal("1");
  });

Then('I should be navigated to the checkout page', async ()=> {
     await checkoutPage.checkOutBtn.click();
  });

  When('I remove the product', async ()=> {
    await checkoutPage.deleteBtn.click();
    await browser.sleep(2000);
  });

  Then('the product should be successfully removed', async ()=> {
    await checkoutPage.emptyNotification.getText().then(async(actText)=>{
       chai.expect(actText).to.equal("Your shopping cart is empty.");
    })
  });



