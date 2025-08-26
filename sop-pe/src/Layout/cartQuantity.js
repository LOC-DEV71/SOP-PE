import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

function CartQuantity(){
    const cart = useSelector(state => state.CartReducer)
    const totalItem = cart.reduce((total, item) => total + item.quantity, 0);
    const {currentUser} = useContext(AuthContext);
    const naviga = useNavigate();

    const handleClick = (e) => {
        if(!currentUser){
            e.preventDefault(); // ngăn không cho chuyển trang
            Swal.fire({
                icon: "info",
                text: "You are not logged in, redirecting to the login page!"
            }).then(() => {
                naviga("/login");
            })
        } else{
            naviga("/cart");
        }
    }
    return(
        <>
            <div>
                <Link to={"/card"} onClick={handleClick}>
                    <TiShoppingCart />
                    <p>{totalItem}</p>
                </Link>
                
            </div>
            
        </>
    )
}; 

export default CartQuantity;