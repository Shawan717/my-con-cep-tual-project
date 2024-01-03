import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product=useLoaderData();
    const {brand,id,images,price}=product
    return (
        <div>
            <h1>{id}</h1>
            <h2>{brand}</h2>
            <img src={images[0]} alt="" />
            <p>{price}</p>
            
        </div>
    );
};

export default ProductDetails;