import React from 'react';

const Recommendations: React.FC = () => {
  const recommendations = [
    {
      id: 1,
      product: "Wireless Headphones",
      currentPrice: "$89.99",
      recommendedPrice: "$69.99",
      savings: "$20.00",
      store: "TechMart",
      confidence: "High"
    },
    {
      id: 2,
      product: "Smart Watch",
      currentPrice: "$299.99",
      recommendedPrice: "$249.99",
      savings: "$50.00",
      store: "GadgetWorld",
      confidence: "Medium"
    },
    {
      id: 3,
      product: "Laptop Stand",
      currentPrice: "$45.99",
      recommendedPrice: "$35.99",
      savings: "$10.00",
      store: "OfficeSupply",
      confidence: "High"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Smart Recommendations</h2>
        <p className="text-gray-600 mb-6">Based on your shopping patterns and current market trends</p>
        
        <div className="space-y-4">
          {recommendations.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.product}</h3>
                  <p className="text-sm text-gray-600 mt-1">Available at {item.store}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="text-sm text-gray-500">Current: {item.currentPrice}</span>
                    <span className="text-sm text-green-600 font-medium">Target: {item.recommendedPrice}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-green-600">{item.savings}</div>
                  <div className="text-xs text-gray-500">potential savings</div>
                  <div className={`text-xs mt-1 px-2 py-1 rounded-full ${
                    item.confidence === 'High' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.confidence} confidence
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip</h3>
        <p className="text-blue-800">
          Set up price alerts for items you're watching to get notified when they drop to your target price.
        </p>
      </div>
    </div>
  );
};

export default Recommendations;