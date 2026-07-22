const fs = require('fs');
const file = 'src/data/articles.ts';
const content = fs.readFileSync(file, 'utf8');

const articles = content.split("id: '").slice(1);
articles.forEach(articleText => {
    const idMatch = articleText.match(/^(.*?)',/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    // Instead of regex for quotes, just extract the whole block
    const zhMatch = articleText.match(/contentZh:\s*\[([\s\S]*?)\]/);
    const enMatch = articleText.match(/contentEn:\s*\[([\s\S]*?)\]/);
    
    let zhLen = zhMatch ? zhMatch[1].length : 0;
    let enLen = enMatch ? enMatch[1].length : 0;
    
    console.log(`${id}: ZH: ${zhLen}, EN: ${enLen}`);
});
