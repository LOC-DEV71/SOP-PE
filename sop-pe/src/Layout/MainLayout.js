import { useContext, useState } from "react";
import {AuthContext} from '../Context/AuthContext';
import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "./footer";
import './MainLayout.scss';
import HeaderMain from "./header";
import { IoMdArrowDropdown } from "react-icons/io";



function MainLayout() {
  const { currentUser, logout } = useContext(AuthContext);
  const [dropActive, setDropActive] = useState(false);
  const naviga = useNavigate();

  const openMenu = () =>{
      setDropActive(dropActive => !dropActive);
  }

  const closeMenu = () =>{
    setDropActive(false);
  }

  const handleLogOut = () => {
    logout();
    
    Swal.fire({
      title: "Logout successful!",
      icon: "success",
      draggable: true
    }).then(() =>
          naviga("/")
    );
  };

  return (
    <div className="layout">
      <div className="layout__topBar">
        <div className="layout__topBar-left">
          <p><span>Hotline</span>: 0123 456 789</p>
        </div>
        <div className="layout__topBar-right">
          {currentUser ? (
            <>
             <div className="layout__topBar-right-link">
              <p>Hello, {currentUser.username}</p>
              <IoMdArrowDropdown onClick={openMenu}/>
             </div>
                  
            <div className={dropActive ? "layout__btn active" : "layout__btn"}>
              <div>
                <Link to={`/`+currentUser.role} onClick={closeMenu}>Information</Link>
              </div>
              <div>
                <button onClick={handleLogOut}>LogOut</button>
              </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>

      

      <HeaderMain/>



      <main className="layout__main">
        <Outlet/>
      </main>

      <footer className="layout__footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default MainLayout;
