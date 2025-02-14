import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-[5%] py-4">
        {/* Brand Logo/Name */}
        <Link 
          to="/" 
          className="group flex items-center space-x-2 transition-all duration-300"
        >
          <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent text-3xl font-extrabold tracking-tight hover:from-green-700 hover:to-green-900 transform transition-all duration-300">
            ExpiryEaze
          </span>
          <span className="text-4xl text-green-600 font-light group-hover:text-green-700 transition-colors">
            •
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            to="/terms" 
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            <b>Terms</b>
          </Link>
          <Link 
            to="/privacy" 
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            <b>Privacy</b>
          </Link>
          <Link
            to="/role-select"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;