import React from 'react';
import './AddProduct.css'; // Create a new CSS file for AddProduct

const AddProduct = () => {
  return (
    <div className='main'>
    <label>Add Product</label>
    <div className="add-product">
        <div className="image-upload">
        {/* Division for adding product images */}
            <form>
            <input type="file" accept="image/*" multiple />
            </form>
        </div>
      <div className="product-details">
        {/* Division for product details form */}
        <form>
          <div className="form-group">
            <label htmlFor="product-name">Product Name:</label>
            <input type="text" id="product-name" name="product-name" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4"></textarea>
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddProduct;
