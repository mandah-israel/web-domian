import Header from "../Component/Header"
import Footer from "../Component/Footer"
import faz from "../../src/Images/faz.webp"
import lion from "../../src/Images/lion.webp"
import gem from "../../src/Images/gem.webp"
import jike from "../../src/Images/jike.webp"
import think from "../../src/Images/think.webp"
import uma from "../../src/Images/uma.webp"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CheckCircle, ArrowRight,Plus, Minus,FadersHorizontal, ClockCountdown, Cards,CalendarDots, BookOpenText,ShoppingCart, Medal,FunnelSimple} from "@phosphor-icons/react"
const Booking=()=>{
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
     <div className="talk spank ma-g">
        <div className="ga-k">
                <img src={faz}/>
            </div>
            <div className="bike">
            <h3>Online bookings to <span>boost your business</span></h3>
           <p>Do you run online workshops, offer personal coaching sessions or giving free introductory talks?. <br />Make sure customers can make appointments directly via your website with our easy-to-use booking tool.</p>
           <button onClick={fag}>Let's get started</button>
            </div>
        </div>
        <div className="kith giu">
            <h3>Endless possibilities</h3>
            <p>Make it easy for your customers to find what they're looking for. You can assign both individual and group appropriates at your location, another location, or online.</p>  
            </div>
            <div className="fis">
                <div className="kiz">
                  <FadersHorizontal size={25}/>
                  <h6>Tailored your business</h6>
                  <p>You can set limits for the maximum mmunber of participants, create time slots for bookings, define your business hours, and enable cancellations-all the click of a button.</p>
                </div>
                <div className="kiz">
                  <ClockCountdown size={25}/>
                  <h6>Perfect for any bookings</h6>
                  <p>Whether it's a one-on-one coaching session, a yoga class, or workshops: you have the freedom to open booking for any events your business offers.</p>
                </div>
                <div className="kiz">
                  <Cards size={25}/>
                  <h6>No extra tools needed</h6>
                  <p>Manage all your bookings in one place-directly from your site-without talking to extra tools. This saves time and allows you to concentrate fully on your business.</p>
                </div>
                <div className="kiz">
                  <CalendarDots size={25}/>
                  <h6>Always stay informed</h6>
                  <p>The booking tool automatically sends booking and cancellation confirmations to avoid double bookings or overbooking.</p>
                </div>
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
        <div className="hoz gas">
            <h3>Worry-free Websites</h3>
        </div>
        <div className="con">
            <div className="jik-g gil">
               <div className="hin">
                <img src={lion} alt="" />
               </div>
               <div className="vipe">
               <h4>Coaches</h4> 
                <p>As a coach, you help clients realize their full potential. You offer a mix of professional experience and genuine human interaction to help them reach their goals. Make it even easier to take that all-important first step with an online booking.</p> 
                </div>
            </div>
            <div className="jik-g gil">
               <div className="hin">
                <img src={gem} alt="" />
               </div>
               <div className="vipe">
               <h4>Fitness studio</h4> 
                <p>More and more people are looking for personal trainers or fitness classes. With an easy-to-use booking tool, your clients can quickly find what they need-giving you an extra edge over other studios.</p>
                </div>
            </div>
            <div className="jik-g gil">
               <div className="hin">
                <img src={jike} alt="" />
               </div>
               <div className="vipe">
               <h4>Hairdressers</h4> 
                <p>Whether you run a hair saloon, a beauty saloon, or a nail saloon: your clients expect a premium and professional experince. First impressions count, so put your best foot forward with a sleek booking tool.</p> 
                </div>
            </div>
            <div className="jik-g gil">
               <div className="hin">
                <img src={think} alt="" />
               </div>
               <div className="vipe">
               <h4>Photographers</h4> 
                <p>You're in the middle of setting up the perfect shot...and your phone rings for new appointment. Seriouslydisruptive, right? An online booking tool ensures you don't miss out on appointments while zooming in on your superstars.</p>
                </div>
            </div>
        </div>
        <div className="gone firm  pro">
          <h3>Create your website today.</h3>
          <h3>You've got this!</h3>
          <button onClick={fag}><Link>Let's get started</Link></button>
       </div>
       <div className="kith giu">
            <h3>More tools for small business</h3>
            </div>
            <div className="fis">
                <div className="kiz gag">
                  <BookOpenText size={25}/>
                  <h6>Business listings</h6>
                  <p>Keep your business hours and address up to date, and make it easier for the local customers to find you online.</p>
                  <div className="book gun filler">
                    <h4>Find out more</h4>
                   <Link onClick={fag}><ArrowRight size={15}/></Link>
                  </div>
                </div>
                <div className="kiz gag">
                  <ShoppingCart size={25}/>
                  <h6>Online Shop</h6>
                  <p>Sell your products online with flexible payment methods, 0% commision fees, and integrated Facebook and Instagram selling.</p>
                  <div className="book gun filler">
                    <h4>Find out more</h4>
                   <Link onClick={fag}><ArrowRight size={15}/></Link>
                  </div>
                </div>
                <div className="kiz gag">
                  <Medal size={25}/>
                  <h6>Professional logo</h6>
                  <p>Design a logo to make your business stand out with the Blinkz Logo Creator! It's 100% professional, 100% free, and easy to use.</p>
                  <div className="book gun filler">
                    <h4>Find out more</h4>
                   <Link onClick={fag}><ArrowRight size={15}/></Link>
                  </div>
                </div>
                <div className="kiz gag giy">
                  <FunnelSimple size={25}/>
                  <h6>Legal texts protected against legal notices</h6>
                  <p>Get personalized legal texts like your Imprint and Privacy Policy with our generator. 100% GDPR-compliant. Guaranteed.</p>
                  <div className="book gun filler">
                    <h4>Find out more</h4>
                   <Link onClick={fag}><ArrowRight size={15}/></Link>
                  </div>
                </div>
            </div>
            <div className="gone firm">
            <h3>FAQ about online booking tool.</h3>
        </div>
        <div className="name">
        <div className="plus">
            <h5>What is an online booking system?</h5>
            <div onClick={dev} className="sap">{free?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={free? "pra":"concel"}>
        <p>Nowadays, anyone who wants to book a consulting service, a workshop,or a hairdressing appointment doesnot necessarily have to do so by phone or e-mail. With an online booking system, clients can book appointments around the clock via a booking calender and see dirctly when there are free time slots.</p>
        </div>
        <div className="plus">
            <h5>Why do I need online booking?</h5>
            <div onClick={pran} className="sap">{push?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={push? "tru":"pep"}>
        <p>Scheduling appointments with customers can be time-consuming, especially if you get lots of calls emails that interrupt your work. An online booking calender makes your business look more professional and customers can book online anytime, Plus, you don't have to grab your diary every time the phone rings! Just let them book via your website.</p>
        </div>
        <div className="plus">
            <h5>How can I create a website with booking a system?</h5>
            <div onClick={pev} className="sap">{flow?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={flow? "fuo":"gop"}>
        <p>Our booking tool is included in the Unlimited or VIP premium packages. But you can also add it as an add-on to another premium package (e.g. Smart or Grow). To do this, log in to your user account and activate "Bookings" on your dashboard. After that, you can create events as you wish. Add a booking block on your site and connct it to the created event. Now publish your wwebsite and you're done! From now on, your services will be booked online effortlessly.</p>
        </div>
        <div className="plus">
            <h5>How can book an individual appointment via my website?</h5>
            <div onClick={pet} className="sap">{increase?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={increase? "pal":"goss"}>
        <p>Just log into your Blinkz account and click on "Bookings" on the left. If the add-on is not yet activated, click "Buy add-on". Then, in the booking settings, define when you are available for bookings and create one or more categorizable services. Then add a booking overview block to your website. That's it: your customers can now book your services directly on your websites.</p>
        </div>
        <div className="plus">
            <h5>How do I get more bookings through my website?</h5>
            <div onClick={sele} className="sap">{multiply?<Minus size={18}/>:<Plus size={18}/>}</div>
        </div>
        <div className={multiply? "hilo":"sir"}>
        <p>With Blinkz handy online boking system, you can create events or dates without any additional tools add them to your site with just a few click. To attract more customers to your events, you can also create a deddicated page just for bookings and reservations, where you answer all the important potential questions in advance.</p>
        </div>
      </div>
      <div className="gone firm  pro">
          <h3>Create your own website,</h3>
          <h3>quickly and easily</h3>
          <button onClick={fag}><Link>Let's get started</Link></button>
       </div>
       <Footer/>
    </div>
  )  
}
export default Booking