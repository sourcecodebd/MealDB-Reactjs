import React from 'react';
import { useState, useEffect } from 'react';
import Food from '../Food/Food';

const Foods = () => {

    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState([]);
    const [showName, setShowName] = useState("");
    const [showYT, setShowYT] = useState("");
    const [ingredient, setIngredient] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`).then(r => r.json()).then(d => {
            setMeals(d.meals)
            setSearch(d.meals)
        }).catch(e => console.log(e))
    }, [])

    const searchHandler = (e) => {
        const searchText = e.target.value;
        const matched = meals.filter(meal => meal.strMeal.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setSearch(matched);
    }

    const showNameHandler = (abc) => {
        setShowName(abc.strMeal);
        setShowYT(abc.strYoutube);
        setIngredient([abc.strIngredient1, abc.strIngredient2, abc.strIngredient3])
    }

    return (
        <div className="brand">
            <div className="brand-bg">
                <div className="container">
                    <div id="search">
                        <div class="send text-center my-2 border rounded">Total Meal: {search.length}</div>
                        <li>
                            <input type="text" className="form-control w-75 mx-auto" placeholder="Search your favourite food" onChange={searchHandler} />
                            <a href="#/"><img src="images/search_icon.png" alt="icon" /></a>
                        </li>
                    </div>
                    <div className="row d-flex justify-content-center" id="meal">
                        <div className="col-md-6 order-1 order-lg-0">
                            {search.map(meal =>
                                <Food
                                    meal={meal}
                                    showNameHandler={showNameHandler}
                                    key={meal.idMeal} />)}
                        </div>
                        <div className="col-md-6 order-0 order-lg-1">
                            <div class="clients_red py-3 px-0 mb-4" style={{ borderRadius: '10px' }}>
                                <div class="container">
                                    <div id="testimonial_slider" class="">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="testomonial_section">
                                                    <div class="full center">
                                                    </div>
                                                    <div class="full testimonial_cont text_align_center cross_layout">
                                                        <div class="cross_inner">
                                                            <h3>Meal Name<br /><strong class="ornage_color">{showName}</strong></h3>
                                                            <p style={{ fontWeight: "600", fontSize: '18px', color: 'grey' }}>
                                                                Youtube Channel Link: <a style={{ fontWeight: "500", color: 'purple' }} href={showYT}>{showYT}</a>
                                                            </p>
                                                            <p style={{ marginTop: '10px', fontWeight: "600", fontSize: '18px', color: 'grey' }}>
                                                                <p style={{ fontWeight: "600", fontSize: '18px', color: 'grey' }}>Ingredients:</p>
                                                                {
                                                                    ingredient.map(ing => <li style={{ fontWeight: "600", color: 'limegreen' }}>{ing}</li>)
                                                                }
                                                            </p>
                                                            <div class="full text_align_center margin_top_30">
                                                                <img src="icon/testimonial_qoute.png" alt="Quote" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Foods;