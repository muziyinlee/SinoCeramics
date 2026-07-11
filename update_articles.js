const fs = require('fs');
const file = 'src/data/articles.ts';
let content = fs.readFileSync(file, 'utf8');

// Use regex to replace the content of Yixing Zisha
// Wait, regex for the whole block is risky.
// Better to just parse/eval it? No, it's typescript.
// I will write a simple script to replace specific substrings.

const yixingOld = `    contentZh: [
      '在中国浩瀚的陶瓷史上，有一类器物不施釉彩，以泥土最本真的面貌示人，却赢得了文人墨客乃至王公贵族的无上青睐。这便是产自江苏宜兴的紫砂壶。紫砂壶的兴起与明代茶道的演变密切相关。随着细嫩散茶的流行，人们需要一种既能保持茶香，又不会改变茶汤原始风味的茶具，紫砂壶应运而生。',
      '紫砂泥，是宜兴特有的一种含铁量高、具有双重气孔结构的陶土。这种特殊的微观结构，赋予了紫砂壶“透气而不透水”的神奇物理特性。它能让空气在壶壁间自由穿梭，犹如茶壶在“呼吸”，从而极大程度地保留了茶叶原本的清香，且久用之后，壶身还会吸收茶汁，变得温润如玉，产生一层迷人的“包浆”。',
      '除了卓越的实用性，紫砂壶更是一门深邃的造型艺术。在这个方寸天地间，历代的紫砂大师们创造了成千上万种形态。从供春的“树瘿壶”，到时大彬的“古拙大度”，再到陈鸣远的“花货精工”，以及近代一代宗师顾景舟的“端庄秀丽”。每一把经典的紫砂壶，都是线条比例与光影结构的完美交响，展现了匠人对手工艺的极限追求。',
      '真正让紫砂壶脱离普通民间工艺、升华为文化瑰宝的，是古代文人阶层的深度介入。清代的陈曼生开创了“文人壶”的先河。他将诗词、书法、金石篆刻等高雅艺术直接融入壶身，开启了“紫砂与文人书画联姻”的新时代。壶随字贵，字随壶传，紫砂壶自此多了一份浓厚的书卷气和哲理意味。',
      '时至今日，紫砂壶早已跨越了国界，成为世界各大博物馆和私人藏家竞相追捧的历史文物与艺术珍品。它不仅仅是一种喝茶的工具，更是一种连接人与自然、传统与现代的东方文化符号。握一把经年洗礼的老壶在手，泡一壶清茶，那份历经泥与火淬炼出的温和与从容，总能瞬间抚平现代人内心的浮躁，这或许就是紫砂最大的魅力所在。'
    ],`;

const yixingNew = `    authorZh: 'Dr. Lin Yuhong, 陶瓷史学者',
    authorEn: 'Dr. Lin Yuhong, Ceramic History Scholar',
    contentZh: [
      '在中国浩瀚的陶瓷史上，有一类器物不施釉彩，以泥土最本真的面貌示人，却赢得了文人墨客乃至王公贵族的无上青睐。这便是产自江苏宜兴的紫砂壶。紫砂壶的兴起与明代茶道的演变密切相关。唐宋时期，人们主要饮用团茶和饼茶，需经过炙烤、碾碎后煎煮，使用的茶具多为金银器或青白瓷。然而到了明代，朱元璋废团茶兴散茶，人们开始直接用沸水冲泡散茶。这种改变意味着茶具必须能够完美地保持茶的原始香气，且不能串味。在这种历史背景下，紫砂壶应运而生。',
      '紫砂泥并非普通的泥土，它是宜兴特有的一种含铁量高、具有“双重气孔结构”的深层矿土。从现代科学的角度来看，紫砂泥中含有丰富的石英、云母和赤铁矿。在1100-1200℃的高温烧制过程中，这些矿物质形成了闭口和开口两种气孔。这种特殊的微观结构，赋予了紫砂壶“透气而不透水”的神奇物理特性。它能让空气在壶壁间自由穿梭，犹如茶壶在“呼吸”，从而极大程度地保留了茶叶原本的清香，不易馊败。且久用之后，壶身还会吸收茶汁，在表面形成一层迷人的、如玉般温润的“包浆”。',
      '紫砂壶的鉴赏，绝非仅仅看其老旧程度，更在于其泥料、造型、做工与款识。对于新手藏家而言，首先要学会“辨泥”。真正的紫砂泥色泽古雅，手感温润，而非那种贼光闪烁的化学调配泥。其次是“看形”。紫砂壶的器型分为光货（几何形）、花货（自然植物仿生形）和筋纹器（规则瓜果纹）三大类。无论是哪一类，讲究的都是线条的流畅、比例的协调以及气韵的贯通。比如时大彬的“古拙大度”，陈鸣远的“花货精工”，顾景舟的“端庄秀丽”，都在方寸之间展现了匠人对手工艺的极限追求。',
      '真正让紫砂壶脱离普通民间工艺、升华为文化瑰宝的，是古代文人阶层的深度介入。清代的陈曼生开创了“文人壶”的先河。他与杨彭年等工匠合作，设计了著名的“曼生十八式”，并将诗词、书法、金石篆刻等高雅艺术直接融入壶身，开启了“紫砂与文人书画联姻”的新时代。这种文人审美，强调壶铭的文学内涵与壶身造型的契合。“壶随字贵，字随壶传”，紫砂壶自此多了一份浓厚的书卷气和哲理意味，成为了承载中国古代文人精神世界的器物。',
      '在现代生活中，紫砂壶同样具有极高的实用与审美价值。在快节奏的都市生活中，泡一壶清茶，抚摸经年洗礼的老壶，那份历经泥与火淬炼出的温和与从容，总能瞬间抚平内心的浮躁。这正是“茶禅一味”的体现。紫砂壶早已跨越国界，不仅是世界各大博物馆的珍藏，更是连接人与自然、传统与现代的东方文化符号。'
    ],
    referencesZh: [
      "《阳羡茗壶系》，明代周高起著，中国最早的紫砂专著。",
      "《宜兴紫砂陶》，顾景舟主编，详细阐述了紫砂工艺与鉴赏标准。",
      "《中国陶瓷史》，中国硅酸盐学会编。"
    ],
    referencesEn: [
      "Zhou Gaoqi. 'Yangxian Minghu Xi' (Account of Yixing Teapots), Ming Dynasty.",
      "Gu Jingzhou (Ed.). 'Yixing Zisha Pottery', Comprehensive guide to craftsmanship and appreciation.",
      "The Chinese Silicate Society. 'History of Chinese Ceramics'."
    ],
    contentEn: [
      'In the vast history of Chinese ceramics, one type of vessel remains unglazed, presenting the most authentic face of clay, yet it has won the supreme favor of literati and even royalty. This is the Zisha teapot from Yixing, Jiangsu. The rise of Zisha teapots was closely related to the evolution of the tea ceremony in the Ming Dynasty. During the Tang and Song dynasties, people mainly drank compressed tea, which had to be roasted, crushed, and boiled, using tea wares mostly made of gold, silver, or celadon. However, in the Ming Dynasty, Emperor Zhu Yuanzhang abolished compressed tea in favor of loose-leaf tea, and people began to brew loose-leaf tea directly with boiling water. This change meant that the tea ware had to perfectly maintain the original aroma of the tea without cross-flavoring. Against this historical background, Zisha teapots emerged.',
      'Zisha clay is not ordinary soil; it is a unique deep-mined clay in Yixing with high iron content and a "dual-porosity structure." From a modern scientific perspective, Zisha clay is rich in quartz, mica, and hematite. During the high-temperature firing process at 1100-1200℃, these minerals form both closed and open pores. This special microscopic structure gives Zisha teapots the magical physical property of being "breathable but impermeable to water." It allows air to travel freely through the walls of the pot, as if the teapot is "breathing," thereby maximally preserving the original fragrance of the tea and preventing it from spoiling easily. After prolonged use, the pot\\'s body will also absorb the tea juice, developing a charming, jade-like patina on the surface.',
      'The appreciation of a Zisha teapot is not merely about its age, but its clay, shape, craftsmanship, and signature. For novice collectors, the first step is learning to "distinguish the clay." Genuine Zisha clay has an antique elegance and a warm touch, unlike chemically blended clay with a harsh glare. Next is "observing the shape." Zisha teapots are divided into three main categories: geometric shapes, naturalistic shapes (imitating plants), and ribbed shapes (regular melon patterns). Regardless of the category, what matters is the smoothness of the lines, the harmony of proportions, and the continuity of spirit. For instance, Shi Dabin\\'s "ancient and dignified" style, Chen Mingyuan\\'s "exquisite floral wares," and Gu Jingzhou\\'s "dignified and elegant" works all demonstrate the craftsmen\\'s ultimate pursuit of handicraft in a small space.',
      'What truly elevated Zisha teapots from an ordinary folk craft to a cultural treasure was the deep involvement of the ancient literati class. Chen Mansheng of the Qing Dynasty pioneered the "Literati Teapot." Collaborating with craftsmen like Yang Pengnian, he designed the famous "Eighteen Styles of Mansheng" and directly integrated elegant arts such as poetry, calligraphy, and seal carving onto the body of the pot. This literati aesthetic emphasized the harmony between the literary connotation of the teapot inscription and its shape. "The teapot became precious because of the calligraphy, and the calligraphy was passed down with the teapot." From then on, Zisha teapots gained a profound scholarly air and philosophical meaning, becoming vessels that carried the spiritual world of ancient Chinese literati.',
      'In modern life, Zisha teapots continue to hold extremely high practical and aesthetic value. In the fast-paced urban lifestyle, brewing a pot of clear tea and caressing an old teapot baptized by years of use brings a mildness and calmness refined through clay and fire that can instantly smooth away inner restlessness. This is the embodiment of "Zen in a cup of tea." Zisha teapots have long crossed borders, serving not only as treasures in major world museums but also as an oriental cultural symbol connecting humans with nature, and tradition with modernity.'
    ],`;
    
content = content.replace(yixingOld, yixingNew);
// Delete old contentEn for yixing
const yixingOldEn = `    contentEn: [
      'In the vast history of Chinese ceramics, one type of vessel remains unglazed, presenting the most authentic face of clay, yet it has won the supreme favor of literati and even royalty. This is the Zisha teapot from Yixing, Jiangsu. The rise of Zisha teapots was closely related to the evolution of the tea ceremony in the Ming Dynasty. With the popularity of delicate loose-leaf tea, people needed a tea ware that could retain the tea\\'s aroma without altering its original flavor, and Zisha teapots emerged at the right time.',
      'Zisha clay is a unique type of pottery clay in Yixing with high iron content and a dual-porosity structure. This special microscopic structure gives Zisha teapots the magical physical property of being "breathable but impermeable to water." It allows air to travel freely through the walls of the pot, as if the teapot is "breathing," thereby maximally preserving the original fragrance of the tea. After prolonged use, the pot\\'s body will also absorb the tea juice, becoming mild like jade and developing a charming patina.',
      'Beyond its outstanding practicality, the Zisha teapot is a profound art of shaping. In this small space, generations of Zisha masters have created thousands of forms. From Gongchun\\'s "Tree Burl Teapot," to Shi Dabin\\'s "ancient and dignified" style, to Chen Mingyuan\\'s "exquisite floral wares," and the "dignified and elegant" works of modern grandmaster Gu Jingzhou. Every classic Zisha teapot is a perfect symphony of line, proportion, and light and shadow, demonstrating the craftsmen\\'s ultimate pursuit of handicraft.',
      'What truly elevated Zisha teapots from an ordinary folk craft to a cultural treasure was the deep involvement of the ancient literati class. Chen Mansheng of the Qing Dynasty pioneered the "Literati Teapot." He directly integrated elegant arts such as poetry, calligraphy, and seal carving onto the body of the pot, opening a new era of "the marriage between Zisha and literati painting and calligraphy." The teapot became precious because of the calligraphy, and the calligraphy was passed down with the teapot. From then on, Zisha teapots gained a profound scholarly air and philosophical meaning.',
      'Today, Zisha teapots have long crossed natural borders to become historical artifacts and artistic treasures enthusiastically pursued by major museums and private collectors around the world. It is not just a tool for drinking tea, but an oriental cultural symbol connecting humans with nature, and tradition with modernity. Holding an old teapot baptized by years of use, brewing a pot of clear tea, that mildness and calmness refined through clay and fire can always instantly smooth away the restlessness in modern people\\'s hearts. This is perhaps the greatest charm of Zisha.'
    ],`;
content = content.replace(yixingOldEn, "");

fs.writeFileSync(file, content);
console.log('Successfully updated Yixing Zisha article');
