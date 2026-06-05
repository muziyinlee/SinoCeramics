export default function About() {
  return (
    <div className="bg-neutral-950 min-h-screen py-24 text-neutral-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-4 font-light text-center">About</h1>
        <h2 className="text-xl md:text-2xl font-serif text-neutral-400 mb-12 font-light text-center tracking-widest">关于我们</h2>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-neutral-300 mb-4 leading-relaxed font-light">
            OrientKiln is dedicated to exploring, preserving, and sharing the profound history, artistry, and philosophical depth of classical Chinese ceramics.
          </p>
          <p className="text-neutral-500 mb-12 leading-relaxed font-light text-base">
            OrientKiln 致力于探索、保护和分享中国古典瓷器深厚的历史、艺术和哲学底蕴。
          </p>

          <p className="text-neutral-300 mb-4 leading-relaxed font-light">
            From the subtle, milky glazes of Ru ware to the vibrant, untamed colors of Jun kilns, our catalog and journal aim to record the technical evolution and aesthetic shifts that defined different eras of the Chinese empire. We believe that a piece of porcelain is never just an object; it is a cultural messenger that carries the aesthetics, spirit, and wisdom of an entire civilization.
          </p>
          <p className="text-neutral-500 mb-12 leading-relaxed font-light text-base">
            从汝窑那含蓄温润的乳浊釉，到钧窑那热烈奔放的窑变色彩，我们的文稿与图册旨在记录定义了各个朝代的工艺演变与美学流转。我们相信，一件瓷器从来都不只是一件没有生命温度的器物，它是承载着整个文明美学、精神与智慧的文化信使。
          </p>

          <p className="text-neutral-300 mb-4 leading-relaxed font-light">
            Whether you are an academic researcher, an antique collector, or simply an enthusiast captivated by oriental art, we hope this space provides a meaningful and beautiful journey back in time.
          </p>
          <p className="text-neutral-500 mb-16 leading-relaxed font-light text-base">
            无论您是学术研究者、古董收藏家，还是单纯被东方艺术所吸引的爱好者，我们都希望这个空间能为您提供一段有意义且美丽的时光倒流之旅。
          </p>
          
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-none">
            <h3 className="text-lg font-serif text-neutral-200 mb-2 font-light">AI Generation Statement</h3>
            <h4 className="text-base font-serif text-neutral-400 mb-4 font-light tracking-widest">AI生成声明</h4>
            <p className="text-neutral-400 mb-2 leading-relaxed font-light text-sm">
              Please note that to enhance visual presentation and provide the highest possible aesthetic quality for exploring historical artifacts, <strong>some artifact images, decorative graphics, and environment mockups featured on this website are generated using Artificial Intelligence (AI) technologies</strong>. These graphics are strictly for conceptual display, mood exploration, and aesthetic appreciation. They do not represent authentic macro-photography of real historical antiquities and should not be used for rigorous archaeological or academic reference.
            </p>
            <p className="text-neutral-500 leading-relaxed font-light text-sm">
              请注意，为了提升视觉呈现效果并为您提供最高水准的文物探索美学体验，<strong>本网站内部分藏品特写图片、装饰性图像以及环境渲染图系使用人工智能（AI）技术生成</strong>。这些图像仅用于概念展示、氛围探索和审美欣赏，并不代表真实的古代文物宏观摄影，因此不应作为严谨的考古或学术鉴定参考。所有学术文字与历史信息则是基于真实的史料梳理。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
