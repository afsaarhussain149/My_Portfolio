import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState(""); 

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_9sq8axs",  
      "template_94ftz4n", 
      formData,
      "5HDX_SeuLrWyMH6jG"   
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); 
    })
    .catch((err) => {
      console.error("FAILED...", err);
      setStatus("Failed to send message. Try again.");
    });
  };

  return (
    <div className="card p-5 shadow border-0" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="pb-2 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control border border-gray-300 rounded-lg p-2 w-full"
              autoFocus
              required
            />
          </div>

          <div>
            <label className="pb-2 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="pb-2 font-semibold">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control border border-gray-300 rounded-lg p-2 w-full"
            required
          />
        </div>

        <div className="mt-4">
          <label className="pb-2 font-semibold">Message</label>
          <textarea
            rows={5}
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            className="form-control border border-gray-300 rounded-lg p-2 w-full"
            required
          ></textarea>
        </div>

        <button type="submit" className="w-full text-white font-semibold tracking-widest bg-[#34b7a7] mt-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
          Send Message
        </button>

        {status && <p className="text-center mt-4 font-semibold">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
