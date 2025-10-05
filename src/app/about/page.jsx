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
  TrendingUp,
  Shield,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

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
      features: ["React/Next.js", "Node.js", "Full-stack"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      features: ["User-centered", "Prototyping", "Design systems"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      features: ["React Native", "Flutter", "iOS/Android"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Solutions",
      features: ["E-commerce", "CMS", "API Integration"]
    }
  ];

  const timeline = [
    { year: "2019", title: "Founded" },
    { year: "2020", title: "First 10 Clients" },
    { year: "2021", title: "Team Expansion" },
    { year: "2022", title: "100+ Projects" },
    { year: "2023", title: "Global Reach" },
    { year: "2024", title: "Future Ready" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-16 pb-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-lg shadow-purple-500/30">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">KodxMedia</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 px-4">
                Digital innovators crafting experiences that matter
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  >
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                      <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300 mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Stand For - Icon Grid */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                What We Stand For
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group text-center">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Innovation First</h3>
                <p className="text-xs sm:text-sm text-gray-400">Latest tech & trends</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 group text-center">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-pink-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Client-Centric</h3>
                <p className="text-xs sm:text-sm text-gray-400">Your success matters</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group text-center">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Quality Assured</h3>
                <p className="text-xs sm:text-sm text-gray-400">Excellence guaranteed</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 group text-center">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">On Time</h3>
                <p className="text-xs sm:text-sm text-gray-400">Deadlines respected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - More Visual */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                What We Do
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline - Simplified */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Our Journey
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Simplified */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
              <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to Start?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's bring your vision to life together
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/projects"
                  className="group border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;