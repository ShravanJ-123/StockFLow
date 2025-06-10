import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { TrendingUp, TrendingDown, Package, AlertTriangle, Filter, Download } from 'lucide-react';

interface AnalyticsProps {
  isDarkMode: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ isDarkMode }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30days');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Top 10 Bestselling Products Data
  const bestsellingProducts = [
    { name: 'iPhone 15 Pro', sales: 2847, revenue: 2847000, category: 'Electronics' },
    { name: 'Samsung 65" TV', sales: 1923, revenue: 1923000, category: 'Electronics' },
    { name: 'Nike Air Max', sales: 1756, revenue: 175600, category: 'Clothing' },
    { name: 'MacBook Air M2', sales: 1634, revenue: 1634000, category: 'Electronics' },
    { name: 'Instant Pot', sales: 1521, revenue: 152100, category: 'Home & Kitchen' },
    { name: 'Levi\'s Jeans', sales: 1387, revenue: 138700, category: 'Clothing' },
    { name: 'KitchenAid Mixer', sales: 1245, revenue: 374500, category: 'Home & Kitchen' },
    { name: 'AirPods Pro', sales: 1198, revenue: 299500, category: 'Electronics' },
    { name: 'Dyson Vacuum', sales: 1087, revenue: 434800, category: 'Home & Kitchen' },
    { name: 'Adidas Sneakers', sales: 967, revenue: 96700, category: 'Clothing' }
  ];

  // Top 10 Slow-moving Products Data
  const slowMovingProducts = [
    { name: 'VR Headset Pro', sales: 23, daysInStock: 187, category: 'Electronics' },
    { name: 'Smart Thermostat', sales: 34, daysInStock: 165, category: 'Home & Kitchen' },
    { name: 'Electric Scooter', sales: 45, daysInStock: 143, category: 'Sports' },
    { name: 'Drone Camera', sales: 56, daysInStock: 134, category: 'Electronics' },
    { name: 'Smart Watch Band', sales: 67, daysInStock: 128, category: 'Electronics' },
    { name: 'Yoga Mat Premium', sales: 78, daysInStock: 121, category: 'Sports' },
    { name: 'Coffee Machine Pro', sales: 89, daysInStock: 115, category: 'Home & Kitchen' },
    { name: 'Gaming Chair', sales: 98, daysInStock: 109, category: 'Furniture' },
    { name: 'Bluetooth Speaker', sales: 112, daysInStock: 98, category: 'Electronics' },
    { name: 'Fitness Tracker', sales: 134, daysInStock: 87, category: 'Electronics' }
  ];

  // Heatmap Data - Inventory vs Sales Velocity
  const heatmapData = [
    { category: 'Electronics', inventory: 'High', velocity: 'High', value: 85, products: 234 },
    { category: 'Electronics', inventory: 'High', velocity: 'Medium', value: 65, products: 156 },
    { category: 'Electronics', inventory: 'High', velocity: 'Low', value: 25, products: 89 },
    { category: 'Electronics', inventory: 'Medium', velocity: 'High', value: 92, products: 187 },
    { category: 'Electronics', inventory: 'Medium', velocity: 'Medium', value: 78, products: 145 },
    { category: 'Electronics', inventory: 'Medium', velocity: 'Low', value: 35, products: 67 },
    { category: 'Electronics', inventory: 'Low', velocity: 'High', value: 98, products: 123 },
    { category: 'Electronics', inventory: 'Low', velocity: 'Medium', value: 88, products: 98 },
    { category: 'Electronics', inventory: 'Low', velocity: 'Low', value: 45, products: 34 },
    
    { category: 'Clothing', inventory: 'High', velocity: 'High', value: 75, products: 198 },
    { category: 'Clothing', inventory: 'High', velocity: 'Medium', value: 55, products: 134 },
    { category: 'Clothing', inventory: 'High', velocity: 'Low', value: 20, products: 76 },
    { category: 'Clothing', inventory: 'Medium', velocity: 'High', value: 88, products: 167 },
    { category: 'Clothing', inventory: 'Medium', velocity: 'Medium', value: 68, products: 123 },
    { category: 'Clothing', inventory: 'Medium', velocity: 'Low', value: 30, products: 54 },
    { category: 'Clothing', inventory: 'Low', velocity: 'High', value: 95, products: 109 },
    { category: 'Clothing', inventory: 'Low', velocity: 'Medium', value: 82, products: 87 },
    { category: 'Clothing', inventory: 'Low', velocity: 'Low', value: 40, products: 29 },

    { category: 'Home & Kitchen', inventory: 'High', velocity: 'High', value: 70, products: 145 },
    { category: 'Home & Kitchen', inventory: 'High', velocity: 'Medium', value: 50, products: 98 },
    { category: 'Home & Kitchen', inventory: 'High', velocity: 'Low', value: 15, products: 56 },
    { category: 'Home & Kitchen', inventory: 'Medium', velocity: 'High', value: 85, products: 123 },
    { category: 'Home & Kitchen', inventory: 'Medium', velocity: 'Medium', value: 65, products: 89 },
    { category: 'Home & Kitchen', inventory: 'Medium', velocity: 'Low', value: 25, products: 43 },
    { category: 'Home & Kitchen', inventory: 'Low', velocity: 'High', value: 93, products: 87 },
    { category: 'Home & Kitchen', inventory: 'Low', velocity: 'Medium', value: 80, products: 65 },
    { category: 'Home & Kitchen', inventory: 'Low', velocity: 'Low', value: 35, products: 23 }
  ];

  const categories = ['All', 'Electronics', 'Clothing', 'Home & Kitchen', 'Sports', 'Furniture'];
  const timeframes = [
    { value: '7days', label: 'Last 7 Days' },
    { value: '30days', label: 'Last 30 Days' },
    { value: '90days', label: 'Last 90 Days' },
    { value: '1year', label: 'Last Year' }
  ];

  const getHeatmapColor = (value: number) => {
    if (value >= 80) return '#10B981'; // Green
    if (value >= 60) return '#F59E0B'; // Yellow
    if (value >= 40) return '#EF4444'; // Red
    return '#6B7280'; // Gray
  };

  const filteredBestselling = selectedCategory === 'All' 
    ? bestsellingProducts 
    : bestsellingProducts.filter(product => product.category === selectedCategory);

  const filteredSlowMoving = selectedCategory === 'All' 
    ? slowMovingProducts 
    : slowMovingProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Sales & Inventory Analytics</h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Comprehensive analysis of product performance and inventory optimization opportunities
          </p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Time Period
            </label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              {timeframes.map(timeframe => (
                <option key={timeframe.value} value={timeframe.value}>
                  {timeframe.label}
                </option>
              ))}
            </select>
          </div>
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
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+12.5%</span>
          </div>
          <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Sales
          </h3>
          <p className="text-2xl font-bold mt-1">$2.4M</p>
        </div>

        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600 font-medium">+8.2%</span>
          </div>
          <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Products Sold
          </h3>
          <p className="text-2xl font-bold mt-1">15,847</p>
        </div>

        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm text-red-600 font-medium">-15.3%</span>
          </div>
          <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Slow-Moving Items
          </h3>
          <p className="text-2xl font-bold mt-1">1,234</p>
        </div>

        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">-22.1%</span>
          </div>
          <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Inventory at Risk
          </h3>
          <p className="text-2xl font-bold mt-1">9.6%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 10 Bestselling Products */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>Top 10 Bestselling Products</span>
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredBestselling} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                <XAxis 
                  type="number" 
                  stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
                  fontSize={12}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
                  fontSize={10}
                  width={100}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '8px',
                    color: isDarkMode ? '#FFFFFF' : '#000000'
                  }}
                  formatter={(value, name) => [
                    `${value} units`,
                    'Sales'
                  ]}
                />
                <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
                  {filteredBestselling.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#10B981" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top 10 Slow-moving Products */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <TrendingDown className="w-5 h-5 text-red-600" />
            <span>Top 10 Slow-moving Products</span>
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredSlowMoving} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                <XAxis 
                  type="number" 
                  stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
                  fontSize={12}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
                  fontSize={10}
                  width={100}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '8px',
                    color: isDarkMode ? '#FFFFFF' : '#000000'
                  }}
                  formatter={(value, name) => [
                    `${value} days`,
                    'Days in Stock'
                  ]}
                />
                <Bar dataKey="daysInStock" radius={[0, 4, 4, 0]}>
                  {filteredSlowMoving.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#EF4444" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Inventory vs Sales Velocity Heatmap */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
          <BarChart className="w-5 h-5 text-blue-600" />
          <span>Inventory vs Sales Velocity Heatmap</span>
        </h3>
        
        <div className="space-y-8">
          {['Electronics', 'Clothing', 'Home & Kitchen'].map((category) => (
            <div key={category}>
              <h4 className="font-medium mb-4">{category}</h4>
              <div className="grid grid-cols-3 gap-2">
                {['High', 'Medium', 'Low'].map((inventory) => (
                  <div key={inventory} className="space-y-2">
                    <div className={`text-xs font-medium text-center ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {inventory} Inventory
                    </div>
                    {['High', 'Medium', 'Low'].map((velocity) => {
                      const dataPoint = heatmapData.find(
                        d => d.category === category && d.inventory === inventory && d.velocity === velocity
                      );
                      return (
                        <div
                          key={velocity}
                          className="relative p-3 rounded-lg text-center text-white text-sm font-medium cursor-pointer hover:scale-105 transition-transform duration-200"
                          style={{ backgroundColor: getHeatmapColor(dataPoint?.value || 0) }}
                          title={`${category} - ${inventory} Inventory, ${velocity} Velocity: ${dataPoint?.products} products`}
                        >
                          <div className="text-xs opacity-75">{velocity} Velocity</div>
                          <div className="font-bold">{dataPoint?.products}</div>
                          <div className="text-xs">products</div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Heatmap Legend */}
        <div className="mt-6 flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Optimal (80-100)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Good (60-79)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Needs Attention (40-59)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded"></div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Critical (&lt;40)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;