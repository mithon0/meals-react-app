import React from 'react';
import './MealsCard.css';


const MealsCard = (props) => {
    console.log(props.meal);
    const {idMeal,strArea,strInstructions,strMealThumb,strMeal}=props.meal;
    return (
        <div className='full-card'>
           <div className='meals-compo'>
            <img src={strMealThumb} alt="" />
           </div>

           <div className='meals-details'>
            <h3>{strMeal}</h3>
           </div>
        </div>
    );
};

export default MealsCard;