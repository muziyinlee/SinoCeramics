const fs = require('fs');
const file = 'src/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldTeam = `<div className="mb-20 pt-16 border-t border-neutral-800">
          <h3 className="text-3xl font-serif text-neutral-100 mb-4 font-light text-center">Editorial Team</h3>
          <h4 className="text-sm font-mono text-neutral-500 mb-12 text-center tracking-widest uppercase">核心编辑团队</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/50 p-8 border border-neutral-800 rounded-lg">
              <h5 className="text-xl font-serif text-white mb-1">Dr. Lin Yuhong (林宇宏 博士)</h5>
              <p className="text-orient-500 font-mono text-xs tracking-widest mb-4 uppercase">Senior Ceramics Historian</p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                Holding a Ph.D. in East Asian Art History, Dr. Lin specializes in the socio-cultural impact of Ming and Qing dynasty ceramics, with a particular focus on Yixing Zisha wares.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                林博士拥有东亚艺术史博士学位，专攻明清陶瓷的社会文化影响，特别专注于宜兴紫砂器的研究。
              </p>
            </div>
            
            <div className="bg-neutral-900/50 p-8 border border-neutral-800 rounded-lg">
              <h5 className="text-xl font-serif text-white mb-1">Prof. Wang Wei (王维 教授)</h5>
              <p className="text-orient-500 font-mono text-xs tracking-widest mb-4 uppercase">Aesthetics & Song Dynasty Expert</p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                A renowned expert in Northern Song aesthetics and official kilns. Prof. Wang bridges the philosophy of ancient minimalism with contemporary design theory.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                北宋美学与官窑的知名专家。王教授致力于将古代极简主义哲学与当代设计理论相结合。
              </p>
            </div>
          </div>
        </div>`;

const newTeam = `<div className="mb-20 pt-16 border-t border-neutral-800">
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
        </div>`;

content = content.replace(oldTeam, newTeam);
// Update Editorial Guidelines section to remove mention of specific team
const oldGuidelines = `Every article is meticulously researched by our team of ceramic history scholars and art historians, heavily referencing archaeological reports, museum catalogs, and classical texts.`;
const newGuidelines = `Every article is meticulously researched and curated, heavily referencing archaeological reports, museum catalogs, and classical texts to ensure educational value.`;
content = content.replace(oldGuidelines, newGuidelines);

const oldGuidelinesZh = `每一篇文章都由我们的陶瓷史学者和艺术史学家团队精心研究，大量参考考古报告、博物馆图录和古典文献。`;
const newGuidelinesZh = `每一篇文章都经过精心研究与策划，大量参考考古报告、博物馆图录和古典文献，以确保其教育价值。`;
content = content.replace(oldGuidelinesZh, newGuidelinesZh);

fs.writeFileSync(file, content);
console.log('Updated About.tsx');

const articlesFile = 'src/data/articles.ts';
let articlesContent = fs.readFileSync(articlesFile, 'utf8');

// Use regex to remove authorZh and authorEn
articlesContent = articlesContent.replace(/ *authorZh:.*,\n/g, '');
articlesContent = articlesContent.replace(/ *authorEn:.*,\n/g, '');
fs.writeFileSync(articlesFile, articlesContent);
console.log('Updated articles.ts');
