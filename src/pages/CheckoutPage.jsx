import React, { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem('checkoutData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      sessionStorage.setItem('checkoutData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted successfully!');
  };

  return (
    <>
      <div className="container-fluid pageBanner position-relative mt-0">
        <img src="/banner9.png" alt="banner organic shop" className="w-100" />
        <h2 className="bannerTitle">Checkout Page</h2>
      </div>
      <div className="container mt-4 w-50 mx-auto mb-5">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="detailsBtn">Submit Order</button>
        </form>
      </div>
    </>
  );
}
