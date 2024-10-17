import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectProducts } from '../features/productSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './AddProducts.css';

const AddProducts = () => {
  const [formData, setFormData] = useState({ name: "", quantity: "", price: "", description: "" });
  const products = useSelector(selectProducts); 
  const dispatch = useDispatch(); 

  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? Number(value) : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedCustomerDetails = JSON.parse(localStorage.getItem("CustomerDetails")) || {};
    const storedProducts = storedCustomerDetails.ProductDetails || [];
    
    const updatedProducts = [...storedProducts, formData];

    const updatedCustomerDetails = {
      ...storedCustomerDetails,
      ProductDetails: updatedProducts,
    };
    localStorage.setItem("CustomerDetails", JSON.stringify(updatedCustomerDetails));
    dispatch(setProducts(updatedProducts));
    setFormData({ name: "", quantity: "", price: "", description: "" });
  };

  return (
    <div className="products-container">
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>

      <div className="products">
        <h2>Product Details</h2>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {product.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description: {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="total-price">
        <h3>Total Price: ₹{total}</h3>
        {total > 1000000 && (
          <h3>
            Tax: {total <= 1500000 ? '12%' : total <= 2000000 ? '16%' : '20%'}
          </h3>
        )}
      </div>
  </div>
  );
};

export default AddProducts;
