import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class RemoveCart{
    abstract cartIconLocator();
    abstract removeLocator();
    abstract continueShoppingLocator();
    async cartIcon(){
        await this.cartIconLocator().click();
    }
    async continueShopping(){
        await this.continueShoppingLocator().click();
    }
    async removeCart(){
        await this.removeLocator().click();
    }
}