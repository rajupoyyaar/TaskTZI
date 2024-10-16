import React, { useState } from "react";

const AddProducts = () => {
  const [formData, setFormData] = useState({ name: "", quantity: "", price: "", description:"" });
  const [submissions, setSubmissions] = useState([]);
//   console.log(submissions);

    const localId = JSON.parse(localStorage.getItem("CustomerDetails")) || {}
    const id = localId.id

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? Number(value) : value;
    setFormData((prevData) => ({ ...prevData, customerId:id, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedProducts = JSON.parse(localStorage.getItem("ProductDetails")) || [];
    const updatedProducts = [...storedProducts, formData];
    localStorage.setItem("ProductDetails", JSON.stringify(updatedProducts));
    setSubmissions(updatedProducts);
    setFormData({ name: "", quantity: "", price: "", description:"" });
  };

  return (
    <div>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;
