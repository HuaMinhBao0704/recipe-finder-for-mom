import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem('mommy__favorites')) || [];

  return (
    <div className='min-h-screen flex-1 bg-[#faf9fb] p-10'>
      <div className='mx-auto max-w-screen-lg'>
        <p className='my-4 text-3xl font-bold md:text-5xl'>My Favorites</p>

        {favorites.length === 0 && (
          <div className='flex h-[80vh] flex-col items-center gap-4'>
            <img src='/404.svg' className='h-3/4' alt='404 svg' />
          </div>
        )}

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.label}
              recipe={recipe}
              {...getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
