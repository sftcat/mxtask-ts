import React, { FC } from "react";
import {  useDispatch } from "react-redux";
import { removeProduct } from "../../../store/reducers/productSlice";
import { useAppSelector } from "../../../hooks/ReduxHooks";

// Products компоненти - руйхатдаги продукталарни курсатади ва учириб юбориш опциясини бажаради
const Products: FC = () => { // Устанавливаем тип компонента как React.FC
    const products = useAppSelector((state) => state.products); // products учун типизация
    const dispatch = useDispatch();

    // Продуктни учиришлик учун функция
    const handleRemoveProduct = (productId: string) => { // productId учун типизация
        dispatch(removeProduct(productId));
    };

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.Name} className="mb-8 border py-2 px-2">
                        <img src={product.Image} alt={product.Name} className="w-[300px]" />
                        <p className="font-mono text-xl mt-1">
                            {product.Name} - {product.Price}$
                        </p>
                        <button
                            onClick={() => handleRemoveProduct(product.Name)}
                            className="bg-red-500 px-3 py-1 rounded text-white"
                        >
                            Удалить 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;






