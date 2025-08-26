import CartQuantity from "./cartQuantity";
import { NavLink, Link } from "react-router";
import { useLocation } from "react-router";
function HeaderMain(){
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const isRegister = location.pathname === "/register";
    const isAdmin = location.pathname === "/admin";
    const isMember = location.pathname === "/member";
    return(
        <>
        {isLogin || isRegister || isAdmin || isMember? null : (
             <header className="layout__header">
                <div className="layout__header-logo">
                    <Link to={"/"}>
                        <img src='/logo.png' alt='logo'/>
                    </Link>
                </div>
                <div className="layout__header-navbar">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </div>
                <div className="layout__header-card">
                    <CartQuantity/>
                </div>
            </header>
        )}
        </>
    )
}
export default HeaderMain;