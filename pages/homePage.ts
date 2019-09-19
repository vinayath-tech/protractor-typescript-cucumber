import { $, ElementFinder, element, by, browser } from "protractor";

export class HomePage {
    productLink: ElementFinder;

    constructor() {
        this.productLink = element(by.css("ul#homefeatured li:nth-child(1) div.product-container"));
    }

    addToCartBtn(){
        return element(by.css("p#add_to_cart button span"));
    }

}
