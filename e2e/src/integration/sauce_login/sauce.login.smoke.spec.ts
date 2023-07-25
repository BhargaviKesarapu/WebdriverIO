//import { cart_obj, login_obj } from "../../../../container"
import userData from "../../fixtures/sauce_credentials.json";
import checkoutData from "../../fixtures/checkout_credentials.json"
import { cart_obj } from "../../support/container/addtocart.container";
import { checkout_obj } from "../../support/container/checkout.container";
import { login_obj } from "../../support/container/loginpage.container";
import { removecart_obj } from "../../support/container/removecart.container";
import {scrolling_obj } from "../../support/container/scrolling.container";
import { menu_obj } from "../../support/container/menu.container";
import { filter_obj } from "../../support/container/filter.container";

describe('Swag labs',()=>{
    it('Mobile Automation', async() =>{
        await login_obj.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
        await login_obj.dashboardAssertion();
        await scrolling_obj.scrolling();
        await cart_obj.addToCart();
        await scrolling_obj.scrolltoSpecificItem();
        await cart_obj.addToCart1();
        await removecart_obj.cartIcon();
        await removecart_obj.removeCart();
        await removecart_obj.continueShopping();
        await cart_obj.addToCart();
        await removecart_obj.cartIcon();
        await scrolling_obj.scrollToCheckoutButton();
        await checkout_obj.checkout_item(checkoutData.checkout_credentials.firstName, checkoutData.checkout_credentials.lastName, checkoutData.checkout_credentials.zipcode);
        await scrolling_obj.scrollToFinishButton();
        await checkout_obj.clickFinish();
        await menu_obj.clickMenu();
        await menu_obj.clickLogout();
        // await filter_obj.filterIconClick();
        // await filter_obj.nameZtoAButton();
        
    })
})

