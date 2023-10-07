import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { IProduct, ProductState } from "../../utils/model/types";

// бош холат учун типизиция
const initialState: ProductState = {
  // бош холат ва унинг типизацияси
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // продуктни руйхатга кушамиз
    addProduct: (state, action: PayloadAction<IProduct>) => {
      // statedagi ma'luymotlarni ko'rish yoki foydalanish uchun
      const { products } = current(state);
      if (products?.some((item) => item?.Name === action?.payload?.Name)) {
        state.products = products?.map((item) =>
          item?.Name === action?.payload?.Name
            ? { ...item, count: item?.count + 1 }
            : item
        );
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    setCount: (state, action: PayloadAction<IProduct>) => {
      state.products = state?.products?.map((item) =>
        item?.Name === action?.payload?.Name
          ? { ...item, count: action?.payload?.count }
          : item
      );
    },
    // продуктни руйхатдан чикариб ташлаймиз
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.Name !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct,setCount } = productSlice.actions;

export default productSlice.reducer;

// const prod =[
//     {
//         name:"coffee",
//         narx: 1000,
//         count: 1
//     }
// ]

// if(prod?.some((item) => item?.name === "name")) {
//     prod = prod?.map((item) => (item?.name === "name" ? {
//     ...item,
//     count: item?.count + 1
//     } : item))
// } else {
//         prod.push(
//             {
//                 name:"coffee",
//                 narx: 1000,
//                 count: 1
//             }
//         )
// }
