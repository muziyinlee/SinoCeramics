export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 text-center">Contact Us</h1>
        <p className="text-slate-600 text-center mb-12">
          We welcome inquiries from researchers, collectors, and enthusiasts alike.
        </p>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" id="name" className="w-full rounded-lg border-slate-300 border p-3 focus:border-orient-500 focus:ring-orient-500 outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full rounded-lg border-slate-300 border p-3 focus:border-orient-500 focus:ring-orient-500 outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea id="message" rows={6} className="w-full rounded-lg border-slate-300 border p-3 focus:border-orient-500 focus:ring-orient-500 outline-none transition-colors"></textarea>
            </div>
            <button type="button" className="w-full bg-slate-900 text-white rounded-lg py-3 font-medium hover:bg-slate-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
