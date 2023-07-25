import { injectable } from "inversify";
import { Filter } from "./Filter";

@injectable()
export class IOSFilterElements extends Filter{
    filterIconLocator() {
        return $('//XCUIElementTypeOther[@name="test-Modal Selector Button"]/XCUIElementTypeOther/XCUIElementTypeOther');
    }
    nameAtoZLocator() {
        return $('~Name (A to Z)');
    }
    nameZtoALocator() {
        return $('~Name (Z to A)');
    }
    priceLowToHighLocator() {
        return $('~Price (low to high)');
    }
    priceHighToLowLocator() {
        return $('~Price (high to low)');
    }
    cancelLcator() {
        return $('(//XCUIElementTypeOther[@name="Cancel"])[2]');
    }
    
}