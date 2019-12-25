import { When, Then } from "cucumber";
import  { HomePage } from "../pages/homePage";
import  {CheckoutPage} from "../pages/checkoutPage";
import  {LoginPage} from "../pages/loginPage";
import {OrderPage} from "../pages/orderPage";
import {browser} from "protractor";

const homePage:HomePage = new HomePage();
const checkoutPage:CheckoutPage = new CheckoutPage();
const orderPage:OrderPage = new OrderPage();
const loginPage:LoginPage = new LoginPage();


const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

 // Load chai-as-promised support
 chai.use(chaiAsPromised);
 var expect = chai.expect;
 var assert = chai.assert;

When('I choose a dress to buy', async ()=> {
    //Navigate to product page
    await homePage.addToCartBtn().click().then(async()=>{
        await expect(checkoutPage.proceedToCheckoutBtn).to.exist;
        await browser.sleep(2000);
    })

    //Navigate to checkout page
    await checkoutPage.proceedToCheckoutBtn.click().then(async()=>{
        await checkoutPage.checkOutBtn.isDisplayed().then(async()=> {
            await checkoutPage.checkOutBtn.click().then(async()=>{
                await browser.sleep(2000);
            })
        })
    })
  });

  Then('I should be able to pay for the dress', async ()=> {

    await orderPage.addressProceedBtn.isDisplayed().then(async()=>{
        await orderPage.addressProceedBtn.click().then(async()=> {
            await expect(orderPage.shippingHeader).to.exist;
        })
    })
  });

  Then('I should get an order confirmation message', async()=> {
    await orderPage.agreemenBtn.isDisplayed().then(async()=>{
        await orderPage.agreemenBtn.click().then(async()=>{
            await orderPage.shippingProceedBtn.click();
        });
    })
  });