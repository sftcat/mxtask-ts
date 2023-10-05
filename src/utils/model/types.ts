export interface IProduct {
    Name: string;
    Image: string;
    Price: number;
}



export interface Product {
    Name: string;
}

export interface ProductState {
    products: Product[]; // Product - бу продуктнинг типи
}