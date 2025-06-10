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


};

export default HowItWorks;
