import productArr from './product_data.js'

export default function ProductList() {
    return <>
        <h3 className="text-center">Product List</h3>
        <div className="row">
            {productArr.map((product) => {
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
    </>
}
