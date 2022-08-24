import { Link} from "react-router-dom"
import { Product } from "../../types/interfaces"

interface ICardProps {
  product : Product
}
const Card = ({product}:ICardProps) => {
  const { id,title, thumbnail} = product

  return (
    <div className="rounded-sm shadow-lg hover:scale-105 transition-all duration-500">
      <img 
      className="rounded-sm w-full h-60 object-cover" 
      src={thumbnail} 
      alt={title} 
      />
      <h3 className="m-3 font-bold text-lg">{title}</h3>
      <Link 
      className='inline-block bg-blue-500 rounded-sm m-3 py-1 px-3 text-white text-md cursor-pointer hover:bg-blue-600 transition-all duration-500'
      to={`/details/${id}`}
      >
        Details
      </Link>
    </div>
  )
}

export default Card