import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:reginiadenherdervd@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-neutral-950 min-h-screen py-24 text-neutral-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-8 text-center font-light">Contact</h1>
        <div className="text-center mb-12">
          <p className="text-neutral-400 font-light mb-6">
            We welcome inquiries from researchers, collectors, and enthusiasts alike.
          </p>
          <div className="inline-flex flex-col items-center p-6 bg-neutral-900 border border-neutral-800 w-full md:w-auto">
             <span className="text-xs uppercase tracking-widest font-medium text-neutral-500 mb-2">Direct Email</span>
             <a href="mailto:reginiadenherdervd@gmail.com" className="text-orient-500 hover:text-orient-400 font-mono transition-colors">
               reginiadenherdervd@gmail.com
             </a>
          </div>
        </div>
        
        <div className="bg-neutral-900 rounded-none border border-neutral-800 p-8 md:p-12 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest font-medium text-neutral-500 mb-2">Name</label>
              <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-neutral-950 border-neutral-800 border p-4 text-neutral-200 focus:border-orient-500 focus:ring-orient-500 outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest font-medium text-neutral-500 mb-2">Email</label>
              <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-neutral-950 border-neutral-800 border p-4 text-neutral-200 focus:border-orient-500 focus:ring-orient-500 outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest font-medium text-neutral-500 mb-2">Message</label>
              <textarea id="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-neutral-950 border-neutral-800 border p-4 text-neutral-200 focus:border-orient-500 focus:ring-orient-500 outline-none transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full bg-orient-900/30 border border-orient-500/30 text-orient-400 py-4 text-xs uppercase tracking-widest font-medium hover:bg-orient-900/50 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
