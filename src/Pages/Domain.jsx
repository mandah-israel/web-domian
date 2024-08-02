import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { CheckCircle, ArrowRight,Plus, Minus} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import buz from "../../src/Images/buz.webp"
import set from "../../src/Images/set.webp"
import dim from "../../src/Images/dim.webp"
import {useState} from "react"
const Domain=()=>{
    const [push, setPush]=useState(false)
    function flag(){
        alert("COMING SOON!");
        setPush(true);
    }
    return(
        <div>
        <Header/>
        <div className="home fik ma-g">
            <div className="vik">
            <h3>Rwgister a Custom Domain for Your Website</h3>
            <div className="vice">
                <CheckCircle size={15}/>
                <span>HTTPs security</span>
           </div>
           <div className="vice">
                <CheckCircle size={15}/>
                <span>Hosting included</span>
           </div> 
           <div className="vice">
                <CheckCircle size={15}/>
                <span>Free domain for the first contract term*</span>
           </div> 
           <button onClick={flag}>Start Now</button>
           <p>Start for free and upgrade anytime to one of our premium plans</p>
            </div>
            <div className="young slap">
                <img src={buz}/>
            </div>
        </div>
        <div className="con">
            <div className="jik-g tera">
               <div className="hin">
                <img src={set} alt="" />
               </div>
               <div className="vipe">
               <h4>What is a domain?</h4> 
                <p>A domain is your website's specific address, also called a ULR. In most cases, a domain name imcludes a company name and ending (like .com or .net). A personalized webaddress strengthens your brand and helps visitors remember you.</p> 
                </div>
            </div>
            <div className="jik-g tera">
               <div className="hin">
                <img src={dim} alt="" />
               </div>
               <div className="vipe">
               <h4>Why do you need a domain?</h4> 
                <p>A domain makes your website look professional and builds trust. It represent s you and your website. A unique domqin name also makes your website easier to find via search engine like Google.</p>
                <div className="vag">
                    <button onClick={flag}>Start Now</button>
                    <a href=""><ArrowRight size={15}/></a>
                </div>
              </div>
            </div>
        </div>
        <div className=" rant">
            <div className="pro-act">
                <h4>.com</h4>
                <p> The most common .com ending is still a strong choice.</p>
            </div>
            <div className="pro-act">
                <h4>.org</h4>
                <p> Used for nonprofit and charitable organizations worldwide.</p>
            </div>
            <div className="pro-act">
                <h4>.info</h4>
                <p> Great for sites that have informative or educational content.</p>
            </div>
            <div className="pro-act">
                <h4>.store</h4>
                <p> A great option for ecommerce sites.</p>
            </div>
        </div>
        <div className="yubu">
            <div className="veni">
            <h3>3 tips to choose the right domain name</h3>
            <p>1. Keep it simple. If your domain name is too long it will be hard for visitors to remember, read, and type . Make it easy to spell and steer clear of numbers and hyphens.</p>
            <p>2. If your ideal domain is taken or you have a common name, try adding more words to describe yourself (like johnsmithhebeker), or choose a different domain ending.</p>
            <p>3. Use words that match your business or location. For example, if you're are a wedding photographer from Austin, austinweddingphotos.com is good start.</p>
            </div>
        </div>
        <div className="hope margi">
        <h3>How to buy your domain with Blinkz</h3>
            <div className="orange dox">
                <span className="spix">1.</span>
                <p>Create your Blinkz website. Blinkz asks you a few questions and quickly puts all the piece together.</p>
            </div>
            <div className="orange dox">
                <span className="spix">2.</span>
                <p>Choose a design. We'all use photos and text you already have, or provide a personalized content you already have.</p>
            </div>
            <div className="orange dox">
                <span className="spix">3.</span>
                <p>Claim your domain name. Blinkz will automatically suggest domain names that match your website.</p>
            </div>
            <div className="tron">
            <button onClick={flag}>Start Now</button>
            </div>
        </div>
        <div className="con">
            <div className="jik-g tera">
               <div className="hin">
                <img src={set} alt="" />
               </div>
               <div className="vipe">
               <h4>Already have a domain?</h4> 
                <p>You can transfer most existing domain to Blinkz and connect them to your Blinkz website. That way, you'll have your website and domain all in one place.</p> 
              </div>
            </div>
        </div> 
        <div className="book oron">
                <h4>How to transfer a domain</h4>
                <Link onClick={flag}><ArrowRight size={15}/></Link>
              </div>
        <Footer/>
    </div>
    )
 }
 export default Domain