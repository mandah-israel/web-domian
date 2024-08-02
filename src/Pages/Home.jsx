import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { CheckCircle, ArrowRight,Plus, Minus } from "@phosphor-icons/react"
import hero from "../../src/Images/hero.webp"
import font from "../../src/Images/font.webp"
import banner from "../../src/Images/banner.webp"
import listings from "../../src/Images/listings.webp"
import booking from "../../src/Images/booking.webp"
import company from "../../src/Images/company.webp"
import free from "../../src/Images/free.webp"
import studio from "../../src/Images/studio.webp"
import land from "../../src/Images/land.webp"
import { Link } from "react-router-dom"
import Slider from "../Component/Slider"
import { useState } from "react"
const Home=()=>{
    const[show, setShow]=useState(false);
    const[open, setOpen]=useState(false);
    const[hide, setHide]=useState(true);
    const [press, setPress]=useState(false);
    const [tap, setTap]=useState(false);
    const [push, setPush]=useState(false)
    function flag(){
        alert("COMING SOON!");
        setPress(true);
    }
    function fag(){
        alert("COMING SOON!");
        setTap(true);
    }
    function gaf(){
        alert("COMING SOON!");
        setPush(true);
    }
    function vin(){
        setShow(!show);
    }
    function fin(){
        setOpen(!open);
    }
    function sin(){
        setHide(!hide);
    }
    return(
     <div>
        <Header/>
        <div className="home ma-g">
            <div className="vik">
            <h3>Build Your Own Architecture Website</h3>
            <div className="vice">
                <CheckCircle size={15}/>
                <span>Set yourself apart from the competitoion</span>
           </div>
           <div className="vice">
                <CheckCircle size={15}/>
                <span>Reach high-paying clients in your section</span>
           </div> 
           <div className="vice">
                <CheckCircle size={15}/>
                <span>Grow your practice and get found online fast</span>
           </div> 
           <button onClick={flag}>Start Now</button>
           <p>Start for free and upgrade anytime to one of our premium plans</p>
            </div>
            <div className="young">
                <img src={hero}/>
            </div>
        </div>
        <div className="hoz">
            <h3>The best architect website builder with all the features you neeed</h3>
        </div>
        <div className="con">
            <div className="jik-g gimy">
               <div className="hin faci">
                <img src={banner} alt="" />
               </div>
               <div className="vipe">
               <h4>Edit your design anywhere</h4> 
                <p>Developed specifically for indenpendent small businesses, we have all the features you need to thrive online.</p> 
                </div>
            </div>
            <div className="jik-g gimy">
               <div className="hin facx">
                <img src={font} alt="" />
               </div>
               <div className="vipe">
               <h4>Put your Domain on it</h4> 
                <p>Customize yor website look and feel and make changes any time. With our built-in design features.</p>
                </div>
            </div>
            <div className="jik-g fagi peli gimy">
               <div className="hin">
                <img src={booking} alt="" />
               </div>
               <div className="vipe">
               <h4>Copyright free-photos</h4> 
                <p>Your website will always look great, no matter the screen size. Create and edit your website from any device, and your customers can visit using their phone, tablet, or computer.</p>
                </div>
            </div>
            </div>
        <div className="book ">
            <h4>More about online bookings</h4>
            <Link onClick={fag}><ArrowRight size={15}/></Link>
        </div>
        <div className="hope fras margi">
        <h3>How to add bookings to your website</h3>
            <div className="orange dox">
                <span className="spix">1.</span>
                <p>Log in to your Blinz accuount and click "Bookings" in the menu on the left.</p>
            </div>
            <div className="orange dox">
                <span className="spix">2.</span>
                <p>Go to "Settings" to define at which time slots you are available for bookings per weekday.</p>
            </div>
            <div className="orange dox">
                <span className="spix">3.</span>
                <p>Use the "Create New" button under "Events & Services" to add a new service.</p>
            </div>
            <div className="orange dox">
                <span className="spix">4.</span>
                <p>Then, add a Booking Overview Block to your website. Click on the text in the block to select one of your services or events.</p>
            </div>
            <div className="orange dox">
                <span className="spix">5.</span>
                <p>That's it! Your customers can now book your services around the clock directly on your website.</p>
            </div>
            <div className="tron zoon">
            <button onClick={fag}>Start Now</button>
            </div>
        </div>
        <div className="vun">
    <div className="frank koli">
        <div className="lion side">
            <img src={company}/>
        </div>
        <div className="tube">
            <h4>Business Websites</h4>
            <p>Everything you need to create a professinal homepage and site for your business: a custom domain, SEO tools, automated business listings, and more.</p>
        </div>
        <div className="book gun">
            <h4>Start Now</h4>
            <Link onClick={fag}><ArrowRight size={15}/></Link>
        </div>
    </div>
    <div className="frank koli">
        <div className="lion side">
            <img src={free}/>
        </div>
        <div className="tube">
            <h4>Online Websites</h4>
            <p>For hobbies, projects,clubs and more. A website of yor own is your calling on the web, with the tools you need to reach peolpe around the world and around the clock.</p>
        </div>
        <div className="book gun">
            <h4>Start Now</h4>
            <Link onClick={fag}><ArrowRight size={15}/></Link>
        </div>
    </div>
    <div className="frank vive pell koli">
        <div className="lion side">
            <img src={studio}/>
        </div>
        <div className="tube">
            <h4>Porfolio Websites</h4>
            <p>Looking to find new work and new audiences? Present youself and your porfolio or resume in the best light with a customized website.</p>
        </div>
        <div className="book gun">
            <h4>Start Now</h4>
            <Link onClick={fag}><ArrowRight size={15}/></Link>
        </div>
    </div>
 </div>
     <div className="vit ma-g">
        <h2>Architecture website inspiration and examples</h2>
        <p>Take a look at these cool architect websites other professsionals have already built with blinkz.</p>
     </div>
     <Slider/>
     <div className="vit tech">
        <h2>Architecture website FAQ</h2>
     </div>
     <div className="name">
        <div className="plus">
            <h5>What should architect's website include?</h5>
            <div onClick={vin} className="sap">{show?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={show? "nav":"control"}>
        <p>There's no template for architecture websites but the most successsful ones include an about page, architecture portfolio, rates and pricing, news and events, and contact info.</p>
        </div>
        <div className="plus">
            <h5>What are the dos and don'ts of building a good architecture website?</h5>
            <div onClick={fin} className="sap">{open?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={open? "cov":"keep"}>
        <p>Do add social media buttons to your site so visitors can keep in touch. This dis agreat way to interact with new and existing clients, build up word of mouth recommendations, and show Google that you're active. But don't give away too much for free. Prospects asking to "pick your brains" for free design ideas then never hiring you for paid work is a common problem for architects. You can avoid it by adding a pricing page with consultation fees to your website. Thiswill deter visitors who are just looking for the lowest price and give you time to focus on serious inquiries.</p>
        </div>
        <div className="plus">
            <h5>How will a website help me win more clients?</h5>
            <div onClick={sin} className="sap">{hide?<Plus size={18}/>:<Minus size={18}/>}</div>
        </div>
        <div className={hide? "fin":"goov"}>
        <p>Think of your architect site lie your virtual practice. New clients will only walk in if it looks professional from the outside. And they'll find it easier to trust your business if they can see your qualifications, accreditations, and previous work, all in one  place. Whether you're a freelancer or part of a big firm, a good architecture website will help you position yourself as an expert in your field and show clients that you're professional. And if your aim is to secure higher-value clients, you can create landing pages to promote your specialisms-eg.,retail architecture and luxury homes.</p>
        </div>
     </div>
     <div>
     <div className="vite ma-g">
        <h3>Freelance architecture website</h3>
        <p>Want to win business as a freelance architect? A modern architectire website design will help you attract high-paying clients, even if you're a team of one.</p>
        <div className="book">
            <h4>Start Now</h4>
            <Link><ArrowRight size={15}/></Link>
        </div>
       </div>
     </div>
     <div>
        <Footer/>
     </div>
</div>
    )
}
export default Home