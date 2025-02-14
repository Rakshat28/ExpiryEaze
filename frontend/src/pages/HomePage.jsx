const HomePage = () => {
    return (
      <div className="min-h-screen bg-white mx-auto my-8">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Smart Savings, Sustainable Future
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Rescue high-quality near-expiry products at discounted prices while reducing waste in your community.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/role-select" className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors">
                Join Waitlist
              </a>
              <a href="#how-it-works" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </section>
  
        {/* Stats Section */}
        <div className="bg-green-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {number: '1M+', label: 'Products To Be Saved'},
                {number: '50K+', label: 'Community Members'},
                {number: '75%', label: 'Average Savings'},
                {number: '200+', label: 'Partner Stores'},
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Value Propositions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why ExpiryEaze?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {title: 'Exclusive Discounts', icon: '💰', desc: 'Save big on near-expiry items'},
                {title: 'Waste Reduction', icon: '🌱', desc: 'Help prevent consumable waste'},
                {title: 'Local Impact', icon: '📍', desc: 'Support community businesses'},
                {title: 'Easy Tracking', icon: '⏰', desc: 'Expiry alerts & reminders'},
              ].map((vp, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{vp.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{vp.title}</h3>
                  <p className="text-gray-600">{vp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* How It Works */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Simple Steps to Save</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {step: '1', title: 'Sign Up Free', desc: 'Create your account in minutes'},
                {step: '2', title: 'Browse Deals', desc: 'Discover local expiring deals'},
                {step: '3', title: 'Save & Earn', desc: 'Purchase and earn eco-points'},
              ].map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl text-center">
                  <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Start Saving Today</h2>
            <p className="text-green-100 mb-8 text-lg">
              Join our growing community of eco-conscious savers
            </p>
            <a href="/role-select" className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Early Access
            </a>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-white font-semibold mb-4">ExpiryEaze</h4>
                <p className="text-sm max-w-xs">
                  Committed to reducing consumable waste through smart technology and community action.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
                  <li><a href="/blog" className="hover:text-green-400 transition">Blog</a></li>
                  <li><a href="/partners" className="hover:text-green-400 transition">Partners</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="hover:text-green-400 transition">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-green-400 transition">Terms of Service</a></li>
                  <li><a href="/contact" className="hover:text-green-400 transition">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>© 2025 ExpiryEaze. Making sustainability affordable.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  export default HomePage;