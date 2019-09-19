import {ElementFinder, element, by} from 'protractor';

export class CheckoutPage{

    proceedToCheckoutBtn: ElementFinder;
    checkOutBtn: ElementFinder;
    cartQuantityEle: ElementFinder;
    deleteBtn: ElementFinder;
    emptyNotification: ElementFinder;

    constructor() {
        this.proceedToCheckoutBtn = element(by.css("div.button-container a span"));
        this.checkOutBtn = element(by.css("p.cart_navigation a:nth-child(1)"));
        this.cartQuantityEle = element(by.css("span.ajax_cart_quantity:nth-child(2)"));
        this.deleteBtn = element(by.css("i.icon-trash"));
        this.emptyNotification = element(by.css("p.alert"));
    }
}