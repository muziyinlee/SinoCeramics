const fs = require('fs');
const content = fs.readFileSync('./src/data/articles.ts', 'utf8');

let newContent = content;

const mappings = {
  'tang-sancai': {
    banner: 'TangSancaiBactrianCamel.png',
    card: 'Tri-ColorTangGallopingHorse.png',
    square: 'SancaiRunningHorseSculpture.png'
  },
  'blue-and-white-porcelain': {
    banner: 'LotusBlueandWhitePearVase.png',
    card: 'TraditionalChineseFloralQinghuaVase.png',
    square: 'BlueDragonMepingVase.png'
  }
};

for (const [id, imgs] of Object.entries(mappings)) {
    const rx = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?mediaUrl:\\s*'.*?',)`, 'g');
    newContent = newContent.replace(rx, `$1\n    mediaBannerUrl: '/images/${imgs.banner}',\n    mediaCardUrl: '/images/${imgs.card}',\n    mediaSquareUrl: '/images/${imgs.square}',`);
}

fs.writeFileSync('./src/data/articles.ts', newContent, 'utf8');
