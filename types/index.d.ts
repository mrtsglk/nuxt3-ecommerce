export { Product, Category, CartItem };

declare global {
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    images: string[];
  }

  interface CartItem {
    product: Product;
    quantity: number;
  }
}