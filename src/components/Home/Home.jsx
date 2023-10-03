import React, {useEffect} from "react"
import './Home.css'
import video from '../../Assets/video/video.mp4'
import { FaSearchLocation } from "react-icons/fa";
import { HiFilter } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTripadvisor } from "react-icons/tb";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css'


const Home = () => {
    // lete create a react hook to add a scroll  
    useEffect(() => {
          Aos.init({duration: 1250})    
    },[])
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4" ></video>

                <div className="homeContent container">
                    <div className="textDiv">

                        <span data-Aos="fade-up" className="smallText">
                            Our Packages
                        </span>

                        <h1 data-Aos="fade-up" className="homeTitle">
                            Search your Holidays
                        </h1>

                    </div>

                    <div data-Aos="fade-up"  className="cardDiv grid">
                        <div className="destinationInput">
                            <label htmlFor="city">Search your destination:</label>
                            <div className="input flex">
                                <input type="text" placeholder="enter name here" />
                                <FaSearchLocation className ="icon"/>
                            </div>
                        </div>

                        <div className="dateInput">
                            <label htmlFor="date">select your date:</label>
                            <div className="input flex">
                                <input type="date" placeholder="enter name here" />
                            </div>     
                        </div>

                        <div className="priceInput">
                            <div className="label_total flex">
                                <label htmlFor="price">Search your price:</label>
                                <h3 className="total">5000$</h3>
                            </div>
                            <div className="input flex">
                                <input type="range" max="5000" min="0"/>
                            </div>
                        </div>

                        <div className="searchOptions flex">
                            <HiFilter className ="icon"/>
                            <span>MORE FILTERS</span>
                        </div>
                    </div>

                    <div data-Aos="fade-up" className="homeFooterIcons flex">
                        <div className="rightIcon">
                            <BsFacebook className="icon"/>
                            <AiOutlineInstagram className="icon"/>
                            <TbBrandTripadvisor className="icon"/>

                        </div>

                        <div className="leftIcon">
                        <BsListUl className="icon"/>
                        <TbApps className="icon"/>
                            
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Home





