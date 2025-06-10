import React from 'react';
import { Brain, Target, Zap, Shield, Award, Rocket } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: Target,
      title: "85% Waste Reduction",
      description: "Predictive analytics prevent slow-moving inventory buildup"
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Instant recommendations and automated decision-making"
    },
    {
      icon: Award,
      title: "40% Profit Increase",
      description: "Smart bundling and pricing strategies maximize revenue"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Early warning systems prevent costly inventory mistakes"
    }
  ];

  const technologies = [
    "Machine Learning & AI",
    "Real-time Data Processing",
    "Predictive Analytics",
    "Cloud Computing",
    "Advanced Visualization",
    "Automated Decision Systems"
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered Solution</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Smart StockFlow AI revolutionizes inventory management through advanced machine learning, 
            predictive analytics, and intelligent automation that transforms slow-moving products into profit opportunities.
          </p>
        </div>

        {/* How the Problem Will Be Solved */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Solve the Problem</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Predictive Intelligence:</strong> Advanced ML models analyze historical sales, seasonal patterns, 
                      and market trends to predict which products will become slow-moving before it happens.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Automated Recommendations:</strong> AI generates actionable strategies including optimal pricing, 
                      product bundling, promotional timing, and inventory reallocation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Continuous Learning:</strong> The system improves through feedback loops, learning from 
                      successful interventions to optimize future recommendations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">System Intelligence</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Prediction Accuracy</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-18 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">Real-time</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cost Reduction</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-17 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Technologies Used */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Technologies Powering Our Solution</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-pointer"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievable Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Achievable Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Inventory?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the retail revolution with Smart StockFlow AI. Our proven solution is ready to optimize 
              your inventory management and maximize profitability.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;