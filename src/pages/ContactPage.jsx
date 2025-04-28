import React, { useState } from "react";
import Button from "../components/Button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const teamContacts = [
    {
      name: "Amanda Peterson",
      position: "CEO",
      email: "ceo@business.com",
      phone: "01 (650) 658 6823",
    },
    {
      name: "Jason Smith",
      position: "CTO",
      email: "cto@business.com",
      phone: "01 (650) 658 6824",
    },
    {
      name: "Michael Fassbender",
      position: "Design Director",
      email: "design@business.com",
      phone: "01 (650) 658 6825",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/api/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Submission failed");
        }
      } catch (error) {
        setErrors({ submit: "Failed to send message. Please try again." });
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="relative py-32 md:py-40 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in touch
              </h2>
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Hi there, I'm reaching out because I think we can collaborate..."
                      className={`w-full px-4 py-3 border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    text="SUBMIT"
                    variant="dark"
                    className="w-full md:w-auto px-8 py-3 text-lg"
                  />
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  OUR OFFICES
                </h3>
                <p className="text-gray-600 mb-8">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      OUR OFFICE
                    </h4>
                    <p className="text-gray-600">
                      908 Broadway, San Francisco, CA 94133
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      WORKING HOURS
                    </h4>
                    <p className="text-gray-600">9AM - 3PM, Mon to Fri</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      CONTACT
                    </h4>
                    <p className="text-gray-600">contact@business.com</p>
                    <p className="text-gray-600">01 (650) 658 6822</p>
                  </div>
                </div>

                {/* Google Maps Placeholder */}
                <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    Google Maps API Key Required
                    <br />
                    Add an API key in Project Settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts Section */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              WHAT WE ARE BEST AT
            </h2>
            <p className="text-xl text-gray-600">Our Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamContacts.map((person, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-gray-500 mb-4">{person.position}</p>
                <p className="text-gray-600">{person.email}</p>
                <p className="text-gray-600">{person.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
