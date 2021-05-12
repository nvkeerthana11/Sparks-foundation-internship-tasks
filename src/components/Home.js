import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { BiSelectMultiple } from "react-icons/bi";
import { ImHappy } from "react-icons/im";
import { FaDonate } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { CardGroup } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            <div className="home">

                <Carousel fade>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption id="capt">
                            <h1>"Save thousands of little lives"</h1>

                            <h6>Your donation will help us feed and provide shelter for stray dogs.</h6>
                            <Link to="/dogs">
                                <Button variant="warning" className="captbtn">Donate</Button>
                            </Link>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  >
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1496117376488-15352091db1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1514&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>"Small Effort Make Big Change."</h1>
                            <p>Help us build a school for children</p>
                            <Link to="/dogs">
                                <Button variant="warning" className="captbtn">Donate</Button>
                            </Link>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            id="img2"
                            src="https://images.unsplash.com/photo-1589917030663-849c7fe96c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>"Protect India From Corona Virus"</h1>
                            <p>Donate us to help India fight against Covid</p>
                            <Link to="/dogs">
                                <Button variant="warning" className="captbtn">Donate</Button>
                            </Link>
                        </Carousel.Caption>


                    </Carousel.Item>

                </Carousel>
            </div >
            <div className="help">
                <h2 className="help1">Help us get the world better</h2>
                <p className="help2">Make others happy by donating</p>
                
                <Link to="/dogs">
                <Button variant="dark" className="dn">Donate now ➡</Button>
                </Link>

            </div>
            <div className="cause col-lg-6" >

                <img className="imgs" src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="" />

                <div class="vl">
                    <h2 id="os">Ongoing Campaigns</h2>
                    <p id="hr" className="p0">Help the world get better</p>
                </div>

                <CardGroup className="campaign">
                    <Card className="sc">

                        <Card.Body>
                            <p className="p0">Build school</p>
                            <h5>Help us build a school</h5>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup className="campaign">
                    <Card className="sc" id="cs">
                        <Card.Body>
                            <p className="p0">Animal shelter</p>
                            <h5> Shelter for homeless animals</h5>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup className="campaign">
                    <Card className="sc" id="envi">
                        <Card.Body>
                            <p> Environmenal</p>
                            <h5>Make the world green</h5>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup className="campaign">
                    <Card className="sc" id="mic" >
                        <Card.Body>
                            <p>Pandemic</p>
                            <h5>Lets make the world mask free</h5>
                        </Card.Body>
                    </Card>
                </CardGroup>
                
                
              
<Card className="how" >
<h1 className="how-txt">How to Donate ?</h1>
                    <CardGroup className="htd" style={{ width: '18rem' }}>
                    <Card className="cd1">
                        <Card.Body style={{ height: '180px' }} >
                        <BiSelectMultiple className="select" size={50} />
<Card.Title id="tit">SELECT CAMPAIGN</Card.Title>

                            <Card.Text className="txt">
                            Choose any of our ongoing campaigns that you wanted to donate and go to campaign column.
    </Card.Text>

                        </Card.Body>
                        </Card>
                        </CardGroup>

                        <CardGroup className="dth" style={{ width: '18rem' }}>
                        <Card className="cd1">
                        <Card.Body style={{ height: '180px' }}>
                        <FaDonate className="drop" size={50} />
                            <Card.Title id="tit">DONATE MONEY</Card.Title>

                            <Card.Text className="txt">
                            After choosing the campaign click on the doante buttton and you can also become a volunteer.
    </Card.Text>

                        </Card.Body>
                        </Card>
                        </CardGroup>
                        
                        <CardGroup className="dth thd" style={{ width: '18rem', height:'20px'}}>
                        <Card className="cd1">
                        <Card.Body style={{ height: '180px' }}>
                        <ImHappy className="happy" size={50} />
                            <Card.Title id="tit">HAPPY PEOPLE</Card.Title>

                            <Card.Text className="txt">
                            Our organization will provide people all kind of help they need and there is no tax for donors.
    </Card.Text>

                        </Card.Body>
                        </Card>
                        </CardGroup>


                        </Card>             

                     

               


            </div>
        </>

    )
}

export default Home
