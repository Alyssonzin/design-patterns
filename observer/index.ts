import { BinanceApi } from "./service/BinanceApi";
import { Bitcoin } from "./service/Bitcoin";
import { BitcoinPriceLogger } from "./service/BitcoinPriceLogger";
import { NewsPlatform } from "./service/NewsPlatform";
import { UserNotifier } from "./service/UserNotifier";

const binanceApi = new BinanceApi();

//Supõe que buscamos o preço atual do Bitcoin através de uma API externa
const newPrice = binanceApi.getPrice();

//A classe Bitcoin será nossa classe OBSERVADA (Subject)
const bitcoin = new Bitcoin();

/*
  Aqui, adicionamos os observadores interessados na classe Bitcoin, que devem reagir à uma mudança no preço do Bitcoin.
  Cada classe adicionada implementa `BitcoinPriceObserver` e reage ao update recebido do Subject
*/
bitcoin.addObserver(new NewsPlatform());
bitcoin.addObserver(new BitcoinPriceLogger());
bitcoin.addObserver(new UserNotifier());

//Alterar o valor do Bitcoin (nosso evento de interesse) dispara internamente a função de notificação aos observadores
bitcoin.setPrice(newPrice);