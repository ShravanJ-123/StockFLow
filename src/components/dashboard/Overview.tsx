import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  DollarSign, 
  AlertTriangle,
  Target,
  ShoppingCart,
  Users,
  Clock,
  Award,
  Zap,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, BarChart, Bar } from 'recharts';

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
      color: 'blue',
      description: 'Active inventory items'
    },
    {
      title: 'Slow-Moving Products',
      value: '1,234',
      change: '-8.2%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'red',
      description: 'Items requiring attention'
    },
    {
      title: 'Inventory At Risk',
      value: '9.6%',
      change: '-12.1%',
      trend: 'down',
      icon: Target,
      color: 'orange',
      description: 'Potential loss value'
    },
    {
      title: 'Sales (30 Days)',
      value: '$2.4M',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'green',
      description: 'Monthly revenue'
    }
  ];

  const additionalMetrics = [
    {
      title: 'Customer Satisfaction',
      value: '94.2%',
      change: '+3.1%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Avg. Response Time',
      value: '2.3h',
      change: '-15.4%',
      trend: 'down',
      icon: Clock,
      color: 'indigo'
    },
    {
      title: 'AI Accuracy',
      value: '96.8%',
      change: '+2.7%',
      trend: 'up',
      icon: Award,
      color: 'emerald'
    },
    {
      title: 'Cost Savings',
      value: '$847K',
      change: '+28.9%',
      trend: 'up',
      icon: Zap,
      color: 'yellow'
    }
  ];

  const salesData = [
    { name: 'Jan', sales: 2100, forecast: 2200, target: 2000 },
    { name: 'Feb', sales: 2300, forecast: 2400, target: 2200 },
    { name: 'Mar', sales: 2200, forecast: 2350, target: 2100 },
    { name: 'Apr', sales: 2500, forecast: 2600, target: 2300 },
    { name: 'May', sales: 2400, forecast: 2500, target: 2400 },
    { name: 'Jun', sales: 2600, forecast: 2700, target: 2500 },
    { name: 'Jul', sales: 2800, forecast: 2900, target: 2600 },
  ];

  const categoryPerformance = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 25, color: '#10B981' },
    { name: 'Food', value: 20, color: '#F59E0B' },
    { name: 'Home & Garden', value: 15, color: '#EF4444' },
    { name: 'Sports', value: 5, color: '#8B5CF6' },
  ];

  const inventoryHealthData = [
    { name: 'Healthy', value: 85, color: '#10B981' },
    { name: 'At Risk', value: 10, color: '#F59E0B' },
    { name: 'Slow-Moving', value: 5, color: '#EF4444' },
  ];

  const recentActivity = [
    { action: 'Flash Sale Implemented', product: 'Samsung TV 55"', impact: '+$12K revenue', time: '2 hours ago', type: 'success' },
    { action: 'Bundle Created', product: 'iPhone + Case', impact: '+15% sales', time: '4 hours ago', type: 'info' },
    { action: 'Stock Relocated', product: 'Winter Coats', impact: 'Reduced by 30%', time: '6 hours ago', type: 'warning' },
    { action: 'Price Optimized', product: 'Gaming Chair', impact: '+8% margin', time: '8 hours ago', type: 'success' },
  ];

  const getCardBgColor = (color: string) => {
    const colors = {
      blue: isDarkMode ? 'from-blue-600 to-blue-700' : 'from-blue-500 to-blue-600',
      red: isDarkMode ? 'from-red-600 to-red-700' : 'from-red-500 to-red-600',
      orange: isDarkMode ? 'from-orange-600 to-orange-700' : 'from-orange-500 to-orange-600',
      green: isDarkMode ? 'from-green-600 to-green-700' : 'from-green-500 to-green-600',
      purple: isDarkMode ? 'from-purple-600 to-purple-700' : 'from-purple-500 to-purple-600',
      indigo: isDarkMode ? 'from-indigo-600 to-indigo-700' : 'from-indigo-500 to-indigo-600',
      emerald: isDarkMode ? 'from-emerald-600 to-emerald-700' : 'from-emerald-500 to-emerald-600',
      yellow: isDarkMode ? 'from-yellow-600 to-yellow-700' : 'from-yellow-500 to-yellow-600',
    };
    return colors[color as keyof typeof colors];
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success': return '✅';
      case 'info': return 'ℹ️';
      case 'warning': return '⚠️';
      default: return '📊';
    }
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className={`rounded-3xl p-8 shadow-2xl ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'
      } text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold mb-3">Welcome to Smart StockFlow AI</h2>
          <p className="text-blue-100 text-lg mb-6">
            Real-time insights into your inventory performance and intelligent recommendations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">Today's Highlights</h4>
              <p className="text-sm text-blue-200">15 new recommendations generated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">System Status</h4>
              <p className="text-sm text-green-200">All systems operational</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">Next Update</h4>
              <p className="text-sm text-blue-200">In 2 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
              } relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${getCardBgColor(card.color)} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm font-medium ${
                    card.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {card.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span>{card.change}</span>
                  </div>
                </div>
                <div>
                  <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {card.title}
                  </h3>
                  <p className="text-3xl font-bold mb-1">{card.value}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {additionalMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={index}
              className={`rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getCardBgColor(metric.color)} flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className={`text-xs font-medium ${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-lg font-bold">{metric.value}</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {metric.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Enhanced Sales Trends Chart */}
        <div className={`lg:col-span-2 rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Sales Performance & Forecast</h3>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-500">Actual</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-500">Forecast</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-gray-500">Target</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                <XAxis dataKey="name" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
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
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  fill="url(#salesGradient)"
                  name="Actual Sales ($K)"
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  name="Forecasted Sales ($K)"
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 3 }}
                  name="Target ($K)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Enhanced Category Performance */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6">Category Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryPerformance}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryPerformance.map((entry, index) => (
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
          <div className="space-y-2 mt-4">
            {categoryPerformance.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.name}
                  </span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity & Inventory Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6">Recent AI Actions</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
                isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">{getActivityIcon(activity.type)}</span>
                    <div>
                      <h4 className="font-medium">{activity.action}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {activity.product}
                      </p>
                      <p className="text-sm font-medium text-green-600">{activity.impact}</p>
                    </div>
                  </div>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Inventory Health */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <h3 className="text-xl font-semibold mb-6">Inventory Health Overview</h3>
          <div className="h-64 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="70%">
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
            <div className="space-y-2 mt-4 w-full">
              {inventoryHealthData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Quick Actions */}
      <div className={`rounded-2xl p-6 shadow-xl ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}>
        <h3 className="text-xl font-semibold mb-6">Quick Actions & Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <BarChart3 className="w-5 h-5 mx-auto mb-2" />
            View Recommendations
          </button>
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Package className="w-5 h-5 mx-auto mb-2" />
            Generate Report
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Target className="w-5 h-5 mx-auto mb-2" />
            Schedule Analysis
          </button>
          <button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-4 rounded-xl font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Zap className="w-5 h-5 mx-auto mb-2" />
            AI Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;