import React from 'react';

const Header = () => {
    return (
        <>
            <div className="loader_bg">
                <div className="loader"><img src="images/loading1.gif" alt="#" /></div>
            </div>
            <header>
                <div className="header">

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo-mealdb.png" alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main">
                                                <li className="active"> <a href="#home">Home</a> </li>
                                                <li> <a href="#meal">Meal Categories</a> </li>
                                                <li><a href="#search">Search Meal</a></li>
                                                <li><a href="#address">Address</a></li>
                                                <li><a href="#contact">Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 offset-md-6">
                                <div className="location_icon_bottum">
                                    <ul>
                                        <li><img src="./icon/call.png" alt="Call" />(+88)01869510882</li>
                                        <li><img src="./icon/email.png" alt="Email" />nafaiubian17@gmail.com</li>
                                        <li><img src="./icon/loc.png" alt="City" />Dhaka</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;