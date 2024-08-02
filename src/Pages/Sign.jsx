import { AppleLogo, FacebookLogo, GoogleLogo, Envelope, Lock, EyeSlash,Eye } from "@phosphor-icons/react";
import { Link } from "react-router-dom"
import Header from "../Component/Header"
const Sign=()=>{
    return(
        <div>
          <Header/>
          <div className="izzy hot">
           <h3><Link to="/home">Blinkz</Link></h3>
       </div>
       <div className="input slax">
        <h4>Welcome back</h4>
        <p>You can log in to your Blinkz account here.</p>
        <form action="" className="form">
            <div className="fas">
            <Link><GoogleLogo size={17}/></Link>
                <h5>Continue with Google</h5>
            </div>
            <div className="fas">
            <Link><FacebookLogo size={17}/></Link>
                <h5>Continue with Facebook</h5>
            </div>
            <div className="fas">
            <Link><AppleLogo size={17}/></Link>
                <h5>Continue with Apple</h5>
            </div>
               <div className="fill">
                <input type="text" placeholder="Continue with email" />
                <Link><Envelope size={17}/></Link>
               </div>
               <p className="pixi">Already registered?</p>
           </form>
          <button><Link to="/login">Login</Link></button>
 </div>
 <div className="foil">
    <div className="fon">
        <Link>Legal Notice</Link>
    </div>
    <div className="fon">
        <Link>Privacy Policy</Link>
    </div>
 </div>
        </div>
    )
}
export default Sign