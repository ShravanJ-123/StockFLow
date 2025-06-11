import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';
import { MapPin, TrendingUp, Award, Zap } from 'lucide-react';

interface StoreComparisonProps {
  isDarkMode: boolean;
}

const StoreComparison: React.FC<StoreComparisonProps> = ({ isDarkMode }) => {
  const [store1, setStore1] = useState('Store #1234 - Downtown');
  const [store2, setStore2] = useState('Store #1235 - Mall Location');

  const stores = [
    'Store #1234 - Downtown',
    'Store #1235 - Mall Location',
    'Store #1236 - Suburban',
    'Store #1237 - Airport',
    'Store #1238 - Highway'
  ];

  const getComparisonData = (store1: string, store2: string) => {
    const store1Data = {
      'Store #1234 - Downtown': { health: 85, sales: 92, slowMoving: 15, turnover: 88, foodSales: 95 },
      'Store #1235 - Mall Location': { health: 78, sales: 85, slowMoving: 22, turnover: 75, foodSales: 82 },
      'Store #1236 - Suburban': { health: 92, sales: 78, slowMoving: 8, turnover: 95, foodSales: 88 },
      'Store #1237 - Airport': { health: 65, sales: 95, slowMoving: 35, turnover: 68, foodSales: 78 },
      'Store #1238 - Highway': { health: 88, sales: 82, slowMoving: 12, turnover: 85, foodSales: 85 }
    };

    const data1 = store1Data[store1 as keyof typeof store1Data] || store1Data['Store #1234 - Downtown'];
    const data2 = store1Data[store2 as keyof typeof store1Data] || store1Data['Store #1235 - Mall Location'];

    return [
      {
        metric: 'Inventory Health',
        [store1.split(' - ')[0]]: data1.health,
        [store2.split(' - ')[0]]: data2.health,
        fullMark: 100
      },
      {
        metric: 'Sales Performance',
        [store1.split(' - ')[0]]: data1.sales,
        [store2.split(' - ')[0]]: data2.sales,
        fullMark: 100
      },
      {
        metric: 'Slow-Moving Control',
        [store1.split(' - ')[0]]: 100 - data1.slowMoving,
        [store2.split(' - ')[0]]: 100 - data2.slowMoving,
        fullMark: 100
      },
      {
        metric: 'Turnover Efficiency',
        [store1.split(' - ')[0]]: data1.turnover,
        [store2.split(' - ')[0]]: data2.turnover,
        fullMark: 100
      },
      {
        metric: 'Food Category Performance',
        [store1.split(' - ')[0]]: data1.foodSales,
        [store2.split(' - ')[0]]: data2.foodSales,
        fullMark: 100
      }
    ];
  };

  const comparisonData = getComparisonData(store1, store2);

  const getDetailedMetrics = (store: string) => {
    const metrics = {
      'Store #1234 - Downtown': {
        totalProducts: 12847,
        slowMovingProducts: 1234,
        monthlyRevenue: '$2.4M',
        inventoryValue: '$8.2M',
        turnoverRate: '6.2x',
        stockoutRate: '2.1%',
        foodRevenue: '$856K',
        foodTurnover: '8.4x'
      },
      'Store #1235 - Mall Location': {
        totalProducts: 11523,
        slowMovingProducts: 1876,
        monthlyRevenue: '$2.1M',
        inventoryValue: '$7.8M',
        turnoverRate: '5.8x',
        stockoutRate: '3.2%',
        foodRevenue: '$672K',
        foodTurnover: '7.1x'
      },
      'Store #1236 - Suburban': {
        totalProducts: 13245,
        slowMovingProducts: 892,
        monthlyRevenue: '$1.9M',
        inventoryValue: '$6.9M',
        turnoverRate: '7.1x',
        stockoutRate: '1.8%',
        foodRevenue: '$589K',
        foodTurnover: '9.2x'
      },
      'Store #1237 - Airport': {
        totalProducts: 8934,
        slowMovingProducts: 2156,
        monthlyRevenue: '$3.2M',
        inventoryValue: '$5.4M',
        turnoverRate: '4.9x',
        stockoutRate: '4.1%',
        foodRevenue: '$1.1M',
        foodTurnover: '6.8x'
      },
      'Store #1238 - Highway': {
        totalProducts: 10876,
        slowMovingProducts: 1098,
        monthlyRevenue: '$2.2M',
        inventoryValue: '$7.1M',
        turnoverRate: '6.8x',
        stockoutRate: '2.5%',
        foodRevenue: '$734K',
        foodTurnover: '7.9x'
      }
    };

    return metrics[store as keyof typeof metrics] || metrics['Store #1234 - Downtown'];
  };

  const store1Metrics = getDetailedMetrics(store1);
  const store2Metrics = getDetailedMetrics(store2);

  // Monthly performance comparison data
  const monthlyComparison = [
    { month: 'Jan', [store1.split(' - ')[0]]: 2100, [store2.split(' - ')[0]]: 1900 },
    { month: 'Feb', [store1.split(' - ')[0]]: 2300, [store2.split(' - ')[0]]: 2100 },
    { month: 'Mar', [store1.split(' - ')[0]]: 2200, [store2.split(' - ')[0]]: 2000 },
    { month: 'Apr', [store1.split(' - ')[0]]: 2500, [store2.split(' - ')[0]]: 2200 },
    { month: 'May', [store1.split(' - ')[0]]: 2400, [store2.split(' - ')[0]]: 2100 },
    { month: 'Jun', [store1.split(' - ')[0]]: 2600, [store2.split(' - ')[0]]: 2300 },
  ];

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className={`rounded-3xl p-8 shadow-2xl ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 via-green-900 to-blue-900' 
          : 'bg-gradient-to-br from-green-600 via-blue-600 to-purple-600'
      } text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-3">
            <MapPin className="w-8 h-8 text-yellow-300" />
            <h2 className="text-3xl font-bold">Store Performance Comparison</h2>
          </div>
          <p className="text-blue-100 text-lg mb-6">
            Compare performance metrics between different store locations and identify optimization opportunities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">Stores Analyzed</h4>
              <p className="text-2xl font-bold text-green-300">{stores.length}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">Performance Metrics</h4>
              <p className="text-2xl font-bold text-yellow-300">8+</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">Real-time Data</h4>
              <p className="text-2xl font-bold text-purple-300">Live</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Store Selection */}
      <div className={`rounded-2xl p-6 shadow-xl ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}>
        <h3 className="text-xl font-semibold mb-6">Select Stores to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Primary Store
            </label>
            <select
              value={store1}
              onChange={(e) => setStore1(e.target.value)}
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
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Comparison Store
            </label>
            <select
              value={store2}
              onChange={(e) => setStore2(e.target.value)}
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
        </div>
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Radar Chart */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6">Performance Radar Analysis</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={comparisonData}>
                <PolarGrid stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                <PolarAngleAxis 
                  dataKey="metric" 
                  tick={{ fill: isDarkMode ? '#9CA3AF' : '#6B7280', fontSize: 11 }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]}
                  tick={{ fill: isDarkMode ? '#9CA3AF' : '#6B7280', fontSize: 10 }}
                />
                <Radar
                  name={store1.split(' - ')[0]}
                  dataKey={store1.split(' - ')[0]}
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.2}
                  strokeWidth={3}
                />
                <Radar
                  name={store2.split(' - ')[0]}
                  dataKey={store2.split(' - ')[0]}
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.2}
                  strokeWidth={3}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '12px',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Enhanced Legend */}
          <div className="flex justify-center space-x-8 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {store1}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {store2}
              </span>
            </div>
          </div>
        </div>

        {/* Monthly Performance Trend */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6">Monthly Revenue Comparison</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyComparison}>
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
                <Line 
                  type="monotone" 
                  dataKey={store1.split(' - ')[0]} 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey={store2.split(' - ')[0]} 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Enhanced Detailed Metrics Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Store 1 Enhanced Metrics */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700' : 'bg-gradient-to-br from-blue-500 to-blue-600'
        } text-white`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">{store1}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Total Products</span>
              <p className="text-2xl font-bold">{store1Metrics.totalProducts.toLocaleString()}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Monthly Revenue</span>
              <p className="text-2xl font-bold text-green-300">{store1Metrics.monthlyRevenue}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Food Revenue</span>
              <p className="text-2xl font-bold text-yellow-300">{store1Metrics.foodRevenue}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Food Turnover</span>
              <p className="text-2xl font-bold text-orange-300">{store1Metrics.foodTurnover}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Slow-Moving</span>
              <p className="text-2xl font-bold text-red-300">{store1Metrics.slowMovingProducts.toLocaleString()}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Turnover Rate</span>
              <p className="text-2xl font-bold text-purple-300">{store1Metrics.turnoverRate}</p>
            </div>
          </div>
        </div>

        {/* Store 2 Enhanced Metrics */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gradient-to-br from-green-900 to-green-800 border border-green-700' : 'bg-gradient-to-br from-green-500 to-green-600'
        } text-white`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">{store2}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Total Products</span>
              <p className="text-2xl font-bold">{store2Metrics.totalProducts.toLocaleString()}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Monthly Revenue</span>
              <p className="text-2xl font-bold text-green-300">{store2Metrics.monthlyRevenue}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Food Revenue</span>
              <p className="text-2xl font-bold text-yellow-300">{store2Metrics.foodRevenue}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Food Turnover</span>
              <p className="text-2xl font-bold text-orange-300">{store2Metrics.foodTurnover}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Slow-Moving</span>
              <p className="text-2xl font-bold text-red-300">{store2Metrics.slowMovingProducts.toLocaleString()}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <span className="text-sm opacity-80">Turnover Rate</span>
              <p className="text-2xl font-bold text-purple-300">{store2Metrics.turnoverRate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Performance Insights */}
      <div className={`rounded-2xl p-6 shadow-xl ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}>
        <h3 className="text-xl font-semibold mb-6">AI-Powered Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-green-900/30 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-green-600" />
              <h4 className="font-semibold text-green-700">Best Performing Store</h4>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {store1Metrics.turnoverRate > store2Metrics.turnoverRate ? store1 : store2} 
              {' '}shows superior inventory management with {store1Metrics.turnoverRate > store2Metrics.turnoverRate ? store1Metrics.turnoverRate : store2Metrics.turnoverRate} turnover rate and strong food category performance.
            </p>
          </div>
          
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-blue-900/30 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h4 className="font-semibold text-blue-700">Growth Opportunities</h4>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {store1Metrics.slowMovingProducts > store2Metrics.slowMovingProducts ? store1 : store2} 
              {' '}could benefit from implementing AI recommendations to reduce slow-moving inventory by 25-40%, especially in food categories.
            </p>
          </div>

          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-purple-900/30 border border-purple-700' : 'bg-purple-50 border border-purple-200'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
              <h4 className="font-semibold text-purple-700">Food Category Focus</h4>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Food categories show high velocity across both stores. Implementing smart bundling and freshness optimization could increase food revenue by 15-20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreComparison;