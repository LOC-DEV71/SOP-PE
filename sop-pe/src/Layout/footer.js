import {Link, useLocation} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function Footer(){
const location = useLocation();
  const isHome = location.pathname === "/";
  const isCart = location.pathname === "/card";
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";
  const isAdmin = location.pathname === "/admin";
  const isMember = location.pathname === "/member";
//   console.log(location)
    return (
        <>
            {isCart ||  isLogin || isRegister || isAdmin || isMember ? null : 
            (
                <div className="layout__footer">
                <div className="layout__footer__before">
                    <div className="layout__footer__before--name">
                        <h2>Sộp Pe</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptatum, quaerat ut, vero consequatur sapiente cumque, voluptas explicabo labore expedita nisi tempora.</p>
                        {isHome ? (
                            <Link to={"/contact"}>
                                <p>Contact for me</p>
                                <p><FaArrowRight /></p>
                            </Link>
                            ) : (
                            <Link to={"/"} >
                                <p>Go home</p>
                                <p><FaArrowLeft className='svg__home'/></p>
                            </Link>
                            )}
                    </div>
                    <div className="layout__footer__before--contact">
                        <div className='layout__footer__before--contact_'>
                            <div>About us</div> <br/>
                            <div>Lorem </div><br/>
                            <div>lorem</div><br/>
                            <div>lorem</div><br/>
                        </div>
                        <div className='layout__footer__before--contact_'>
                            <div>About us</div> <br/>
                            <div>Lorem </div><br/>
                            <div>lorem</div><br/>
                            <div>lorem</div><br/>
                        </div>
                        <div className='layout__footer__before--contact_'>
                            <div>About us</div> <br/>
                            <div>Lorem </div><br/>
                            <div>lorem</div><br/>
                            <div>lorem</div><br/>
                        </div>
                    </div>
                </div>
                <div className="layout__footer__after">
                    <p>© 2025 Sộp Pe. All rights reserved.</p>
                </div>
            </div>
            )}
        </>
    )
}

export default Footer;