import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  DollarSign, 
  AlertTriangle,
  Target
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface OverviewProps {
  isDarkMode: boolean;
}

const Overview: React.FC<OverviewProps> = ({ isDarkMode }) => {
  const summaryCards = [
    {
      title: 'Total Products',
      value: '12,847',
      change: '+2.5%',
      trend: 'up',
      icon: Package,
      color: 'blue'
    },
    {
      title: 'Slow-Moving Products',
      value: '1,234',
      change: '-8.2%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Inventory At Risk',
      value: '9.6%',
      change: '-12.1%',
      trend: 'down',
      icon: Target,
      color: 'orange'
    },
    {
      title: 'Sales (30 Days)',
      value: '$2.4M',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    }
  ];

  const salesData = [
    { name: 'Jan', sales: 2100, forecast: 2200 },
    { name: 'Feb', sales: 2300, forecast: 2400 },
    { name: 'Mar', sales: 2200, forecast: 2350 },
    { name: 'Apr', sales: 2500, forecast: 2600 },
    { name: 'May', sales: 2400, forecast: 2500 },
    { name: 'Jun', sales: 2600, forecast: 2700 },
    { name: 'Jul', sales: 2800, forecast: 2900 },
  ];

  const inventoryHealthData = [
    { name: 'Healthy', value: 85, color: '#10B981' },
    { name: 'At Risk', value: 10, color: '#F59E0B' },
    { name: 'Slow-Moving', value: 5, color: '#EF4444' },
  ];

  const getCardBgColor = (color: string) => {
    const colors = {
      blue: isDarkMode ? 'from-blue-600 to-blue-700' : 'from-blue-500 to-blue-600',
      red: isDarkMode ? 'from-red-600 to-red-700' : 'from-red-500 to-red-600',
      orange: isDarkMode ? 'from-orange-600 to-orange-700' : 'from-orange-500 to-orange-600',
      green: isDarkMode ? 'from-green-600 to-green-700' : 'from-green-500 to-green-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Real-time insights into your inventory performance and sales trends
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCardBgColor(card.color)} flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  card.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {card.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{card.change}</span>
                </div>
              </div>
              <div>
                <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {card.title}
                </h3>
                <p className="text-2xl font-bold mt-1">{card.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Trends Chart */}
        <div className={`lg:col-span-2 rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold mb-4">Sales Trends & Forecast</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="name" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '8px',
                    color: isDarkMode ? '#FFFFFF' : '#000000'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="Actual Sales ($K)"
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
                  name="Forecasted Sales ($K)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inventory Health Gauge */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold mb-4">Inventory Health</h3>
          <div className="h-80 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="60%">
              <PieChart>
                <Pie
                  data={inventoryHealthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {inventoryHealthData.map((entry, index) => (
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
            <div className="space-y-2 mt-4">
              {inventoryHealthData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            View Recommendations
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
            Generate Report
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
            Schedule Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;