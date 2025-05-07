import React, { useState } from "react";
import Products from "../data/Products";
import Footer from "../components/Footer";

function ShopNow() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = Products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container py-5 my-5">
        <h2 className="text-center mb-4" style={{ color: '#b56d6d' }}>Shop Now</h2>

        {/* Search Box */}
        <div className="mb-4 d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50 text-center"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="row justify-content-center">
          {filteredProducts.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-10 mb-5 d-flex justify-content-center"
              key={product.id}
            >
              <div className="card h-100 shadow-sm" style={{ maxWidth: '18rem', width: '100%' }}>
                <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}> {/* Fixed aspect ratio container */}
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="mt-auto">
                    <span className="fw-bold">Kshs. {product.price}</span>
                    <button
                      className="btn btn-sm btn-outline-dark float-end"
                      data-bs-toggle="modal"
                      data-bs-target="#contactModal"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="contactModal"
          tabIndex="-1"
          aria-labelledby="contactModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="contactModalLabel">Contact Seller</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {selectedProduct && (
                  <>
                    <p><strong>Product:</strong> {selectedProduct.name}</p>
                    <p><strong>Price:</strong> Kshs. {selectedProduct.price}</p>
                    <hr />
                    <p><strong>Seller:</strong> NelaineComfyWear</p>
                    <p><strong>Phone:</strong> +254 726923896</p>
                    <p><strong>Email:</strong> nelaine@sales.com</p>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default ShopNow;