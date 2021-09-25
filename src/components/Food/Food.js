import React from 'react';
import './Food.css';

const Food = (props) => {
    // console.log(props)
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = props.meal || {}

    return (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 margin">
            <div className="brand_box" style={{ borderRadius: '10px', boxShadow: 'rgba(0,0,0,0.1)2px 4px 8px' }}>
                <img style={{ objectFit: 'cover', margin: "0" }} src={strMealThumb} alt="img" />
                <h3><strong className="red">{strMeal}</strong></h3>
                <span>{strCategory}</span><span>{strArea}</span>
                <p className="description-p">{strInstructions}</p>
                <div className="col-md-12">
                    <button onClick={() => props.showNameHandler(props.meal)} className="read-more">See Meal Name</button>
                    <button onClick={() => props.quantityHandler(props.meal)} className="read-more">See Quantity</button>
                </div>
            </div>
        </div>
    );
};

export default Food;