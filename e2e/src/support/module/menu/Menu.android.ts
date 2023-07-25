import { injectable } from "inversify";
import { Menu } from "./Menu";

@injectable()
export class AndroidMenuElements extends Menu{
    menuLocator() {
        return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView');
    }
    logoutLocator() {
        return $('(//android.widget.TextView[@content-desc="test-Price"])[1]');
    }
    
}