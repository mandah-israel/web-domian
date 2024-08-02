import { Link } from "react-router-dom"
import { useState } from "react"
import { List, X} from "@phosphor-icons/react";
import { FacebookLogo,TwitterLogo, InstagramLogo, PinterestLogo } from "@phosphor-icons/react";
export default function Header(){
    const[visible, setVisible]=useState(false);
    function claim(){
        setVisible(!visible);
    }
    return(
    <div className="vin">
        <div className="head">
            <h1><Link to="/home">Blinkz</Link></h1>
                <ul className={visible?"":"kick"}>
                    <li><Link to="/domain">Domain</Link></li>
                    <li><Link to="/web">Website</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/login">Log in</Link></li>
                    <div className="izzy iron">
                    <h3><Link to="/home">Blinkz</Link></h3>
                    <div className="log">
                    <Link><FacebookLogo size={25}/></Link>
                    <Link><InstagramLogo size={25}/></Link>
                    <Link><TwitterLogo size={25}/></Link>
                    <Link><PinterestLogo size={25}/></Link>
               </div>
            </div>
                </ul>
            <div onClick={claim} className="list">{visible?<X size={25}/>:<List size={25}/>}</div>
        </div>
    </div>  
    )
}