import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {brand,id,images,price}=product
    return (
        <div className="w-[300px] text-center  h-[300px] border-solid border-2 border-indigo-600 ">
            <h2>{brand}</h2>
            <h4>ID : {id}</h4>
            <img className="w-full h-[200px]" src={images[0]} alt="" />
            <p>Price: ${price}</p>
            <Link to={`/product/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Product;