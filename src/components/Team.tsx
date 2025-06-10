import React from 'react';
import { Users, Award, Target, Code } from 'lucide-react';

const Team = () => {
  const teamHighlights = [
    {
      icon: Users,
      title: "Diverse Expertise",
      description: "Combining retail industry knowledge with cutting-edge AI and data science capabilities",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Successfully delivered enterprise-scale solutions for Fortune 500 retail companies",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Focused Mission",
      description: "Dedicated to solving real-world inventory challenges through innovative technology",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Masters in machine learning, cloud architecture, and scalable system design",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const achievements = [
    { number: "5+", label: "Years Combined Experience" },
    { number: "50+", label: "AI/ML Projects Delivered" },
    { number: "10M+", label: "Data Points Processed" },
    { number: "98%", label: "Client Satisfaction Rate" }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Innovation Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Developed by a passionate team of engineers, data scientists, and retail experts as part of the 
            Walmart Sparkathon Hackathon. We're committed to revolutionizing inventory management through AI innovation.
          </p>
        </div>

        {/* Team Story */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our team came together with a shared vision: to solve one of retail's most persistent 
                  challenges through the power of artificial intelligence and data science.
                </p>
                <p>
                  With backgrounds spanning machine learning, software engineering, retail operations, 
                  and business strategy, we bring a unique blend of technical expertise and industry insight.
                </p>
                <p>
                  Participating in the Walmart Sparkathon Hackathon provided us with the opportunity to 
                  apply our skills to a real-world problem that affects millions of consumers and retailers worldwide.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {teamHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation-Driven</h4>
            <p className="text-gray-600">
              We leverage cutting-edge AI and machine learning technologies to create solutions 
              that push the boundaries of what's possible in retail.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Customer-Centric</h4>
            <p className="text-gray-600">
              Every feature we build is designed with the end user in mind, ensuring practical 
              solutions that deliver real business value.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Excellence-Focused</h4>
            <p className="text-gray-600">
              We're committed to delivering enterprise-grade solutions with the highest standards 
              of quality, security, and performance.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            "To transform the retail industry by making AI-powered inventory optimization accessible, 
            practical, and profitable for retailers of all sizes. We envision a future where intelligent 
            systems eliminate waste, maximize profitability, and create more sustainable retail operations."
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're passionate about solving complex problems and delivering innovative solutions. 
            Let's discuss how Smart StockFlow AI can transform your inventory management.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;