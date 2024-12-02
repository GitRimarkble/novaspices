import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">General Agreement</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the Nova Spices and Foods website, you agree to comply with these terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Information</h2>
            <p className="text-gray-600 mb-4">
              We strive to ensure the accuracy of all information provided on our website. However, we do not guarantee the completeness, accuracy, or reliability of any content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Product Availability</h2>
            <p className="text-gray-600 mb-4">
              All products listed on the website are subject to availability. We reserve the right to modify or discontinue any product without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <p className="text-gray-600 mb-4">
              Prices for our products are subject to change without notice. We do our best to ensure accurate pricing, but errors may occur. In the event of a pricing error, we reserve the right to cancel or refuse any orders placed at the incorrect price.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment</h2>
            <p className="text-gray-600 mb-4">
              Payment for orders placed on our website must be made using the accepted payment methods. We do not store credit card details nor do we share customer details with any third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping</h2>
            <p className="text-gray-600 mb-4">
              We aim to process and ship orders promptly. However, shipping times may vary depending on location and other factors beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Returns and Refunds</h2>
            <p className="text-gray-600 mb-4">
              We accept returns of unopened and unused products within 15 days of purchase. Refunds will be issued in the original form of payment, excluding shipping costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
            <p className="text-gray-600 mb-4">
              We are committed to protecting your privacy. Any personal information provided to us will be used in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content on the Nova Spices and Foods website, including logos, trademarks, and images, is the property of Nova Spices and Foods and is protected by copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For any inquiries or concerns regarding these terms and conditions, please contact us at admin@novaspices.co.in or +91-9137872565.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 italic">
              By using the Nova Spices and Foods website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
