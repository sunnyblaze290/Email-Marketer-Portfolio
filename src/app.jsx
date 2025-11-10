import React, { useState } from 'react';
import { Mail, Linkedin, X, Check } from 'lucide-react';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  const skills = [
    'Email Campaign Setup',
    'Email Design',
    'Email Copywriting',
    'Email Automation & Flows',
    'Email A/B Testing',
    'Email Lead Magnets & Pop-up Forms'
  ];

  const tools = [
    { name: 'Klaviyo', color: 'bg-purple-100 text-purple-700' },
    { name: 'Mailchimp', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Constant Contact', color: 'bg-blue-100 text-blue-700' },
    { name: 'Figma', color: 'bg-pink-100 text-pink-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.imgur.com/m9YMJ65.jpg" 
              alt="Adithya Mosam"
              className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192'%3E%3Crect fill='%23cbd5e1' width='192' height='192'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23475569'%3EAdithya M%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          <h1 className="text-5xl font-bold text-slate-900">Adithya Mosam</h1>
          <h2 className="text-2xl text-slate-600 font-medium">Email Marketing Specialist</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            I help businesses transform their email marketing into a powerful revenue channel. 
            With expertise in strategy, design, and automation, I create email campaigns that 
            don't just look great but convert subscribers into loyal customers and drive measurable growth.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Work With Me
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Skills & Services</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className={`${tool.color} px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-shadow`}
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Samples Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">Work Samples</h3>
          <p className="text-center text-slate-600 mb-8">Portfolio pieces coming soon</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300"
              >
                <span className="text-slate-400 font-medium">Sample {i}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => setShowModal(true)}
              className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Work With Me
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:sunnyblaze290@gmail.com"
              className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adithya-mosam-b646831a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-900 text-white text-center">
        <p>&copy; 2024 Adithya Mosam. All rights reserved.</p>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's Work Together</h3>
                <p className="text-slate-600 mb-6">
                  Share your email and I'll reach out to discuss how I can help grow your business.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">I'll be in touch soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
