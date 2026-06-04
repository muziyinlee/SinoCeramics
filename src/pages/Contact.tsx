import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('Message sent successfully! We will get back to you soon.');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        We would love to hear from you. Whether you have a question about Chinese ceramics, want to collaborate, or need assistance, our team is ready to answer all your questions.
      </p>

      <div className="bg-white px-8 py-10 shadow-sm border border-slate-100 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="w-full border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="w-full border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
            <input 
              type="text" 
              id="subject" 
              required 
              className="w-full border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="How can we help you?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              required 
              className="w-full border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none"
              placeholder="Your message details..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded transition-colors"
          >
            Send Message
          </button>
          
          {status && (
            <div className="mt-4 p-4 bg-green-50 text-green-700 rounded text-center">
              {status}
            </div>
          )}
        </form>
      </div>

      <div className="mt-12 text-center text-slate-600 text-sm">
        <p>Alternatively, you can email us directly at: <a href="mailto:contact@sinoceramics.com" className="text-blue-600 hover:underline">contact@sinoceramics.com</a></p>
      </div>
    </div>
  );
}
