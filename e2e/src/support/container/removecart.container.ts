import { Container } from "inversify";
import { RemoveCart } from "../module/remove_cart/RemoveCart";
import { AndroidRemoveCartElements } from "../module/remove_cart/RemoveCart.android";
import { IOSRemoveCartElements } from "../module/remove_cart/RemoveCart.iOS";
import { REMOVE_SYMBOLS } from "./removecart.symbol";

const removeCart_container = new Container();
export const removecart_obj = driver.isAndroid?
    (removeCart_container.bind<RemoveCart>(REMOVE_SYMBOLS.androidRemoveCartSymbol).to(AndroidRemoveCartElements)? removeCart_container.get<RemoveCart>(REMOVE_SYMBOLS.androidRemoveCartSymbol): null):
    (removeCart_container.bind<RemoveCart>(REMOVE_SYMBOLS.iOSRemoveCartSymbol).to(IOSRemoveCartElements)?removeCart_container.get<RemoveCart>(REMOVE_SYMBOLS.iOSRemoveCartSymbol):null);

