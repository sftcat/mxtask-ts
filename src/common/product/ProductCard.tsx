import React, { FC } from "react";
import {IProduct} from ".//../..//utils/model/types"



interface ProductCardProps {
    card: IProduct;
    onClick: (card: IProduct) => void;
}


// ProductCard компоненти - продукт хакида информацияни курсатади ва корзинкага продуктларни кушади
const ProductCard: FC<ProductCardProps> = ({ card, onClick }) => {
    return (
        <div key={card.Id} className="flex justify-center ">
            <div className="py-2 px-3 items-center border-[#888] border">
                <img alt={card.Name} src={card.Image} className="rounded border-2" />
                <div className="flex items-center justify-between">
                    <div className="font-mono text-[#555] mt-2">
                        <h3>Название: {card.Name}</h3>
                        <p>Цена: {card.Price}$</p>
                    </div>
                    <button
                        onClick={() => onClick(card)}
                        className="text-black border-black border-2 py-1 px-2 rounded"
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

