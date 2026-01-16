import { BinanceApi } from "./service/BinanceApi";
import { Bitcoin } from "./service/Bitcoin";
import { BitcoinPriceLogger } from "./service/BitcoinPriceLogger";
import { NewsPlatform } from "./service/NewsPlatform";
import { UserNotifier } from "./service/UserNotifier";

const binanceApi = new BinanceApi();

const newPrice = binanceApi.getPrice();

const bitcoin = new Bitcoin();

bitcoin.addObserver(new NewsPlatform());
bitcoin.addObserver(new BitcoinPriceLogger());
bitcoin.addObserver(new UserNotifier());

bitcoin.setPrice(newPrice);