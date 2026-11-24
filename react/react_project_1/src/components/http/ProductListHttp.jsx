import axios from 'axios';
import { useState } from 'react'

export default function ProductListHttp() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        let response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data);
        setLoading(false);
    }

    return <>
        <h3 className="text-center">Product List Http</h3>
        <button className="btn btn-primary" onClick={fetchProducts}>Fetch Products</button>
        {
            loading ? <h1>Loading....</h1> :
                <div className="row">
                    {products.map((product) => {
                        return <div className="col-sm-3 gap-2" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt="..." style={{ height: "200px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.category}</h5>
                                    <p className="card-text text-truncate">{product.title}</p>
                                    <p className="card-text text-truncate">{product.description}</p>
                                    <p className="card-text">Rs. {product.price}</p>
                                    <p className="card-text">{product.rating.rate}*</p>
                                    <a href="#" className="btn btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
        }
    </>
}
