import { Container } from "inversify";
import { VerticalScrolling } from "../module/vertical_scrolling/VerticalScrolling.";
import { AndroidScrollingElements } from "../module/vertical_scrolling/VerticalScrolling.android";
import { IOSScrollingElements } from "../module/vertical_scrolling/VerticalScrolling.iOS";
import { SCROLLING_SYMBOLS } from "./scrolling.symbol";

const scrolling_container = new Container();
export const scrolling_obj = driver.isAndroid?
        (scrolling_container.bind<VerticalScrolling>(SCROLLING_SYMBOLS.androidScrollingSymbol).to(AndroidScrollingElements)?scrolling_container.get<VerticalScrolling>(SCROLLING_SYMBOLS.androidScrollingSymbol): null):
        (scrolling_container.bind<VerticalScrolling>(SCROLLING_SYMBOLS.iOSScrollingSymbol).to(IOSScrollingElements)?scrolling_container.get<VerticalScrolling>(SCROLLING_SYMBOLS.iOSScrollingSymbol): null);
