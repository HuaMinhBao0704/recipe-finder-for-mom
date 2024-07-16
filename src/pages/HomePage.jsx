import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import RecipeCard from '../components/RecipeCard';
import { getRandomColor } from '../lib/utils';

const APP_ID = '0ac93058';
const APP_KEY = '79a807b255542c015a02ac0e68805dcc';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes('chicken');
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };

  return (
    <div className='flex-1 bg-[#faf9fb] p-10'>
      <div className='mx-auto max-w-screen-lg'>
        <form onSubmit={handleSearchRecipe}>
          <label className='input flex items-center gap-2 shadow-md'>
            <Search size={24} />
            <input
              type='text'
              className='md:text-md grow text-sm'
              placeholder='What do you want to cook today?'
            />
          </label>
        </form>
        <h1 className='mt-4 text-3xl font-bold md:text-5xl'>
          Recommended Recipes
        </h1>
        <p className='my-2 ml-1 text-sm font-semibold tracking-tight text-slate-500'>
          Popular choices
        </p>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className='flex w-full flex-col gap-4'>
                <div className='skeleton h-32 w-full'></div>
                <div className='flex justify-between'>
                  <div className='skeleton h-4 w-28'></div>
                  <div className='skeleton h-4 w-24'></div>
                </div>
                <div className='skeleton h-4 w-1/2'></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
