import { Link } from 'react-router-dom';

const RoleSelectionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Select Your Role
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Vendor Block */}
          <Link 
            to="/login" 
            className="flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-8 h-8 text-green-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Vendor</h2>
              <p className="text-gray-600 text-center mb-4">
                Register as a business to list your products and manage inventory
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Continue as Vendor
              </button>
            </div>
          </Link>

          {/* User Block */}
          <Link 
            to="/login" 
            className="flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-8 h-8 text-green-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">User</h2>
              <p className="text-gray-600 text-center mb-4">
                Sign up as a consumer to access exclusive deals and manage purchases
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Continue as User
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;