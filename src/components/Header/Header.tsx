import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import NavItem from './NavItem';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="bg-black text-white py-4">
      <nav className='container m-auto max-w-7xl sm:flex justify-between items-center px-6 xl:px-0'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-2xl'>SandBox</h1>
          <HiMenu
            size={30}
            className='cursor-pointer sm:hidden'
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul className={`${!open ? 'h-0 scale-0' : 'h-24 scale-100'} transition-all duration-500 sm:flex sm:h-max sm:scale-100 gap-6 text-center`}>
          <NavItem name='Home'/>
          <NavItem name='About'/>
          <NavItem name='Contact Us'/>
          <NavItem name='Services'/>
        </ul>
      </nav>
    </header>
  )
}

export default Header