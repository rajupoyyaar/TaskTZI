import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerDetails.css";

const CustomerDetails = () => {
  const [formData, setFormData] = useState({ name: "", email: "", address: "", contact: "" });
  const [submission, setSubmission] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = Date.now();
    const customerDetails = { id: uniqueId, ...formData };
    localStorage.setItem("CustomerDetails", JSON.stringify(customerDetails));
    setSubmission(customerDetails);
    setFormData({ name: "", email: "", address: "", contact: "" });
    navigate("/add-products");
  };

  return (
    <div className="customer-container">
      <h2>Customer Details</h2>
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
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Contact Number:
          <input
            type="number"
            name="contact"
            value={formData.contact}
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

export default CustomerDetails;
