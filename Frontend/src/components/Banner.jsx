import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 items-center">
      <div className="w-full md:w-1/2 mt-12 md:mt-36 space-y-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          Hello, welcome here to learn something{" "}
          <span className="text-green-500">new every day!</span>
        </h1>
        <p className="text-sm md:text-xl">
          Discover a world of knowledge and entertainment with our extensive
          collection of books. Whether you are a lifelong learner, a casual
          reader, or someone who loves diving into new adventures through pages,
          we have something for you. Join us and start your journey towards
          discovering new stories and expanding your horizons.
        </p>
        <div className="flex items-center gap-2">
          <Link to="/course" className="btn btn-success">
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
