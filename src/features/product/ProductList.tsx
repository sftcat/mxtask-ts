import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/productSlice";
import ProductCard from "./components/ProductCard";
import CartModal from "../cart-modal/CartModal";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { IProduct } from "../../utils/model/types";
import { Pagination } from "antd"; 
import { useAppSelector } from "../../hooks/ReduxHooks";

async function fetchProducts(page: number) {
    const response = await fetch(
        `https://eoussama.github.io/spend-elon-musks-money/goodies.json?page=${page}` // page 'нинг параметрини кушамиз
    );
    const data = await response.json();
    return data;
}

const ProductList = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { data, status } = useQuery(["products"], () => fetchProducts(currentPage));
    const dispatch = useDispatch();
    const cartItems = useAppSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(1); // currentPage учун холат

    const showModal = () => setIsModalVisible(true);
    const handleCancel = () => setIsModalVisible(false);

    const handleClick = (card: IProduct) => {
        dispatch(addProduct(card));
    };

    const countInCart = cartItems.length;

    const updateCartCount = () => {
        // Корзинанинг счётчигини янгилаб турадиган функция
        // Товар кушилганда чакирилади
        // Буш булиши мумкин, сабабиб Редакс холатни узи автоматик тарзда узгартиради 
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page); // узгариш булганда currentPage 'ни хам янгилаймиз
    };

    if (status === "loading") {
        return <Loading />;
    }

    if (status === "error") {
        return <Error />;
    }

    // Вычисляем количество элементов на странице (например, 8 элементов на странице)
    const pageSize = 8;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const productsToShow = data.slice(startIndex, endIndex);

    
    return (
        <div className="mt-5 flex justify-center items-center">
            <div>
                <div className="flex items-center justify-center gap-4">
                    <h1 className="flex justify-center mb-4 text-2xl font-bold font-mono">
                        Карточки
                    </h1>
                    <button
                        onClick={showModal}
                        className="px-[6px] py-1 border-blue-600 border-[3px] text-[12px] text-blue-600 font-mono font-bold rounded-[30px]"
                    >
                        {countInCart > 0 ? `Корзинка (${countInCart})` : "Корзинка"}
                    </button>
                    <CartModal isVisible={isModalVisible} onClose={handleCancel} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {productsToShow.map((card: IProduct) => (
                        <ProductCard
                            key={card.Name}
                            card={card}
                            onClick={handleClick}
                            updateCartCount={updateCartCount}
                        />
                    ))}
                </div>
                <Pagination
                    current={currentPage}
                    total={data.length}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProductList;


