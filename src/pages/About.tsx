import React from 'react';

export default function About() {
  return (
    <div className="bg-neutral-950 min-h-screen py-24 text-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-4 font-light text-center">About Us</h1>
        <h2 className="text-xl md:text-2xl font-serif text-neutral-400 mb-16 font-light text-center tracking-widest">关于我们</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-serif text-orient-500 mb-4">Our Mission</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed font-light text-lg">
              OrientKiln is an independent digital archive and academic media platform dedicated to exploring, preserving, and sharing the profound history, artistry, and philosophical depth of classical Chinese ceramics.
            </p>
            <p className="text-neutral-500 mb-4 leading-relaxed font-light text-sm">
              OrientKiln 是一个独立的数字档案馆与学术媒体平台，致力于探索、保护和分享中国古典瓷器深厚的历史、艺术和哲学底蕴。
            </p>
            <p className="text-neutral-300 mb-4 leading-relaxed font-light text-lg">
              From the subtle, milky glazes of Ru ware to the vibrant, untamed colors of Tang Sancai, our catalog and journal aim to record the technical evolution and aesthetic shifts that defined different eras of the Chinese empire. We believe that a piece of porcelain is a cultural messenger carrying the aesthetics, spirit, and wisdom of an entire civilization.
            </p>
            <p className="text-neutral-500 leading-relaxed font-light text-sm">
              从汝窑那含蓄温润的乳浊釉，到唐三彩那热烈奔放的窑变色彩，我们的文稿与图册旨在记录定义了各个朝代的工艺演变与美学流转。我们相信，一件瓷器不仅是器物，更是承载着整个文明美学、精神与智慧的文化信使。
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-orient-500 mb-4">Editorial Guidelines</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed font-light text-lg">
              We strictly adhere to rigorous academic standards and historical accuracy. Every article is meticulously researched and curated, heavily referencing archaeological reports, museum catalogs, and classical texts to ensure educational value.
            </p>
            <p className="text-neutral-500 mb-4 leading-relaxed font-light text-sm">
              我们严格遵守严谨的学术标准和历史准确性。每一篇文章都经过精心研究与策划，大量参考考古报告、博物馆图录和古典文献，以确保其教育价值。
            </p>
            <p className="text-neutral-300 mb-4 leading-relaxed font-light text-lg">
              Our goal is not only to provide high-quality historical documentation but also to bridge the gap between ancient aesthetics and modern design thinking, offering practical appreciation guides for contemporary collectors.
            </p>
            <p className="text-neutral-500 leading-relaxed font-light text-sm">
              我们的目标不仅是提供高质量的历史记录，更致力于连接古代美学与现代设计思维，为当代收藏家提供实用的鉴赏指南。
            </p>
          </div>
        </div>

        <div className="mb-20 pt-16 border-t border-neutral-800">
          <h3 className="text-3xl font-serif text-neutral-100 mb-4 font-light text-center">Our Project</h3>
          <h4 className="text-sm font-mono text-neutral-500 mb-12 text-center tracking-widest uppercase">关于本项目</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/50 p-8 border border-neutral-800 rounded-lg">
              <h5 className="text-xl font-serif text-white mb-1">Independent Curation</h5>
              <p className="text-orient-500 font-mono text-xs tracking-widest mb-4 uppercase">独立策展</p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                OrientKiln is an independent passion project created by enthusiasts of traditional Chinese art and aesthetics. We are dedicated to providing a curated, high-quality digital exhibition space free from commercial noise.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                OrientKiln 是由传统中国艺术与美学爱好者创立的独立项目。我们致力于提供一个经过精心策划、高质量且不受商业喧嚣影响的数字化展览空间。
              </p>
            </div>
            
            <div className="bg-neutral-900/50 p-8 border border-neutral-800 rounded-lg">
              <h5 className="text-xl font-serif text-white mb-1">Open Research</h5>
              <p className="text-orient-500 font-mono text-xs tracking-widest mb-4 uppercase">公开研究</p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                Our contents are heavily researched and compiled from publicly available historical records, museum catalogs, and academic papers to ensure accuracy and educational value.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                我们的内容经过深入研究，并汇编自公开的历史文献、博物馆图录和学术论文，以确保内容的准确性和教育价值。
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-900/30 border-l-2 border-orient-500 p-8 rounded-r-lg mt-12">
          <h3 className="text-lg font-serif text-neutral-200 mb-2 font-light">AI Generation Statement / AI生成声明</h3>
          <p className="text-neutral-400 mb-2 leading-relaxed font-light text-sm">
            Please note that to enhance visual presentation and provide the highest possible aesthetic quality for exploring historical artifacts, <strong>some artifact images, decorative graphics, and environment mockups featured on this website are generated using Artificial Intelligence (AI) technologies</strong>. These graphics are strictly for conceptual display, mood exploration, and aesthetic appreciation. They do not represent authentic macro-photography of real historical antiquities and should not be used for rigorous archaeological or academic reference.
          </p>
          <p className="text-neutral-500 leading-relaxed font-light text-sm">
            请注意，为了提升视觉呈现效果并为您提供最高水准的文物探索美学体验，<strong>本网站内部分藏品特写图片、装饰性图像以及环境渲染图系使用人工智能（AI）技术生成</strong>。这些图像仅用于概念展示、氛围探索和审美欣赏，并不代表真实的古代文物宏观摄影，因此不应作为严谨的考古或学术鉴定参考。所有学术文字与历史信息则是基于真实的史料梳理。
          </p>
        </div>
      </div>
    </div>
  );
}
