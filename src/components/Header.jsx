import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-black bg-white sticky top-0 z-50 shadow  font-mono body-font mb-2">
      <div className="container mx-auto flex  flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg> */}
          <Link to={"/"}>
            <img
              className=" w-36"
              src="https://chawkbazar.vercel.app/assets/images/logo.svg"
              alt=""
            />
          </Link>
          {/* <span className="ml-3 text-xl">React Test</span> */}
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center cursor-pointer">
          <Link to="/" className="mr-32 hover:text-gray-900">
            Home
          </Link>
          <Link to="/product" className="mr-32 hover:text-gray-900">
            Product
          </Link>
          <Link to="/contact" className="mr-32 hover:text-gray-900">Contact</Link>
        </nav>
        <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none text-black hover:bg-gray-100 rounded-lg font-bold text-2xl mt-4 md:mt-0">
          Sign In
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
