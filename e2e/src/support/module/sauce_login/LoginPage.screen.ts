import { injectable } from "inversify/lib/annotation/injectable";
import "reflect-metadata";

@injectable()
export abstract class LoginPage{
    abstract usernameLocator();
    abstract passwordLocator();
    abstract loginLocator();
    abstract assertionLocator();

    async performLogin(userName : string, password : string){
        await this.usernameLocator().setValue(userName);
        await this.passwordLocator().setValue(password);
        await this.loginLocator().click();
    }
    async dashboardAssertion(){
        const loc = await this.assertionLocator();
        await expect(loc).toHaveText('PRODUCTS');
    }

}
