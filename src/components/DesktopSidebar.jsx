import { Heart, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesktopSidebar = () => {
  return (
    <div className='hidden min-h-screen w-24 border-r p-3 sm:block md:w-64 md:p-10'>
      <div className='sticky left-0 top-10 flex flex-col gap-20'>
        <div className='w-full'>
          <img src='/logo.svg' alt='logo' className='hidden md:block' />
          <img src='/mobile-logo.svg' alt='logo' className='block md:hidden' />
        </div>
        <ul className='flex flex-col items-center gap-8 md:items-start'>
          <Link to={'/'} className='flex gap-1'>
            <Home size={24} />
            <span className='font-bold hidden md:block'>Home</span>
          </Link>
          <Link to={'/favorites'} className='flex gap-1'>
            <Heart size={24} />
            <span className='font-bold hidden md:block'>Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DesktopSidebar;
