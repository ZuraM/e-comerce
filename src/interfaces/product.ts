export interface Product {
  id: number;
  name: string;
  company: string;
  color: string;
  price: number;
  stock: Stock;
  count: number;
  sold: number;
  reviews: number;
  sellerLocation: string;
  additional: string;
  imageUrl: string;
}

export enum Stock {
  IN_STOCK = 'In stock',
  OUT_OF_STOCK = 'out of stock',
}
