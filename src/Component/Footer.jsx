import { useState } from "react"
import { CaretUp, CaretDown, FacebookLogo,TwitterLogo, InstagramLogo, PinterestLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
export default function Footer(){
    const[close, setClose]=useState(true);
    const[hiden, setHiden]=useState(true);
    const[see, setSee]=useState(false);
    function open(){
        setClose(!close);
    }
    function mint(){
        setHiden(!hiden);
    }
    function mat(){
        setSee(!see);
    }
    return(
    <div className="vin">
             <div className="mit">
        <div className="jam">
            <h5>Products</h5>
            <div onClick={open} className="sap">{close?<CaretUp size={18}/>:<CaretDown size={18}/>}</div>
        </div>
        <div className={close? "gin":"flow"}>
        <Link>website</Link>
        <Link>Online Store</Link>
        <Link>Domain</Link>
        <Link>Logo</Link>
        </div>
        <div className="jam">
            <h5>About us</h5>
            <div onClick={mint} className="sap">{hiden?<CaretUp size={18}/>:<CaretDown size={18}/>}</div>
        </div>
        <div className={hiden? "covan":"kip"}>
        <Link>About Blinkz</Link>
        <Link>Careers</Link>
        <Link>Affiliates</Link>
        </div>
        <div className="jam">
            <h5>Services</h5>
            <div onClick={mat} className="sap">{see?<CaretDown size={18}/>:<CaretUp size={18}/>}</div>
        </div>
        <div className={see? "frown":"gown"}>
        <Link>Blinkz Blog</Link>
        <Link>Inspiration</Link>
        <Link>Help Center</Link>
        <Link>Contact Support</Link>
        </div>
     </div>
     <div className="izzy">
        <h3><Link>Blinkz</Link></h3>
        <div className="log">
          <Link><FacebookLogo size={25}/></Link>
          <Link><InstagramLogo size={25}/></Link>
          <Link><TwitterLogo size={25}/></Link>
          <Link><PinterestLogo size={25}/></Link>
        </div>
     </div>
     <div className="goat">
        <p><Link>Legal notice</Link></p>
        <p><Link>Terms of Service</Link></p>
        <p><Link>Privacy Police</Link></p>
        <p><Link>Cookies Settings</Link></p>
    </div>        
    </div>  
    )
}