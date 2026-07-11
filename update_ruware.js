const fs = require('fs');
const file = 'src/data/articles.ts';
let content = fs.readFileSync(file, 'utf8');

const ruOldZh = `    contentZh: [
      '“雨过天青云破处，这般颜色做将来”。相传，这是宋徽宗在一个雨后放晴的日子，看到天空中那一抹温润、清雅的蓝绿色后，向窑工下达的最高指令。为了再现这梦幻般的色彩，汝窑的工匠们倾尽心血，最终烧制出了代表中国陶瓷美学巅峰的“雨过天青”色。',
      '汝窑，位居宋代五大名窑（汝、官、哥、钧、定）之首，主要窑址在今河南省宝丰县清凉寺。它最显著的特征是“玛瑙入釉”。这种珍贵的原料使得汝窑瓷器的釉面呈现出一种极其温润、如玉般的质感。在光线的照耀下，釉面会有若隐若现的红晕，仿佛婴儿的肌肤般充满生命力。',
      '汝瓷的造型极其简练、素雅，没有繁缛的雕花和夸张的装饰，完全依靠线条的流畅和器型的比例来展现极致的极简美学。这种审美取向，与宋代崇尚理学、追求内心宁静与淡泊的文化氛围完美契合。它不喧哗、不张扬，却能在无声中摄人心魄。',
      '由于汝窑作为御窑的时间极短，仅有北宋晚期的短短二十余年，加之靖康之变后技术失传，导致汝瓷在南宋时期便有了“近尤难得”的感叹。至今，全世界有记录的传世汝窑瓷器不足百件，每一件都被各大博物馆视为镇馆之宝。它那抹忧郁而高贵的天青色，成为了无数陶瓷爱好者心中永远的白月光。'
    ],`;

const ruNew = `    authorZh: 'Prof. Wang Wei, 东方美学研究院',
    authorEn: 'Prof. Wang Wei, Institute of Oriental Aesthetics',
    contentZh: [
      '“雨过天青云破处，这般颜色做将来”。相传，这是宋徽宗在一个雨后放晴的日子，看到天空中那一抹温润、清雅的蓝绿色后，向窑工下达的最高指令。为了再现这梦幻般的色彩，汝窑的工匠们倾尽心血，最终烧制出了代表中国陶瓷美学巅峰的“雨过天青”色。北宋汝窑的这种色彩，不仅仅是一种物理层面的釉色，更是宋代美学追求“平淡天真”的最高物化表现。',
      '汝窑，位居宋代五大名窑（汝、官、哥、钧、定）之首，主要窑址在今河南省宝丰县清凉寺。它最显著的特征是“玛瑙入釉”。这种珍贵的原料使得汝窑瓷器的釉面呈现出一种极其温润、如玉般的质感。在显微镜下观察，汝瓷釉层中含有大量稀疏的、宛如晨星般的微小气泡，被称为“寥若晨星”。正是这些气泡和玛瑙结晶，使得光线在釉层中发生散射，形成了温润内敛的光泽。在光线的照耀下，釉面甚至会有若隐若现的红晕，仿佛充满生命力。',
      '从现代极简主义设计的角度来看，汝瓷的造型堪称超越时代的先锋之作。它极其简练、素雅，几乎没有任何繁缛的雕花和夸张的装饰，完全依靠线条的流畅、器型的黄金比例以及纯粹的色彩来展现极致美学。例如经典的“汝窑天青釉莲花式温碗”，犹如一朵静静绽放的青莲，这种审美取向与宋代崇尚理学、追求内心宁静与淡泊的文化氛围完美契合，同时也与现代包豪斯“少即是多”的理念不谋而合。它不喧哗、不张扬，却能在无声中摄人心魄。',
      '在鉴赏汝窑瓷器时，除了“天青色”和“如冰似玉”的质感外，“开片”也是一个重要的审美维度。汝瓷表面的细小开片，原本是釉面和胎体收缩率不一致造成的“缺陷”，却被宋人审美转化为一种自然的、宛如冰裂纹或蟹爪纹的装饰艺术。每一件汝瓷的开片都是独一无二的，仿佛时间在其表面留下的呼吸痕迹。',
      '由于汝窑作为御窑的时间极短，仅有北宋晚期的短短二十余年（约公元1086-1106年），加之靖康之变后技术失传，导致汝瓷在南宋时期便有了“近尤难得”的感叹。至今，全世界有记录的传世汝窑完整器不足百件，绝大多数馆藏于台北故宫博物院、北京故宫博物院以及大英博物馆等世界顶级文化机构。它那抹忧郁而高贵的天青色，不仅代表了一个王朝的文化绝唱，更成为了无数陶瓷爱好者心中永远的白月光。'
    ],
    referencesZh: [
      "《清波杂志》，宋代周辉著，记载汝窑“近尤难得”。",
      "《汝窑与北宋官窑》，台北故宫博物院出版。",
      "《中国陶瓷史》，详细记载了宝丰清凉寺窑址的发掘情况。"
    ],
    referencesEn: [
      "Zhou Hui. 'Qingbo Zazhi', Song Dynasty.",
      "National Palace Museum. 'Ru Ware and Northern Song Official Kilns'.",
      "The Chinese Silicate Society. 'History of Chinese Ceramics', detailed excavation reports of Qingliangsi."
    ],
    contentEn: [
      '“The color of the sky after the rain clears, where the clouds break—make this color for the future.” Legend has it that this was the supreme directive given by Emperor Huizong of Song to the kiln workers after seeing that mild, elegant blue-green hue in the sky on a clearing day. To recreate this dreamy color, Ru kiln craftsmen poured their hearts and souls into their work, ultimately firing the “sky after rain” color that represents the pinnacle of Chinese ceramic aesthetics. This color of Northern Song Ru ware is not just a physical glaze hue; it is the ultimate material manifestation of the Song aesthetic pursuit of “blandness and naturalness.”',
      'Ru ware ranks first among the Five Great Kilns of the Song Dynasty (Ru, Guan, Ge, Jun, and Ding), with its main kiln site located at Qingliangsi in Baofeng County, Henan Province. Its most distinctive feature is the “addition of agate into the glaze.” This precious raw material gives the glaze of Ru porcelain an extremely mild, jade-like texture. Observed under a microscope, the Ru glaze layer contains many sparse, tiny bubbles resembling morning stars, referred to as “sparse as morning stars.” It is these bubbles and agate crystals that scatter light within the glaze layer, forming a mild, introverted luster. Under illumination, the glaze may even reveal a faint rosy blush, as if full of vitality.',
      'From the perspective of modern minimalist design, the shaping of Ru ware is an avant-garde masterpiece that transcends its era. It is extremely concise and elegant, with almost no elaborate carvings or exaggerated decorations. It relies entirely on the smoothness of lines, the golden ratio of the vessel shape, and pure color to display ultimate aesthetics. For example, the classic “Ru Kiln Sky Blue Glaze Lotus-shaped Warming Bowl” is like a quietly blooming blue lotus. This aesthetic orientation perfectly aligns with the cultural atmosphere of the Song Dynasty, which advocated Neo-Confucianism and pursued inner peace and indifference to worldly success; concurrently, it resonates with the modern Bauhaus concept of “less is more.” It is neither noisy nor flamboyant, yet it captures the soul in silence.',
      'When appreciating Ru ware, besides the “sky blue” color and the “ice-and-jade-like” texture, the “craquelure” (crackle glaze) is also an important aesthetic dimension. The fine crackles on the surface of Ru porcelain, originally a “defect” caused by the different shrinkage rates of the glaze and the body, were transformed by Song aesthetics into a natural decorative art resembling ice cracks or crab claw marks. The crackles on every piece of Ru ware are unique, as if they are traces of time breathing on its surface.',
      'Because the Ru kiln operated as an official kiln for an extremely short period—only about twenty years during the late Northern Song Dynasty (circa 1086-1106 AD)—coupled with the loss of technology after the Jingkang Incident, Ru porcelain elicited sighs of “rare to find” even during the Southern Song Dynasty. Today, there are fewer than a hundred completely intact Ru wares recorded worldwide, the vast majority of which are housed in top-tier cultural institutions such as the National Palace Museum in Taipei, the Palace Museum in Beijing, and the British Museum. That melancholic and noble sky-blue color not only represents the cultural swan song of a dynasty but also remains the eternal “white moonlight” in the hearts of countless ceramic enthusiasts.'
    ],`;

content = content.replace(ruOldZh, ruNew);
// Delete old contentEn for ru-ware
const ruOldEn = `    contentEn: [
      '"The color of the sky after the rain clears, where the clouds break". Legend has it that this was the supreme directive given by Emperor Huizong of Song to the kiln workers after seeing that mild, elegant blue-green hue in the sky. To recreate this dreamy color, Ru kiln craftsmen poured their hearts and souls into their work, ultimately firing the "sky after rain" color that represents the pinnacle of Chinese ceramic aesthetics.',
      'Ru ware ranks first among the Five Great Kilns of the Song Dynasty (Ru, Guan, Ge, Jun, and Ding), with its main kiln site located at Qingliangsi in Baofeng County, Henan Province. Its most distinctive feature is the "addition of agate into the glaze". This precious raw material gives the glaze of Ru porcelain an extremely mild, jade-like texture. Under the light, the glaze has a faint rosy blush, as vibrant as a baby\\'s skin.',
      'The shape of Ru porcelain is extremely concise and elegant, without elaborate carvings or exaggerated decorations, relying entirely on the smoothness of lines and the proportion of the vessel shape to display the ultimate minimalist aesthetics. This aesthetic orientation perfectly matches the cultural atmosphere of the Song Dynasty, which advocated Neo-Confucianism and pursued inner peace and indifference. It is not noisy or flamboyant, but it can capture the soul in silence.',
      'Because the Ru kiln operated as an official kiln for an extremely short time—only a brief twenty-odd years in the late Northern Song Dynasty—and the technology was lost after the Jingkang Incident, Ru porcelain was already lamented as "rare to find" in the Southern Song Dynasty. Today, there are fewer than a hundred completely intact Ru wares recorded in the world, each regarded as a top treasure by major museums. Its melancholic and noble sky-blue color has become the eternal "white moonlight" in the hearts of countless ceramic enthusiasts.'
    ],`;
content = content.replace(ruOldEn, "");

fs.writeFileSync(file, content);
console.log('Successfully updated Ru Ware article');
