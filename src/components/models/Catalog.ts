import { IProduct } from '../../types/index';

export class Catalog {
  private productArr: IProduct[] = [];
  private product: IProduct | null = null;

  setProducts(products: IProduct[]): IProduct[] {
    this.productArr = products;
    return this.productArr;
  }

  getProducts(): IProduct[] {
    return this.productArr;
  }

  getProductByID(id: string): IProduct | undefined {
    return this.productArr.find(product => product.id === id);
  }

  setProduct(product: IProduct): IProduct {
    this.product = product;
    return this.product;
  }

  getProduct(product: IProduct): IProduct {
    return product;
  }
}