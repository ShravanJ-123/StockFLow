import React from 'react';

interface AnalyticsProps {
  isDarkMode?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ isDarkMode = false }) => {
  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <div className="space-y-4">
        <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Analytics dashboard coming soon. This will display key performance indicators and insights.
          </p>
        </div>
        <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className="text-lg font-semibold mb-2">Usage Statistics</h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Track user engagement and system performance metrics here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;