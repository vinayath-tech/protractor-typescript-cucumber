import  { ElementFinder, element, by } from "protractor";
import { async } from "q";

export class LoginPage{

    loginBtn: ElementFinder;
    unameBtn: ElementFinder;
    pwordBtn: ElementFinder;
    submitBtn: ElementFinder;
    accountEle: ElementFinder;
    ordersEle: ElementFinder;
    signOutBtn: ElementFinder;
    creditEle: ElementFinder;

    constructor(){
        this.loginBtn = element(by.css("a.login"));
        this.unameBtn = element(by.css("#email"));
        this.pwordBtn = element(by.css("#passwd"));
        this.submitBtn = element(by.css("#SubmitLogin"));
        this.accountEle = element(by.cssContainingText("h1.page-heading", "My Account"));
        this.ordersEle = element(by.xpath("//a[@title='Orders']"));
        this.signOutBtn = element(by.css("a.logout"));
        this.creditEle = element(by.xpath("//a[@title='Credit slips']"));

    }

    async signIn(username, password){
       await this.loginBtn.isDisplayed().then(async() => {
            await this.loginBtn.click().then(async() => {
                await this.unameBtn.sendKeys(username);
                await this.pwordBtn.sendKeys(password);
                await this.submitBtn.click();
            });
        })
    }



}