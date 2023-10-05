import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/productSlice";
import ProductCard from "./ProductCard";
import CartModal from "../cart-modal/CartModal";
import Loading from "../../features/loading/Loading";
import Error from "../../features/error/Error";
import { IProduct } from "../../utils/model/types";



// Продукталарни API 'дан юклашлик учун функция 
async function fetchProducts() {
  const response = await fetch(
    "https://eoussama.github.io/spend-elon-musks-money/goodies.json" // API
  );
  const data = await response.json();

  console.log(data); // data 'ларни бор/йоклигини текшириш
  return data;
}


// Основной компонент ProductList
const ProductList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data, status } = useQuery(["products"], fetchProducts); // Используем React Query для получения данных
  const dispatch = useDispatch(); 


  // Модал ойнанинг очиш/ёпиш функциялари
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  // "В Корзину" тугмаси босилганда, dispatch оркали маълумотларни Redux 'га олиб борувчи функция
  const handleClick = (card: IProduct) => {
    dispatch(addProduct(card)); // Действие 'ларни Redux 'га юборамиз
  };


  // Xолатлар
  if (status === "loading") {
    return <Loading />; // Маълумотлар юкланаётганда UI 'га чикадиган компонент
  }

  if (status === "error") {
    return <Error />; // Маълумотлар хато юкланганда UI 'га чикадиган компонент
  }

  return (
    <div className="mt-5 flex justify-center items-center">
      <div>
        <div className="flex items-center justify-center gap-4">
          <h1 className="flex justify-center mb-4 text-2xl font-bold font-mono">
            Карточки
          </h1>
          <button
            onClick={showModal}
            className="border px-2 py-1 border-black rounded"
          >
            Корзинка
          </button>

          <CartModal isVisible={isModalVisible} onClose={handleCancel} /> {/* Корзинка ёки модал ойнаси */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {/* Продукталарни руйхат тарзида UI 'га чикарамиз */}
          {data.map((card: IProduct) => (
            <ProductCard key={card.Name} card={card} onClick={handleClick} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProductList;



