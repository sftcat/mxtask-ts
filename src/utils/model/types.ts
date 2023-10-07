export interface IProduct {
    Name: string;
    Image: string;
    Price: number;
    count:number
}


export interface ProductState {
    products: IProduct[]; // Product - бу продуктнинг типи
}


export interface ProductCardProps {
    card: IProduct;
    onClick: (card: IProduct) => void;
}


export interface IFooterNav {
    href: string;
    name: string;
}
