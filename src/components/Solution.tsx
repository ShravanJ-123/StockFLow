import React from 'react';
import { Brain, Target, Zap, Shield, Award, Rocket } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: Target,
      title: "85% Waste Reduction",
      description: "Predictive analytics prevent slow-moving inventory buildup",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Instant recommendations and automated decision-making",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Award,
      title: "40% Profit Increase",
      description: "Smart bundling and pricing strategies maximize revenue",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Early warning systems prevent costly inventory mistakes",
      color: "from-rose-600 to-rose-700"
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
    <section id="solution" className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">AI-Powered Solution</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Smart StockFlow AI revolutionizes inventory management through advanced machine learning, 
            predictive analytics, and intelligent automation that transforms slow-moving products into profit opportunities.
          </p>
        </div>

        {/* How the Problem Will Be Solved */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">How We Solve the Problem</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-blue-100">
                      <strong className="text-white">Predictive Intelligence:</strong> Advanced ML models analyze historical sales, seasonal patterns, 
                      and market trends to predict which products will become slow-moving before it happens.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-blue-100">
                      <strong className="text-white">Automated Recommendations:</strong> AI generates actionable strategies including optimal pricing, 
                      product bundling, promotional timing, and inventory reallocation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-blue-100">
                      <strong className="text-white">Continuous Learning:</strong> The system improves through feedback loops, learning from 
                      successful interventions to optimize future recommendations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
                  <h4 className="font-semibold text-white mb-4">System Intelligence</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-200">Prediction Accuracy</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-white/20 rounded-full">
                          <div className="w-18 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-white">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-200">Response Time</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-white/20 rounded-full">
                          <div className="w-16 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-white">Real-time</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-200">Cost Reduction</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-white/20 rounded-full">
                          <div className="w-17 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-white">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`relative w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="relative text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">{benefit.title}</h4>
                  <p className="relative text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
