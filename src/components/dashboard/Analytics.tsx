import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie
} from 'recharts';
import { TrendingUp, TrendingDown, Package, AlertTriangle, Filter, Download, BarChart3, Zap } from 'lucide-react';

interface AnalyticsProps {
  isDarkMode: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ isDarkMode }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30days');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Top 10 Bestselling Products Data (Enhanced with Food)
  const bestsellingProducts = [
    { name: 'iPhone 15 Pro', sales: 2847, revenue: 2847000, category: 'Electronics' },
    { name: 'Samsung 65" TV', sales: 1923, revenue: 1923000, category: 'Electronics' },
    { name: 'Organic Bananas', sales: 1856, revenue: 185600, category: 'Food' },
    { name: 'Nike Air Max', sales: 1756, revenue: 175600, category: 'Clothing' },
    { name: 'MacBook Air M2', sales: 1634, revenue: 1634000, category: 'Electronics' },
    { name: 'Premium Ground Coffee', sales: 1587, revenue: 158700, category: 'Food' },
    { name: 'Instant Pot', sales: 1521, revenue: 152100, category: 'Home & Kitchen' },
    { name: 'Artisan Bread', sales: 1456, revenue: 145600, category: 'Food' },
    { name: 'Levi\'s Jeans', sales: 1387, revenue: 138700, category: 'Clothing' },
    { name: 'Greek Yogurt Pack', sales: 1298, revenue: 129800, category: 'Food' }
  ];

  // Top 10 Slow-moving Products Data (Enhanced with Food)
  const slowMovingProducts = [
    { name: 'VR Headset Pro', sales: 23, daysInStock: 187, category: 'Electronics' },
    { name: 'Exotic Fruit Mix', sales: 28, daysInStock: 165, category: 'Food' },
    { name: 'Smart Thermostat', sales: 34, daysInStock: 143, category: 'Home & Kitchen' },
    { name: 'Gourmet Cheese Set', sales: 41, daysInStock: 134, category: 'Food' },
    { name: 'Electric Scooter', sales: 45, daysInStock: 128, category: 'Sports' },
    { name: 'Specialty Tea Collection', sales: 52, daysInStock: 121, category: 'Food' },
    { name: 'Drone Camera', sales: 56, daysInStock: 115, category: 'Electronics' },
    { name: 'Organic Baby Food', sales: 63, daysInStock: 109, category: 'Food' },
    { name: 'Smart Watch Band', sales: 67, daysInStock: 98, category: 'Electronics' },
    { name: 'Gluten-Free Pasta', sales: 78, daysInStock: 87, category: 'Food' }
  ];

  // Sales Trend Data
  const salesTrendData = [
    { month: 'Jan', Electronics: 2400, Clothing: 1800, Food: 3200, 'Home & Kitchen': 1200, Sports: 800 },
    { month: 'Feb', Electronics: 2600, Clothing: 1900, Food: 3400, 'Home & Kitchen': 1300, Sports: 850 },
    { month: 'Mar', Electronics: 2800, Clothing: 2400, Food: 3600, 'Home & Kitchen': 1400, Sports: 900 },
    { month: 'Apr', Electronics: 3400, Clothing: 2200, Food: 3800, 'Home & Kitchen': 1500, Sports: 950 },
    { month: 'May', Electronics: 3200, Clothing: 2100, Food: 4000, 'Home & Kitchen': 1600, Sports: 1000 },
    { month: 'Jun', Electronics: 3000, Clothing: 2500, Food: 4200, 'Home & Kitchen': 1700, Sports: 1100 },
  ];

  // Category Distribution
  const categoryDistribution = [
    { name: 'Food', value: 35, color: '#F59E0B', sales: '$4.2M' },
    { name: 'Electronics', value: 28, color: '#3B82F6', sales: '$3.4M' },
    { name: 'Clothing', value: 20, color: '#10B981', sales: '$2.5M' },
    { name: 'Home & Kitchen', value: 12, color: '#EF4444', sales: '$1.7M' },
    { name: 'Sports', value: 5, color: '#8B5CF6', sales: '$1.1M' },
  ];

  // Heatmap Data - Enhanced with Food category
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

    { category: 'Food', inventory: 'High', velocity: 'High', value: 95, products: 312 },
    { category: 'Food', inventory: 'High', velocity: 'Medium', value: 78, products: 245 },
    { category: 'Food', inventory: 'High', velocity: 'Low', value: 35, products: 123 },
    { category: 'Food', inventory: 'Medium', velocity: 'High', value: 98, products: 287 },
    { category: 'Food', inventory: 'Medium', velocity: 'Medium', value: 85, products: 198 },
    { category: 'Food', inventory: 'Medium', velocity: 'Low', value: 45, products: 89 },
    { category: 'Food', inventory: 'Low', velocity: 'High', value: 99, products: 156 },
    { category: 'Food', inventory: 'Low', velocity: 'Medium', value: 92, products: 134 },
    { category: 'Food', inventory: 'Low', velocity: 'Low', value: 55, products: 67 },

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

  const categories = ['All', 'Electronics', 'Clothing', 'Food', 'Home & Kitchen', 'Sports'];
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
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className={`rounded-3xl p-8 shadow-2xl ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 via-indigo-900 to-purple-900' 
          : 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600'
      } text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <BarChart3 className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold">Sales & Inventory Analytics</h2>
            </div>
            <p className="text-blue-100 text-lg mb-4">
              Comprehensive analysis of product performance and inventory optimization opportunities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2">
                <span className="text-xs text-blue-200">Total Revenue</span>
                <p className="text-lg font-bold text-green-300">$13.9M</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2">
                <span className="text-xs text-blue-200">Products Analyzed</span>
                <p className="text-lg font-bold text-yellow-300">15,847</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2">
                <span className="text-xs text-blue-200">Categories</span>
                <p className="text-lg font-bold text-purple-300">5</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2">
                <span className="text-xs text-blue-200">AI Accuracy</span>
                <p className="text-lg font-bold text-pink-300">94.7%</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-200">
              <Zap className="w-4 h-4" />
              <span>Real-time</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
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
          <h3 className="text-lg font-semibold">Advanced Filters</h3>
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
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
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
          <div className="flex items-end">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-green-900 to-green-800 border border-green-700' : 'bg-gradient-to-br from-green-500 to-green-600'
        } text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <h3 className="text-sm font-medium opacity-80">Total Sales</h3>
          <p className="text-3xl font-bold mt-1">$2.4M</p>
        </div>

        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700' : 'bg-gradient-to-br from-blue-500 to-blue-600'
        } text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">+8.2%</span>
          </div>
          <h3 className="text-sm font-medium opacity-80">Products Sold</h3>
          <p className="text-3xl font-bold mt-1">15,847</p>
        </div>

        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-orange-900 to-orange-800 border border-orange-700' : 'bg-gradient-to-br from-orange-500 to-orange-600'
        } text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">-15.3%</span>
          </div>
          <h3 className="text-sm font-medium opacity-80">Slow-Moving Items</h3>
          <p className="text-3xl font-bold mt-1">1,234</p>
        </div>

        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-red-900 to-red-800 border border-red-700' : 'bg-gradient-to-br from-red-500 to-red-600'
        } text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">-22.1%</span>
          </div>
          <h3 className="text-sm font-medium opacity-80">Inventory at Risk</h3>
          <p className="text-3xl font-bold mt-1">9.6%</p>
        </div>
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Sales Trend */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>Category Sales Trends</span>
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesTrendData}>
                <defs>
                  <linearGradient id="electronicsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="foodGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="clothingGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="month" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '12px',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                />
                <Area type="monotone" dataKey="Food" stackId="1" stroke="#F59E0B" fill="url(#foodGradient)" strokeWidth={2} />
                <Area type="monotone" dataKey="Electronics" stackId="1" stroke="#3B82F6" fill="url(#electronicsGradient)" strokeWidth={2} />
                <Area type="monotone" dataKey="Clothing" stackId="1" stroke="#10B981" fill="url(#clothingGradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span>Category Distribution</span>
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '8px',
                    color: isDarkMode ? '#FFFFFF' : '#000000'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {categoryDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold">{item.value}%</span>
                  <div className="text-xs text-green-600">{item.sales}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Product Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top 10 Bestselling Products */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>Top 10 Bestselling Products</span>
          </h3>
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={filteredBestselling} 
                layout="horizontal" 
                margin={{ top: 20, right: 30, left: 150, bottom: 20 }}
              >
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
                  fontSize={11}
                  width={140}
                  tick={{ textAnchor: 'end' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '12px',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value, name) => [
                    `${value} units`,
                    'Sales'
                  ]}
                />
                <Bar dataKey="sales" radius={[0, 8, 8, 0]}>
                  {filteredBestselling.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={
                      entry.category === 'Food' ? '#F59E0B' :
                      entry.category === 'Electronics' ? '#3B82F6' :
                      entry.category === 'Clothing' ? '#10B981' :
                      entry.category === 'Home & Kitchen' ? '#EF4444' : '#8B5CF6'
                    } />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top 10 Slow-moving Products */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <TrendingDown className="w-5 h-5 text-red-600" />
            <span>Top 10 Slow-moving Products</span>
          </h3>
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={filteredSlowMoving} 
                layout="horizontal" 
                margin={{ top: 20, right: 30, left: 150, bottom: 20 }}
              >
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
                  fontSize={11}
                  width={140}
                  tick={{ textAnchor: 'end' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '12px',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value, name) => [
                    `${value} days`,
                    'Days in Stock'
                  ]}
                />
                <Bar dataKey="daysInStock" radius={[0, 8, 8, 0]}>
                  {filteredSlowMoving.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={
                      entry.category === 'Food' ? '#F59E0B' :
                      entry.category === 'Electronics' ? '#EF4444' :
                      entry.category === 'Clothing' ? '#F97316' :
                      entry.category === 'Home & Kitchen' ? '#DC2626' : '#B91C1C'
                    } />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Enhanced Inventory vs Sales Velocity Heatmap */}
      <div className={`rounded-2xl p-6 shadow-xl ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}>
        <h3 className="text-xl font-semibold mb-8 flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <span>Inventory vs Sales Velocity Heatmap</span>
        </h3>
        
        <div className="space-y-8">
          {['Electronics', 'Clothing', 'Food', 'Home & Kitchen'].map((category) => (
            <div key={category} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <h4 className="font-semibold text-lg mb-6 text-center">{category}</h4>
              <div className="grid grid-cols-3 gap-4">
                {['High', 'Medium', 'Low'].map((inventory) => (
                  <div key={inventory} className="space-y-3">
                    <div className={`text-sm font-medium text-center py-2 rounded-lg ${
                      isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-white text-gray-700'
                    } shadow-sm`}>
                      {inventory} Inventory
                    </div>
                    {['High', 'Medium', 'Low'].map((velocity) => {
                      const dataPoint = heatmapData.find(
                        d => d.category === category && d.inventory === inventory && d.velocity === velocity
                      );
                      return (
                        <div
                          key={velocity}
                          className="relative p-4 rounded-xl text-center text-white text-sm font-medium cursor-pointer hover:scale-105 transition-all duration-200 shadow-lg"
                          style={{ backgroundColor: getHeatmapColor(dataPoint?.value || 0) }}
                          title={`${category} - ${inventory} Inventory, ${velocity} Velocity: ${dataPoint?.products} products`}
                        >
                          <div className="text-xs opacity-90 mb-1">{velocity} Velocity</div>
                          <div className="text-xl font-bold">{dataPoint?.products}</div>
                          <div className="text-xs opacity-90">products</div>
                          <div className="absolute top-1 right-1 text-xs bg-black/20 rounded px-1">
                            {dataPoint?.value}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Heatmap Legend */}
        <div className="mt-8 flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-lg shadow-sm"></div>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Optimal (80-100%)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-yellow-500 rounded-lg shadow-sm"></div>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Good (60-79%)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded-lg shadow-sm"></div>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Needs Attention (40-59%)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-500 rounded-lg shadow-sm"></div>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Critical {'(<40%)'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;