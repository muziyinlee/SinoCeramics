export default function Terms() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="max-w-none space-y-6 text-slate-700">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US')}</p>

        <p>
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Acknowledgment</h2>
        <p>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
        </p>
        <p>
          The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Links to Other Websites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, You can contact us by email: contact@sinoceramics.example.com</p>
      </div>
    </div>
  );
}
