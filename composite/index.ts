import { Product } from "./products/Product";
import { ProductBox } from "./products/ProductBox";

// Criamos alguns produtos individuais
const arroz = new Product("Arroz", 10.50);
const feijao = new Product("Feijao", 22.50);
const milho = new Product("Milho", 5.00);

const chocolate = new Product("Chocolate", 15.00);
const biscoito = new Product("Biscoito", 8.00);
const chiclete = new Product("Chiclete", 3.00);

// Criamos caixas (composites) e adicionamos os produtos em suas respectivas caixas
const caixaDeGraos = new ProductBox();
const caixaDeDoces = new ProductBox();

caixaDeGraos.addItem(arroz, feijao, milho);
caixaDeDoces.addItem(chocolate, biscoito, chiclete);

// Criamos uma caixa maior que contém as caixas menores
const caixaGrande = new ProductBox();
caixaGrande.addItem(caixaDeGraos, caixaDeDoces);

console.log("Valor total dos graos: ", caixaDeGraos.getPrice());
console.log("Valor total dos doces: ", caixaDeDoces.getPrice());

console.log("Valor total dos produtos no carrinho: ", caixaGrande.getPrice());