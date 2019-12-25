import { When, Then } from "cucumber";
import { LoginPage } from "../pages/loginPage";
import { browser } from "protractor";
import { async } from "q";
import { ExpectedConditions } from "protractor";

const loginPage: LoginPage = new LoginPage();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

 // Load chai-as-promised support
 chai.use(chaiAsPromised);
 var expect = chai.expect;
 var assert = chai.assert;

 When('I login to the site using below credentials', async (dataTable)=> {
    
    const data = dataTable.hashes()
    await loginPage.signIn(data[0].username, data[0].password).then(async()=>{
        await expect(loginPage.accountEle).to.exist;
    })
  });


  Then('I should be able to successfully login', async ()=> {
     await expect(loginPage.ordersEle).to.exist;
     await expect(loginPage.signOutBtn).to.exist;
     await expect(loginPage.creditEle).to.exist;
  });
