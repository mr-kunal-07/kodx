"use client";
import React, { useState, useEffect } from 'react';
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Heart,
  Award,
  Users,
  Clock,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Shield,
  Rocket
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Clients" },
    { icon: <Code className="w-6 h-6" />, number: "100+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6" />, number: "5+", label: "Years Experience" },
    { icon: <Star className="w-6 h-6" />, number: "98%", label: "Client Satisfaction" }
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      features: ["React/Next.js", "Node.js", "Full-stack solutions"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that users love to interact with",
      features: ["User-centered design", "Prototyping", "Design systems"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["React Native", "Flutter", "iOS/Android"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Solutions",
      description: "End-to-end digital transformation for businesses",
      features: ["E-commerce", "CMS", "API Integration"]
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation First",
      description: "We stay ahead of the curve with the latest technologies and trends"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Every project meets our high standards for excellence"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on time, every time"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Founded KodxMedia",
      description: "Started with a vision to create exceptional digital experiences"
    },
    {
      year: "2020",
      title: "First 10 Clients",
      description: "Built trust and delivered successful projects for early adopters"
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team and expanded service offerings"
    },
    {
      year: "2022",
      title: "100+ Projects",
      description: "Reached a major milestone with 100+ completed projects"
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Serving clients worldwide with innovative solutions"
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Leading the way in next-generation digital solutions"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 shadow-lg shadow-purple-500/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">KodxMedia</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                We're a passionate team of digital innovators, creating exceptional web experiences
                that drive business growth and user engagement.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
                        <div className="text-purple-400">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm sm:text-base">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that not only meet
                  their current needs but also prepare them for future challenges. We believe in
                  creating technology that makes a difference.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Innovative web solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">User-centered design approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Scalable and maintainable code</span>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="text-center">
                    <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                    <p className="text-gray-300 mb-6">
                      We combine creativity with technical expertise to deliver
                      solutions that exceed expectations.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">5+</div>
                        <div className="text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-400">24/7</div>
                        <div className="text-gray-400">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We specialize in creating digital solutions that drive business growth
                and deliver exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                  <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 group">
                    <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our relationships with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-purple-400">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From humble beginnings to becoming a trusted digital partner for businesses worldwide.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2 px-8">
                        <div className={`backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'
                          }`}>
                          <div className="text-2xl font-bold text-purple-400 mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="relative z-10">
                        <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900"></div>
                      </div>

                      <div className="w-1/2 px-8"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's work together to bring your vision to life. We're here to help you
                  succeed in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="group border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;