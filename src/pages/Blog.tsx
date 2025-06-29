import React from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Transitioning from Developer to Project Manager: My Journey',
      excerpt: 'Exploring the challenges and opportunities in making the leap from hands-on development to strategic project leadership.',
      content: `Making the transition from a software developer to a project manager is both exciting and challenging. As someone currently on this journey, I want to share the insights I've gained and the steps I'm taking to make this transition successful.

## Why the Transition?

After years of writing code and building applications, I realized that my greatest satisfaction came not just from solving technical problems, but from orchestrating teams, aligning stakeholders, and driving projects from conception to delivery. The Program Committee Lead role at TACS MEA gave me a taste of what project management could offer.

## Key Skills I've Developed

**Technical Foundation**: My development background gives me credibility with technical teams and helps me make informed decisions about technology trade-offs and realistic timelines.

**Communication**: Leading diverse teams has taught me the importance of clear, contextual communication tailored to different audiences.

**Problem-Solving**: The analytical thinking developed through programming translates well to breaking down complex project challenges.

## Challenges and Solutions

The biggest challenge has been shifting from individual contributor mindset to a facilitative leadership approach. Instead of diving into code to solve problems, I now focus on empowering team members and removing blockers.

## Next Steps

I'm actively pursuing PMP certification and gaining hands-on experience with project management methodologies. The goal is to combine technical depth with project management expertise to lead technology initiatives effectively.

The journey continues, and I'm excited about the opportunities ahead in this dynamic field.`,
      author: 'Minhaj Akavalappil',
      date: '2024-03-15',
      readTime: '5 min read',
      tags: ['Career', 'Project Management', 'Leadership'],
      category: 'Career Development',
    },
    {
      id: 2,
      title: 'The Role of AI in Modern Software Development',
      excerpt: 'How artificial intelligence is reshaping the software development landscape and what developers need to know.',
      content: `Artificial Intelligence is revolutionizing software development in ways we couldn't have imagined just a few years ago. From code generation to automated testing, AI tools are becoming indispensable for modern developers.

## Current AI Tools Transforming Development

**Code Generation**: Tools like GitHub Copilot and ChatGPT are helping developers write code faster and more efficiently. They're particularly useful for boilerplate code and common patterns.

**Automated Testing**: AI-powered testing tools can generate test cases, identify edge cases, and even write test code automatically.

**Bug Detection**: Static analysis tools powered by AI can identify potential bugs and security vulnerabilities before they reach production.

## My Experience with AI in Projects

In my brain tumor detection project, I leveraged EfficientNet and YOLO algorithms to achieve 94% accuracy. This experience taught me that AI isn't just about using pre-built models—it's about understanding the problem domain and choosing the right approach.

## The Human Element

While AI tools are powerful, they can't replace human creativity, domain expertise, and strategic thinking. The key is to use AI as a force multiplier rather than a replacement.

## Looking Forward

As AI continues to evolve, I believe the most successful developers and project managers will be those who can effectively combine AI capabilities with human insight and leadership skills.

The future belongs to those who can harness AI while maintaining the human touch that makes technology meaningful.`,
      author: 'Minhaj Akavalappil',
      date: '2024-02-28',
      readTime: '7 min read',
      tags: ['AI/ML', 'Software Development', 'Technology'],
      category: 'Technology Trends',
    },
    {
      id: 3,
      title: 'Building Effective Remote Teams: Lessons from Leading TACS MEA',
      excerpt: 'Insights on managing distributed teams and fostering collaboration across different time zones and cultures.',
      content: `Leading the Program Committee at TACS MEA taught me valuable lessons about managing remote teams across different time zones and cultures. Here's what I learned about building effective distributed teams.

## The Challenges of Remote Leadership

**Time Zone Management**: Coordinating across MEA region meant dealing with significant time differences. We had to be strategic about meeting times and asynchronous communication.

**Cultural Sensitivity**: Working with team members from diverse backgrounds required understanding different communication styles and cultural nuances.

**Engagement**: Keeping remote team members engaged and connected to the mission required intentional effort and creative approaches.

## Strategies That Worked

**Clear Communication Channels**: We established specific channels for different types of communication—urgent issues, project updates, casual interaction.

**Regular Check-ins**: One-on-one meetings with team members helped maintain personal connections and address individual concerns.

**Documentation**: Everything was documented to ensure team members in different time zones could stay informed and contribute effectively.

**Recognition**: We made sure to celebrate wins and recognize contributions publicly to maintain team morale.

## Tools and Technologies

We relied heavily on collaboration tools like Slack, Zoom, and project management platforms. The key was not just having the tools, but establishing clear protocols for their use.

## Results

Our team increased community engagement by 40% and successfully organized events for 500+ participants. The key was building trust and maintaining clear communication despite the physical distance.

## Lessons for Future Projects

Remote team management is a critical skill for modern project managers. The pandemic accelerated remote work adoption, and these skills are now essential for anyone leading technology teams.`,
      author: 'Minhaj Akavalappil',
      date: '2024-01-20',
      readTime: '6 min read',
      tags: ['Remote Work', 'Team Management', 'Leadership'],
      category: 'Project Management',
    },
    {
      id: 4,
      title: 'Flutter vs React Native: A Developer\'s Perspective',
      excerpt: 'Comparing two popular cross-platform frameworks based on real-world project experience.',
      content: `Having worked extensively with Flutter in my CRM project and having experience with React Native, I want to share a practical comparison of these two popular cross-platform frameworks.

## Development Experience

**Flutter**: The hot reload feature is incredibly fast, making development iterations smooth. Dart is easy to learn if you have experience with other object-oriented languages.

**React Native**: If you're already familiar with React, the learning curve is gentler. The JavaScript ecosystem is vast and mature.

## Performance

**Flutter**: Compiles to native code, which generally results in better performance. The animation system is particularly smooth.

**React Native**: Performance is good for most use cases, but can struggle with complex animations or computationally intensive tasks.

## Project Experience: CRM System

In my CRM project, Flutter's widget system made it easy to create consistent UI components. The Firebase integration was seamless, and the single codebase worked well across iOS and Android.

Key advantages I experienced:
- Consistent UI across platforms
- Excellent documentation
- Strong tooling and debugging
- Good performance for business applications

## When to Choose What

**Choose Flutter when**:
- You want pixel-perfect UI consistency
- Performance is critical
- You're building a complex application
- Team is comfortable learning Dart

**Choose React Native when**:
- You have existing React expertise
- Need to leverage existing JavaScript libraries
- Faster prototyping is priority
- Web version might be needed later

## The Verdict

Both are excellent choices. Flutter is my preference for new projects due to its performance and consistent UI, but React Native remains a solid choice, especially for teams with existing React expertise.

The key is choosing based on your specific project requirements and team capabilities.`,
      author: 'Minhaj Akavalappil',
      date: '2024-01-05',
      readTime: '8 min read',
      tags: ['Flutter', 'React Native', 'Mobile Development'],
      category: 'Technical Comparison',
    },
  ];

  const categories = [
    'All Posts',
    'Career Development',
    'Technology Trends',
    'Project Management',
    'Technical Comparison',
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');
  const [selectedPost, setSelectedPost] = React.useState<number | null>(null);

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="pt-20">
        <article className="section-padding bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 flex items-center text-teal-600 hover:text-teal-700 transition-colors"
            >
              <ArrowRight className="h-4 w-4 mr-2 transform rotate-180" />
              Back to Blog
            </button>

            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-600">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-slate-800 mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                } else if (paragraph.trim() === '') {
                  return <br key={index} className="mb-4" />;
                } else {
                  return (
                    <p key={index} className="text-slate-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            <footer className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Enjoyed this article?
                </h3>
                <p className="text-slate-600 mb-6">
                  I'd love to hear your thoughts and discuss these topics further. Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="btn-primary"
                  >
                    Get in Touch
                  </a>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="btn-secondary"
                  >
                    Read More Articles
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Insights & <span className="gradient-text">Reflections</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Thoughts on project management, software development, technology trends, and lessons learned 
            from my journey in the tech industry.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="card p-6 hover:shadow-2xl group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-teal-600 group-hover:text-teal-700 font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section 
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get notified when I publish new insights on project management, technology, and career development.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                No spam, unsubscribe at any time. I respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Discuss These Ideas
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Have thoughts on any of these topics? I'd love to hear your perspective and engage in meaningful conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start a Conversation
            </a>
            <a
              href="mailto:minhajrahmanakv@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Email Me Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;