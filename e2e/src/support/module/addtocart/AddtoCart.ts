import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class AddtoCart {
    abstract cartLocator();
    abstract cart1Locator();
     async addToCart(){
        await this.cartLocator().click();
    }
    async addToCart1(){
        await this.cart1Locator().click();
    }
}