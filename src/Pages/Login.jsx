import { AppleLogo, FacebookLogo, GoogleLogo, Envelope, Lock, EyeSlash,Eye } from "@phosphor-icons/react";
import { Link } from "react-router-dom"
import Header from "../Component/Header"
import { useState } from "react";
const Login=()=>{
 const[display, setDisplay]=useState(false);
 function add(){
    setDisplay(!display);
 }
    return(
       <div>
        <Header/>
        <div className="izzy hot">
           <h3><Link to="/home">Blinkz</Link></h3>
       </div>
       <div className="input">
        <h4>Welcome back</h4>
        <p>You can log in to your Blinkz account here.</p>
        <form action="" className="form">
            <div className="fas">
            <Link><GoogleLogo size={17}/></Link>
                <h5>Login with Google</h5>
            </div>
            <div className="fas">
            <Link><FacebookLogo size={17}/></Link>
                <h5>Login with Facebook</h5>
            </div>
            <div className="fas">
            <Link><AppleLogo size={17}/></Link>
                <h5>Login with Apple</h5>
            </div>
            <div className="pork">
                <hr />or<hr />
            </div>
               <div className="fill">
                <input type="text" placeholder="Email Address" />
                <Link><Envelope size={17}/></Link>
               </div>
               <div className="fill">
                <input type={display? "text":"password"} placeholder="Password" maxLength={15}/>
                <Link><Lock size={17}/></Link>
                <div onClick={add} className="dix">{display?<Eye size={17}/>:<EyeSlash size={17}/>}</div>
               </div>
               <p>Forgot your password?</p>
           </form>
          <button><Link>Login</Link></button>
        <h6>New here?</h6>
    <button className="jiz"><Link to="/sign">Sign up</Link></button>
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
export default Login