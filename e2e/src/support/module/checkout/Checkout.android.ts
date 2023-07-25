import { injectable } from "inversify";
import { Checkout } from "./checkout";
@injectable()
export class AndroidCheckoutElements extends Checkout{
    backhomeLocator() {
        return $('~test-BACK HOME');
    }
    finishLocator() {
        return $('~test-FINISH');
    }
    continueLocator() {
        return $('//android.view.ViewGroup[@content-desc="test-CONTINUE"]/android.widget.TextView');
    }
    firstnameLocator() {
       return $('~test-First Name');
    }
    lastnameLocator() {
        return $('~test-Last Name');
    }
    pincodeLocator() {
        return $('~test-Zip/Postal Code');
    }
    checkoutLocator() {
        return $('~test-CHECKOUT');
    }
}