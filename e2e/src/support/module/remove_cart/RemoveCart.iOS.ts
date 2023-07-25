import { injectable } from "inversify";
import { RemoveCart } from "./RemoveCart";
import "reflect-metadata";
@injectable()
export class IOSRemoveCartElements extends RemoveCart{
    cartIconLocator() {
        return $('//XCUIElementTypeOther[@name="test-Cart"]/XCUIElementTypeOther');
    }
    removeLocator() {
        return $('~test-REMOVE');
    }
    continueShoppingLocator() {
        return $('~test-CONTINUE SHOPPING');
    }
}