export default function Privacy() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="font-medium text-slate-900">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            At OrientKiln, accessible from https://www.orientkiln.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by OrientKiln and how we use it.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">1. Information We Collect</h2>
          <p>
            We collect information from you when you visit our site, register on our site, subscribe to our newsletter, respond to a survey, fill out a form, or interact with our advertisements. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">2. Log Files</h2>
          <p>
            OrientKiln follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, OrientKiln uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">4. Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.orientkiln.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">5. Advertising Partners Privacy Policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of OrientKiln. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on OrientKiln, which are sent directly to users' browser. They automatically receive your IP address when this occurs.
          </p>
          
          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">6. Third Party Privacy Policies</h2>
          <p>
            OrientKiln's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">7. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding this privacy policy, you can contact us via our Contact Us page.
          </p>
        </div>
      </div>
    </div>
  );
}
