import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface StoreComparisonProps {
  isDarkMode: boolean;
}

const StoreComparison: React.FC<StoreComparisonProps> = ({ isDarkMode }) => {
  const [store1, setStore1] = useState('Store #1234');
  const [store2, setStore2] = useState('Store #1235');

  const stores = [
    'Store #1234 - Downtown',
    'Store #1235 - Mall Location',
    'Store #1236 - Suburban',
    'Store #1237 - Airport',
    'Store #1238 - Highway'
  ];

  const getComparisonData = (store1: string, store2: string) => {
    // Simulated data based on store selection
    const store1Data = {
      'Store #1234 - Downtown': { health: 85, sales: 92, slowMoving: 15, turnover: 88 },
      'Store #1235 - Mall Location': { health: 78, sales: 85, slowMoving: 22, turnover: 75 },
      'Store #1236 - Suburban': { health: 92, sales: 78, slowMoving: 8, turnover: 95 },
      'Store #1237 - Airport': { health: 65, sales: 95, slowMoving: 35, turnover: 68 },
      'Store #1238 - Highway': { health: 88, sales: 82, slowMoving: 12, turnover: 85 }
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
        metric: 'Sales Trends',
        [store1.split(' - ')[0]]: data1.sales,
        [store2.split(' - ')[0]]: data2.sales,
        fullMark: 100
      },
      {
        metric: 'Slow-Moving Items',
        [store1.split(' - ')[0]]: 100 - data1.slowMoving, // Inverted for better visualization
        [store2.split(' - ')[0]]: 100 - data2.slowMoving,
        fullMark: 100
      },
      {
        metric: 'Turnover Ratio',
        [store1.split(' - ')[0]]: data1.turnover,
        [store2.split(' - ')[0]]: data2.turnover,
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
        stockoutRate: '2.1%'
      },
      'Store #1235 - Mall Location': {
        totalProducts: 11523,
        slowMovingProducts: 1876,
        monthlyRevenue: '$2.1M',
        inventoryValue: '$7.8M',
        turnoverRate: '5.8x',
        stockoutRate: '3.2%'
      },
      'Store #1236 - Suburban': {
        totalProducts: 13245,
        slowMovingProducts: 892,
        monthlyRevenue: '$1.9M',
        inventoryValue: '$6.9M',
        turnoverRate: '7.1x',
        stockoutRate: '1.8%'
      },
      'Store #1237 - Airport': {
        totalProducts: 8934,
        slowMovingProducts: 2156,
        monthlyRevenue: '$3.2M',
        inventoryValue: '$5.4M',
        turnoverRate: '4.9x',
        stockoutRate: '4.1%'
      },
      'Store #1238 - Highway': {
        totalProducts: 10876,
        slowMovingProducts: 1098,
        monthlyRevenue: '$2.2M',
        inventoryValue: '$7.1M',
        turnoverRate: '6.8x',
        stockoutRate: '2.5%'
      }
    };

    return metrics[store as keyof typeof metrics] || metrics['Store #1234 - Downtown'];
  };

  const store1Metrics = getDetailedMetrics(store1);
  const store2Metrics = getDetailedMetrics(store2);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Store Comparison</h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Compare performance metrics between different store locations
        </p>
      </div>

      {/* Store Selection */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className="text-lg font-semibold mb-4">Select Stores to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Store 1
            </label>
            <select
              value={store1}
              onChange={(e) => setStore1(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
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
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Store 2
            </label>
            <select
              value={store2}
              onChange={(e) => setStore2(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
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
        </div>
      </div>

      {/* Radar Chart Comparison */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className="text-lg font-semibold mb-4">Performance Radar Chart</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={comparisonData}>
              <PolarGrid stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
              <PolarAngleAxis 
                dataKey="metric" 
                tick={{ fill: isDarkMode ? '#9CA3AF' : '#6B7280', fontSize: 12 }}
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
                fillOpacity={0.1}
                strokeWidth={2}
              />
              <Radar
                name={store2.split(' - ')[0]}
                dataKey={store2.split(' - ')[0]}
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.1}
                strokeWidth={2}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                  border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#FFFFFF' : '#000000'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center space-x-8 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {store1}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {store2}
            </span>
          </div>
        </div>
      </div>

      {/* Detailed Metrics Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store 1 Metrics */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold mb-4 text-blue-600">{store1}</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Products</span>
              <span className="font-semibold">{store1Metrics.totalProducts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Slow-Moving Products</span>
              <span className="font-semibold text-red-600">{store1Metrics.slowMovingProducts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Monthly Revenue</span>
              <span className="font-semibold text-green-600">{store1Metrics.monthlyRevenue}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Inventory Value</span>
              <span className="font-semibold">{store1Metrics.inventoryValue}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Turnover Rate</span>
              <span className="font-semibold text-blue-600">{store1Metrics.turnoverRate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Stock-out Rate</span>
              <span className="font-semibold text-orange-600">{store1Metrics.stockoutRate}</span>
            </div>
          </div>
        </div>

        {/* Store 2 Metrics */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold mb-4 text-green-600">{store2}</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Products</span>
              <span className="font-semibold">{store2Metrics.totalProducts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Slow-Moving Products</span>
              <span className="font-semibold text-red-600">{store2Metrics.slowMovingProducts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Monthly Revenue</span>
              <span className="font-semibold text-green-600">{store2Metrics.monthlyRevenue}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Inventory Value</span>
              <span className="font-semibold">{store2Metrics.inventoryValue}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Turnover Rate</span>
              <span className="font-semibold text-blue-600">{store2Metrics.turnoverRate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Stock-out Rate</span>
              <span className="font-semibold text-orange-600">{store2Metrics.stockoutRate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className="text-lg font-semibold mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-blue-600">Best Performing Store</h4>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Based on overall metrics, {store1Metrics.turnoverRate > store2Metrics.turnoverRate ? store1 : store2} 
              shows better inventory management with higher turnover rates and lower slow-moving inventory.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-green-600">Improvement Opportunities</h4>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {store1Metrics.slowMovingProducts > store2Metrics.slowMovingProducts ? store1 : store2} 
              could benefit from implementing AI recommendations to reduce slow-moving inventory by 25-40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreComparison;