export default function Terms() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="font-medium text-slate-900">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Welcome to OrientKiln. By accessing our website located at https://www.orientkiln.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">1. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on OrientKiln's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on OrientKiln's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">2. Disclaimer</h2>
          <p>
            The materials on OrientKiln's website are provided on an 'as is' basis. OrientKiln makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">3. Limitations</h2>
          <p>
            In no event shall OrientKiln or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OrientKiln's website, even if OrientKiln or an OrientKiln authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">4. Revisions and Errata</h2>
          <p>
            The materials appearing on OrientKiln's website could include technical, typographical, or photographic errors. OrientKiln does not warrant that any of the materials on its website are accurate, complete, or current. OrientKiln may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">5. Links</h2>
          <p>
            OrientKiln has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by OrientKiln of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">6. Site Terms of Use Modifications</h2>
          <p>
            OrientKiln may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-serif text-slate-900 mt-10 mb-4">7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </div>
  );
}
