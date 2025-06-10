import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Lightbulb, 
  BarChart3, 
  GitCompare, 
  Settings,
  Bell,
  User,
  Moon,
  Sun,
  ArrowLeft,
  Search,
  Filter
} from 'lucide-react';
import Overview from './dashboard/Overview';
import Recommendations from './dashboard/Recommendations';
import Analytics from './dashboard/Analytics';
import StoreComparison from './dashboard/StoreComparison';
import SettingsFeedback from './dashboard/SettingsFeedback';

interface DashboardProps {
  onBackToLanding: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBackToLanding }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'recommendations', name: 'Recommendations', icon: Lightbulb },
    { id: 'analytics', name: 'Sales & Inventory', icon: BarChart3 },
    { id: 'comparison', name: 'Store Comparison', icon: GitCompare },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview isDarkMode={isDarkMode} />;
      case 'recommendations':
        return <Recommendations isDarkMode={isDarkMode} />;
      case 'analytics':
        return <Analytics isDarkMode={isDarkMode} />;
      case 'comparison':
        return <StoreComparison isDarkMode={isDarkMode} />;
      case 'settings':
        return <SettingsFeedback isDarkMode={isDarkMode} />;
      default:
        return <Overview isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Top Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b`}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToLanding}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold">Smart StockFlow AI Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search products..."
                className={`pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <button className={`p-2 rounded-lg transition-colors duration-200 relative ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}>
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button className={`p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}>
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`fixed left-0 top-16 bottom-0 w-64 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-r overflow-y-auto`}>
        <nav className="p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Store Selector */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <label className={`block text-sm font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Current Store
          </label>
          <select className={`w-full px-3 py-2 rounded-lg border transition-colors duration-200 ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}>
            <option>Walmart Supercenter #1234</option>
            <option>Walmart Supercenter #1235</option>
            <option>Walmart Supercenter #1236</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;