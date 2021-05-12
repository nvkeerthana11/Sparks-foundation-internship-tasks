import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";

const Contact = () => {
    return (
        <div className="contact">

            <>
              


                <img className="contactimg" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80" alt="t" />
                <h1 className="hear">We'd love to hear from you</h1>
                <h5 className="reach">Here's how you can reach us</h5>

                <div className="office">
                    <Card style={{ width: '23rem' }} className="moffice" col-lg-4 col-md-6>
                        <Card.Body>
                            <Card.Title className="title"> MAIN OFFICE</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Visit our office for any queries</Card.Subtitle>
                            <Card.Text className="text">
                                <FaMapMarkerAlt size={22} />2nd floor abudabi street dubai-00
                            </Card.Text>
                            <Card.Text>
                                <FaWhatsapp size={22} />(+91)6482764729
                            </Card.Text>
                            <Card.Text>
                                <IoIosMail size={22} />hope@email.com
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '23rem' }} className="newsletter" >
                        <Card.Body >
                            <Card.Title className="title"> NEWSLETTER</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Sign up and get more updates on our upcoming campaigns.</Card.Subtitle>
                            <Card.Text id="ib">
                                <input className="inputbox" placeholder="Enter E-Mail address" type="email"></input>
                                <Button className="signup" variant="dark">Sign up</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mainpages">
                        <Card.Body>
                            <Card.Title className="title">MAIN PAGES</Card.Title>
                            <Card.Text className="links">
                                <ul className="mp">
                                    <li><Card.Link className="link" href="#home">
                                        Home
                            </Card.Link></li>
                                    <li>  <Card.Link className="link" href="#features">

                                        About us
                            </Card.Link></li>
                                    <li>  <Card.Link className="link " href="#cause">
                                        Campaigns
                            </Card.Link></li>

                                    <li>  <Card.Link className="link " href="#contact">

                                        Contact us
                            </Card.Link></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </div>
                <footer>
                    <FaHandHoldingHeart className="foot-icon" size={30} color={"gold"} />
                    <h4 className="foot">HOPE</h4>
                    <p className="tag">Be the change the world needs</p>

                    <FaFacebook size={26} className="foot-fb" color={"gold"} />
                    <FaTwitter size={26} className="foot-tw" color={"gold"} />
                    <FaInstagram size={26} className="foot-in" color={"gold"} />
                    <FaTelegramPlane size={26} className="foot-tg" color={"gold"} />
                    {/* <FaCopyright size={15}  className="foot-icon" color={"gold"}/> */}
                </footer>
                <footer id="f2">
                    <p className="tag">Copyrights <span> <FaCopyright size={15} className="foot-cp" color={"gold"} /></span> 2021-Hope-All rights reserved.Donate with love 💛 </p>
                </footer>

            </>
        </div>
    )
}

export default Contact
