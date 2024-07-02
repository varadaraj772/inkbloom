import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4001/sendemail",
        data
      );
      if (response.status === 200) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-300 to-green-500 p-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            We would love to hear from you! Please fill out the form below to
            get in touch with us.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                type="text"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required</p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                })}
                id="email"
                type="email"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Valid email is required
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                rows="4"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">Message is required</p>
              )}
            </div>
            <div className="text-center">
              <button type="submit" className="px-4 py-2 btn btn-success">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
