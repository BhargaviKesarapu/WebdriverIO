import { Container } from "inversify";
import { AndroidLoginElements } from "../module/sauce_login/LoginPage.android";
import { IOSLoginElements } from "../module/sauce_login/LoginPage.iOS";
import { LoginPage } from "../module/sauce_login/LoginPage.screen";
import { LOGIN_SYMBOL } from "./loginpage.symbols";

const login_container = new Container();
export const login_obj = driver.isAndroid ?
    (login_container.bind<LoginPage>(LOGIN_SYMBOL.androidLoginSymbol).to(AndroidLoginElements) ? login_container.get<LoginPage>(LOGIN_SYMBOL.androidLoginSymbol) : null )
    :(login_container.bind<LoginPage>(LOGIN_SYMBOL.iOSLoginSymbol).to(IOSLoginElements) ? login_container.get<LoginPage>(LOGIN_SYMBOL.iOSLoginSymbol) : null);