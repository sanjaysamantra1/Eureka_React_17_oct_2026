import { useState } from 'react';
import productsArr from './product_data.js';
import ReactPaginateModule from 'react-paginate'
const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule
import './pagination.css'

export default function ProductList() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const filteredProducts = productsArr.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productsArr.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productsArr.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return <>
        <h3 className="text-center">Product List</h3>
        <div className="row">
            {filteredProducts.map((product) => {
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
        <div className="row">
            <div className="col-sm-6 offset-3">
                <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
                />
            </div>
        </div>
    </>
}
