import Header from "../Component/Header"
import Footer from "../Component/Footer"
import glo from "../../src/Images/glo.webp"
import dav from "../../src/Images/dav.webp"
import you from "../../src/Images/you.webp"
import game from "../../src/Images/game.webp"
import kin from "../../src/Images/kin.webp"
import uma from "../../src/Images/uma.webp"
import buz from "../../src/Images/buz.webp"
import fan from "../../src/Images/fan.webp"
import pot from "../../src/Images/pot.webp"
import online from "../../src/Images/online.webp"
import { CheckCircle, ArrowRight,Plus, Minus,BookOpenText } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useState } from "react"
const Web=()=>{
    const [free, setFree]=useState(false);
    const [push, setPush]=useState(false);
    const [flow, setFlow]=useState(false);
    const [increase, setIncrease]=useState(false);
    const [multiply, setMultiply]=useState(false);
    const [tap, setTap]=useState(false)
    function fag(){
        alert("COMING SOON!");
        setTap(true);
    }
    function dev(){
        setFree(!free);
    }
    function pran(){
        setPush(!push);
    }
    function pev(){
        setFlow(!flow);
    }
    function pet(){
        setIncrease(!increase);
    }
    function sele(){
        setMultiply(!multiply);
    }
return(
    <div>
        <Header/>
        <div className="talk ma-g">
        <div className="ma-k">
                <img src={glo}/>
            </div>
            <div className="bike">
            <h3>Your Own Website- for free</h3>
           <p>Your own website without programmers or designers. Effortlesly get your online store, bookings, legal text and more with Blinkz. <br />With the professional website builder for the seld-employed.</p>
           <button onClick={fag}>Start Free</button>
            </div>
        </div>
        <div className="hoz">
            <h3>Worry-free Websites</h3>
        </div>
        <div className="con">
            <div className="jik-g">
               <div className="hin">
                <img src={you} alt="" />
               </div>
               <div className="vipe">
               <h4>Edit your design anywhere</h4> 
                <p>Developed specifically for indenpendent small businesses, we have all the features you need to thrive online.</p> 
                </div>
            </div>
            <div className="jik-g">
               <div className="hin">
                <img src={dav} alt="" />
               </div>
               <div className="vipe">
               <h4>Put your Domain on it</h4> 
                <p>Customize yor website look and feel and make changes any time. With our built-in design features.</p>
                </div>
            </div>
            <div className="jik-g">
               <div className="hin">
                <img src={game} alt="" />
               </div>
               <div className="vipe">
               <h4>Made for Mobile</h4> 
                <p>Give your website a professional edge  with a custom domain.</p> 
                </div>
            </div>
            <div className="jik-g fagi">
               <div className="hin">
                <img src={kin} alt="" />
               </div>
               <div className="vipe">
               <h4>Copyright free-photos</h4> 
                <p>Your website will always look great, no matter the screen size. Create and edit your website from any device, and your customers can visit using their phone, tablet, or computer.</p>
                </div>
            </div>
            <div className="jik-g jig">
               <div className="hin">
                <img src={uma} alt="" />
               </div>
               <div className="vipe">
               <h4>Connect Facebook, Instagram and & Google</h4> 
                <p>Get free access to our huge database of professional images that fit your industry. Your image library comes stock with higjht-quality photos that you can use you alone.</p>
                </div>
            </div>
            <div className="jik-g jig">
               <div className="hin">
                <img src={uma} alt="" />
               </div>
               <div className="vipe">
               <h4>Connect Facebook, Instagram and & Google</h4> 
                <p>Get free access to our huge database of professional images that fit your industry. Your image library comes stock with higjht-quality photos that you can use you alone.</p>
                </div>
            </div>
        </div>
        <div className="logo">
            <div className="kith">
            <h3>Website examples worth seeing</h3>
            <p>Real website made by real peolple.</p>  
            </div>
            <div className="photo">
                <img src={fan}/>
            </div>
        </div>
        <div className="gone flame">
            <h3>How do I make a Website?</h3>
            <p>Creating yor website have never been easier. With Blinkz, you have everything you need to take small business online.</p>
        </div>
        <div className="hope">
            <div className="orange">
                <span>1</span>
                <p>Create a free account and answer a free question about your website.</p>
            </div>
            <div className="orange">
                <span>2</span>
                <p>Pull Your business info from social media accounts on Google.</p>
            </div>
            <div className="orange">
                <span>3</span>
                <p>Choose a design. Use your own photos and texts.</p>
            </div>
            <div className="orange">
                <span>4</span>
                <p>Pulish your website. Done!</p>
            </div>
        </div>
        <div className="gone firm">
            <h3>Simply Beautiful.</h3>
            <h3>Beautifully Simplify</h3>
        </div>
        <div className="name">
        <div className="plus">
            <h5>How can I earn money with my website?</h5>
            <div onClick={dev} className="sap">{free?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={free? "prank":"concel"}>
        <p>For many website owners, their site is an important source of income. You can sell products in your own online store, find new customers, or even have people book your services directly with an integrated booking tool. Blinkz offers special features for each industry that are optimized for your target audience. For example, as a restaurateur, you can insert a menu, musicians can incorporate their music from Spotify or videos, or you can offer visitors a contact form or a booking calender.</p>
        </div>
        <div className="plus">
            <h5>Do I neeed website for my prject or business? Yes</h5>
            <div onClick={pran} className="sap">{push?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={push? "truck":"pep"}>
        <p>Here is why. If you're a freelancer or run your company, a professional website is the best way to attract new business, help customer find you, and serve as your official home on the internet. Whether you use your website for your business or for a personal project, you want to reach the right audience. And users nowadays naturally search for productsm companies, or service providers on the internet. That's why having your own website is the easiest and fastest way to find customers or visitors.</p>
        </div>
        <div className="plus">
            <h5>Is Blinkz easy enough for beginners? Yes</h5>
            <div onClick={pev} className="sap">{flow?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={flow? "fux":"gop"}>
        <p>Here's how it works. Today, anyone can easily create their own website-even if they don't have any coding or design know-how. With Blinkz intuitive, modular system, you choose a style and then design and edit your website with easy-to-use blocks. Your site comes with a huge library of free photographs to choose from, and tons of design features to make it just the way you want it. As an added bonus, you can pull in any existing social media photos or info that you already have, so the process is even easier and faster.</p>
        </div>
        <div className="plus">
            <h5>Can I start for free and decide later? Sure</h5>
            <div onClick={pet} className="sap">{increase?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={increase? "paln":"goss"}>
        <p>With Blinkz, you can start for free and create and publish your website. If you're ready for the next level, you can always upgrade to premuim plan. That cost you only a few dollars a month and offer you many more features. For example, you get your own domain, advanced SEO features, persoanl supports and much more.</p>
        </div>
        <div className="plus">
            <h5>Will my website look good on all devices? Yes</h5>
            <div onClick={sele} className="sap">{multiply?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={multiply? "hil":"sir"}>
        <p>All websites created with Blinkz are expected to look perfect on smartphones, tablets, and computers. The responsive design adapt automatically to your visitor's screens, so you don't have to create separate versions of your website for desktop and mobile. Just design your website the way you want it. and we'll make sure everything looks good.</p>
        </div>
     </div>
     <div className="vipe youth">
     <h3>Edit your design anywhere</h3> 
 </div>
 <div className="vun">
    <div className="frank">
        <div className="lion">
            <img src={buz}/>
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
    <div className="frank">
        <div className="lion">
            <img src={online}/>
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
    <div className="frank vive">
        <div className="lion">
            <img src={pot}/>
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
 <div className="gone firm  pro">
    <h3>Create your website today.</h3>
    <h3>You've got this!</h3>
    <button onClick={fag}><Link>Let's get started</Link></button>
</div>
<Footer/>
 </div>
)
}
 export default Web