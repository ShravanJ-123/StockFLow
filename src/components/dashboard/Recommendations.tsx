import React from 'react';

interface RecommendationsProps {
  isDarkMode: boolean;
}

const Recommendations: React.FC<RecommendationsProps> = ({ isDarkMode }) => {
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
      <div className={`rounded-lg shadow-sm border p-6 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Smart Recommendations</h2>
        <p className={`mb-6 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>Based on your shopping patterns and current market trends</p>
        
        <div className="space-y-4">
          {recommendations.map((item) => (
            <div key={item.id} className={`border rounded-lg p-4 transition-colors ${
              isDarkMode 
                ? 'border-gray-600 hover:bg-gray-700' 
                : 'border-gray-200 hover:bg-gray-50'
            }`}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{item.product}</h3>
                  <p className={`text-sm mt-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Available at {item.store}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Current: {item.currentPrice}</span>
                    <span className="text-sm text-green-600 font-medium">Target: {item.recommendedPrice}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-green-600">{item.savings}</div>
                  <div className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>potential savings</div>
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
      
      <div className={`rounded-lg p-6 ${
        isDarkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50'
      }`}>
        <h3 className={`text-lg font-semibold mb-2 ${
          isDarkMode ? 'text-blue-300' : 'text-blue-900'
        }`}>Pro Tip</h3>
        <p className={`${
          isDarkMode ? 'text-blue-200' : 'text-blue-800'
        }`}>
          Set up price alerts for items you're watching to get notified when they drop to your target price.
        </p>
      </div>
    </div>
  );
};

export default Recommendations;