import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./ProductDetails.css"
import {useSelector} from 'react-redux'

function ProductDetails() {
  const storedCustomerDetails = JSON.parse(localStorage.getItem("CustomerDetails")) || {};
  const products = storedCustomerDetails.ProductDetails

  return (
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
  );
}

export default ProductDetails;
