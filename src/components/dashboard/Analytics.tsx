import React, { useState } from 'react';
import { Filter, Download, RefreshCw, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

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
  potentialSavings: string;
  confidence: number;
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
      feedback: '',
      potentialSavings: '$15,000',
      confidence: 94
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
      feedback: '',
      potentialSavings: '$8,500',
      confidence: 89
    },
    {
      id: '3',
      name: 'Organic Pasta - Premium',
      category: 'Food',
      currentInventory: 156,
      predictedSales: 45,
      recommendedAction: 'Bundle with Sauce & Cheese',
      urgency: 'Medium',
      managerAction: '',
      feedback: '',
      potentialSavings: '$3,200',
      confidence: 87
    },
    {
      id: '4',
      name: 'Garden Hose Set',
      category: 'Home & Garden',
      currentInventory: 32,
      predictedSales: 15,
      recommendedAction: 'Relocate to Store #1235',
      urgency: 'Medium',
      managerAction: '',
      feedback: '',
      potentialSavings: '$2,100',
      confidence: 91
    },
    {
      id: '5',
      name: 'Bluetooth Headphones',
      category: 'Electronics',
      currentInventory: 67,
      predictedSales: 25,
      recommendedAction: 'Bundle with Phone Cases',
      urgency: 'Medium',
      managerAction: '',
      feedback: '',
      potentialSavings: '$4,800',
      confidence: 85
    },
    {
      id: '6',
      name: 'Gourmet Coffee Beans',
      category: 'Food',
      currentInventory: 89,
      predictedSales: 22,
      recommendedAction: 'Create Coffee Bundle Set',
      urgency: 'Low',
      managerAction: '',
      feedback: '',
      potentialSavings: '$1,900',
      confidence: 82
    },
    {
      id: '7',
      name: 'Camping Tent - 4 Person',
      category: 'Sports & Outdoors',
      currentInventory: 23,
      predictedSales: 6,
      recommendedAction: 'Offload to Local Business',
      urgency: 'Low',
      managerAction: '',
      feedback: '',
      potentialSavings: '$1,200',
      confidence: 78
    },
    {
      id: '8',
      name: 'Frozen Yogurt - Variety Pack',
      category: 'Food',
      currentInventory: 234,
      predictedSales: 78,
      recommendedAction: 'Summer Promotion Bundle',
      urgency: 'High',
      managerAction: '',
      feedback: '',
      potentialSavings: '$5,600',
      confidence: 92
    }
  ];

  const categories = ['All', 'Electronics', 'Clothing', 'Food', 'Home & Garden', 'Sports & Outdoors'];
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

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 80) return 'text-yellow-600';
    return 'text-red-600';
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

  const totalPotentialSavings = filteredProducts.reduce((sum, product) => {
    return sum + parseInt(product.potentialSavings.replace(/[$,]/g, ''));
  }, 0);

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className={`rounded-3xl p-8 shadow-2xl ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 via-purple-900 to-indigo-900' 
          : 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700'
      } text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold">AI Recommendations</h2>
            </div>
            <p className="text-blue-100 text-lg mb-4">
              Intelligent suggestions for optimizing slow-moving inventory
            </p>
            <div className="flex items-center space-x-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-sm text-blue-200">Total Potential Savings</span>
                <p className="text-2xl font-bold text-green-300">${totalPotentialSavings.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-sm text-blue-200">Active Recommendations</span>
                <p className="text-2xl font-bold text-yellow-300">{filteredProducts.length}</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-200">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Filters */}
      <div className={`rounded-2xl p-6 shadow-xl ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}>
        <div className="flex items-center space-x-2 mb-6">
          <Filter className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold">Smart Filters</h3>
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
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
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
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
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
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
            >
              {stores.map(store => (
                <option key={store} value={store}>{store}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Recommendations Table */}
      <div className={`rounded-2xl shadow-xl overflow-hidden ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-gray-50 to-gray-100'}`}>
              <tr>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Product Details
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Inventory Status
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  AI Recommendation
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  Priority & Confidence
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
                <tr key={product.id} className={`hover:${isDarkMode ? 'bg-gray-700/50' : 'bg-blue-50/50'} transition-all duration-200`}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-lg">{product.name}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center space-x-2`}>
                        <span>{product.category}</span>
                        <span className="text-green-600 font-medium">{product.potentialSavings} savings</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Current:</span>
                        <span className="font-semibold">{product.currentInventory}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Predicted:</span>
                        <span className="font-semibold text-blue-600">{product.predictedSales}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border ${isDarkMode ? 'border-blue-700' : 'border-blue-200'}`}>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                        {product.recommendedAction}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        isDarkMode ? getUrgencyColorDark(product.urgency) : getUrgencyColor(product.urgency)
                      }`}>
                        {product.urgency} Priority
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-gray-500">Confidence:</span>
                        <span className={`text-xs font-bold ${getConfidenceColor(product.confidence)}`}>
                          {product.confidence}%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={product.managerAction}
                      onChange={(e) => handleActionChange(product.id, e.target.value)}
                      className={`px-3 py-2 rounded-xl border text-sm transition-all duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
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
                      className={`px-3 py-2 rounded-xl border text-sm transition-all duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Enhanced Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-red-900 to-red-800 border border-red-700' : 'bg-gradient-to-br from-red-500 to-red-600'
        } text-white`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">High Priority</h3>
              <p className="text-3xl font-bold">
                {filteredProducts.filter(p => p.urgency === 'High').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-green-900 to-green-800 border border-green-700' : 'bg-gradient-to-br from-green-500 to-green-600'
        } text-white`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Actions Taken</h3>
              <p className="text-3xl font-bold">
                {filteredProducts.filter(p => p.managerAction && p.managerAction !== '').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700' : 'bg-gradient-to-br from-blue-500 to-blue-600'
        } text-white`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Pending Review</h3>
              <p className="text-3xl font-bold">
                {filteredProducts.filter(p => !p.managerAction || p.managerAction === '').length}
              </p>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-700' : 'bg-gradient-to-br from-purple-500 to-purple-600'
        } text-white`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Avg Confidence</h3>
              <p className="text-3xl font-bold">
                {Math.round(filteredProducts.reduce((sum, p) => sum + p.confidence, 0) / filteredProducts.length)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
