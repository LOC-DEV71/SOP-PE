import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function CartQuantity(){
    const cart = useSelector(state => state.CartReducer)
    const totalItem = cart.reduce((total, item) => total + item.quantity, 0);
    return(
        <>
            <div>
                <Link to={"/card"}>
                    <TiShoppingCart />
                    <p>{totalItem}</p>
                </Link>
                
            </div>
            
        </>
    )
}; 

export default CartQuantity;