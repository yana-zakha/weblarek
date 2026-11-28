import { IProduct } from '../../types/index';

export class Cart {
  private productArr: IProduct[] = [];

  getProducts(): IProduct[] {
    return [...this.productArr];
  }

  addProduct(product: IProduct): void {
    if(this.hasProduct(product.id)) {
      return;
    }
    if(product.price === null) {
      throw new Error ('Недоступно');
    }
    this.productArr.push(product);
  }

  removeProduct(product: IProduct): void {
    const index = this.productArr.findIndex(item => item.id === product.id);
    if (index >= 0) {
      this.productArr.splice(index, 1);
    }
  }

  clearCart(): void {
    this.productArr = [];
  }

  getQuantity(): number {
    return this.productArr.length;
  }

  getTotalValue(): number {
    return this.productArr.reduce((total, product) => {
      const price = product.price || 0;
      return total + price;
    }, 0);
  }

  hasProduct(id: string): boolean {
    return this.productArr.some(product => product.id === id);
  }
}