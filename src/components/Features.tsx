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
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards & Visualizations",
      description: "Interactive dashboards provide instant visibility into inventory performance, trends, and actionable insights with customizable views for different stakeholders.",
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200"
    },
    {
      icon: Package,
      title: "Product Bundling Suggestions",
      description: "AI-powered bundling recommendations combine slow-moving items with popular products to increase sales velocity and customer value.",
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      icon: Zap,
      title: "Flash Sales Insights",
      description: "Predictive analytics determine optimal timing, pricing, and promotion strategies for flash sales to maximize inventory turnover and revenue.",
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      borderColor: "border-amber-200"
    },
    {
      icon: MapPin,
      title: "Stock Relocation Suggestions",
      description: "Intelligent geographic analysis recommends optimal inventory redistribution across stores to match local demand patterns and preferences.",
      color: "from-rose-600 to-rose-700",
      bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
      borderColor: "border-rose-200"
    },
    {
      icon: Calendar,
      title: "Seasonal Demand Analysis",
      description: "Historical and predictive seasonal trend analysis helps anticipate demand fluctuations and prevent inventory accumulation during low-demand periods.",
      color: "from-indigo-600 to-indigo-700",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200"
    },
    {
      icon: RefreshCw,
      title: "Feedback Loop & Continuous Learning",
      description: "System continuously learns from implemented strategies and outcomes, improving recommendation accuracy and adapting to changing market conditions.",
      color: "from-teal-600 to-teal-700",
      bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
      borderColor: "border-teal-200"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking & ROI Analysis",
      description: "Comprehensive tracking of implemented strategies with detailed ROI analysis and performance metrics to measure success and optimize future decisions.",
      color: "from-pink-600 to-pink-700",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">Features</span> That Drive Results
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
                className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group relative overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="relative text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="relative text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Feature Enhancement Indicator */}
                <div className="relative mt-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-emerald-700 font-medium">Active Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Experience the Power of Integrated Intelligence
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                All features work seamlessly together, creating a unified ecosystem that learns, 
                adapts, and optimizes your inventory management processes in real-time.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Smart Integration</h4>
                  <p className="text-blue-200 text-sm">Features complement each other for maximum impact</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="text-lg font-semibold mb-2">Scalable Solution</h4>
                  <p className="text-blue-200 text-sm">Grows with your business needs and complexity</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4">System Performance</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">Processing Speed</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full">
                        <div className="w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">99.9% Real-time</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">Accuracy Rate</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full">
                        <div className="w-5/6 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">94.7% Prediction</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">Cost Savings</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full">
                        <div className="w-5/6 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">Up to 85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">ROI Timeline</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full">
                        <div className="w-1/2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">3-6 Months</span>
                    </div>
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