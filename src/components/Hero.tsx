import React from 'react';
import { ArrowRight, TrendingUp, ShoppingCart, BarChart3, Sparkles, Zap } from 'lucide-react';

interface HeroProps {
  onGetStarted?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-20 overflow-hidden">
      {/* Rich Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-purple-500/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left">


            <h1 className="pt-12 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Inventory Management
              </span>{' '}
              with Intelligent AI
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              StockFlow AI transforms how Walmart manages slow-moving products by providing 
              intelligent recommendations, predictive analytics, and automated optimization strategies 
              that reduce waste and maximize profitability.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onGetStarted}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white font-bold rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                <span className="relative">Start Your AI Journey</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('#solution')}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400/50 text-blue-200 font-semibold rounded-xl hover:bg-blue-500/20 hover:border-blue-300 backdrop-blur-sm transition-all duration-300"
              >
                Explore Solution
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-300">85%</div>
                <div className="text-sm text-blue-200">Waste Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-purple-300">40%</div>
                <div className="text-sm text-purple-200">Profit Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-pink-300">24/7</div>
                <div className="text-sm text-pink-200">AI Monitoring</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Predictive Analytics</h3>
                  <p className="text-sm text-blue-200">AI-powered forecasting for inventory optimization</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Smart Bundling</h3>
                  <p className="text-sm text-green-200">Automated product bundling suggestions</p>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Real-time Insights</h3>
                  <p className="text-sm text-purple-200">Live dashboards and actionable recommendations</p>
                </div>

                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg p-6 rounded-2xl text-white border border-blue-400/30 shadow-2xl">
                  <h3 className="font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-sm text-blue-200">AI that adapts and improves with your business</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
