import { injectable } from "inversify";
import { RemoveCart } from "./RemoveCart";
import "reflect-metadata";

@injectable()
export class AndroidRemoveCartElements extends RemoveCart{
    cartIconLocator() {
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.view.ViewGroup');
    }
    removeLocator() {
        return $('~test-REMOVE');
    }
    continueShoppingLocator() {
        return $('//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]/android.widget.TextView');
    }
}