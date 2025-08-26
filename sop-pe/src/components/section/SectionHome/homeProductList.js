import { FaCartPlus } from "react-icons/fa";
import Modal from 'react-modal';
import React, { useRef, useState } from "react";
import { addToCart, updateQuantity } from "../../../Action";
import { useDispatch, useSelector } from "react-redux";
function ProductList(props){
    const {item} = props;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.CartReducer);
    const [quantity, setQuantity] = useState(1);
    const inputRef = useRef();
    const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    

    const handleAddToCart = () => {
    const exist = cart.find(itemCart => itemCart.id === item.id);

        if (exist) {
            // cộng dồn thêm quantity người chọn trong modal
            dispatch(updateQuantity(item.id, quantity));
            console.log(quantity);  
        } else {
            // thêm mới sản phẩm với số lượng đã chọn
            dispatch(addToCart({ ...item, quantity }));
            console.log(item, quantity)
        }
    closeModal();
};


    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


    Modal.setAppElement('#root')

    return(
        <>
            
            <div className="product__item">
                    <div className="product__item--img">
                        <img src={item.thumbnail} alt={item.title}/>
                    </div>
                    <div className="product__item--title">
                        <p>{item.title}</p>
                    </div>
                    <div className="product__item--price">
                        <p>{(item.price - (item.price*item.discountPercentage/100)).toFixed(2)}$</p>
                    </div>
                    <div className="product__item--sale">
                        <p>{item.discountPercentage}%</p>
                    </div>
                    <button className="product__item--addCart" onClick={openModal}><FaCartPlus/></button>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal" >
                    <h2>Order Confirmation</h2>
                    <p>Are you sure you want to buy this product?</p>
                    <div className="modal">
                        <div className="modal__img">
                            <img src={item.thumbnail} alt={item.title} className="modal__img--img"/>
                            <p className="modal__img--sale">{item.discountPercentage}%</p>
                        </div>
                        <div className="modal__main">
                            <h5 className="modal__main--title">Title: {item.title}</h5>
                            <p className="modal__main--price">Price: {((item.price - (item.price*item.discountPercentage/100))*quantity).toFixed(2)}$</p>
                            <div>
                                <button onClick={handleDecrease}>-</button>
                                <input ref={inputRef} value={quantity} readOnly/>
                                <button onClick={handleIncrease}>+</button>
                                
                                <br/>
                            </div>
                            
                        </div>  
                    </div>
                    <button onClick={closeModal} className="close">X</button>
                    <button className="addToCart" onClick={handleAddToCart}>Add To Cart</button>
                </Modal>
        </>
    )
};

export default ProductList; 