import React , {useEffect} from "react";
import './Main.css'

//import  icon
import { GrLocation } from "react-icons/gr";
import { BsClipboard } from "react-icons/bs";

// let me import the images so we dont have this error on the browser
import img from '../../Assets/img/img.jpg'
import img1 from '../../Assets/img/img1.jpg'
import img2 from '../../Assets/img/img2.jpg'
import img3 from '../../Assets/img/img3.jpg'
import img4 from '../../Assets/img/img4.jpg'
import img5 from '../../Assets/img/img5.jpg'
import img6 from '../../Assets/img/img6.jpg'
import img7 from '../../Assets/img/img7.jpg'
import img8 from '../../Assets/img/img8.jpg'
import img9 from '../../Assets/img/img9.jpg'
import img10 from '../../Assets/img/img10.jpg'
import img11 from '../../Assets/img/img11.jpg'
import img12 from '../../Assets/img/img12.jpg'
import img13 from '../../Assets/img/img13.jpg'

import Aos from "aos";
import 'aos/dist/aos.css'
//let me poste the array named date  

const Date = [
    {
        id:1,
        imgScr:img,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

    {
        id:2,
        imgScr:img1,
        destTitle:'Machu picchu',
        location:'peru',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'Huayna picchu is mountain in peru, rising over machu picchu,the so-called lost City of Incas. this place is popular among tourists as the sunrise from the sun gate is simply spectacular'
    },

    {
        id:3,
        imgScr:img2,
        destTitle:'great Borrier reef',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'one of the most remarkable australian natural gifts is the great Borrier reef. the hallmark of this place is "lavish" and "beauty". always interestine to be in this plase '
    },

    {
        id:4,
        imgScr:img3,
        destTitle:'Cappadocia',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'According to the world tourism ranking ,45 million people vist turkey each year , and from that about 2 million come to visit cappadocia. this place is known for its luxurious stays and adventurous activities'
    },

    {
        id:5,
        imgScr:img4,
        destTitle:'guanajuto',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$1100',
        description:'A city in center mexico, guanajuto is known for its history of silver mining and colonial architecture. the houses in the city are very attractively painted  with the most bringht colors available.Always welcome.'
    },

    {
        id:6,
        imgScr:img5,
        destTitle:'clinque terre',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$840',
        description:'the vibrant hues of the houses are its benchemk and explain the beauty of this place. Also, if you are a foodie and love seafood , you will be exhilarated with the choice you are about to get here . happy exploring great food!'
    },

    {
        id:7,
        imgScr:img6,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

    {
        id:8,
        imgScr:img7,
        destTitle:'Bora Bora',
        location:'india',
        grade:'CULTURAL RELAX',
        fees:'$900',
        description:'An immense mausoleum of white marble, built-in agra by mughal emperor shah  jahan in momery of  his wife monument is breathtakingly beautful this place is known for its luxurios stays and adventurous activiyies. '
    },

    {
        id:9,
        imgScr:img8,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

    {
        id:10,
        imgScr:img9,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

    {
        id:11,
        imgScr:img10,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

    {
        id:12,
        imgScr:img11,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

    {
        id:13,
        imgScr:img12,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

    {
        id:14,
        imgScr:img13,
        destTitle:'Bora Bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'the epitome of romance, Bore Bore is one of the best travel description in the world. this place is known for its luxurions stays and adventurous activities.'
    },

]

const Main = () => {

     // lete create a react hook to add a scroll  
    useEffect(() => {
        Aos.init({duration: 1250})    
    },[])

    return (
        <section className="main container section">

                <div className="secTitle">
                    <h3 data-aos="fade-right" className="title">
                        Most visited destinations
                    </h3>
                </div>

            <div className="secContent grid">

                {
                    Date.map(({id, imgScr , destTitle , location , grade , fees , description})=>{
                        return(
                            <div data-Aos="fade-up" key={id} className="singleDestination">


                                <div className="imageDiv">
                                    <img src={imgScr} alt={destTitle}/>
                                </div>

                                <div className="carInfo">
                                    <h4 className="destitle">
                                        {destTitle}
                                    </h4>

                                    <span className="continent flex">
                                        <GrLocation className="icon"/>
                                        <span>{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETALS <BsClipboard className="icon"/>
                                    </button>
                                </div>
                            </div>

                            
                        )
                    })
                }
            </div>



        </section>
    )
}

export default Main





