import { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { addNewProduct, addProduct } from '../features/productsSlice'
import { INewProduct } from '../types/interfaces'

const Services = () => {
  const [newProduct, setNewProduct] = useState<INewProduct>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  })

  const dispatch = useAppDispatch()

  const handleChange = (e: any) => {
    setNewProduct({
      ...newProduct,
      id: Math.random(),
      [e.target.name]: e.target.value
    })
  }

  const imageHandle = (e: any) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value.split(',')
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(addProduct({ newProduct }))
    dispatch(addNewProduct(newProduct))
    setNewProduct({
      id: 0,
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: []
    })
  }

  const inputStyle = 'bg-slate-200 border-none px-2 py-4 outline-none rounded-md w-80'

  return (
    <section className='container m-auto max-w-7xl px-6 xl:px-0 pb-20 '>
      <h1 className='text-center text-2xl font-bold text-orange-500'>New Product Details</h1>
      <form onSubmit={handleSubmit} className='text-center m-auto'>
        <div className="grid grid-cols-1 m-auto md:grid-cols-2 gap-3 mb-3 max-w-4xl">
          <div className="flex flex-col gap-3 ">
            <div>
              <label htmlFor="title">Title</label><br />
              <input
                type="text"
                className={inputStyle}
                placeholder='Title'
                name="title"
                value={newProduct?.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description</label><br />
              <input
                type="text"
                className={inputStyle}
                placeholder='Description'
                name="description"
                value={newProduct?.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price</label><br />
              <input
                type="number"
                className={inputStyle}
                placeholder='Price'
                name="price"
                value={newProduct?.price}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="discountPercantage"> Discount Percentage</label><br />
              <input
                type="number"
                className={inputStyle}
                placeholder='Discount Percentage'
                name="discountPercentage"
                value={newProduct?.discountPercentage}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating</label><br />
              <input
                type="number"
                className={inputStyle}
                placeholder='Rating'
                name="rating"
                value={newProduct?.rating}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="stock">Stock</label><br />
              <input
                type="number"
                className={inputStyle}
                placeholder='Stock'
                name="stock"
                value={newProduct?.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="brand">Brand</label><br />
              <input
                type="text"
                className={inputStyle}
                placeholder='Brand'
                name="brand"
                value={newProduct?.brand}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="category">Category</label><br />
              <input
                type="text"
                className={inputStyle}
                placeholder='Category'
                name="category"
                value={newProduct?.category}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="thumbnail">Thumbnail</label><br />
              <input
                type="text"
                className={inputStyle}
                placeholder='Thumbnail url'
                name="thumbnail"
                value={newProduct?.thumbnail}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="images">Images</label><br />
              <input
                type="text"
                className={inputStyle}
                placeholder='Seperate each image url with comma'
                name="images"
                value={newProduct?.images}
                onChange={imageHandle}
                required
              />
            </div>
          </div>
        </div>
        <button
          className='bg-blue-500 rounded-sm px-4 py-1 block text-white m-auto text-md cursor-pointer' type="submit"
        >
          Add Product
        </button>
      </form>
    </section>
  )
}

export default Services