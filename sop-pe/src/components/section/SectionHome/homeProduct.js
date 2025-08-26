import { useEffect, useState } from "react";
import {  getProduct } from "../../../service/index";
import './homProduct.scss';
import ProductList from "./homeProductList";

function HomeProduct(){
    const [product, setProduct] = useState([]);
    // const [cart, setCart] = useState([]);
    useEffect(() => {
        const fetchApi = async () =>{
            const result = await getProduct();
            setProduct(result);
        }
        fetchApi();
    },[])
    // console.log(product);

    //  useEffect(() => {
    //     const fetchApi = async () =>{
    //         const result = await getCartUser();
    //         setCart(result);
    //     }
    //     fetchApi();
    // },[])
    // console.log(cart);
    // const id = 2;
    // const userCart = cart.find(cart => cart.id === id);
    // console.log(userCart)
    // const productsInCart = userCart?.products || []; // ? để tránh lỗi khi userCart undefined
    // console.log(productsInCart);
    // productsInCart.map(item => console.log(item.id))

    return (
      <>
        <h1 className="product__h1">Product List</h1>
        <div className="product">
            {product.map(item => (
                <ProductList item={item} key={item.id}/>
            ))}
        </div>
      </>  
    );
}

export default HomeProduct;