import { injectable } from "inversify";
import { LoginPage } from "./LoginPage.screen";
import "reflect-metadata";

@injectable()
export class IOSLoginElements extends LoginPage{
    usernameLocator() {
        return $('~test-Username');
    }
    passwordLocator() {
        return $('~test-Password');
    }
    loginLocator() {
        return $('~test-LOGIN');
    }
    assertionLocator() {
        return $('//XCUIElementTypeStaticText[@name="PRODUCTS"]');
    }
    
}