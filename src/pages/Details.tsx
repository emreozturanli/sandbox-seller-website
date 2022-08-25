import { useEffect,} from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getProduct, getProducts } from "../features/productsSlice"
import spinner from '../assets/spinner.gif'

const Details = () => {
  // const [product, setProduct] = useState<Product>()
  const { products, newProducts, loading } = useAppSelector(state => state.products)
  const { productId } = useParams()
  const dispatch = useAppDispatch()
  const allProducts = [...products, ...newProducts]
  const newProduct = allProducts.find(product => productId && product.id === +productId)

  const url = 'https://picsum.photos/900/400'

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getProduct(productId))
  }, [])

  if (loading) {
    return <img className="block m-auto" src={spinner} alt="loading-spinner" />
  }

  return (
    <section className="container m-auto pb-28 max-w-7xl px-6 xl:px-0 pt-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">

        <div className="lg:w-3/5 flex flex-col gap-4 bg-slate-100 rounded-md p-4">
          <h2 className="text-3xl font-bold ">{newProduct?.title}</h2>
          <img
            src={url}
            alt={newProduct?.title}
            className='rounded-lg h-full object-cover'
          />
          <p>{newProduct?.description}</p>
        </div>

        <div className="flex flex-col gap-4 lg:w-2/5">

          <div className="flex flex-col gap-2 rounded-md p-4 bg-slate-100">
            <h4 className="text-xl font-semibold">Tags</h4>
            <hr />
            <p>{newProduct?.category}</p>
          </div>

          <div className="flex flex-col gap-2 rounded-md p-4 bg-slate-100">
            <h4 className="text-xl font-semibold">Images</h4>
            <hr />
            <div className="flex flex-wrap gap-2">
              {newProduct?.images.map((image, index) => {
                return <img
                  key={index}
                  src={image}
                  alt='smallImage'
                  className="w-28 h-28 object-cover"
                />
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md p-4 bg-slate-100">
            <h4 className="text-xl font-semibold">Informations</h4>
            <hr />
            <p><span className="text-blue-600">Price : </span>${newProduct?.price}</p>
            <p><span className="text-blue-600">Discount : </span>%{newProduct?.discountPercentage}</p>
            <p><span className="text-blue-600">Stock : </span>{newProduct?.stock}</p>
            <p><span className="text-blue-600">Rating : </span>{newProduct?.rating}</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Details