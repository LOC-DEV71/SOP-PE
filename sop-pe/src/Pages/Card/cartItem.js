import {  useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { deteteAllItem, deteteItem, updateQuantity } from "../../Action";
import Swal from 'sweetalert2';

function CartItem(){
        const cart = useSelector(state => state.CartReducer);
        // console.log(cart)
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = cart.reduce((total, item) => total + (item.infor.price-item.infor.price*item.infor.discountPercentage/100)*item.quantity, 0).toFixed(2);

        const dispatch = useDispatch();
        const resetQuantity = (id, quantity) => {
            dispatch(updateQuantity(id, quantity));
        }


        const handleDeleteItem = (id) =>{
            dispatch(deteteItem(id));
        }

        const handleDeleteAllItem = () =>{
            if(cart.length === 0){
                Swal.fire({
                icon: "error",
                text: "Your cart is empty!",
                });
            }
            else{
            Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to clear all items?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, clear all!"
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Cleared!",
                text: "All items have been removed from your cart.",
                icon: "success"
                });
                dispatch(deteteAllItem());
            }
            });
            }
        }


    return (
        <>
            
<div className="delete__all">
    <button onClick={handleDeleteAllItem}>Clear All</button>
</div>
<div className="cart">
    {cart.map(item => (
        <div className="cart__item" key={item.id}>
            <div className="cart__item-img">
                <img src={item.infor.thumbnail} alt={item.infor.title}/>
                <div className="cart__item-img--sale">{item.infor.discountPercentage}%</div>
                <div className="cart__item-img-title">{item.infor.title}</div>
            </div>

            <div className="cart__item--all">

                <div className="cart__item--all-price">
                    <div className="cart__item--all-price-priceOld">{item.infor.price}$</div>
                    <div className="cart__item--all-price-priceNew">
                        {((item.infor.price - (item.infor.price*item.infor.discountPercentage/100))).toFixed(2)}$
                    </div>
                </div>


                <div>
                    <button onClick={() => resetQuantity(item.id, -1)}>-</button>
                    <input value={item.quantity} readOnly/>
                    <button onClick={() => resetQuantity(item.id, 1)}>+</button>
                </div>


                <div className="cart__item-priceNew">
                    {((item.infor.price - (item.infor.price*item.infor.discountPercentage/100))*item.quantity).toFixed(2)}$
                </div>

            </div>

            <button className="cart__item-delete" onClick={() => handleDeleteItem(item.id)}>Clear</button>
        </div>
    ))}

    <div className="cart__total">
        <div className="cart__total-price">
            <p className="cart__total-price_1"> Total  ({totalQuantity} Buy Products)</p>
            <p  className="cart__total-price_2">{totalPrice }$</p>
        </div>
        <Link to={"/"} className="cart__total-buy">Buy Products</Link>
    </div>

</div>
        </>
    )
}
export default CartItem;