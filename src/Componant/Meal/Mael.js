import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Meal.css'

const Mael = ({meal, addToCart}) => {
    // console.log(meal)


    const { strMealThumb, strMeal, strInstructions } = meal
    return (
        <div className='single-meal' data-aos ="fade-up">
            <div className='meal-info'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <p>Details: {strInstructions ? strInstructions.slice(0, 200) : 'n/a'}<span>...</span></p>
            </div>
            <div>
                <button onClick={() => addToCart(meal)} className='btn-meal'><p>Buy now</p> 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
        </div>

    );
};

export default Mael;