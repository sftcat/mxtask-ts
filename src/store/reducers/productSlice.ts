import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../../utils/model/types";

// бош холат учун типизиция




const initialState: ProductState = { // бош холат ва унинг типизацияси
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // продуктни руйхатга кушамиз
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        // продуктни руйхатдан чикариб ташлаймиз
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.Name !== action.payload);
        },
    },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
