export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="max-w-none space-y-6 text-slate-700">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US')}</p>
        
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Interpretation and Definitions</h2>
        <h3 className="text-xl font-bold mt-6 mb-2 text-slate-900">Interpretation</h3>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

        <h3 className="text-xl font-bold mt-6 mb-2 text-slate-900">Definitions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SinoCeramics.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Website</strong> refers to SinoCeramics, accessible from this domain.</li>
          <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Collecting and Using Your Personal Data</h2>
        <h3 className="text-xl font-bold mt-6 mb-2 text-slate-900">Types of Data Collected</h3>
        <h4 className="text-lg font-bold mt-4 mb-2 text-slate-900">Usage Data</h4>
        <p>
          Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2 text-slate-900">Cookies and Tracking Technologies (Important for AdSense)</h4>
        <p>
           We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. We use third-party vendors, including Google, who use cookies to serve ads based on a user's prior visits to your website or other websites.
        </p>
        <p>
           Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
        </p>
        <p>
           Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Ads Settings</a>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, You can contact us by email: contact@sinoceramics.com</p>
      </div>
    </div>
  );
}
