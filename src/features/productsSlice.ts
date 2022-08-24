import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProducts,Product } from "../types/interfaces";


interface ProductState {
    products: IProducts['products']
    loading: boolean
    newProducts: Product[]
}

const initialState: ProductState = {
    products: [],
    loading: false,
    newProducts: []
}

export const getProducts = createAsyncThunk(
    'products/getProducts', async () => {
        return fetch(`https://dummyjson.com/products`)
            .then(res => {
                return res.json()
            })
    }
)
export const addProduct = createAsyncThunk(
    'products/addProduct',
    async ({ newProduct }) => {
        const url = `https://dummyjson.com/products/`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: newProduct.title,
                description: newProduct.description,
                price: newProduct.price,
                discountPercentage: newProduct.discountPercentage,
                rating: newProduct.rating,
                stock: newProduct.stock,
                brand: newProduct.brand,
                category: newProduct.category,
                thumbnail: newProduct.thumbnail,
                images: newProduct.images,
            })
        });
        const data = await response.json()
        return data;
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers(builder: any) {
        //GET
        builder.addCase(getProducts.pending, (state: ProductState) => {
            state.loading = true;
        })
        builder.addCase(getProducts.fulfilled, (state: ProductState, action: PayloadAction<IProducts>) => {
            state.loading = false;
            state.products = action.payload.products

        })
        builder.addCase(getProducts.rejected, (state: ProductState) => {
            state.loading = false;
            state.products = [];
        })
        //POST
        builder.addCase(addProduct.pending, (state: ProductState) => {
            state.loading = true;
        })
        builder.addCase(addProduct.fulfilled, (state: ProductState, action: PayloadAction<Product>) => {
            state.loading = false;
            state.newProducts= [...state.newProducts, action.payload]
        })
        builder.addCase(addProduct.rejected, (state: ProductState) => {
            state.loading = false;
        })
    },
})

export default productsSlice.reducer