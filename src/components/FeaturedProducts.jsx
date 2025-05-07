import React, { useState } from 'react';
import featureProducts from '../data/FeatureProducts';

function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 py-3" style={{ color: '#b56d6d' }}>Featured Products</h2>
      <div className="row">
        {featureProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
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
                  <span className="fw-bold">kshs. {product.price}</span>
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
              <h5 className="modal-title" id="contactModalLabel">
                Contact Seller
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <>
                  <p><strong>Product:</strong> {selectedProduct.name}</p>
                  <p><strong>Price:</strong> kshs. {selectedProduct.price}</p> {/* Corrected currency symbol */}
                  <hr />
                  <p><strong>Seller:</strong> NelaineComfyWear</p>
                  <p><strong>Phone:</strong> +254 726923896 000</p>
                  <p><strong>Email:</strong> nelaine@sales.com</p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;