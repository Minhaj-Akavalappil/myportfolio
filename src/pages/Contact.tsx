import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'minhajrahmanakv@gmail.com',
      link: 'mailto:minhajrahmanakv@gmail.com',
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8921848753',
      link: 'tel:+918921848753',
      description: 'Available for calls Mon-Fri 9AM-6PM IST',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mannarkkad, Palakkad',
      link: '#',
      description: 'Kerala, India',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/minhaj-akavalappil/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Minhaj-Akavalappil',
      icon: Github,
      color: 'from-gray-700 to-gray-800',
    },
  ];

  const meetingReasons = [
    'Project Management Opportunity',
    'Software Development Role',
    'Technical Consultation',
    'Collaboration Proposal',
    'General Inquiry',
    'Other',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to discuss project management opportunities, technical collaborations, or potential partnerships? 
              I'd love to hear from you and explore how we can work together.
            </p>
            
            {/* Profile Image in Contact */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-teal-100">
                <img
                  src="/minhajakv.jpg"
                  alt="Minhaj Akavalappil - Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Send Me a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-green-800">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-red-800">Failed to send message. Please try again or contact me directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-primary"
                  >
                    <option value="">Select a subject</option>
                    {meetingReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-vertical text-primary"
                    placeholder="Tell me about your project, opportunity, or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.title}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-accent hover:text-teal-700 font-medium transition-colors"
                        >
                          {info.value}
                        </a>
                        <p className="text-secondary text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Connect on Social Media
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center hover:scale-110 transition-transform duration-300 group`}
                      >
                        <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Schedule Meeting 
              <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary">
                    Schedule a Meeting
                  </h3>
                </div>
                <p className="text-secondary mb-4">
                  Prefer a direct conversation? Let's schedule a video call to discuss your project requirements 
                  and how I can contribute to your team's success.
                </p>
                <a
                  href="mailto:minhajrahmanakv@gmail.com?subject=Meeting Request&body=Hi Minhaj, I'd like to schedule a meeting to discuss..."
                  className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Meeting
                </a>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map 
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              My Location
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Based in Kerala, India, and available for remote work worldwide.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62568.47234344378!2d76.43059045820316!3d10.99411120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c2aa0fef64b3%3A0xd0c5c4eb76b58c9!2sMannarkkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1677834567890!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start a Project Together?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Whether you need a project manager, developer, or technical consultant, 
            I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:minhajrahmanakv@gmail.com"
              className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Email Me Directly
            </a>
            <a
              href="/resume"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;