import React, { FC, useState } from "react";
import {  useDispatch } from "react-redux";
import { removeProduct, setCount } from "../../../store/reducers/productSlice";
import { useAppSelector } from "../../../hooks/ReduxHooks";
import { IProduct } from "../../../utils/model/types";

// Products компоненти - руйхатдаги продукталарни курсатади ва учириб юбориш опциясини бажаради
const Products: FC = () => { 
    const products = useAppSelector((state) => state.products); // products учун типизация
    const dispatch = useDispatch();

    // Продуктни учиришлик учун функция
    const handleRemoveProduct = (productId: string) => { // productId учун типизация
        dispatch(removeProduct(productId));
    };



    const incrementValue = (product: IProduct) => {
        dispatch(setCount({...product, count: product?.count + 1}))
    };

    const decrementValue = () => {
        // if (count > 0) {
        // setCount(count - 1);
        // }
    };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // Дополнительная обработка изменения значения, если необходимо
        // setCount(parseInt(e.target.value));
    };

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.Name} className="mb-8 border py-2 px-2">
                        <img src={product.Image} alt={product.Name} className="w-[300px]" />
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-mono text-xl mt-1">
                                    {product.Name} - {product.Price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                                </p>
                                <button
                                    onClick={() => handleRemoveProduct(product.Name)}
                                    className="bg-red-500 px-3 py-1 rounded text-white mt-2"
                                >
                                    Удалить 
                                </button>
                            </div>
                            <div>
                                <button className="mr-2 text-[15px]" onClick={() => decrementValue()}>-</button>
                                <input
                                    type="number"
                                    className="border w-[35px] border-black pl-[4px]"
                                    value={product?.count}
                                    onChange={(e) => handleChange(e)}
                                />
                                <button className="ml-2 text-[15px]" onClick={() => incrementValue(product)}>+</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;





