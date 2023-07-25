import { injectable } from "inversify";
import { Menu } from "./Menu";

@injectable()
export class IOSMenuElements extends Menu{
    menuLocator() {
        return $('//XCUIElementTypeOther[@name="test-Menu"]/XCUIElementTypeOther');
    }
    logoutLocator() {
        return $('~test-LOGOUT');
    }
    
}