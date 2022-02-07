import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer_1">
                <footer>
                    <div className="newsletter">
                        <div data-aos="fade-up" data-aos-offset="200">
                            <h2>Join our weekly Newsletter</h2>
                            <p>We're a team of non-cynics who truly care for our work.</p>
                        </div>
                        <div className="ntext" data-aos="fade-up-right" data-aos-offset="200">
                            <label>
                                <input type="text" name="" placeholder="Enter your email" />
                                <button className="slide">SIGN ME UP</button>
                            </label>
                        </div>
                    </div>
                    <div className="f-contact" data-aos="zoom-in-up" data-aos-offset="200">
                        <div id='information'>
                            <h2>Information</h2>
                            <p>Lorem Ipsum Dolor Sit Amet, Consturctor elit. Nihil sit dicta.</p>
                            <div>
                                <a href="https://www.google.co.in/"><i className="fa fa-whatsapp"></i></a>
                                <a href="https://www.google.co.in/"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.google.co.in/"><i className="fa fa-telegram"></i></a>
                                <a href="https://www.google.co.in/"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>
                        <div id='links'>
                            <h2>Useful Links</h2>
                            <p>About us</p>
                            <p>Gallery</p>
                            <p>Blog posts</p>
                            <p>Pricing plans</p>
                        </div>
                        <div id='Details'>
                            <h2>Details</h2>
                            <p>Photograph</p>
                            <p>Galley</p>
                            <p>Blog posts</p>
                            <p>Pricing plans</p>
                        </div>
                        <div id="help">
                            <h2>Help & Support</h2>
                            <p>Privacy policy</p>
                            <p>Terms & condition</p>
                            <p>Technical support</p>
                            <p>Customer care</p>
                        </div>
                    </div>
                    <div className="last">
                    </div>
                </footer>
            </div>
            <div className="bottom">
                <i className="fa fa-copyright" aria-hidden="true"></i>
                <a>Copyright Qode Interactive</a>
            </div>
        </div>
    )
};

export default Footer;
