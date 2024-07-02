import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            Welcome to our Inkbloom! We are passionate about books and committed
            to bringing you a wide selection of titles from various genres. Our
            mission is to provide a welcoming and inspiring space for book
            lovers of all ages and interests.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            At our bookstore, we believe in the power of reading to transform
            lives. Whether you are looking for the latest bestseller, a timeless
            classic, or a hidden gem, we have something for everyone. Our
            knowledgeable and friendly staff are always here to help you find
            the perfect book.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            We also host regular events, including author readings, book
            signings, and book clubs, to foster a sense of community and
            encourage a love of reading. We are more than just a bookstore; we
            are a gathering place for book enthusiasts and a hub for literary
            culture.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Thank you for visiting our website. We hope you enjoy browsing our
            collection and find your next great read. Happy reading!
          </p>
          <div className="text-center mt-6"></div>
        </div>
      </div>
    </>
  );
};

export default About;
