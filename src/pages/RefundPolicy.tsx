import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Returns & Refunds Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At Nova, we strive to ensure that our customers are fully satisfied with their purchases. If you are not entirely satisfied with your purchase, we're here to help.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Returns</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Eligibility</h3>
                <p className="text-gray-600">
                  You have 07 days to return an item from the date you received it. To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Non-Returnable Items</h3>
                <p className="text-gray-600">
                  Certain items, such as perishable goods (e.g., spices, herbs), cannot be returned. Gift cards and downloadable products are also non-returnable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Process</h3>
                <p className="text-gray-600">
                  To initiate a return, please contact us at novaadmin@novaspices.co.in with your order number and reason for the return. We will provide you with instructions on how to proceed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Refunds</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund.
              </p>
              <p>
                If approved, your refund will be processed, and a credit will be applied to your original method of payment within 15 days.
              </p>
              <p>
                <strong>Shipping Costs:</strong> Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Exchanges</h2>
            <p className="text-gray-600">
              We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please contact us at admin@novaspices.co.in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Returns & Refunds Policy, please contact us:
            </p>
            <div className="text-gray-600 space-y-2">
              <p>Ms. Nova Spices & Foods Pvt. Ltd</p>
              <p>The Commodity Exchange Building, 1st Floor, Office No.110,</p>
              <p>Plot No. 2,3 and 4, Sector 19 Vashi,</p>
              <p>Navi Mumbai- 400705, Maharashtra.</p>
              <p>Email: admin@novaspices.co.in</p>
              <p>Mobile: +91-9137872565</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
