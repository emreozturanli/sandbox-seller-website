import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../types/interfaces";


interface ProductState {
    products: IProducts['products']
    loading: boolean
}

const initialState: ProductState = {
    products: [],
    loading: false,
}

export const getProducts = createAsyncThunk(
    'products/getProducts', async() => {
        return fetch( `https://dummyjson.com/products`)
        .then(res=>{
            return  res.json()
        })
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{

    },
    extraReducers(builder: any) {
        builder.addCase(getProducts.pending, (state: ProductState) => {
            state.loading = true;
          })
          builder.addCase(getProducts.fulfilled, (state: ProductState, action:PayloadAction<IProducts>) => {
            state.loading = false;
            state.products = action.payload.products
           
          })
          builder.addCase(getProducts.rejected, (state: ProductState) => {
            state.loading = false;
            state.products = [];
          })
    },
})

export default productsSlice.reducer