import { Container } from "inversify";
import { Menu } from "../module/menu/Menu";
import { AndroidMenuElements } from "../module/menu/Menu.android";
import { IOSMenuElements } from "../module/menu/Menu.iOS";
import { MENU_SYMBOLS } from "./menu.symbols";


const menu_container = new Container();
export const menu_obj = driver.isAndroid?
        (menu_container.bind<Menu>(MENU_SYMBOLS.androidMenuSymbol).to(AndroidMenuElements)?menu_container.get<Menu>(MENU_SYMBOLS.androidMenuSymbol):null):
        (menu_container.bind<Menu>(MENU_SYMBOLS.iOSMenuSymbol).to(IOSMenuElements)?menu_container.get<Menu>(MENU_SYMBOLS.iOSMenuSymbol):null);
