const fs = require('fs');
// Read the TS file, wait, we can't easily parse TS. We can just use tsc or string manipulation.
// Actually, since it's just exporting an array, we can transform it to JS or parse with regex.
// A simpler way: count the number of paragraphs in each contentZh/En.

const file = 'src/data/articles.ts';
const content = fs.readFileSync(file, 'utf8');

// Find all articles and count paragraphs
const articles = content.split("id: '").slice(1);
articles.forEach(articleText => {
    const idMatch = articleText.match(/^(.*?)',/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    const zhMatch = articleText.match(/contentZh:\s*\[([\s\S]*?)\]/);
    const enMatch = articleText.match(/contentEn:\s*\[([\s\S]*?)\]/);
    
    let zhParas = 0, enParas = 0, zhChars = 0, enChars = 0;
    if (zhMatch) {
        const matches = zhMatch[1].match(/'([^']*)'/g) || [];
        zhParas = matches.length;
        zhChars = matches.reduce((acc, str) => acc + str.length, 0);
    }
    if (enMatch) {
        const matches = enMatch[1].match(/'([^']*)'/g) || [];
        enParas = matches.length;
        enChars = matches.reduce((acc, str) => acc + str.length, 0);
    }
    
    console.log(`${id}: ZH: ${zhParas} paras (${zhChars} chars), EN: ${enParas} paras (${enChars} chars)`);
});
