import { Container } from "inversify";
import { Filter } from "../module/filter/Filter";
import { AndroidFilterElements } from "../module/filter/Filter.android";
import { IOSFilterElements } from "../module/filter/Filter.ios";
import { FILTER_SYMBOLS } from "./filter.symbols";

const filter_conainer = new Container();

export const filter_obj = driver.isAndroid?
            (filter_conainer.bind<Filter>(FILTER_SYMBOLS.androidFilterSymbol).to(AndroidFilterElements)? filter_conainer.get<Filter>(FILTER_SYMBOLS.androidFilterSymbol): null):
            (filter_conainer.bind<Filter>(FILTER_SYMBOLS.iOSFilterSymbol).to(IOSFilterElements)? filter_conainer.get<Filter>(FILTER_SYMBOLS.iOSFilterSymbol):null);