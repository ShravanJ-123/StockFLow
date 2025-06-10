import React, { useState } from 'react';
import { Filter, Download, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

interface RecommendationsProps {
  isDarkMode: boolean;
}

interface Product {
  id: string;
  name: string;
  category: string;
  currentInventory: number;
  predictedSales: number;
  recommendedAction: string;
  urgency: 'High' | 'Medium' | 'Low';
  managerAction: string;
  feedback: string;
}

const Recommendations: React.FC<RecommendationsProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedUrgency, setSelectedUrgency] = useState('All');
  const [selectedStore, setSelectedStore] = useState('All Stores');
  
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Samsung 55" Smart TV',
      category: 'Electronics',
      currentInventory: 45,
      predictedSales: 12,
      recommendedAction: 'Bundle with Sound Bar',
      urgency: 'High',
      managerAction: '',
      feedback: ''
    },
    {
      id: '2',
      name: 'Winter Coats - XL',
      category: 'Clothing',
      currentInventory: 78,
      predictedSales: 8,
      recommendedAction: 'Flash Sale - 40% Off',
      urgency: 'High',
      managerAction: '',
      feedback: ''
    },
    {
      id: '3',
      name: 'Garden Hose Set',
      category: 'Home & Garden',
      currentInventory: 32,
      predictedSales: 15,
      recommendedAction: 'Relocate to Store #1235',
      urgency: 'Medium',
      managerAction: '',
      feedback: ''
    },
    {
      id: '4',
      name: 'Bluetooth Headphones',
      category: 'Electronics',
      currentInventory: 67,
      predictedSales: 25,
      recommendedAction: 'Bundle with Phone Cases',
      urgency: 'Medium',
      managerAction: '',
      feedback: ''
    },
    {
      id: '5',
      name: 'Camping Tent - 4 Person',
      category: 'Sports & Outdoors',
      currentInventory: 23,
      predictedSales: 6,
      recommendedAction: 'Offload to Local Business',
      urgency: 'Low',
      managerAction: '',
      feedback: ''
    }
  ]);

  const categories = ['All', 'Electronics', 'Clothing', 'Home & Garden', 'Sports & Outdoors'];
  const urgencyLevels = ['All', 'High', 'Medium', 'Low'];
  const stores = ['All Stores', 'Store #1234', 'Store #1235', 'Store #1236'];
  const actionOptions = ['', 'Implemented', 'In Progress', 'Rejected', 'Need More Info'];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getUrgencyColorDark = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'bg-red-900 text-red-200 border-red-700';
      case 'Medium': return 'bg-yellow-900 text-yellow-200 border-yellow-700';
      case 'Low': return 'bg-green-900 text-green-200 border-green-700';
      default: return 'bg-gray-700 text-gray-200 border-gray-600';
    }
  };

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'All' || product.category === selectedCategory) &&
           (selectedUrgency === 'All' || product.urgency === selectedUrgency);
  });

  const handleActionChange = (productId: string, action: string) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, managerAction: action } : product
    ));
  };

  const handleFeedbackChange = (productId: string, feedback: string) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, feedback } : product
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">AI Recommendations</h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Intelligent suggestions for optimizing slow-moving inventory
          </p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Filters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Urgency Level
            </label>
            <select
              value={selectedUrgency}
              onChange={(e) => setSelectedUrgency(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              {urgencyLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Store Location
            </label>
            <select
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              {stores.map(store => (
                <option key={store} value={store}>{store}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Recommendations Table */}
      <div className={`rounded-2xl shadow-lg overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Product Name
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Current Inventory
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Predicted Sales
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Recommended Action
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Urgency
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Manager Action
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {filteredProducts.map((product) => (
                <tr key={product.id} className={`hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-200`}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {product.category}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium">{product.currentInventory}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium">{product.predictedSales}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {product.recommendedAction}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      isDarkMode ? getUrgencyColorDark(product.urgency) : getUrgencyColor(product.urgency)
                    }`}>
                      {product.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={product.managerAction}
                      onChange={(e) => handleActionChange(product.id, e.target.value)}
                      className={`px-3 py-2 rounded-lg border text-sm transition-colors duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    >
                      {actionOptions.map(option => (
                        <option key={option} value={option}>
                          {option || 'Select Action'}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={product.feedback}
                      onChange={(e) => handleFeedbackChange(product.id, e.target.value)}
                      placeholder="Add feedback..."
                      className={`px-3 py-2 rounded-lg border text-sm transition-colors duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">High Priority</h3>
              <p className="text-2xl font-bold text-red-600">
                {filteredProducts.filter(p => p.urgency === 'High').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Actions Taken</h3>
              <p className="text-2xl font-bold text-green-600">
                {filteredProducts.filter(p => p.managerAction && p.managerAction !== '').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Pending Review</h3>
              <p className="text-2xl font-bold text-blue-600">
                {filteredProducts.filter(p => !p.managerAction || p.managerAction === '').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;