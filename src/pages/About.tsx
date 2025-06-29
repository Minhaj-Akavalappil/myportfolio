import React from 'react';
import { GraduationCap, Award, Users, Code, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'B.Tech in Computer Science with CGPA 8.85',
      details: 'Strong foundation in computer science fundamentals from Kerala Technological University',
    },
    {
      icon: Users,
      title: 'Leadership Experience',
      description: 'Program Committee Lead at TACS MEA',
      details: 'Led cross-functional teams and managed strategic initiatives across MEA region',
    },
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Full-stack development and AI/ML experience',
      details: 'Proficient in modern technologies including React, Flutter, Python, and TensorFlow',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Multiple internships and current role at Pro26',
      details: 'Continuous learning and hands-on industry experience in diverse environments',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly seeking new ways to solve complex problems and improve processes.',
    },
    {
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and effective communication to achieve goals.',
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering high-quality work and exceeding expectations.',
    },
    {
      title: 'Growth',
      description: 'Dedicated to continuous learning and professional development.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About <span className="gradient-text">Minhaj</span>
              </h1>
              <p className="text-lg text-secondary mb-8 leading-relaxed">
                I'm a passionate Computer Science graduate with a strong technical background and a clear vision 
                for the future. My journey began with coding, but my heart lies in leading teams and managing 
                projects that create meaningful impact.
              </p>
              <p className="text-lg text-secondary mb-8 leading-relaxed">
                With experience spanning full-stack development, AI/ML, and team leadership, I bring a unique 
                perspective that bridges technical excellence with strategic project management. My academic 
                foundation from Kerala Technological University (CGPA 8.85) combined with hands-on industry 
                experience has prepared me for the challenges of modern project leadership.
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-teal-600" />
                  <span>Aspiring Project Manager</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-amber-500" />
                  <span>Team Leadership</span>
                </div>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-white">
                  <img
                    src="/minhajakv.jpg"
                    alt="Minhaj Akavalappil - Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center ring-4 ring-teal-100">
                  <Code className="h-12 w-12 text-teal-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Milestones that define my journey from a passionate developer to an aspiring project manager.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="card p-6 hover:shadow-2xl group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-accent font-medium mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-secondary">
                        {achievement.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Project Management */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Why <span className="gradient-text">Project Management</span>?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                Throughout my technical journey, I've discovered that my greatest satisfaction comes not just from 
                writing code, but from orchestrating teams, aligning stakeholders, and driving projects from 
                conception to successful delivery.
              </p>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                My experience as Program Committee Lead at TACS MEA taught me the importance of clear communication, 
                strategic planning, and adaptive leadership. Leading a team of 15+ members across different time zones 
                and increasing community engagement by 40% showed me the impact of effective project management.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                I believe my technical background gives me a unique advantage in project management – I understand 
                the challenges developers face, can communicate effectively with technical teams, and make informed 
                decisions about technology trade-offs and timelines. This combination of technical depth and 
                leadership experience positions me well for managing complex technology projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Core Values
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              The principles that guide my approach to work, leadership, and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Details */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Educational Background
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Bachelor of Technology
            </h3>
            <p className="text-xl text-teal-100 mb-2">
              Computer Science and Engineering
            </p>
            <p className="text-lg text-teal-100 mb-2">
              Kerala Technological University
            </p>
            <p className="text-lg text-teal-100 mb-4">
              CGPA: 8.85/10.0 (2021-2025)
            </p>
            <p className="text-teal-100">
              Strong foundation in algorithms, data structures, software engineering, 
              and modern development practices with focus on emerging technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;