import * as fs from 'fs';

const content = fs.readFileSync('src/data/articles.ts', 'utf8');

let newContent = content;

const mappings: Record<string, any> = {
  'tang-sancai': {
    banner: 'TangSancaiBactrianCamel.png',
    card: 'Tri-ColorTangGallopingHorse.png',
    square: 'SancaiRunningHorseSculpture.png'
  },
  'jian-ware': {
    banner: 'JianSilverHare1.png',
    card: 'JianSilverHare2.png',
    square: 'JianSilverHare3.png'
  },
  'blue-and-white-porcelain': {
    banner: 'LotusBlueandWhitePearVase.png',
    card: 'TraditionalChineseFloralQinghuaVase.png',
    square: 'BlueDragonMepingVase.png'
  },
  'famille-rose': {
    banner: 'FRBirdTeapot1.png',
    card: 'FRBirdTeapot2.png',
    square: 'FRBirdTeapot3.png'
  },
  'celadon': {
    banner: 'RuCeladon1.png',
    card: 'RuCeladon2.png',
    square: 'RuCeladon3.png'
  }
};

for (const [id, imgs] of Object.entries(mappings)) {
    const rx = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?mediaUrl:\\s*'.*?',)`, 'g');
    if (!newContent.includes(imgs.banner)) {
      newContent = newContent.replace(rx, `$1\n    mediaBannerUrl: '/images/${imgs.banner}',\n    mediaCardUrl: '/images/${imgs.card}',\n    mediaSquareUrl: '/images/${imgs.square}',`);
    }
}

fs.writeFileSync('src/data/articles.ts', newContent, 'utf8');
