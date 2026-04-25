import { useState } from "react";
import axios from "axios";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/send-quote", formData);

      if (res.data.success) {
        alert("Quote request sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send quote. Please try again.");
      }
    } catch (error) {
      console.error("Error sending quote:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 border border-gray-200 rounded mt-10"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="border p-2 rounded"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows="4"
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="py-3.5 bg-blue-600 text-white hover:bg-blue-700 transition rounded"
      >
        Get Quote
      </button>
    </form>
  );
};

export default QuoteForm;
