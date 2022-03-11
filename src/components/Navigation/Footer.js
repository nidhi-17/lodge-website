import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Footer = () => {
    const [show, setShow] = useState(false);
    const [val,seteval]=useState('');
    const handleClose = () => setShow(false);
    const handleShow = () =>{
        seteval('');
        setShow(true);
    }
    return (
        <div>
            <div className="footer_1">
                <footer>
                    <Modal show={show} onHide={()=>handleClose()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Woohoo!!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You have signed up succesfully</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="newsletter">
                        <div data-aos="fade-up" data-aos-offset="200">
                            <h2>Join our weekly Newsletter</h2>
                            <div>We're a team of non-cynics who truly care for our work.</div>
                        </div>
                        <div className="ntext" data-aos="fade-up-right" data-aos-offset="200">
                            <label>
                                <input type="text" value={val} id="eamail" onChange={(e)=>seteval(e.target.value)} placeholder="Enter your email" />
                                <button className="slide" onClick={() => handleShow()}>SIGN ME UP</button>
                            </label>
                        </div>
                    </div>
                    <div className="f-contact" data-aos="zoom-in-up" data-aos-offset="200">
                        <div id='information'>
                            <h2>Information</h2>
                            <p>Lorem Ipsum Dolor Sit Amet, Consturctor elit. Nihil sit dicta sjas edu.</p>
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
            <div className="new">
                <div className="new-newsletter">
                    <div>
                        <i className="fa fa-envelope fa-2x"></i>
                        <h2>Join our weekly Newsletter</h2>
                        <input type="email" name="email" id="eamail" placeholder="Enter your Email" /> <br />
                        <button >Sign up</button>
                    </div>
                </div>
                <div className="new-social">
                    <h2> Get Social</h2>
                    <div className="socialText">Follow us on social media and keep in touch with Alloggio.</div>
                    <div className="socialLinks">
                        <a href="https://www.google.co.in/"><i className="fa fa-whatsapp"></i></a>
                        <a href="https://www.google.co.in/"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.google.co.in/"><i className="fa fa-telegram"></i></a>
                        <a href="https://www.google.co.in/"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <i className="fa fa-copyright" aria-hidden="true"></i>
                <a  style={{ color: "black" }}>Copyright Qode Interactive</a>
            </div>
        </div>
    )
};

export default Footer;
