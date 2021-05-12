import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaRupeeSign } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import {FaHandsHelping} from 'react-icons/fa'
import CardDeck from 'react-bootstrap/CardDeck'
import './donate.css'


const Donatedogs = () => {
    return (
      <>
        <div>
            <img className="dogimg" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
           alt="child"
           /> 
           </div>
          
           <h1 className="hd">Donate Money for any of our campaigns</h1>
           <hr className="dmc"></hr>
  <div className="middle">
  <div className="vdl">
  <h3 className="fcamp">Featured Campaigns</h3></div>
           <CardDeck className="deck">
  <Card className="deck2">
    <Card.Img variant="left" className="i-1" src="https://frontiersinblog.files.wordpress.com/2020/01/frontiers-psychology-stray-dogs-human-cues-behavior.jpg" />
    <Card.Body className="b-1">
      <Card.Title className="heading">
      <h3 className="heading">HOME FOR STRAY DOGS</h3>
      </Card.Title>
      <Card.Text className="text-1">
      <h5 className="text-1">Help us provide food and shelter for homeless stray dogs.
      You can also contribute food and other supplies.</h5>
     <FaRupeeSign id="rp" size={40}  />
      <h4 id="rs">Rs.2,00,000</h4>
      <FaHandsHelping id="vo" size={45}/>
      <h4 id="vs">345</h4>
      <a href="https://rzp.io/l/qtAYgPjvv">  <FaDonate size={45} id="df">DONATE</FaDonate></a>
      <a  className="a1" href="https://rzp.io/l/qtAYgPjvv">DONATE</a>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card  className="deck3">
    <Card.Img variant="left" className="i-1" src="https://api.time.com/wp-content/uploads/2020/03/how-to-help-and-get-help-coronavirus-pandemic.jpg" />
    <Card.Body className="b-1">
      <Card.Title className="heading">
      <h3 className="heading">DONATING MEDICINES AND FOOD</h3></Card.Title>
      <Card.Text className="text-1">
      <h5 className="text-1">During this lockdown we shall provide all thethings you need at your doorstep</h5>
     <FaRupeeSign id="rp" size={40} />
      <h4 id="rs">Rs.1,00,000</h4>
      <FaHandsHelping id="vo" size={45}/>
      <h4 id="vs">300</h4>
      <a href="https://rzp.io/l/p5VTKWNkxA">  <FaDonate size={45} id="df">DONATE</FaDonate></a>
      <a  className="a1" href="https://rzp.io/l/p5VTKWNkxA">DONATE</a>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card  className="deck4">
    <Card.Img variant="left" className="i-1" src="https://100schools.org/wp-content/uploads/2014/04/donation-education-helping-kids-school-uniform-building-100-schools-rural-Burma-Myanmar.jpg" />
    <Card.Body className="b-1">
    <Card.Title className="heading"><h3 className="heading">BUILDING SCHOOL FOR CHILDREN</h3></Card.Title>
      <Card.Text >
      <h5 className="text-1">Help us build a school for the children.We will be providing all kinds of things required</h5>
     <FaRupeeSign id="rp" size={40}  />
      <h4 id="rs">Rs.3,30,000</h4>
      <FaHandsHelping id="vo" size={45}/>
      <h4 id="vs">400</h4>
      <a href="https://rzp.io/l/0Wo5dEWuez">  <FaDonate size={45} id="df">DONATE</FaDonate></a>
      <a  className="a1" href="https://rzp.io/l/0Wo5dEWuez">DONATE</a>
      </Card.Text>
    </Card.Body>
 
  </Card>
</CardDeck>
        </div>
        <img className="twc" src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt=""/>
        <Card className="sidecards sc1" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80" />
  <Card.Body>
  <h5 className="sctitle">Fund raised</h5>
      <h6 className="sct">8 Lakhs</h6>
      
      <h5 className="goal">Goal</h5>
      <h6 className=" goalmoney">7 Lakhs</h6>
      <hr></hr>
     
    <Card.Title className="sctitle">Help us build a well</Card.Title>
    <Card.Text className="sctext">
     
      <h6 id="sctext">Help us build a well for the villages who can fetch water.</h6>

    </Card.Text>
   
  </Card.Body>
</Card>
<Card className="sidecards sc2"  style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1575473302511-e4cf5eac688b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80" />
  <Card.Body>
  <h5 className="sctitle">Fund raised</h5>
      <h6 className="sct">8 Lakhs</h6>
      <h5 className="goal">Goal</h5>
      <h6 className=" goalmoney">9 Lakhs</h6>
      <hr></hr>
    <Card.Title className="sctitle">Help us build a Oldage home </Card.Title>
    <Card.Text className="sctext">
      
      <h6 id="sctext">Help us build a home for old people so they can live happy.</h6>

    </Card.Text>
   
  </Card.Body>
</Card>
 <Card className="sidecards sc3"   style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
  <Card.Body>
  <h5 className="sctitle">Fund raised</h5>
      <h6 className="sct">7 Lakhs</h6>
      <h5 className="goal">Goal</h5>
      <h6 className=" goalmoney">12 Lakhs</h6>
    <hr></hr>
      <Card.Title className="sctitle">Help us plant trees</Card.Title>
      <Card.Text className="sctext">
      <h6 id="sctext">Help us plant trees for increasin the count of forests.</h6>

    </Card.Text>
   
  </Card.Body>
</Card> 
       </>
    )
}

export default Donatedogs
// https://rzp.io/l/p5VTKWNkxA
