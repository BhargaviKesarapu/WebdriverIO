import { injectable } from "inversify";
import { AddtoCart } from "./AddtoCart";
import "reflect-metadata";

@injectable()
export class IOSCartElements extends AddtoCart{
    cart1Locator() {
        return $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[3]');
    }
    cartLocator() {
        return $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[2]');
    }
}