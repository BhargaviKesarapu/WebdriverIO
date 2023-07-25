import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class VerticalScrolling{
    abstract scrollUptoSpecificItemLocator();
    abstract scrolldownLocator();
    abstract scrollUpLocator();
    abstract scrolltofinishButtonLocator();
    abstract scrollToCheckoutButtonLocator();
    abstract scrollToContinueShoppingButtonLocator();
    async scrolling(){
        await this.scrolldownLocator();
        await this.scrollUpLocator();
    }
    async scrolltoSpecificItem(){
        await this.scrollUptoSpecificItemLocator();
    }
    async scrollToFinishButton(){
        await this.scrolltofinishButtonLocator();
    }
    async scrollToCheckoutButton(){
        await this.scrollToCheckoutButtonLocator();
    }
    async scrollToContinueShoppingButton(){
        await this.scrollToContinueShoppingButtonLocator();
    }
}