import React, { useState } from 'react';
import D from '../Assets/D.jpg'; // Assuming D.png is the product image
import S from '../Assets/S.png'; // Assuming S.png is the success image
const CR = () => {
  const [form, setForm] = useState({
    email: '',
    address: '',
    firstName: '',
    lastName: '',
    city: '',
    state: 'Maharashtra',
    zip: '',
    phone: '',
    payment: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const message = `🛍 *New Order*%0A
👤 Name: ${form.firstName} ${form.lastName}%0A
📞 Phone: ${form.phone}%0A
📧 Email: ${form.email}%0A
🏠 Address: ${form.address}, ${form.city}, ${form.state} - ${form.zip}%0A
💳 Payment Method: ${form.payment || 'Not selected'}%0A
👕 Product: Astroworld OG T-Shirt%0A
💰 Total: ₹838.95`;

    const whatsappUrl = `https://wa.me/919325255759?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-blue-50 to-white p-4 font-sans">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">GenZ Cart</h1>
      <form
        action="https://formsubmit.co/vedantwedekar@gmail.com"
        method="POST"
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 bg-white shadow-lg rounded-lg p-6"
      >
        {/* Hidden Fields for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Clothing Order" />
        <input type="hidden" name="_autoresponse" value="Thank you! We’ve received your order." />
        <input type="hidden" name="_next" value="https://formsubmit.co/thanks.html" />

        {/* Left - Form Fields */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-blue-700">Contact Information</h2>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <h2 className="text-xl font-semibold text-blue-700 mt-4">Delivery Address</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              className="p-3 border rounded"
            />
            <input
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
              className="p-3 border rounded"
            />
          </div>
          <input
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <input
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <div className="grid sm:grid-cols-3 gap-4">
            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="p-3 border rounded"
            />
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="p-3 border rounded"
            >
<option>Maharashtra</option>
<option>Karnataka</option>
<option>Delhi</option>
<option>Tamil Nadu</option>
<option>Gujarat</option>
<option>Telangana</option>
<option>Uttar Pradesh</option>
<option>Haryana</option>
<option>West Bengal</option>
<option>Rajasthan</option>
<option>Madhya Pradesh</option>
<option>Punjab</option>
<option>Andhra Pradesh</option>
<option>Kerala</option>
<option>Bihar</option>
<option>Odisha</option>
<option>Chhattisgarh</option>
<option>Jharkhand</option>
<option>Uttarakhand</option>
<option>Assam</option>
<option>Goa</option>
<option>Himachal Pradesh</option>
<option>Tripura</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Nagaland</option>
<option>Mizoram</option>
<option>Arunachal Pradesh</option>
<option>Sikkim</option>

            </select>
            <input
              name="zip"
              placeholder="PIN Code"
              onChange={handleChange}
              className="p-3 border rounded"
            />
          </div>
          <input
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <h2 className="text-xl font-semibold text-blue-700 mt-4">Payment Method</h2>
          <div className="space-y-2">
           
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="Cash on Delivery" onChange={handleChange} required />
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* Right - Summary */}
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={D}
              alt="product"
              className="w-16 h-20 rounded"
            />
            <div>
              <p className="font-medium">🌼 Daisy Whispers Jar</p>
              <p className="text-sm text-gray-500">Size: M</p>
            </div>
            <span className="ml-auto font-semibold">₹799</span>
          </div>
          <div className="text-sm space-y-1 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹799.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span>₹00.00</span>
            </div>
                <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>₹00.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>₹799.00</span>
            </div>
          </div>

          <div className="space-y-2 mt-6">
           
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
            >
              ✉️ Place Order via Email
            </button>
          </div>
          <div className="text-xs text-gray-900 mt-4">After placing your order by clicking the ✉️ Place Order via Email button, if a confirmation screen appears, it means your order has been successfully placed.</div>
       <div className="">  <img src={S} ></img></div> 
        </div>
      </form>
    </div>
  );
};

export default CR;
