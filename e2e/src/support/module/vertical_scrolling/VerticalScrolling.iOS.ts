import { VerticalScrolling } from "./VerticalScrolling.";


export class IOSScrollingElements extends VerticalScrolling{
    async scrollToContinueShoppingButtonLocator() {
        const con = await $('~test-CONTINUE');
        return driver.execute('mobile: scroll', { element: con.elementId, direction: "down" });
    }
    async scrollToCheckoutButtonLocator() {
        const checkout = await $('~test-CHECKOUT');
        return driver.execute('mobile: scroll', { element: checkout.elementId, direction: "down" });
    }
    async scrolltofinishButtonLocator() {
        const finish = await $('~test-FINISH');
        return driver.execute('mobile: scroll', { element: finish.elementId, direction: "down" });
    }
    async scrollUptoSpecificItemLocator() {
        const item = await $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[2]');
        return driver.execute('mobile: scroll', { element: item.elementId, direction: "down" });
    }
    scrolldownLocator() {
        return driver.execute('mobile: scroll', { direction: "down" });
    }
    scrollUpLocator() {
        return driver.execute('mobile: scroll', { direction: "up" });
    }
}