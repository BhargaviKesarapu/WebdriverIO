import { injectable } from "inversify";

@injectable()
export abstract class Menu {
    abstract menuLocator();
    abstract logoutLocator();

    async clickMenu(){
        await this.menuLocator().click()
    }
    async clickLogout(){
        await this.logoutLocator().click();
    }
}