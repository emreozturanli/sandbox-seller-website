import { GiMoneyStack,GiHealthPotion } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';
import { TbShoppingCartDiscount } from 'react-icons/tb';

const Info = () => {
    return (
        <section className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 '>
            <div className='flex flex-col items-center bg-slate-200 shadow-lg rounded-md text-orange-600 py-2 hover:shadow-2xl transition-all duration-500 select-none'>
                <GiMoneyStack size={40}/>
                <p>Cheap</p>
            </div>
            <div className='flex flex-col items-center bg-slate-200 shadow-lg rounded-md text-blue-600 py-2 hover:shadow-2xl transition-all duration-500 select-none'>
                <FaShippingFast size={40}/>
                <p>Fast</p>
            </div>
            <div className='flex flex-col items-center bg-slate-200 shadow-lg rounded-md text-green-600 py-2 hover:shadow-2xl transition-all duration-500 select-none'>
                <GiHealthPotion size={40}/>
                <p>Healthy</p>
            </div>
            <div className='flex flex-col items-center bg-slate-200 shadow-lg rounded-md text-pink-600 py-2 hover:shadow-2xl transition-all duration-500 select-none'>
                <TbShoppingCartDiscount size={40}/>
                <p>Discount</p>
            </div>
          
        </section>
    )
}

export default Info