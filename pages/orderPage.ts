import { ElementFinder, element, by } from "protractor";

export class OrderPage{

    addressHeader: ElementFinder;
    addressProceedBtn: ElementFinder;
    shippingHeader: ElementFinder;
    agreemenBtn: ElementFinder;
    shippingProceedBtn: ElementFinder;

    constructor(){
        this.addressHeader = element(by.css("h1.page-heading"));
        this.addressProceedBtn = element(by.xpath("//button[@name='processAddress']/span"));
        this.shippingHeader = element(by.cssContainingText("h1.page-heading", "Shipping"));
        this.agreemenBtn = element(by.xpath("//input[@type='checkbox']"));
        this.shippingProceedBtn = element(by.xpath("//button[@name='processCarrier']/span"));
    }
}