import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class Checkout{
    abstract checkoutLocator();
    abstract firstnameLocator();
    abstract lastnameLocator();
    abstract pincodeLocator();
    abstract continueLocator();
    abstract finishLocator();
    abstract backhomeLocator()
    async checkout_item(firstName,lastName,zipcode){
        await this.checkoutLocator().click();
        await this.firstnameLocator().setValue(firstName);
        await this.lastnameLocator().setValue(lastName);
        await this.pincodeLocator().setValue(zipcode);
        await this.continueLocator().click();
    }
    async clickFinish(){
        await this.finishLocator().click();
        await this.backhomeLocator().click();
    }
}