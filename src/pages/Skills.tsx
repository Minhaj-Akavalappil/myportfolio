import React from 'react';
import { Code, PenTool as Tool, Users, Brain, Database, Cloud, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'C', level: 80 },
        { name: 'Dart (Flutter)', level: 85 },
        { name: 'TypeScript', level: 75 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Database & Backend',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 90 },
        { name: 'Android SDK', level: 75 },
        { name: 'React Native', level: 70 },
      ],
    },
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      color: 'from-indigo-500 to-blue-600',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'OpenCV', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'YOLO', level: 85 },
        { name: 'EfficientNet', level: 80 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 80 },
      ],
    },
    {
      title: 'Tools & Software',
      icon: Tool,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Power BI', level: 85 },
        { name: 'Postman', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Leadership', level: 90 },
        { name: 'Communication', level: 95 },
        { name: 'Team Management', level: 85 },
        { name: 'Project Planning', level: 90 },
        { name: 'Problem Solving', level: 90 },
      ],
    },
  ];

  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      status: 'In Progress',
    },
    {
      title: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      status: 'Planned',
    },
    {
      title: 'Scrum Master Certification',
      issuer: 'Scrum Alliance',
      status: 'Planned',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            A comprehensive overview of my technical expertise, from programming languages and frameworks 
            to leadership and project management capabilities.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="card p-6 hover:shadow-2xl group"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary ml-3">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700">
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Key Strengths
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              The unique combination of skills that makes me an ideal candidate for project management roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Technical Foundation
              </h3>
              <p className="text-secondary">
                Deep understanding of software development lifecycle, enabling effective communication 
                with technical teams and informed decision-making.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Leadership Experience
              </h3>
              <p className="text-secondary">
                Proven track record of leading teams, managing complex projects, and driving 
                successful outcomes in collaborative environments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Strategic Thinking
              </h3>
              <p className="text-secondary">
                Ability to see the big picture while managing details, balancing stakeholder needs 
                with technical constraints and business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications & Learning Path
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Continuous learning journey to enhance project management and technical leadership skills.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="card p-6 text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    cert.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {cert.status}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-secondary">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Leverage These Skills?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how my technical expertise and leadership experience can drive your projects to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;