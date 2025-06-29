import React from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Brain, Smartphone, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CRM System in Flutter',
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'from-blue-500 to-purple-600',
      period: 'May 2023',
      status: 'Completed',
      description: 'A comprehensive Customer Relationship Management system built with Flutter and Firebase, designed for small to medium businesses to manage their customer interactions and sales pipeline.',
      longDescription: 'This project involved building a complete CRM solution from scratch, including customer data management, sales tracking, communication logs, and reporting features. The application supports both mobile and web platforms, providing flexibility for users across different devices.',
      achievements: [
        'Built responsive cross-platform application using Flutter',
        'Implemented real-time data synchronization with Firebase',
        'Created intuitive user interface with material design principles',
        'Integrated analytics and reporting dashboard',
        'Deployed to both iOS and Android app stores',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Material Design', 'REST APIs'],
      challenges: 'Managing real-time data synchronization across multiple users while maintaining performance and data integrity.',
      impact: 'Improved client sales tracking efficiency by 60% and reduced data entry time by 40%.',
      teamSize: '3 developers',
      myRole: 'Lead Developer - Responsible for architecture, UI/UX design, and Firebase integration',
    },
    {
      title: 'Brain Tumor Detection with AI',
      category: 'Machine Learning',
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      period: 'Apr 2023',
      status: 'Completed',
      description: 'Advanced medical imaging system using EfficientNet and YOLO algorithms to detect and classify brain tumors from MRI scans with high accuracy.',
      longDescription: 'This project addressed the critical need for automated medical diagnosis support. Using deep learning techniques, the system can analyze MRI images and provide accurate tumor detection and classification to assist medical professionals in diagnosis.',
      achievements: [
        'Achieved 94% accuracy in tumor detection and classification',
        'Processed and analyzed over 10,000 MRI images',
        'Implemented custom data augmentation techniques',
        'Developed user-friendly interface for medical professionals',
        'Created comprehensive testing and validation pipeline',
      ],
      technologies: ['Python', 'TensorFlow', 'EfficientNet', 'YOLO', 'OpenCV', 'NumPy', 'Pandas', 'Medical Imaging'],
      challenges: 'Handling diverse image qualities and ensuring high accuracy while minimizing false positives in medical diagnosis.',
      impact: 'Potential to reduce diagnosis time by 70% and assist radiologists in early tumor detection.',
      teamSize: '2 researchers',
      myRole: 'ML Engineer - Designed neural network architecture, implemented training pipeline, and optimized model performance',
    },
    {
      title: 'Hand Landmark Detection System',
      category: 'Computer Vision',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      period: 'Mar 2023',
      status: 'Completed',
      description: 'Real-time hand gesture recognition system using OpenCV and MediaPipe for applications in human-computer interaction and accessibility.',
      longDescription: 'This computer vision project focuses on detecting and tracking hand landmarks in real-time video streams. The system can recognize various hand gestures and poses, making it useful for touchless interfaces, sign language recognition, and accessibility applications.',
      achievements: [
        'Implemented real-time hand tracking with 30+ FPS performance',
        'Detected 21 hand landmarks with high precision',
        'Built gesture recognition for 15+ common gestures',
        'Created demo applications for virtual mouse control',
        'Optimized for both CPU and GPU processing',
      ],
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Computer Vision', 'Real-time Processing'],
      challenges: 'Maintaining accuracy and performance in varying lighting conditions and hand orientations.',
      impact: 'Enabled touchless interaction capabilities, particularly beneficial for accessibility applications.',
      teamSize: '1 developer (Solo project)',
      myRole: 'Computer Vision Developer - Complete project development from research to implementation',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      period: 'Jan 2024',
      status: 'In Development',
      description: 'Modern e-commerce platform built with React and Node.js, featuring advanced search, real-time inventory management, and secure payment processing.',
      longDescription: 'A comprehensive e-commerce solution designed for modern businesses, featuring a responsive frontend, robust backend API, and comprehensive admin dashboard. The platform supports multiple payment methods, inventory management, and customer analytics.',
      achievements: [
        'Built responsive React frontend with modern UI/UX',
        'Developed RESTful API with Node.js and Express',
        'Implemented secure payment processing with Stripe',
        'Created comprehensive admin dashboard',
        'Integrated advanced search and filtering capabilities',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'CSS3', 'TypeScript'],
      challenges: 'Ensuring secure payment processing and managing complex state management across the application.',
      impact: 'Currently supporting 500+ products and processing transactions worth $50K+ monthly.',
      teamSize: '4 developers',
      myRole: 'Full-stack Developer - Led frontend development and contributed to backend API design',
    },
  ];

  const projectCategories = [
    { name: 'All Projects', count: projects.length },
    { name: 'Machine Learning', count: projects.filter(p => p.category === 'Machine Learning').length },
    { name: 'Mobile Development', count: projects.filter(p => p.category === 'Mobile Development').length },
    { name: 'Web Development', count: projects.filter(p => p.category === 'Web Development').length },
    { name: 'Computer Vision', count: projects.filter(p => p.category === 'Computer Vision').length },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Projects');
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            A showcase of innovative solutions across mobile development, machine learning, and web technologies. 
            Each project demonstrates technical expertise and problem-solving capabilities.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="card p-6 hover:shadow-2xl group cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-slate-600 mb-3">
                      <span className="bg-slate-100 px-2 py-1 rounded text-xs font-medium mr-2">
                        {project.category}
                      </span>
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.period}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Expandable Details */}
                  {selectedProject === index && (
                    <div className="mt-6 border-t pt-6 space-y-6 animate-fadeIn">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Project Overview</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                          <Users className="h-4 w-4 mr-2 text-teal-500" />
                          My Role & Team
                        </h4>
                        <p className="text-slate-600 mb-2">
                          <strong>Team Size:</strong> {project.teamSize}
                        </p>
                        <p className="text-slate-600">
                          <strong>My Role:</strong> {project.myRole}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Technical Challenges</h4>
                          <p className="text-slate-600 text-sm">
                            {project.challenges}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Impact & Results</h4>
                          <p className="text-slate-600 text-sm">
                            {project.impact}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                          <Github className="h-4 w-4" />
                          <span>View Code</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                      {selectedProject === index ? 'Show Less' : 'View Details'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Project Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quantifiable results and technical achievements across all projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">15+</div>
              <div className="text-slate-600">Technologies Mastered</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">10+</div>
              <div className="text-slate-600">Team Members Led</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">94%</div>
              <div className="text-slate-600">AI Model Accuracy</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">60%</div>
              <div className="text-slate-600">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in My Work?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how these technical skills and project management experience can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start a Conversation
            </a>
            <a
              href="/resume"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;