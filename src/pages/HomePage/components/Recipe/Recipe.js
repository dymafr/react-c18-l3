import React, { useContext } from 'react';
import { ApiContext } from '../../../../context/ApiContext';
import styles from './Recipe.module.scss';

function Recipe({ recipe, deleteRecipe }) {
  const BASE_URL_API = useContext(ApiContext);

  function handleClickLike() {
    updateRecipe({
      ...recipe,
      liked: !recipe.liked,
    });
  }

  async function handleClickDelete(e) {
    e.stopPropagation();
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        deleteRecipe(_id);
      }
    } catch (e) {
      console.log('Erreur');
    }
  }

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <i onClick={handleClickDelete} className="fa-solid fa-xmark"></i>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${liked ? 'text-primary' : ''}`}></i>
      </div>
    </div>
  );
}

export default Recipe;
