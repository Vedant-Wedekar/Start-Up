import React, { useState } from "react";
import D from "../assets/D.jpg";
import OrderConfirmation from "../Components/OrderConfirmation";

const CR = () => {
  const [form, setForm] = useState({
    email: "",
    address: "",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    payment: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "New Clothing Order");
    formData.append("_autoresponse", "Thank you! We’ve received your order.");

    try {
       const response = await fetch("https://formsubmit.co/genzkart.in@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowConfirmation(true);
        setForm({
          email: "",
          address: "",
          firstName: "",
          lastName: "",
          city: "",
          state: "Maharashtra",
          zip: "",
          phone: "",
          payment: "",
        });
      } else {
        alert("Email order failed.");
      }
    } catch (err) {
      alert("Error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-blue-50 to-white p-4 font-sans">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">GenZ Cart</h1>

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 bg-white shadow-lg rounded-lg p-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-blue-700">Contact Information</h2>
          <input type="email" name="email" placeholder="Email address" required onChange={handleChange} value={form.email} className="w-full border p-3 rounded" />

          <h2 className="text-xl font-semibold text-blue-700 mt-4">Delivery Address</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="firstName" placeholder="First name" onChange={handleChange} value={form.firstName} className="p-3 border rounded" />
            <input name="lastName" placeholder="Last name" onChange={handleChange} value={form.lastName} className="p-3 border rounded" />
          </div>
          <input name="address" placeholder="Address" required onChange={handleChange} value={form.address} className="w-full border p-3 rounded" />
          <input name="apartment" placeholder="Apartment, suite, etc. (optional)" className="w-full border p-3 rounded" />
          <div className="grid sm:grid-cols-3 gap-4">
            <input name="city" placeholder="City" onChange={handleChange} value={form.city} className="p-3 border rounded" />
            <select name="state" value={form.state} onChange={handleChange} className="p-3 border rounded">
            <option>Chandigarh</option>
<option>Goa</option>
<option>Dadra and Nagar Haveli and Daman and Diu</option>
<option>Karnataka</option>
<option>Maharashtra</option>
<option>Tamil Nadu</option>
<option>Delhi</option>
<option>Andhra Pradesh</option>
<option>Telangana</option>
<option>Uttar Pradesh</option>
<option>Bihar</option>
<option>Gujarat</option>
<option>West Bengal</option>
<option>Kerala</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Haryana</option>
<option>Madhya Pradesh</option>
<option>Odisha</option>
<option>Jharkhand</option>
<option>Chhattisgarh</option>
<option>Assam</option>
<option>Uttarakhand</option>
<option>Himachal Pradesh</option>
<option>Jammu and Kashmir</option>
<option>Tripura</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Arunachal Pradesh</option>
<option>Nagaland</option>
<option>Mizoram</option>
<option>Sikkim</option>
<option>Andaman and Nicobar Islands</option>
<option>Lakshadweep</option>
<option>Puducherry</option>
 <option>Chandigarh</option>
<option>Goa</option>
<option>Dadra and Nagar Haveli and Daman and Diu</option>
<option>Others</option>

            </select>
            <input name="zip" placeholder="PIN Code" onChange={handleChange} value={form.zip} className="p-3 border rounded" />
          </div>
          <input name="phone" placeholder="Phone Number" required onChange={handleChange} value={form.phone} className="w-full border p-3 rounded" />

          <h2 className="text-xl font-semibold text-blue-700 mt-4">Payment Method</h2>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="Cash on Delivery" onChange={handleChange} checked={form.payment === "Cash on Delivery"} required />
            Cash on Delivery
          </label>
        </div>

        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <div className="flex items-center gap-3 mb-4">
            <img src={D} alt="product" className="w-16 h-20 rounded" />
            <div>
              <p className="font-medium">🌼 Daisy Whispers Jar</p>
              <p className="text-sm text-gray-500">Size: M</p>
            </div>
            <span className="ml-auto font-semibold">₹499</span>
          </div>
          <div className="text-sm space-y-1 mb-4">
            <div className="flex justify-between"><span>Subtotal</span><span>₹499.00</span></div>
            <div className="flex justify-between"><span>Delivery Charges</span><span>₹0.00</span></div>
            <div className="flex justify-between"><span>Tax</span><span>₹0.00</span></div>
            <div className="border-t pt-2 flex justify-between font-bold"><span>Total</span><span>₹499.00</span></div>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">✉️ Place Order via Email</button>
          <div className="text-xs text-gray-900 mt-4">
            After placing your order, if a green confirmation appears, your order was successful!
          </div>
        </div>
      </form>

      <OrderConfirmation show={showConfirmation} onClose={() => setShowConfirmation(false)} />
    </div>
  );
};

export default CR;
