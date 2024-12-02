import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, description, price, image, category }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${name} (Product ID: ${id}). Could you provide more information?`
    );
    const whatsappUrl = `https://wa.me/+91-9137872565?text=${message}`; // Replace with your WhatsApp number
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm">
            {price}
          </span>
        </div>
        <span className="text-sm text-gray-500 mb-2 block">{category}</span>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-3">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 w-full"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            Inquire via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
