import React from 'react';
import { Calendar, MapPin, Award, Users, Code, TrendingUp, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Pro26',
      location: 'Kerala, India',
      period: 'May 2025 - Present',
      type: 'Full-time',
      status: 'current',
      description: 'Developing and maintaining web applications using modern technologies. Contributing to system architecture decisions and collaborating with cross-functional teams.',
      achievements: [
        'Built responsive web applications using React and Node.js',
        'Implemented efficient database solutions with MySQL',
        'Collaborated with designers and product managers on feature development',
        'Participated in code reviews and maintained high code quality standards',
        'Contributed to system architecture decisions and technical documentation',
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'MySQL', 'Git'],
    },
    {
      title: 'Program Committee Lead',
      company: 'TACS MEA (The Association of Computer Science - Middle East & Africa)',
      location: 'Remote',
      period: 'Sep 2024 - Mar 2025',
      type: 'Leadership Role',
      status: 'completed',
      description: 'Led strategic initiatives and managed cross-functional teams to drive organizational growth and community engagement across the MEA region.',
      achievements: [
        'Managed a team of 15+ committee members across different time zones',
        'Increased community engagement by 40% through strategic programming',
        'Coordinated with international stakeholders and sponsors',
        'Implemented project management methodologies to improve efficiency',
        'Organized virtual and in-person events for 500+ participants',
      ],
      technologies: ['Project Management', 'Team Leadership', 'Strategic Planning', 'Stakeholder Management'],
    },
    {
      title: 'Machine Learning Intern',
      company: 'ICFOSS (International Centre for Free and Open Source Software)',
      location: 'Kerala, India',
      period: 'Apr 2023',
      type: 'Internship',
      status: 'completed',
      description: 'Worked on computer vision and machine learning projects, focusing on medical image analysis and object detection systems.',
      achievements: [
        'Developed brain tumor detection system using EfficientNet architecture',
        'Implemented YOLO-based object detection for medical imaging',
        'Achieved 94% accuracy in tumor classification tasks',
        'Collaborated with medical professionals to understand domain requirements',
        'Documented research findings and presented to technical team',
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'EfficientNet', 'YOLO', 'Medical Imaging'],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Falcon Corporate Services',
      location: 'Dubai, UAE (Remote)',
      period: 'May 2023',
      type: 'Internship',
      status: 'completed',
      description: 'Developed comprehensive web applications and CRM systems, working closely with the development team to deliver client solutions.',
      achievements: [
        'Built a complete CRM system using Flutter and Firebase',
        'Developed responsive web interfaces with modern design principles',
        'Integrated third-party APIs for enhanced functionality',
        'Implemented user authentication and authorization systems',
        'Participated in agile development processes and daily standups',
      ],
      technologies: ['Flutter', 'Firebase', 'Dart', 'JavaScript', 'REST APIs', 'Agile'],
    },
  ];

  const skills = [
    'Technical Leadership',
    'Project Management',
    'Team Coordination',
    'Stakeholder Management',
    'Agile Methodologies',
    'Strategic Planning',
    'Cross-functional Collaboration',
    'International Teams',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            A journey from software development to leadership roles, building the foundation for a successful 
            transition into project management.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-amber-500"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative mb-12 last:mb-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    exp.status === 'current' 
                      ? 'bg-teal-500 animate-pulse' 
                      : 'bg-amber-500'
                  }`}></div>

                  {/* Experience Card */}
                  <div className="ml-20 card p-6 hover:shadow-2xl group">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-bold text-primary mr-3">
                            {exp.title}
                          </h3>
                          {exp.status === 'current' && (
                            <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-semibold text-teal-600 mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap items-center text-sm text-secondary space-x-4 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-secondary mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-primary mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-amber-500" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-primary mb-3 flex items-center">
                        <Code className="h-4 w-4 mr-2 text-teal-500" />
                        Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Gained */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Leadership Skills Developed
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Essential project management and leadership capabilities gained through diverse professional experiences.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Users className="h-6 w-6 text-teal-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Career Progression
            </h2>
            <div className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                From Developer to Project Manager
              </h3>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                My career journey demonstrates a natural progression from individual contributor to team leader. 
                Starting with hands-on development work, I've gradually taken on more responsibilities in project 
                coordination, team management, and strategic planning.
              </p>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                This progression has equipped me with both the technical depth to understand complex projects 
                and the leadership skills to guide teams toward successful outcomes. I'm now ready to fully 
                transition into project management, where I can combine these complementary skill sets.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                I believe my technical background gives me a unique advantage in project management – I understand 
                the challenges developers face, can communicate effectively with technical teams, and make informed 
                decisions about technology trade-offs and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Lead Your Next Project?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how my experience in development and leadership can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;