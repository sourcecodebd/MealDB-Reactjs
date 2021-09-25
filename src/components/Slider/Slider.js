import React, { useState, useEffect } from 'react';

const Slider = () => {

    const [foodSlider, setFoodSlider] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(r => r.json()).then(d => setFoodSlider(d.meals)).catch(err => console.log(err));
    }, [])

    // console.log("SLider", foodSlider)

    const images = foodSlider.map(food => food.strMealThumb);
    for (const foo of images) {
        var image1 = images[0];
        var image2 = images[1];
        var image3 = images[2];
        var image4 = images[3];
    }
    const names = foodSlider.map(food => food.strMeal);
    for (const foo of names) {
        var name1 = names[0];
        var name2 = names[1];
        var name3 = names[2];
        var name4 = names[3];
    }
    const descs = foodSlider.map(food => food.strInstructions);
    for (const foo of descs) {
        var desc1 = descs[0].slice(0, 3000);
        var desc2 = descs[1].slice(0, 3000)
        var desc3 = descs[2].slice(0, 3000)
        var desc4 = descs[3].slice(0, 3000)
    }

    return (
        <section className="slider_section" id="home">
            <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div style={{ transform: 'translateX(20%)' }}>
                            <img className="first-slide" style={{ width: '80%', transform: 'translateX(-15%)' }} src={image1} alt="First slide" />
                        </div>
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>{name1}</h1>
                                <p>{desc1}</p>
                                <a className="buynow" href="#/">Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div style={{ transform: 'translateX(20%)' }}>
                            <img className="second-slide" style={{ width: '80%', transform: 'translateX(-15%)' }} src={image2} alt="Second slide" />
                        </div>
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>{name2}</h1>
                                <p>{desc2}</p>
                                <a className="buynow" href="#/">Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div style={{ transform: 'translateX(20%)' }}>
                            <img className="third-slide" style={{ width: '80%', transform: 'translateX(-15%)' }} src={image3} alt="Third slide" />
                        </div>
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>{name3}</h1>
                                <p>{desc3}</p>
                                <a className="buynow" href="#/">Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div style={{ transform: 'translateX(20%)' }}>
                            <img className="fourth-slide" style={{ width: '80%', transform: 'translateX(-15%)' }} src={image4} alt="Fourth slide" />
                        </div>
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>{name4}</h1>
                                <p>{desc4}</p>
                                <a className="buynow" href="#/">Buy Now</a>

                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <i className='fa fa-angle-left'></i>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <i className='fa fa-angle-right'></i>
                </a>
            </div>
        </section >
    );
};

export default Slider;