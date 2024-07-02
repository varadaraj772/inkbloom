import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          We are delighted to have you
          <span className="text-green-500"> Here!</span>
        </h1>
        <p className="mt-6 text-md md:text-lg text-gray-700">
          Welcome to Inkbloom. Explore our extensive collection of books across
          various genres and categories. Whether you're looking for the latest
          bestsellers or classic literature, we have something for everyone.
          Dive into a world of knowledge and adventure with our curated
          selection of books.
        </p>
        <Link to="/">
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {books.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
