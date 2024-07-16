/* eslint-disable react/prop-types */
import { Heart, HeartPulse, Soup } from 'lucide-react';
import { useState } from 'react';

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem('favorites')?.includes(recipe.label)
  );

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('mommy__favorites')) || [];
    const isRecipeAlreadyInFavorites = favorites.some(
      (fav) => fav.label === recipe.label
    );

    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }

    localStorage.setItem('mommy__favorites', JSON.stringify(favorites));
  };

  return (
    <div
      className={`flex flex-col rounded-md ${bg} relative overflow-hidden p-3`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target='_blank'
        className='relative h-32'
      >
        <div className='skeleton absolute inset-0' />
        <img
          src={recipe.image}
          alt='recipe img'
          className='h-full w-full cursor-pointer rounded-md object-cover opacity-0 transition-opacity duration-500'
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = 'none';
          }}
        />
        <div className='absolute bottom-2 left-2 flex cursor-pointer items-center gap-1 rounded-full bg-white p-1 text-sm'>
          <Soup size={16} /> {recipe.yield} Servings
        </div>

        <div
          className='absolute right-2 top-1 cursor-pointer rounded-full bg-white p-1'
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
        >
          {!isFavorite && (
            <Heart
              size={20}
              className='hover:fill-red-500 hover:text-red-500'
            />
          )}
          {isFavorite && (
            <Heart size={20} className='fill-red-500 text-red-500' />
          )}
        </div>
      </a>

      <div className='mt-1 flex'>
        <p className='font-bold tracking-wide'>{recipe.label}</p>
      </div>
      <p className='my-2'>
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}{' '}
        Kitchen
      </p>

      <div className='mt-auto flex gap-2'>
        {healthLabels.map((label, idx) => (
          <div
            key={idx}
            className={`flex gap-1 ${badge} items-center rounded-md p-1`}
          >
            <HeartPulse size={16} />
            <span className='text-sm font-semibold tracking-tighter'>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeCard;
