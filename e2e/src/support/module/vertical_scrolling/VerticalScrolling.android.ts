import { VerticalScrolling } from "./VerticalScrolling.";


export class AndroidScrollingElements extends VerticalScrolling{
    scrollToContinueShoppingButtonLocator() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("CONTINUE SHOPPING")');
    }
    scrollToCheckoutButtonLocator() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("CHECKOUT")');
    }
    scrolltofinishButtonLocator() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("FINISH")');
    }
    scrollUptoSpecificItemLocator(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Sauce Labs Bolt T-Shirt")');
    }
    scrolldownLocator() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }
    scrollUpLocator() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Sauce Labs Backpack")');
    }
}