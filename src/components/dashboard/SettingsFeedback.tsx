import React, { useState } from 'react';
import { Send, Star, MessageSquare, Settings as SettingsIcon, Save } from 'lucide-react';

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
    confidenceThreshold: 85
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
    // Simulate API call
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
    // Simulate saving settings
    alert('Settings saved successfully!');
  };

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className={`transition-colors duration-200 ${
              star <= rating ? 'text-yellow-400' : isDarkMode ? 'text-gray-600' : 'text-gray-300'
            }`}
          >
            <Star className="w-6 h-6 fill-current" />
          </button>
        ))}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className={`rounded-2xl p-12 shadow-lg text-center ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Your feedback has been submitted successfully. We'll use it to improve our AI recommendations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Settings & Feedback</h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Configure your preferences and help us improve the system
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feedback Form */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center space-x-2 mb-6">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold">Submit Feedback</h3>
          </div>

          <form onSubmit={handleFeedbackSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className={`block text-sm font-medium mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Overall System Rating
              </label>
              <StarRating 
                rating={feedbackForm.rating} 
                onRatingChange={(rating) => handleFeedbackChange('rating', rating)}
              />
            </div>

            {/* Recommendation Feedback */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Feedback on AI Recommendations
              </label>
              <textarea
                value={feedbackForm.recommendationFeedback}
                onChange={(e) => handleFeedbackChange('recommendationFeedback', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="How accurate and helpful are the AI recommendations? What could be improved?"
              />
            </div>

            {/* System Suggestions */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Suggestions to Improve System
              </label>
              <textarea
                value={feedbackForm.systemSuggestions}
                onChange={(e) => handleFeedbackChange('systemSuggestions', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="What features would you like to see? How can we make the system more useful?"
              />
            </div>

            {/* Inventory Notes */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Notes About Specific Inventory Conditions
              </label>
              <textarea
                value={feedbackForm.inventoryNotes}
                onChange={(e) => handleFeedbackChange('inventoryNotes', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Any specific inventory challenges or seasonal patterns we should know about?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Submit Feedback</span>
            </button>
          </form>
        </div>

        {/* Settings Panel */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center space-x-2 mb-6">
            <SettingsIcon className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold">System Settings</h3>
          </div>

          <div className="space-y-6">
            {/* Notification Settings */}
            <div>
              <h4 className="font-medium mb-4">Notification Preferences</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Notifications
                  </span>
                  <button
                    onClick={() => handleSettingsChange('emailNotifications', !settings.emailNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      settings.emailNotifications ? 'bg-blue-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Push Notifications
                  </span>
                  <button
                    onClick={() => handleSettingsChange('pushNotifications', !settings.pushNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      settings.pushNotifications ? 'bg-blue-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Weekly Reports
                  </span>
                  <button
                    onClick={() => handleSettingsChange('weeklyReports', !settings.weeklyReports)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      settings.weeklyReports ? 'bg-blue-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        settings.weeklyReports ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Urgent Alerts
                  </span>
                  <button
                    onClick={() => handleSettingsChange('urgentAlerts', !settings.urgentAlerts)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      settings.urgentAlerts ? 'bg-blue-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        settings.urgentAlerts ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* AI Settings */}
            <div>
              <h4 className="font-medium mb-4">AI Recommendation Settings</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Auto-implement Low-risk Recommendations
                  </span>
                  <button
                    onClick={() => handleSettingsChange('autoImplement', !settings.autoImplement)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      settings.autoImplement ? 'bg-blue-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
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
                  <label className={`block text-sm font-medium mb-2 ${
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Conservative (50%)</span>
                    <span>Aggressive (95%)</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleSettingsSave}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            View Documentation
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
            Contact Support
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
            Schedule Training
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsFeedback;