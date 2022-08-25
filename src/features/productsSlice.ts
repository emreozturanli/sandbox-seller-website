import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProducts,Product,INewProduct } from "../types/interfaces";
import toast from 'react-hot-toast';


interface ProductState {
    products: IProducts['products']
    loading: boolean
    newProducts: INewProduct[]
    product: Product
}

const initialState: ProductState = {
    products: [],
    loading: false,
    newProducts: [],
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    product: <Product>{}
}

export const getProducts = createAsyncThunk(
    'products/getProducts', async () => {
        return fetch(`https://dummyjson.com/products`)
            .then(res => {
                return res.json()
            })
    }
)

export const getProduct = createAsyncThunk(
    'products/getProduct', async ({productId}: any) => {
        return fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => {
                return res.json()
            })
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async ({ newProduct } : any) => {
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
        addNewProduct : (state,action : PayloadAction<INewProduct>)=> {state.newProducts = [...state.newProducts, action.payload]}
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
        //GET SINGLE PRODUCT
        builder.addCase(getProduct.pending, (state: ProductState) => {
            state.loading = true;
        })
        builder.addCase(getProduct.fulfilled, (state: ProductState, action: PayloadAction<Product>) => {
            state.loading = false;
            state.product = action.payload

        })
        builder.addCase(getProduct.rejected, (state: ProductState) => {
            state.loading = false;
        })
        //POST
        builder.addCase(addProduct.pending, (state: ProductState) => {
            state.loading = true;
        })
        builder.addCase(addProduct.fulfilled, (state: ProductState, action: PayloadAction<Product>) => {
            state.loading = false;
            toast.success('New Product Successfully Added!')
            //Normally if we had our own API we would update our products list here

            // state.newProducts= [...state.newProducts, action.payload]
        })
        builder.addCase(addProduct.rejected, (state: ProductState) => {
            state.loading = false;
        })
    },
})

export const { addNewProduct } = productsSlice.actions

export default productsSlice.reducer