import {useSelector} from 'react-redux';
import CartItem from './cartItem';
import { IoIosSearch } from "react-icons/io";
import './index.scss';

function Card(){
    const item = useSelector(state => state.CartReducer);
    
    console.log(item);
    return(
        <>
            <div className='cartHeader'>
                <div className='cartHeader__namepage'>shopping cart</div>
                <div className='cartHeader__search'>
                    <form>
                        <input placeholder='Super cheap – from only 1 USD'/>
                        <button type='submit'>
                            <IoIosSearch/>
                        </button>
                    </form>
                </div>
            </div>

            <div className='function'>
                <div className='function__1'>Product</div>
                <div className='function__2'>
                    <div className='function__2-1'>Unit Price</div>
                    <div className='function__2-2'>Quantity</div>
                    <div className='function__2-3'>Price</div>
                    <div className='function__2-4'>operation</div>
                </div>
            </div>
            <CartItem/>
        </>
    )
}

export default Card;