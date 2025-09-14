import React from 'react'

function Cta() {
  return (
    <div className='bg-dark text-light text-center py-4'>
      <h1 className='my-5'>Make Your Order</h1>
      <p className='my-5'>Quality, Comfort and Style are our key focus factors</p>
      
      {/* Button triggers CTA modal */}
      <button
        className='btn btn-warning mt-3 mb-5 fw-bold'
        data-bs-toggle="modal"
        data-bs-target="#ctaContactModal"   // updated ID
      >
        Make Your Order
      </button>

      {/* CTA Modal */}
      <div
        className="modal fade"
        id="ctaContactModal"   // updated ID
        tabIndex="-1"
        aria-labelledby="ctaContactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ctaContactModalLabel">
                Contact Seller
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <hr />
              <p><strong>Seller:</strong> NelaineComfyWear</p>
              <p><strong>Phone:</strong> +2547123456789</p>
              <p><strong>Email:</strong> nelaine@sales.com</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
