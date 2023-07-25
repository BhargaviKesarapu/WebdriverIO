import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class Filter{
    abstract filterIconLocator();
    abstract nameAtoZLocator();
    abstract nameZtoALocator()
    abstract priceLowToHighLocator();
    abstract priceHighToLowLocator();
    abstract cancelLcator();

    async filterIconClick(){
        await this.filterIconLocator().click();
    }
    async nameAtoZButton(){
       await this.nameAtoZLocator().click();
    }
    async nameZtoAButton(){
        await this.nameZtoALocator().click();
    }
    async priceLowtoHighButton(){
        await this.priceLowToHighLocator().click();
    }
    async priceHightoLowButton(){
        await this.priceHighToLowLocator().click();
    }
    async cancelButton(){
        await this.cancelLcator().click();
    }

}