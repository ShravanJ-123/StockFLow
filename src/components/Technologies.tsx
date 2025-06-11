import React from 'react';
import { 
  Brain, 
  Cloud, 
  Database, 
  BarChart3, 
  Zap, 
  Shield,
  Code,
  Smartphone,
  Server,
  Globe
} from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      points: [
        "Deep learning: TensorFlow, PyTorch",
        "Traditional ML: Scikit-learn",
        "Computer Vision & NLP",
        "Reinforcement learning models",
      ]
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      points: [
        "Multi-cloud: AWS, GCP, Azure",
        "Docker & Kubernetes",
        "Serverless & auto-scaling",
      ]
    },
    {
      title: "Data Processing",
      icon: Database,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      points: [
        "Kafka & Spark for streaming",
        "SQL/NoSQL: PostgreSQL, MongoDB",
        "ETL pipelines & Data Lakes",
      ]
    },
    {
      title: "Visualization & Analytics",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      points: [
        "BI tools: Power BI, Tableau",
        "Interactive charts: Plotly, D3.js",
        "Dashboards: Grafana, Superset",
      ]
    },
    {
      title: "Real-time Processing",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      points: [
        "WebSockets & Kafka Streams",
        "AWS Lambda & Event Architecture",
        "CDC & Message Queues",
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      points: [
        "OAuth2, JWT, RBAC",
        "Encryption & Logging",
        "Compliance: GDPR, CCPA",
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      points: [
        "Django, Flask, Node.js",
        "REST & GraphQL APIs",
        "Microservices & Background Jobs",
      ]
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      points: [
        "React, Next.js, TypeScript",
        "Tailwind & Responsive UI",
        "State Mgmt: Redux, Zustand",
      ]
    }
  ];

  const performanceMetrics = [
    { label: "Processing Speed", value: "< 100ms", description: "Average API response time" },
    { label: "Scalability", value: "1M+", description: "Concurrent users supported" },
    { label: "Uptime", value: "99.9%", description: "System availability guarantee" },
    { label: "Data Processing", value: "10TB+", description: "Daily data processing capacity" }
  ];

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on enterprise-grade technologies and industry-leading platforms, our solution delivers 
            unmatched performance, scalability, and reliability for mission-critical inventory management.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
