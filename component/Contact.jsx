import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Comment: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!");
        // Here you can add a function to send the form data to a backend or API
    };

    return (
        <section id="contact" className="container mx-auto px-8 py-16">
            {/* Section Title */}
            <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-4 mb-8">
                Contact
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">
                Let's get in touch and talk about your next project.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-none mb-6 ">
                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                    value={formData.Name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-4"
                />
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-4"
                />
                <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required
                    value={formData.Subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-4"
                />
                <textarea
                    name="Comment"
                    placeholder="Comment"
                    required
                    value={formData.Comment}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-4"
                />
                <button
                    type="submit"
                    className="w-auto bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition flex items-center justify-center"
                >
                    <i className="fa fa-paper-plane mr-2 "></i> SEND MESSAGE
                </button>
            </form>
        </section>
    );
}
