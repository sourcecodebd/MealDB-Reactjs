import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [showYear, setShowYear] = useState("");

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        setShowYear(year);
    }, [])

    return (
        <footer>
            <div id="contact" class="footer">
                <div class="container">
                    <div class="row pdn-top-30">
                        <div class="col-md-12 ">
                            <div class="footer-box">
                                <div class="headinga">
                                    <h3>Address</h3>
                                    <span>Mirpur, Dhaka-1216, Bangladesh</span>
                                    <p>(+88) 01869510882
                                        <br />nafiaiubian17@gmail.com</p>
                                </div>
                                <ul class="location_icon">
                                    <li> <a href="https://www.facebook.com/nafi.king16/"><i class="fa fa-facebook-f"></i></a></li>
                                    <li> <a href="https://twitter.com/MrNafiMahmud"><i class="fa fa-twitter"></i></a></li>
                                    <li> <a href="https://www.instagram.com/dauntless_nafi/"><i class="fa fa-instagram"></i></a></li>

                                </ul>
                                <div class="menu-bottom">
                                    <ul class="link">
                                        <li> <a href="#home">Home</a></li>
                                        <li> <a href="#meal">Meal Categories</a></li>

                                        <li> <a href="#search">Search Meal</a></li>
                                        <li> <a href="#address">Address</a></li>
                                        <li> <a href="#contact">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="container">
                        <p>© {showYear} All Rights Reserved. Design By<a href="https://sourcecodebd.github.io/nafi.com/"> Nafi Mahmud</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;