import { Container } from "inversify";
import { AddtoCart } from "../module/addtocart/AddtoCart";
import { AndroidCartElements } from "../module/addtocart/AddtoCart.android";
import { IOSCartElements } from "../module/addtocart/AddtoCart.iOS";
import { CART_SYMBOL } from "./addtocart.symbols";

const cart_container = new Container();

export const cart_obj = driver.isAndroid ?
    (cart_container.bind<AddtoCart>(CART_SYMBOL.androidCartSymbol).to(AndroidCartElements) ? cart_container.get<AddtoCart>(CART_SYMBOL.androidCartSymbol) : null )
    :(cart_container.bind<AddtoCart>(CART_SYMBOL.iOSCartSymbol).to(IOSCartElements) ? cart_container.get<AddtoCart>(CART_SYMBOL.iOSCartSymbol) : null);