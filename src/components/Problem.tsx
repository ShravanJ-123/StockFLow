import React from 'react';
import { AlertTriangle, TrendingDown, DollarSign, Clock } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Inventory Waste",
      description: "Slow-moving products tie up capital and storage space, leading to significant financial losses through markdowns and disposal costs.",
      impact: "25-40% of inventory becomes slow-moving",
      color: "from-red-600 to-red-700"
    },
    {
      icon: DollarSign,
      title: "Profit Erosion",
      description: "Traditional reactive approaches result in deep discounts, clearance sales, and write-offs that directly impact bottom-line profitability.",
      impact: "$2.1 trillion global inventory waste",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: Clock,
      title: "Decision Delays",
      description: "Manual analysis and delayed insights prevent timely interventions, allowing problems to compound before corrective action can be taken.",
      impact: "Weeks or months to identify issues",
      color: "from-amber-600 to-amber-700"
    },
    {
      icon: AlertTriangle,
      title: "Limited Visibility",
      description: "Lack of predictive analytics means retailers are always reacting to problems rather than preventing them proactively.",
      impact: "70% of decisions are reactive",
      color: "from-rose-600 to-rose-700"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            The Challenge of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">Slow-Moving Inventory</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Retail giants like Walmart face a critical challenge: managing billions of dollars in slow-moving 
            inventory that drains profitability, wastes resources, and creates operational inefficiencies. 
            Traditional methods are no longer sufficient in today's fast-paced retail environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${problem.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="relative text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-200">{problem.title}</h3>
                <p className="relative text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
                <div className="relative bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-red-700">{problem.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
