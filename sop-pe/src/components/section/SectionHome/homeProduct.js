import { useEffect, useState } from "react";
import { getProduct } from "../../../service/index";
import './homProduct.scss';
import ProductList from "./homeProductList";

function HomeProduct(){
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchApi = async () =>{
            const result = await getProduct();
            setProduct(result);
        }
        fetchApi();
    },[])
    // console.log(product);
    
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