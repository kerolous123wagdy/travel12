import React, {useEffect} from "react";
import './Footer.css'
import video1 from '../../Assets/video/video1.mp4'
import { FiSend } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {
    // lete create a react hook to add a scroll  
    useEffect(() => {
        Aos.init({duration: 1250})    
    },[])
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video1} loop autoPlay muted type="video/mp4" ></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-Aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-Aos="fade-up" type="text" placeholder="Enter email address"/>
                        <button data-Aos="fade-up" className="btn flex" type="submit">
                            SEND<FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <SiYourtraveldottv className="icon"/> Travel.
                            </a>
                        </div>

                        <div data-Aos="fade-up" className="footerParagragh">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Eius molestiae doloribus, assumenda dignissimos ullam qui esse rem minus
                            , et repellendus, labore fugit voluptas sit omnis exercitationem veritatis 
                            ratione debitis consequuntur.
                        </div>

                        <div data-Aos="fade-up" className="footerSocials">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>
                    <div  className="footerLinks grid">
                       {/* group one */}

                        <div data-Aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Tourisum
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Payment
                            </li>

                            
                        </div>

                       {/* group two */}

                        <div data-Aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Booking
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Hostelworld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                TripAdvisor
                            </li>

                            
                        </div>
                        {/* group three */}
                        <div data-Aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                last minutos
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Booking
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Hostelworld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                TripAdvisor
                            </li>

                            
                        </div>
                        
                    </div>

                     <div  className="footerDiv flex">
                        <small>Best travel website</small>
                        <small>COPYRIGHTS RESERVED - INSRATECH 2022</small>
                        
                     </div>

                </div>
            </div>

        </section>

    )
}

export default Footer





