import React, { useState } from 'react';
import ProductModal from '../components/ProductModal';

interface Product {
  id: number;
  name: string;
  image: string;
  description: {
    main: string;
    features: string[];
  };
}

const productData: Product[] = [
  {
    id: 1,
    name: 'Asafoetida (Heeng) Kabuli Khada',
    image: '/images/products/Compounding Asafoetida Kabuli Khada.jpg',
    description: {
      main: 'High-quality product designed for professional use with advanced features.',
      features: [
        'Advanced Features',
        'Professional Use',
        'High-Quality',
      ]
    }
  },
  {
    id: 2,
    name: 'Asafoetida Black (Heeng) Khada',
    image: '/images/products/Compounding Asafoetida Black Khada.jpg',
    description: {
      main: 'Reliable solution for everyday business needs.',
      features: [
        'Reliable Solution',
        'Everyday Business Needs',
        'Standard Quality',
      ]
    }
  },
  {
    id: 3,
    name: 'Asafoetida Brown (Heeng) Khada',
    image: '/images/products/Compounding Asafoetida Brown Khada.jpg',
    description: {
      main: 'Comprehensive solution for large-scale operations.',
      features: [
        'Comprehensive Solution',
        'Large-Scale Operations',
        'Enterprise Quality',
      ]
    }
  },
  {
    id: 4,
    name: 'Asafoetida Black (Heeng) Khada',
    image: '/images/products/Compounding Asafoetida Black Khada.jpg',
    description: {
      main: 'Efficient solution for small-scale operations.',
      features: [
        'Efficient Solution',
        'Small-Scale Operations',
        'Standard Quality',
      ]
    }
  },
  {
    id: 5,
    name: 'Asafoetida (Heeng) Black Powder',
    image: '/images/products/Compounding Asafoetida Black Powder.jpg',
    description: {
      main: 'Advanced solution for specialized needs.',
      features: [
        'Advanced Solution',
        'Specialized Needs',
        'Professional Quality',
      ]
    }
  },
  {
    id: 6,
    name: 'Asafoetida (Heeng) Yellow Powder',
    image: '/images/products/Compounding Asafoetida Yellow Powder.jpg',
    description: {
      main: 'Best solution for small business.',
      features: [
        'Best Solution',
        'Small Business',
        'Standard Quality',
      ]
    }
  },
  {
    id: 7,
    name: 'Asafoetida (Heeng) Brown Powder',
    image: '/images/products/Compounding Asafoetida Brown Powder.jpg',
    description: {
      main: 'Best solution for small business.',
      features: [
        'Best Solution',
        'Small Business',
        'Standard Quality',
      ]
    }
  },
  
  
  
  
];

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {product.name}
                </h3>
                <div className="flex justify-center">
                  <a
                    href={`https://wa.me/+919137872565?text=I'm interested in ${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                    </svg>
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Products;
