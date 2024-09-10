import React from 'react';
import '../index.css'
import { NavLink } from 'react-router-dom';

export const Mealcards = ({ detail }) => {
    console.log(detail);
    return (
        <div className='meals'>
            {!detail ? "" : detail.map((currentMeal) => {
                return (
                    <div className='mealImg'>
                        <img src={currentMeal.strMealThumb}/>
                        <p>{currentMeal.strMeal}</p>
                         <NavLink to={`/${currentMeal.idMeal}`}><button>Recipe</button></NavLink>
                    </div>
                );
            })}
        </div>
    );
};
