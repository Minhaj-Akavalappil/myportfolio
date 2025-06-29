import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Users, Target, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Full-stack development with expertise in Python, Java, Flutter, and modern web technologies.',
    },
    {
      icon: Users,
      title: 'Leadership Experience',
      description: 'Led teams as Program Committee Lead, managing projects and coordinating cross-functional initiatives.',
    },
    {
      icon: Target,
      title: 'Project Management Vision',
      description: 'Passionate about transitioning from development to strategic project leadership roles.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Experience in AI/ML, CRM systems, and cutting-edge technology solutions.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-amber-400 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/minhajakv.jpg"
                      alt="Minhaj Akavalappil - Professional Photo"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                      style={{ 
                        imageRendering: 'crisp-edges',
                        filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                      }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/10 to-amber-400/10 group-hover:from-teal-400/20 group-hover:to-amber-400/20 transition-all duration-300"></div>
              </div>
            </div>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 text-shadow">
              <span className="block">Minhaj</span>
              <span className="gradient-text">Akavalappil</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary mb-4 font-medium">
              Software Developer with a vision to lead
            </p>
            
            <p className="text-lg md:text-xl text-accent mb-8 font-semibold">
              Aspiring Project Manager
            </p>

            <p className="text-lg text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              Combining technical expertise in full-stack development and AI/ML with proven leadership experience. 
              Passionate about driving innovation, leading high-performing teams, and delivering exceptional project outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
  <Link to="/projects" className="btn-primary flex items-center justify-center">
    View My Work
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
  <Link to="/resume" className="btn-secondary flex items-center justify-center">
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </Link>
</div>


            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose <span className="gradient-text">Minhaj</span>?
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              A unique blend of technical depth and leadership vision, ready to drive your projects to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="card p-6 text-center group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's connect and discuss how I can contribute to your team's success as a project manager or developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;