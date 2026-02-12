/*
  Esta interface representa o componente base do padrão Composite. Ela representa um item genérico 
  que pode ser um produto individual ou um conjunto de produtos (composite).
*/
export interface Item {
  getPrice(): number;
}