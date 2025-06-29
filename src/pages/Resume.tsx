import React from 'react';
import { Download, Eye, Mail, Phone, MapPin, Linkedin, Github, Calendar, Award, Code, Users, Briefcase } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/Minhaj_Akavalappil_RESUME_SD.pdf';
    link.download = 'Minhaj_Akavalappil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const personalInfo = {
    name: 'Minhaj Akavalappil',
    title: 'Software Developer | Aspiring Project Manager',
    email: 'minhajrahmanakv@gmail.com',
    phone: '+91 8921848753',
    location: 'Mannarkkad, Palakkad, Kerala, India',
    linkedin: 'https://www.linkedin.com/in/minhaj-akavalappil/',
    github: 'https://github.com/Minhaj-Akavalappil',
  };

  const summary = `Computer Science graduate with strong technical foundation and proven leadership experience. Currently transitioning from software development to project management, bringing unique combination of technical depth and strategic vision. Demonstrated success in leading cross-functional teams, managing complex projects, and delivering innovative solutions across multiple domains including AI/ML, mobile development, and web technologies.`;

  const experience = [
    {
      title: 'Software Developer',
      company: 'Pro26',
      location: 'Kerala, India',
      period: 'May 2025 - Present',
      responsibilities: [
        'Develop and maintain responsive web applications using React and Node.js',
        'Collaborate with cross-functional teams to deliver high-quality software solutions',
        'Implement database optimizations and ensure data integrity with MySQL',
        'Participate in code reviews and maintain high coding standards',
        'Contribute to system architecture decisions and technical documentation',
      ],
    },
    {
      title: 'Program Committee Lead',
      company: 'TACS MEA (The Association of Computer Science)',
      location: 'Remote',
      period: 'Sep 2024 - Mar 2025',
      responsibilities: [
        'Led a team of 15+ committee members across different time zones in MEA region',
        'Increased community engagement by 40% through strategic programming initiatives',
        'Coordinated with international stakeholders and managed sponsor relationships',
        'Organized virtual and in-person events for 500+ participants',
        'Implemented project management methodologies to improve team efficiency',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'ICFOSS (International Centre for Free and Open Source Software)',
      location: 'Kerala, India',
      period: 'Apr 2023',
      responsibilities: [
        'Developed brain tumor detection system using EfficientNet architecture',
        'Implemented YOLO-based object detection for medical imaging applications',
        'Achieved 94% accuracy in tumor classification through advanced ML techniques',
        'Collaborated with medical professionals to understand domain requirements',
        'Documented research findings and presented results to technical stakeholders',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Falcon Corporate Services',
      location: 'Dubai, UAE (Remote)',
      period: 'May 2023',
      responsibilities: [
        'Built comprehensive CRM system using Flutter and Firebase',
        'Developed responsive web interfaces with modern design principles',
        'Integrated third-party APIs for enhanced functionality and user experience',
        'Implemented secure user authentication and authorization systems',
        'Participated in agile development processes and daily standups',
      ],
    },
  ];

  const education = {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    cgpa: '8.85/10.0',
    institution: 'Kerala Technological University',
    period: '2021 - 2025',
  };

  const skills = {
    programming: ['Python', 'Java', 'JavaScript', 'C', 'Dart', 'TypeScript'],
    web: ['HTML/CSS', 'React', 'Node.js', 'Express.js', 'REST APIs'],
    mobile: ['Flutter', 'Android SDK', 'React Native'],
    database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    aiml: ['TensorFlow', 'OpenCV', 'Scikit-learn', 'YOLO', 'EfficientNet'],
    tools: ['Git/GitHub', 'VS Code', 'Figma', 'Power BI', 'Postman', 'AWS'],
    soft: ['Leadership', 'Project Management', 'Team Coordination', 'Communication', 'Problem Solving'],
  };

  const projects = [
    {
      title: 'CRM System in Flutter',
      period: 'May 2023',
      description: 'Comprehensive customer relationship management system with real-time synchronization',
      technologies: ['Flutter', 'Firebase', 'Material Design'],
    },
    {
      title: 'Brain Tumor Detection with AI',
      period: 'Apr 2023',
      description: 'Medical imaging system using EfficientNet and YOLO with 94% accuracy',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Medical Imaging'],
    },
    {
      title: 'Hand Landmark Detection System',
      period: 'Mar 2023',
      description: 'Real-time computer vision system for gesture recognition and accessibility',
      technologies: ['Python', 'OpenCV', 'MediaPipe'],
    },
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner', status: 'In Progress', issuer: 'Amazon Web Services' },
    { name: 'Project Management Professional (PMP)', status: 'Planned', issuer: 'PMI' },
    { name: 'Scrum Master Certification', status: 'Planned', issuer: 'Scrum Alliance' },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive overview of my professional experience, technical skills, and career progression 
            from software development to project management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="btn-primary"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF Resume
            </button>
            <a
              href="/Minhaj_Akavalappil_RESUME_SD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Eye className="h-5 w-5 mr-2" />
              View Full Version
            </a>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-amber-500 text-white p-8">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-teal-100 mb-6">
                  {personalInfo.title}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Kerala, India</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Linkedin className="h-4 w-4 mr-2" />
                    <span>LinkedIn Profile</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Professional Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-teal-600" />
                  Professional Summary
                </h2>
                <p className="text-secondary leading-relaxed">
                  {summary}
                </p>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-teal-600" />
                  Professional Experience
                </h2>
                
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-teal-500 pl-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-semibold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-teal-600 font-medium">
                          {exp.company}
                        </p>
                        <div className="flex items-center text-sm text-secondary mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period} • {exp.location}
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-secondary">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-teal-600" />
                  Education
                </h2>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-teal-600 font-medium mb-2">
                    {education.field}
                  </p>
                  <div className="flex items-center text-secondary mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {education.period}
                  </div>
                  <p className="text-secondary">
                    <strong>CGPA:</strong> {education.cgpa}
                  </p>
                  <p className="text-secondary mt-2">
                    <strong>Institution:</strong> {education.institution}
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <Code className="h-6 w-6 mr-3 text-teal-600" />
                  Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skills.programming.map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-primary mb-3">Web Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skills.web.map((skill) => (
                        <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-primary mb-3">Mobile Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.mobile.map((skill) => (
                        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Database & Backend</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skills.database.map((skill) => (
                        <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-primary mb-3">AI/ML & Data Science</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skills.aiml.map((skill) => (
                        <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-primary mb-3">Leadership & Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((skill) => (
                        <span key={skill} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Projects */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Key Projects
                </h2>
                
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-primary">
                          {project.title}
                        </h3>
                        <span className="text-sm text-secondary">{project.period}</span>
                      </div>
                      <p className="text-secondary mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Certifications & Learning Path
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        cert.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {cert.status}
                      </div>
                      <h3 className="font-semibold text-primary mb-2">{cert.name}</h3>
                      <p className="text-sm text-secondary">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in My Profile?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how my experience and skills can contribute to your organization's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Interview
            </a>
            <button
              onClick={handleDownload}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;