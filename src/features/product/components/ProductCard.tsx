import React, { FC } from "react";
import { IProduct } from "../../../utils/model/types";
import { useState } from "react";

interface ProductCardProps {
    card: IProduct;
    onClick: (card: IProduct) => void;
    updateCartCount: () => void; // бу пропс функция корзинанинг счётчигини янгилаб туриш учун мулжалланган
}

const ProductCard: FC<ProductCardProps> = ({ card, onClick, updateCartCount }) => {
    const [addedCount, setAddedCount] = useState(0);

    const handleAddToCart = () => {
        onClick(card);
        updateCartCount(); // корзинанинг счётчигини янгилаш учун функцияни чакирамиз
        setAddedCount(addedCount + 1);
    };

    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-10 mx-2 my-4 border-zinc-200 border-[2px]">
                <div>
                    <img
                        alt={card.Name}
                        src={card.Image}
                        className="rounded border-2 border-gray-300 w-[250px] h-[250px] object-cover"
                    />
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800">{card.Name}</h3>
                        <p className="text-gray-600">Цена: {card.Price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-[17px] font-mono py-1 px-3 rounded-md transition duration-300"
                    >
                        В корзину
                    </button>
                </div>
                <div className="float-right">
                    <p>Добавлено: {addedCount}</p>
                </div>
            </div>
            
        </div>
            
    );
};

export default ProductCard;












// import React, { FC } from "react";
// import { IProduct } from "../../../utils/model/types";
// import { useState } from "react";

// interface ProductCardProps {
//     card: IProduct;
//     onClick: (card: IProduct) => void;
//     updateCartCount: () => void; // бу пропс функция корзинанинг счётчигини янгилаб туриш учун мулжалланган
// }

// const ProductCard: FC<ProductCardProps> = ({ card, onClick, updateCartCount }) => {
//     const [addedCount, setAddedCount] = useState(0);

//     const handleAddToCart = () => {
//         onClick(card);
//         updateCartCount(); // корзинанинг счётчигини янгилаш учун функцияни чакирамиз
//         setAddedCount(addedCount + 1);
//     };

//     return (
//         <div className="flex justify-center">
//             <div className="bg-white rounded-lg shadow-md p-10 mx-2 my-4 border-zinc-200 border-[2px]">
//                 <div>
//                     <img
//                         alt={card.Name}
//                         src={card.Image}
//                         className="rounded border-2 border-gray-300 w-[250px] h-[250px] object-cover"
//                     />
//                     <div className="mt-4">
//                         <h3 className="text-lg font-semibold text-gray-800">{card.Name}</h3>
//                         <p className="text-gray-600">Цена: {card.Price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
//                     </div>
//                     <button
//                         onClick={handleAddToCart}
//                         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-[17px] font-mono py-1 px-3 rounded-md transition duration-300"
//                     >
//                         В корзину
//                     </button>
//                 </div>
//                 <div className="float-right">
//                     <p>Добавлено: {addedCount}</p>
//                 </div>
//             </div>
            
//         </div>
            
//     );
// };

// export default ProductCard;












