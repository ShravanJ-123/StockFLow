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
      technologies: [
        "TensorFlow & PyTorch for deep learning models",
        "Scikit-learn for traditional ML algorithms", 
        "Neural Networks for pattern recognition",
        "Natural Language Processing for feedback analysis",
        "Computer Vision for inventory monitoring",
        "Reinforcement Learning for strategy optimization"
      ]
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      technologies: [
        "AWS/Azure/GCP for scalable computing",
        "Kubernetes for container orchestration",
        "Docker for application containerization",
        "Serverless functions for event processing",
        "Auto-scaling for demand management",
        "Multi-region deployment for availability"
      ]
    },
    {
      title: "Data Processing",
      icon: Database,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      technologies: [
        "Apache Kafka for real-time streaming",
        "Apache Spark for big data processing",
        "PostgreSQL/MongoDB for data storage",
        "Redis for caching and session management",
        "ETL pipelines for data transformation",
        "Data lakes for historical analytics"
      ]
    },
    {
      title: "Visualization & Analytics",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      technologies: [
        "Tableau/Power BI for business intelligence",
        "D3.js for custom visualizations",
        "Plotly for interactive charts",
        "Grafana for operational dashboards",
        "Apache Superset for data exploration",
        "Custom React dashboards"
      ]
    },
    {
      title: "Real-time Processing",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      technologies: [
        "Apache Kafka Streams for stream processing",
        "AWS Lambda for serverless computing",
        "WebSockets for real-time updates",
        "Event-driven architecture",
        "Message queues for async processing",
        "CDC (Change Data Capture) systems"
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      technologies: [
        "OAuth 2.0 & JWT for authentication",
        "End-to-end encryption for data protection",
        "Role-based access control (RBAC)",
        "GDPR/CCPA compliance frameworks",
        "API security and rate limiting",
        "Audit logging and monitoring"
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      technologies: [
        "Python with Django/Flask frameworks",
        "Node.js for JavaScript backend",
        "RESTful APIs and GraphQL",
        "Microservices architecture",
        "API Gateway for service orchestration",
        "Background job processing"
      ]
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      technologies: [
        "React.js with TypeScript",
        "Next.js for SSR and performance",
        "Tailwind CSS for responsive design",
        "Progressive Web App (PWA) features",
        "State management with Redux/Zustand",
        "Component libraries and design systems"
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

        {/* Architecture Overview */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Enterprise Architecture
            </h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Our system architecture is designed for scale, performance, and reliability, 
              following cloud-native principles and industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Multi-Cloud</h4>
              <p className="text-blue-100 text-sm">Deployed across multiple cloud providers for maximum reliability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Event-Driven</h4>
              <p className="text-blue-100 text-sm">Real-time processing with event-driven architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Microservices</h4>
              <p className="text-blue-100 text-sm">Modular design with independent, scalable services</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Security-First</h4>
              <p className="text-blue-100 text-sm">Enterprise-grade security and compliance built-in</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Performance & Scale
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Capabilities */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Seamless Integration
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ERP Systems</h4>
              <p className="text-sm text-gray-600">Seamless integration with SAP, Oracle, and other enterprise systems</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">POS Systems</h4>
              <p className="text-sm text-gray-600">Real-time data sync with point-of-sale and inventory systems</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">BI Tools</h4>
              <p className="text-sm text-gray-600">Compatible with existing business intelligence and reporting tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;