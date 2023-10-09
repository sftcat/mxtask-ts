import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { IProduct, ProductState } from "../../utils/model/types";

// Начальное состояние хранилища продуктов
const initialState: ProductState = {
  products: [], // Массив продуктов
};

// Создаем срез Redux для управления продуктами
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Добавление продукта в массив или обновление его счетчика
    addProduct: (state, action: PayloadAction<IProduct>) => {
      // Получаем текущее состояние продуктов
      const { products } = current(state);
      
      // Проверяем, существует ли продукт с таким же именем
      if (products?.some((item) => item?.Name === action?.payload?.Name)) {
        // Если существует, увеличиваем счетчик
        state.products = products?.map((item) =>
          item?.Name === action?.payload?.Name
            ? { ...item, count: item?.count + 1 }
            : item
        );
      } else {
        // Если не существует, добавляем новый продукт
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    // Установка счетчика продукта
    setCount: (state, action: PayloadAction<IProduct>) => {
      // Обновляем счетчик продукта по его имени
      state.products = state?.products?.map((item) =>
        item?.Name === action?.payload?.Name
          ? { ...item, count: action?.payload?.count }
          : item
      );
    },
    // Удаление продукта из массива по имени
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.Name !== action.payload
      );
    },
  },
});

// Экспортируем действия и редуктор среза
export const { addProduct, removeProduct, setCount } = productSlice.actions;
export default productSlice.reducer;
