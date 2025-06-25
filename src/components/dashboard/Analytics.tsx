import React from 'react';

interface AnalyticsProps {
  isDarkMode: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ isDarkMode }) => {
  return (
    <div className="space-y-6">
      <div className={`rounded-lg shadow-sm border p-6 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Analytics Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800">Total Stores Monitored</h3>
            <p className="text-2xl font-bold text-blue-900">24</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-800">Price Alerts Sent</h3>
            <p className="text-2xl font-bold text-green-900">156</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-800">Money Saved</h3>
            <p className="text-2xl font-bold text-purple-900">$1,247</p>
          </div>
        </div>
      </div>
      
      <div className={`rounded-lg shadow-sm border p-6 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Price Trends</h3>
        <div className={`h-64 rounded-lg flex items-center justify-center ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
            Price trend chart would be displayed here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;