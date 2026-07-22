import { Helmet } from 'react-helmet-async';

export default function 
Terms() {
  return (
    <div className="bg-neutral-950 min-h-screen py-24">
      <Helmet>
        <title>Terms of Service | OrientKiln</title>
        <meta name="description" content="Terms of Service and disclaimers for OrientKiln." />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-8 font-light">Terms of Service</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light">
          <p className="font-medium text-neutral-300">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Welcome to OrientKiln. By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">1. AI Content Disclaimer</h2>
          <p>
            The artifact images, visual illustrations, and aesthetic renderings provided on this platform are generated via Artificial Intelligence. They are not intended to represent actual physical antiquities, and their usage is strictly limited to conceptual appreciation and educational framing.
          </p>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on OrientKiln's website for personal, non-commercial transitory viewing only.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose;</li>
            <li>remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2 className="text-2xl font-serif text-neutral-200 mt-10 mb-4 font-light">3. Disclaimer</h2>
          <p>
            The materials on OrientKiln's website are provided on an 'as is' basis. OrientKiln makes no warranties, expressed or implied, regarding the accuracy or authenticity of generated visual materials.
          </p>
        </div>
      </div>
    </div>
  );
}
