import { AddtoCart } from "./AddtoCart";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class AndroidCartElements extends AddtoCart{
    cart1Locator() {
        return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[3]/android.widget.TextView');
    }
    cartLocator() {
        return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]/android.widget.TextView');
    }
}