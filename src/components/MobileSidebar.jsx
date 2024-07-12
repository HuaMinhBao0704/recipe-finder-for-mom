import { Link } from "react-router-dom";
import { Heart, Home } from "lucide-react";

const MobileSidebar = () => {
  return (
    <div className='fixed bottom-0 left-0 z-10 flex w-full justify-center gap-10 border-t bg-white p-2 sm:hidden'>
      <Link to={'/'}>
        <Home size={24} className='cursor-pointer' />
      </Link>
      <Link to={'/favorites'}>
        <Heart size={24} className='cursor-pointer' />
      </Link>
    </div>
  );
};

export default MobileSidebar;
