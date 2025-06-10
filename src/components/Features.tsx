import React from 'react';
import { 
  Brain, 
  BarChart3, 
  Package, 
  Zap, 
  MapPin, 
  Calendar, 
  RefreshCw,
  TrendingUp 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Recommendation Engine",
      description: "Advanced ML algorithms analyze patterns and predict optimal strategies for slow-moving inventory, providing personalized recommendations for each product category.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards & Visualizations",
      description: "Interactive dashboards provide instant visibility into inventory performance, trends, and actionable insights with customizable views for different stakeholders.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Package,
      title: "Product Bundling Suggestions",
      description: "AI-powered bundling recommendations combine slow-moving items with popular products to increase sales velocity and customer value.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "Flash Sales Insights",
      description: "Predictive analytics determine optimal timing, pricing, and promotion strategies for flash sales to maximize inventory turnover and revenue.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: MapPin,
      title: "Stock Relocation Suggestions",
      description: "Intelligent geographic analysis recommends optimal inventory redistribution across stores to match local demand patterns and preferences.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Calendar,
      title: "Seasonal Demand Analysis",
      description: "Historical and predictive seasonal trend analysis helps anticipate demand fluctuations and prevent inventory accumulation during low-demand periods.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: RefreshCw,
      title: "Feedback Loop & Continuous Learning",
      description: "System continuously learns from implemented strategies and outcomes, improving recommendation accuracy and adapting to changing market conditions.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking & ROI Analysis",
      description: "Comprehensive tracking of implemented strategies with detailed ROI analysis and performance metrics to measure success and optimize future decisions.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Features</span> That Drive Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of AI-powered features transforms inventory management from 
            reactive problem-solving to proactive optimization and strategic decision-making.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Feature Enhancement Indicator */}
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">Active Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Experience the Power of Integrated Intelligence
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                All features work seamlessly together, creating a unified ecosystem that learns, 
                adapts, and optimizes your inventory management processes in real-time.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Smart Integration</h4>
                  <p className="text-blue-200 text-sm">Features complement each other for maximum impact</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Scalable Solution</h4>
                  <p className="text-blue-200 text-sm">Grows with your business needs and complexity</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4">System Performance</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">Processing Speed</span>
                    <span className="text-sm font-medium">99.9% Real-time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">Accuracy Rate</span>
                    <span className="text-sm font-medium">94.7% Prediction</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">Cost Savings</span>
                    <span className="text-sm font-medium">Up to 85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">ROI Timeline</span>
                    <span className="text-sm font-medium">3-6 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;