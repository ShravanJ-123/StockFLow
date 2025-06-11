import React, { useState } from 'react';
import { Send, Star, MessageSquare, Settings as SettingsIcon, Save, Shield, Bell, Palette, Zap } from 'lucide-react';

interface SettingsFeedbackProps {
  isDarkMode: boolean;
}

const SettingsFeedback: React.FC<SettingsFeedbackProps> = ({ isDarkMode }) => {
  const [feedbackForm, setFeedbackForm] = useState({
    recommendationFeedback: '',
    systemSuggestions: '',
    inventoryNotes: '',
    rating: 0
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    urgentAlerts: true,
    autoImplement: false,
    confidenceThreshold: 85,
    darkMode: false,
    dataRetention: 12,
    apiAccess: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFeedbackChange = (field: string, value: string | number) => {
    setFeedbackForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSettingsChange = (field: string, value: boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedbackForm({
        recommendationFeedback: '',
        systemSuggestions: '',
        inventoryNotes: '',
        rating: 0
      });
    }, 3000);
  };

  const handleSettingsSave = () => {
    alert('Settings saved successfully!');
  };

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className={`transition-all duration-200 hover:scale-110 ${
              star <= rating ? 'text-yellow-400' : isDarkMode ? 'text-gray-600' : 'text-gray-300'
            }`}
          >
            <Star className="w-7 h-7 fill-current" />
          </button>
        ))}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className={`rounded-3xl p-12 shadow-2xl text-center ${
          isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-white to-gray-50'
        }`}>
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Thank You!</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Your feedback has been submitted successfully. We'll use it to improve our AI recommendations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className={`rounded-3xl p-8 shadow-2xl ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 via-purple-900 to-indigo-900' 
          : 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600'
      } text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-3">
            <SettingsIcon className="w-8 h-8 text-yellow-300" />
            <h2 className="text-3xl font-bold">Settings & Feedback</h2>
          </div>
          <p className="text-blue-100 text-lg mb-6">
            Configure your preferences and help us improve the system with your valuable feedback
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">System Health</h4>
              <p className="text-2xl font-bold text-green-300">Excellent</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">User Satisfaction</h4>
              <p className="text-2xl font-bold text-yellow-300">94.7%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="font-semibold mb-2">Active Users</h4>
              <p className="text-2xl font-bold text-purple-300">2,847</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Feedback Form */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
        }`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Submit Feedback</h3>
          </div>

          <form onSubmit={handleFeedbackSubmit} className="space-y-6">
            {/* Enhanced Rating */}
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gradient-to-br from-yellow-50 to-orange-50'} border ${isDarkMode ? 'border-gray-600' : 'border-yellow-200'}`}>
              <label className={`block text-sm font-medium mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Overall System Rating
              </label>
              <div className="flex items-center justify-between">
                <StarRating 
                  rating={feedbackForm.rating} 
                  onRatingChange={(rating) => handleFeedbackChange('rating', rating)}
                />
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">{feedbackForm.rating}/5</div>
                  <div className="text-xs text-gray-500">
                    {feedbackForm.rating === 0 ? 'No rating' :
                     feedbackForm.rating <= 2 ? 'Needs improvement' :
                     feedbackForm.rating <= 3 ? 'Good' :
                     feedbackForm.rating <= 4 ? 'Very good' : 'Excellent'}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Feedback Fields */}
            <div>
              <label className={`block text-sm font-medium mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Feedback on AI Recommendations
              </label>
              <textarea
                value={feedbackForm.recommendationFeedback}
                onChange={(e) => handleFeedbackChange('recommendationFeedback', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
                placeholder="How accurate and helpful are the AI recommendations? What could be improved?"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Suggestions to Improve System
              </label>
              <textarea
                value={feedbackForm.systemSuggestions}
                onChange={(e) => handleFeedbackChange('systemSuggestions', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
                placeholder="What features would you like to see? How can we make the system more useful?"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Notes About Specific Inventory Conditions
              </label>
              <textarea
                value={feedbackForm.inventoryNotes}
                onChange={(e) => handleFeedbackChange('inventoryNotes', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/20 focus:border-transparent shadow-sm`}
                placeholder="Any specific inventory challenges or seasonal patterns we should know about?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Submit Feedback</span>
            </button>
          </form>
        </div>

        {/* Enhanced Settings Panel */}
        <div className={`rounded-2xl p-6 shadow-xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' :   'bg-white border border-gray-100'
        }`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
              <SettingsIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">System Settings</h3>
          </div>

          <div className="space-y-8">
            {/* Notification Settings */}
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gradient-to-br from-blue-50 to-indigo-50'} border ${isDarkMode ? 'border-gray-600' : 'border-blue-200'}`}>
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold">Notification Preferences</h4>
              </div>
              <div className="space-y-4">
                {[
                  { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email' },
                  { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications' },
                  { key: 'weeklyReports', label: 'Weekly Reports', desc: 'Automated weekly summaries' },
                  { key: 'urgentAlerts', label: 'Urgent Alerts', desc: 'Critical inventory alerts' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div>
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.label}
                      </span>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {item.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSettingsChange(item.key, !settings[item.key as keyof typeof settings])}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings[item.key as keyof typeof settings] ? 'bg-blue-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings[item.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Settings */}
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gradient-to-br from-purple-50 to-pink-50'} border ${isDarkMode ? 'border-gray-600' : 'border-purple-200'}`}>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold">AI Recommendation Settings</h4>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Auto-implement Low-risk Recommendations
                    </span>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      Automatically apply safe recommendations
                    </p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('autoImplement', !settings.autoImplement)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      settings.autoImplement ? 'bg-purple-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        settings.autoImplement ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Confidence Threshold: {settings.confidenceThreshold}%
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="95"
                    value={settings.confidenceThreshold}
                    onChange={(e) => handleSettingsChange('confidenceThreshold', parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Conservative (50%)</span>
                    <span>Aggressive (95%)</span>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Data Retention Period: {settings.dataRetention} months
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    value={settings.dataRetention}
                    onChange={(e) => handleSettingsChange('dataRetention', parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>3 months</span>
                    <span>24 months</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleSettingsSave}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Help & Support */}
      <div className={`rounded-2xl p-6 shadow-xl ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}>
        <h3 className="text-xl font-semibold mb-6">Help & Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>View Documentation</span>
          </button>
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Contact Support</span>
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
            <Palette className="w-5 h-5" />
            <span>Schedule Training</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsFeedback;