import {When, Then, Given} from "cucumber";
import {HomePage} from "../pages/homePage";
import { browser } from "protractor";
import { config } from "../config/config";

const homepage: HomePage = new HomePage();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

 // Load chai-as-promised support
 chai.use(chaiAsPromised);
 var expect = chai.expect;
 var assert = chai.assert;

Given('I navigate to homepage for search', async () => {
    await browser.get(config.baseUrl).then(async()=>{
        await browser.sleep(2000);
    });
});

When('I search for {string}', async (testData)=> {
    
    await homepage.searchBox.sendKeys(testData);
    await homepage.searchBtn.click().then(async()=>{
        await expect(homepage.searchResultsEle()).to.exist;
    })
});

Then('I should get the following dress:', async (dataTable)=> {
   
  const data = dataTable.hashes();

  for(let i=0; i<=data.length-1; i++){
    let presence =  await expect(homepage.searchResData(data[i].Product).isElementPresent).to.exist;
    if(presence){
      let actData = await homepage.searchResData(data[i].Product).getText();
      let expData = await data[i].Product;

      assert.equal(actData, expData);
     }
  }
});