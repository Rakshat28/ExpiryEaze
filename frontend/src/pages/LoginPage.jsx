const LoginPage = () => {
    return (
        <div className="m-3">
            <div className="min-h-screen bg-gray-50 ">
        <main className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto my-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 lg:flex lg:gap-16">
              {/* Left Form Section */}
              <div className="lg:w-1/2">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                  Join ExpiryEaze Waitlist
                </h1>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
  
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Join Waitlist
                  </button>
                </form>
              </div>
  
              {/* Right Benefits Section */}
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Why Join ExpiryEaze?
                </h2>
                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-green-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-gray-600">
                      Exclusive discounts on near-expiry products
                    </p>
                  </div>
  
                  {/* Benefit 2 */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-green-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-gray-600">
                      Reduce food and medicine waste
                    </p>
                  </div>
  
                  {/* Benefit 3 */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-green-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-gray-600">
                      Early access to new features
                    </p>
                  </div>
  
                  {/* Benefit 4 */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-green-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-gray-600">
                      Be part of a sustainable community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
        </div>
    );
  };
  
  export default LoginPage;