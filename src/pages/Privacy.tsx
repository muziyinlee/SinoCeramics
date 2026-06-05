export default function Privacy() {
  return (
    <div className="bg-neutral-950 min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-8 font-light">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light">
          <p className="font-medium text-neutral-300">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            At OrientKiln, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by OrientKiln and how we use it.
          </p>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">1. Information We Collect</h2>
          <p>
            We collect information from you when you visit our site, register on our site, subscribe to our newsletter, respond to a survey, fill out a form, or interact with our advertisements. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">2. Log Files</h2>
          <p>
            OrientKiln follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
          </p>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, OrientKiln uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
          </p>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">4. Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
          </p>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">5. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding this privacy policy, you can contact us via our Contact Us page.
          </p>
        </div>
      </div>
    </div>
  );
}
