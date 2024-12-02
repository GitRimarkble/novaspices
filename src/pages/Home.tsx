import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/hero/Banner.jpg")',
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70">
            <div className="h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Transform Your Business with Our Solutions
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    Discover innovative solutions that drive growth and efficiency for your business
                  </p>
                  <Link 
                    to="/products" 
                    className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/hero/product banner.jpg" 
                alt="About Us Preview" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                With years of experience and dedication to excellence, we provide cutting-edge solutions
                that help businesses thrive in today's competitive market.
              </p>
              <Link 
                to="/about" 
                className="text-brand-primary hover:text-brand-secondary font-semibold"
              >
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'Nova Turmeric Powder',
                description: 'High-quality turmeric powder for authentic Indian flavors',
                image: '/images/products/Turmeric Powder.jpg'
              },
              {
                id: 2,
                name: 'Compounding Asafoetida',
                description: 'Premium quality asafoetida for enhanced taste',
                image: '/images/products/Compounding Asafoetida Black Khada.jpg'
              },
              {
                id: 3,
                name: 'Premium Spice Mix',
                description: 'Perfectly blended spices for rich flavors',
                image: '/images/products/Compounding Asafoetida Kabuli Khada.jpg'
              }
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link 
                    to={`/products`}
                    className="text-brand-primary hover:text-brand-secondary font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/products"
              className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
