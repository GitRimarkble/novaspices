import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="text-green-600 mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9z" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 9l-6 6M9 9l6 6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-6">At Nova Spices and Foods,</h1>
            <p className="text-gray-600 leading-relaxed">
              We are thrilled to introduce ourselves as prominent spice manufacturer and exporter of Indian spices. We are processing spices with high-grade, latest spices processing line from raw materials. Operating through a well-established manufacturing unit with a team of highly qualified and experienced team of 15 professionals trained to the exacting needs of the Indian market. With top administrators at our helm, we are able to make a mark in the domestic market. Governed by our principles of honesty, hard work, and dedication, we are able to deliver a commendable range of spices and condiments. Being one of the most promising manufacturers and suppliers, we are able to provide the essence of purity into genuine Indian taste.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/products/Turmeric Powder.jpg" 
              alt="Nova Spices Products" 
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-amber-900 text-white py-8 rounded-lg mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <h3 className="text-xl font-bold">Best Quality</h3>
              <p>100% Vegetarian</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">07 Total Products</h3>
              <p>And Growing</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Shipping</h3>
              <p>India & UK</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/products/Compounding Asafoetida Black Khada.jpg" 
              alt="Nova Spices Products Collection" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Certified Products</h2>
            <p className="text-gray-600 leading-relaxed">
              Our products are manufactured in our own unit, with proper hygiene, with no preservatives, no chemicals. Quality and the perfect blending of spices is our main concern. Nova Spices and Foods is committed to providing the highest quality available in the market.
            </p>
            <h3 className="text-xl font-bold">Our Products are registered</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>FSSAI No 11523083000602</li>
              <li>100% Suitable for Vegetarian</li>
              <li>No harmful ingredients</li>
            </ul>
            <Link 
              to="/products"
              className="inline-block bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition duration-300"
            >
              View Products
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
