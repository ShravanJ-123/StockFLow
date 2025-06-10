import React from 'react';
import { Database, Brain, Target, BarChart3, RefreshCw, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Gather comprehensive data from sales history, inventory levels, seasonal patterns, customer behavior, and market trends across all store locations.",
      details: ["Point-of-sale transactions", "Inventory management systems", "Customer demographics", "External market data"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Machine Learning Processing",
      description: "Advanced AI algorithms analyze patterns, identify trends, and predict future inventory performance using sophisticated statistical models and neural networks.",
      details: ["Pattern recognition", "Predictive modeling", "Anomaly detection", "Risk assessment"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Recommendation Engine",
      description: "Generate actionable, personalized recommendations for pricing strategies, product bundling, promotional timing, and inventory redistribution.",
      details: ["Pricing optimization", "Bundle suggestions", "Promotion timing", "Stock relocation"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Visualization & Actions",
      description: "Present insights through intuitive dashboards and automated systems that enable quick decision-making and implementation of recommended strategies.",
      details: ["Interactive dashboards", "Automated alerts", "Performance metrics", "Action workflows"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: RefreshCw,
      title: "Feedback Loop",
      description: "Monitor implementation results, measure performance against predictions, and capture feedback to improve system accuracy and effectiveness.",
      details: ["Performance tracking", "Result analysis", "Success measurement", "System optimization"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: CheckCircle,
      title: "Continuous Improvement",
      description: "Continuously learn from outcomes, adapt to changing market conditions, and refine algorithms to deliver increasingly accurate and valuable insights.",
      details: ["Algorithm refinement", "Model updates", "Performance enhancement", "Adaptive learning"],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Smart StockFlow AI</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our intelligent system follows a comprehensive six-step process that transforms raw data 
            into actionable insights, driving continuous optimization of your inventory management.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-8">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This systematic approach ensures reliable, scalable, and continuously improving 
              inventory optimization that adapts to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Methodology</h4>
              <p className="text-sm text-gray-600">Based on industry best practices and successful implementations</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-Powered Intelligence</h4>
              <p className="text-sm text-gray-600">Advanced machine learning ensures accurate predictions and recommendations</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Evolution</h4>
              <p className="text-sm text-gray-600">System learns and improves with every implementation and outcome</p>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Implementation Timeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Week 1-2</div>
              <div className="text-sm text-gray-600">Data Integration & Setup</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Week 3-4</div>
              <div className="text-sm text-gray-600">Model Training & Testing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Week 5-6</div>
              <div className="text-sm text-gray-600">Dashboard Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">Week 7+</div>
              <div className="text-sm text-gray-600">Full Operation & Optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;