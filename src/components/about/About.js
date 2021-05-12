import React from 'react'
import { FaDonate } from "react-icons/fa";
import { FaHandsHelping } from 'react-icons/fa'
import { FaSmile } from 'react-icons/fa'
import { IoIosGift } from "react-icons/io";
import { GiBullseye } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import { BsGraphUp } from "react-icons/bs";

import './about.css'

const About = () => {

    return (
        <>
            <div>
                <img className="dogimg" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="child"
                />
            </div>
            <h1 className="do">What we actually do ?</h1>

            <div className="box-2">
                <img className="vol" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                <h3 className="diff">Make a difference in the world</h3>
                <hr size="6" width="20%" />
                <h6 className="sen">To help out people from different backgrounds and to bring a change in their lives.Our Team finds out the problems or people in need of money and help them</h6>

                <FaDonate className="icon-d hs" color={"c70039"} size={30} />
                <div className="l"></div>
                <h6 className='m' >80M</h6>
                <h6 className="don">Donated</h6>


                <FaHandsHelping className="icon-d" color={"#c70039"} size={30} />
                <div className="l"></div>
                <h6 className='m'>22,488</h6>
                <h6 className="don">Volunteers</h6>

                <FaSmile size={30} color={"#c70039"} className=" smile" id="smily" />
                <div className="l2"></div>
                <h6 className="on no">22,000</h6>
                <h6 className="on">Happy faces</h6>

                <IoIosGift size={30} color={"#c70039"} className=" smile" id="gift" />
                <div className="l1"></div>
                <h6 className="on gif">56,789</h6>
                <h6 className="on">Gifts</h6>
            </div>
            <div className="abt-2">
                <div className="icons">
                    <RiTeamFill color={"#c70039"} size={40} id="team" />
                    <h6 className="pt">Professional Team</h6>


                    <BsGraphUp color={"#c70039"} size={40} id="graph" />
                    <h6 className="gh" >Diverse Approach</h6>
                    <GiBullseye color={"#c70039"} size={43} id="bullseye" />
                    <h6 className="be">Result based</h6>
                </div>
            </div>
            <div>
            <img className="dogimg hanimg" src="https://images.unsplash.com/photo-1444664361762-afba083a4d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt=""/>
            <h1 className=" abt-5">HOPE</h1>
            <h5 className=" abt-5 abt-5p" >HOPE is a non-profit organization were we provide people love support to overcome their problems .We mainly address society problems and bring it to your approach.Please Donate as much as you can</h5>
            </div>





        </>
    )
}

export default About
