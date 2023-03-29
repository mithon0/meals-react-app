import React from 'react';
import './MealsCard.css';


const MealsCard = (props) => {
    // console.log(props.meal);
    const {idMeal,strArea,strInstructions,strMealThumb,strMeal,strMeasure6}=props.meal;
    const detailBtn=props.detailBtn;
    // console.log(props.detailBtn);


    return (
        <div className='full-card'>
           <div className='meals-compo'>
            <img src={strMealThumb} alt="" />
           </div>

           <div className='meals-details'>
            <h3>{strMeal}</h3>
            <h4>Area: {strArea}</h4>
            <h4>Measure: {strMeasure6}</h4>
            <button onClick={()=>detailBtn(props.meal)} className="details-btn">Details</button>
         
            

           </div>
        </div>
    );
};

export default MealsCard;