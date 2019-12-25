import { $, ElementFinder, element, by, browser } from "protractor";

export class HomePage {
    productLink: ElementFinder;
    searchBox: ElementFinder;
    searchBtn: ElementFinder;
    dressHeader: ElementFinder;

    constructor() {
        //this.productLink = element(by.css("ul#homefeatured li:nth-child(1) div.product-container"));
        this.productLink = element(by.xpath("//li[1]/div[@class='product-container']/div[1]/div"));
        this.dressHeader = element(by.css("ul.sf-menu li:nth-child(1)"));
        this.searchBox = element(by.css("#search_query_top"));
        this.searchBtn = element(by.css("button.button-search"));
    }

    addToCartBtn(){
        return element(by.xpath("//li[1]/div[@class='product-container']/div[2]/div[2]/a[1]"));
    }

    searchResultsEle(){
        return element(by.cssContainingText("h1.page-heading", "Search"));
    }

    searchResData(searchData){
        return element(by.xpath("//div[@class='right-block']/h5/a[@title='"+searchData+"']"));
    }

    

}
