import React, { useState } from 'react';

const Buy = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    quantity: 1,
    note: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = () => {
    const { name, address, phone, quantity, note } = formData;
    const message = `🛒 New Ganpati Idol Order%0A%0A👤 Name: ${name}%0A🏡 Address: ${address}%0A📞 Phone: ${phone}%0A📦 Quantity: ${quantity}%0A📝 Note: ${note || 'N/A'}%0A💰 Price: ₹${quantity * 499}`;
    const whatsappNumber = "919325255759";
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      <img
        src="https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/485017529_1264665015223035_8323821877888389402_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xwaFivmpQkQQ7kNvwFT3wSc&_nc_oc=AdlQ8ikZCFiw_NSCh5Ujr3Hx7UMBrPENNpHjAnzrK1ZNtdT0FD_G1jqNk7yIl_Msrh5dz0Bk61H2Tn6zFhgXkkWw&_nc_zt=23&_nc_ht=scontent.fnag10-1.fna&_nc_gid=bRYiR7VHZmE1EYxYIvsKFg&oh=00_AfOoHqNoLhHiCLeHyqBqUIDMNmzJ30otPfQvNyzJiyLZHg&oe=685193A0"
        alt="Ganpati Idol"
        style={styles.image}
      />

      <h2 style={styles.title}>Divine Ganpati Idol</h2>
      <p style={styles.price}>₹499 Only</p>

      <form
        action="https://formsubmit.co/vedantwedekar@gmail.com"
        method="POST"
        style={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="address"
          placeholder="Complete Address"
          value={formData.address}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          required
          style={styles.input}
        />
        <textarea
          name="note"
          placeholder="Note (Optional)"
          value={formData.note}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email (for confirmation)"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Ganpati Order" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you! We’ve received your Ganpati order."
        />
        <input type="hidden" name="_next" value="https://formsubmit.co/thanks.html" />

        <div style={styles.buttonGroup}>
          <button type="button" onClick={sendToWhatsApp} style={styles.button}>
            Send to WhatsApp
          </button>
          <button type="submit" style={styles.button}>
            Send to Email
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  title: {
    textAlign: "center",
    margin: "10px 0",
  },
  price: {
    textAlign: "center",
    fontSize: "20px",
    color: "green",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "8px 0",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Buy;
