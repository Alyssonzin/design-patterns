import { Item } from "./Item";

/*
  Esta classe representa um conjunto de produtos, ou seja, um composite. 
  Ela pode ter uma lista de Items ou outros composites,
*/
export class ProductBox implements Item {
  private items: Item[] = []; // Lista de itens ou composites

  addItem(...item: Item[]) {
    this.items.push(...item);
  }

  removeItem(item: Item): Item[] {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      return this.items.splice(index, 1);
    }
    return [];
  }

  getPrice(): number {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }
}