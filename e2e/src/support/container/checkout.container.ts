import { Container } from "inversify";
import { Checkout } from "../module/checkout/checkout";
import { AndroidCheckoutElements } from "../module/checkout/Checkout.android";
import { IOSCheckoutElements } from "../module/checkout/Checkout.iOS";
import { CHECKOUT_SYMBOLS } from "./checkout.symbol";

const checkout_container = new Container();
export const checkout_obj = driver.isAndroid ?
    (checkout_container.bind<Checkout>(CHECKOUT_SYMBOLS.androidCheckoutSymbol).to(AndroidCheckoutElements) ? checkout_container.get<Checkout>(CHECKOUT_SYMBOLS.androidCheckoutSymbol) : null )
    :(checkout_container.bind<Checkout>(CHECKOUT_SYMBOLS.iOSCheckoutSymbol).to(IOSCheckoutElements) ? checkout_container.get<Checkout>(CHECKOUT_SYMBOLS.iOSCheckoutSymbol) : null);