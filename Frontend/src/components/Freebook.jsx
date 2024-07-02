import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const freeBooks = res.data.filter((book) => book.category === "Free");
        setBooks(freeBooks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">Free Books</h1>
        <p className="text-md md:text-lg">
          Explore our collection of free books. From classic literature to
          modern fiction, we have something for everyone. Dive into new
          adventures and expand your knowledge with our curated selection of
          free titles.
        </p>
      </div>

      <Slider {...settings}>
        {books.map((book) => (
          <Cards item={book} key={book._id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
