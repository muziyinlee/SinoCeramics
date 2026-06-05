export interface Artisan {
  id: string;
  nameZh: string;
  nameEn: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  contentZh: string[];
  contentEn: string[];
  mediaUrl: string;
  dynastyZh: string;
  dynastyEn: string;
}

export const ARTISANS: Artisan[] = [
  {
    id: 'tang-ying',
    nameZh: '唐英',
    nameEn: 'Tang Ying',
    titleZh: '大清御窑厂的巅峰缔造者',
    titleEn: 'The Mastermind of the Qing Imperial Kiln',
    summaryZh: '唐英是清代雍正、乾隆时期的御窑厂督陶官。他在景德镇督陶期间，成就了中国古代制瓷工艺的最高峰。',
    summaryEn: 'Tang Ying was the superintendent of the Imperial Kiln during the Yongzheng and Qianlong eras of the Qing Dynasty, pushing Chinese ceramic craftsmanship to its absolute peak.',
    contentZh: [
      '提起中国瓷器史，有一个名字无法被绕过——唐英。作为清代雍正、乾隆两朝的督陶官，他并非工匠出身，而是一位满洲旗人内务府官员。然而，正是他，将中国御窑制瓷工艺推向了前无古人、后也难有来者的最顶峰。',
      '唐英在景德镇督理窑务近三十年。刚到景德镇时，他对制瓷一窍不通。为了完成皇帝的重托，他“杜门结客，聚精会神，苦心竭力，与工匠同食息者三年”，最终从一个门外汉成为精通泥土、釉料与火候的绝顶专家。',
      '在他在任期间，御窑厂不仅完美复刻了宋代五大名窑（汝、官、哥、钧、定）的釉色，还创烧了诸多新工艺，如转心瓶、交泰瓶以及各种仿生瓷（仿木纹、仿铜器）。他总结的《陶冶图编次》，更是中国陶瓷史上极为珍贵的工艺文献。',
      '他的成功不仅仅在于管理，更在于他对陶瓷材质本身的敬畏以及对文人审美的独到理解。他亲自参与釉料配方，督导画师将宫廷院画的笔意毫无偏差地移植到陶瓷表面。从粉彩的细腻渲染，到珐琅彩的艳丽堂皇，每一件带有“大清乾隆年制”或“大清雍正年制”款识的巅峰之作背后，都隐约可见唐英的影子。',
      '唐英代表了中国古典工匠精神的另一种面向：以极高的文化学养统合极致的技术追求，最终塑造了那个盛世华丽而完美的器物美学。'
    ],
    contentEn: [
      'When speaking of Chinese porcelain history, one name is impossible to ignore: Tang Ying. As the superintendent of the Imperial Kiln during the Yongzheng and Qianlong eras of the Qing Dynasty, he was not originally a craftsman but an official. Yet, he pushed the imperial porcelain craft to an unprecedented peak.',
      'Tang Ying managed the imperial kilns in Jingdezhen for nearly thirty years. When he first arrived, he knew nothing about making ceramics. To fulfill the emperor\'s trust, he isolated himself from social engagements and lived, ate, and worked with the craftsmen for three years. He eventually transformed from an outsider into an absolute master of clay, glaze, and firing techniques.',
      'Under his tenure, the imperial kiln not only perfectly recreated the classic glaze colors of the Five Great Kilns of the Song Dynasty but also invented numerous new techniques, such as the intricate "revolving vase" and lifelike "trompe l\'oeil" ceramics that imitated wood, bronze, or lacquer.',
      'His success lay not merely in administration, but in his reverence for the ceramic medium and his profound grasp of literati aesthetics. He personally engaged in formulating glazes and guided painters to transpose academic court paintings onto porcelain surfaces with zero deviation. Behind the delicate shading of famille-rose (fencai) or the opulent brilliance of falangcai enamels, one can trace the overarching vision of Tang Ying.',
      'Tang Ying represents a unique facet of classical Chinese craftsmanship: blending profound cultural literacy with the ultimate technical execution, ultimately defining the magnificent and flawless aesthetic of a golden age.'
    ],
    mediaUrl: '/images/artisan_tang_ying.png',
    dynastyZh: '清代 (1644-1911)',
    dynastyEn: 'Qing Dynasty'
  },
  {
    id: 'he-chaozong',
    nameZh: '何朝宗',
    nameEn: 'He Chaozong',
    titleZh: '以白瓷塑造东方神衹的雕塑神手',
    titleEn: 'The Sculptor of Blanc de Chine Divinities',
    summaryZh: '明代德化窑瓷雕大师何朝宗，以深厚的艺术造诣将德化白瓷推向神坛，其作品被欧洲人誉为“东方维纳斯”。',
    summaryEn: 'He Chaozong, the supreme master of Dehua porcelain sculpture in the Ming Dynasty, immortalized eastern deities in pristine white clay, hailed as the "Oriental Venus" in Europe.',
    contentZh: [
      '何朝宗是明代嘉靖、万历年间的德化窑瓷雕大师。他的名字，几乎就是“中国白”（Blanc de Chine）的最高代名词。',
      '与景德镇注重绘画和色彩不同，德化窑的核心在于雕塑和那温润如玉、油脂般凝厚的象牙白釉。何朝宗最擅长塑造观音、达摩等佛教人物。他的作品不仅在形体比例上完美无瑕，更在于对人物衣纹的刻画极为生动传神——仿佛有风吹拂，衣摆自然飘动，被赞誉为“吴带当风”。',
      '除了卓越的技巧，何朝宗对神像精神气质的把握更是高人一筹。他并不去表现神明的威严与高高在上，而是赋予佛理以人性的温度。他手下的观音面容丰润，嘴角常挂着若有似无的微笑，那种跨越宗教边界的慈悲与静谧，让每一个凝视它的人内心都能得到宽慰。',
      '他对自己的作品要求极高，如果稍有瑕疵，便立刻打碎绝不留传。因此，凡是背部印有“何朝宗印”方形葫芦款的瓷雕，无一不是形神兼备的旷世绝作。',
      '他的观音造像，面容慈祥、低垂的眼睑透露出无限的悲悯与宁静。当这些白瓷被运往欧洲时，震惊了整个西方艺术界，他们无法想象泥土竟能在无任何着色的情况下，仅仅依靠质地和线条，传达出如此圣洁、震撼人心的力量。'
    ],
    contentEn: [
      'He Chaozong was a master porcelain sculptor of the Dehua Kiln during the Jiajing and Wanli eras of the Ming Dynasty. His name is synonymous with the absolute pinnacle of "Blanc de Chine" sculptures.',
      'Unlike Jingdezhen, which focused on painting and colors, the essence of Dehua kilns lay in sculpture and its warm, jade-like, ivory-white glaze. He Chaozong excelled at sculpting Buddhist figures, particularly Guanyin (the Goddess of Mercy) and Bodhidharma. His works are flawless not only in anatomical proportions but also in the fluid, lifelike drapery of the garments—as if a divine breeze is caught in the folds.',
      'Beyond his impeccable technical prowess, He Chaozong possessed an unparalleled ability to capture the spiritual essence of deities. Rather than portraying gods as distant and authoritative, he endowed Buddhist philosophy with human warmth. The Guanyin figures carved by his hands possess full, radiant faces with a subtle, ambiguous smile. This deeply humanized mercy and profound tranquility bring comfort to anyone who gazes upon them.',
      'He was famously strict about his own work; any piece with the slightest flaw was immediately smashed and never allowed into the world. Therefore, any surviving sculpture bearing the seal "He Chaozong" on its back is a masterpiece of peerless spirit and form.',
      'His Guanyin figures, with their compassionate faces and lowered eyelids, convey infinite mercy and tranquility. When these pure white porcelains reached Europe, they stunned the Western art world, proving that clay, devoid of any added pigment, could convey such holy and moving power entirely through texture and elegant contour.'
    ],
    mediaUrl: '/images/artisan_he_chaozong.png',
    dynastyZh: '明代 (1368-1644)',
    dynastyEn: 'Ming Dynasty'
  },
  {
    id: 'shi-dabin',
    nameZh: '时大彬',
    nameEn: 'Shi Dabin',
    titleZh: '紫砂壶艺的一代宗师',
    titleEn: 'The Grandmaster of Zisha Teapots',
    summaryZh: '明代宜兴紫砂名匠。他游极文人雅士之间，将紫砂壶从民间日用品升华为具有高雅审美情趣的艺术品。',
    summaryEn: 'A master Zisha (purple clay) potter of the Ming Dynasty. He elevated Yixing teapots from everyday functional vessels to refined artworks infused with literati aesthetics.',
    contentZh: [
      '在宜兴紫砂的发展史上，时大彬是一个承前启后、至关重要的人物。他生活在明代万历至崇祯年间，是公认的紫砂壶艺一代宗师。',
      '早期的紫砂壶体量较大，主要用于煮水或乡村粗茶的饮用。时大彬早年甚至为了仿制父亲时鹏的作品而苦练技艺。后来，他游历江南，结交了娄坚、陈继儒等许多文人雅士，听取了他们对茶道的理解与审美诉求。',
      '深受启发的时大彬，做出了一个改变中国茶具史的决定：将大壶改为小壶。小壶不仅更适合“功夫茶”的冲泡，能更好地聚香、保温，更在造型上融入了文人的极简、冲淡、古拙之美。',
      '在制作技艺上，他首创了“拍身筒”成型法，摒弃了早期的模具，全凭一双巧手将泥料拍打成型。此外，他对紫砂泥料的调配也极度考究，通过在泥料中掺入不同粗细的砂粒（称为“调砂”），使得壶身不仅透气性绝佳，并且呈现出如同繁星闪烁般的肌理质感。',
      '他不务妍媚，重在器度，作品泥质古朴、造型浑厚。由于他对紫砂艺术的文人化改造，紫砂壶终于登堂入室，成为历代文人墨客案头不可或缺的雅玩。'
    ],
    contentEn: [
      'In the history of Yixing Zisha (purple clay) teapots, Shi Dabin is a pivotal figure who bridged the past and future. Living during the late Ming dynasty, he is universally recognized as the grandmaster of Zisha teapot artistry.',
      'Early Zisha teapots were large and mainly used for boiling water or brewing rustic tea. In his early years, Shi Dabin honed his skills to imitate the large pots made by his father. Later, traveling through the Jiangnan region, he befriended many literary scholars and absorbed their understanding of tea philosophy and aesthetics.',
      'Deeply inspired, Shi Dabin made a decision that changed the history of Chinese tea vessels: he shrank the large pots into small ones. The small teapots were perfect for the refined "Gongfu Tea" ceremony—preserving heat and capturing the fragrance perfectly—while their designs embraced the literati ideals of minimalism, elegance, and rustic simplicity.',
      'In terms of technique, he pioneered the "pounding the body" (pai shen tong) method, discarding early molds in favor of shaping the clay entirely by hand with a wooden paddle. He also perfected clay blending, incorporating coarse sand into the fine clay. This not only improved the teapot\'s breathability but gave its surface a rich, starlit texture.',
      'He eschewed superficial decoration in favor of profound proportion and pure form. Because of his transformation of Zisha art into a literati pursuit, Yixing teapots became an indispensable and elegant companion on the desks of artists and poets for centuries to follow.'
    ],
    mediaUrl: '/images/artisan_shi_dabin.png',
    dynastyZh: '明代 (1368-1644)',
    dynastyEn: 'Ming Dynasty'
  },
  {
    id: 'tong-bin',
    nameZh: '童宾',
    nameEn: 'Tong Bin',
    titleZh: '以身殉窑的“风火仙师”',
    titleEn: 'The Wind and Fire Deity of the Kilns',
    summaryZh: '明代景德镇的一位传奇窑工。为使御窑大龙缸烧制成功，他悲壮地纵身跃入火海，被后世窑工尊奉为神。',
    summaryEn: 'A legendary kiln worker in Ming-dynasty Jingdezhen. To ensure the successful firing of massive imperial dragon jars, he tragically threw himself into the inferno and was later deified as a kiln god.',
    contentZh: [
      '在景德镇的无数匠人中，有一个人被供奉在庙宇里，享受世代窑工的香火——他就是童宾，被尊称为“风火仙师”。他的故事，是古代陶瓷工匠悲壮命运的缩影。',
      '明代万历年间，皇帝下令景德镇御窑烧造一批极难完成的青花大龙缸。由于龙缸体积巨大，极易在窑内受热不均而炸裂，工匠们屡次烧造均告失败。朝廷的督办太监急功近利，对窑工们进行严酷的鞭笞和迫害，景德镇一片哀嚎。',
      '身为窑工的童宾，眼看同伴们饱受折磨，在又一次开窑烧制时，他决绝地纵身跳入烈焰熊熊的窑炉之中，以自己的血肉之躯殉了窑火。令人惊叹的是，那一次大龙缸竟奇迹般地烧制成功了。',
      '这一悲壮的牺牲，实质上反映了古代封建制度下底层工匠极其艰难的生存环境，以及他们为了完成“皇命”所面临的生死重压。童宾的壮举并非出于迷信，而是那一代工匠绝望中的反抗与献祭。',
      '童宾以死救下了全镇的工匠。景德镇的窑工为了纪念他，集资为他建庙，尊奉其为“风火神”。每一次点燃窑火，火光中映照着的，不仅是泥土的涅槃，更是一代代无名工匠在这片土地上倾注的生命与热血。'
    ],
    contentEn: [
      'Among the countless artisans in Jingdezhen, one man is worshipped in temples and receives incense from generations of potters: Tong Bin, revered as the "Deity of Wind and Fire." His story represents the tragic, heroic destiny of ancient ceramic workers.',
      'During the Wanli era of the Ming Dynasty, the emperor ordered the Imperial Kiln to produce a batch of exceptionally large blue-and-white dragon jars. Because of their massive size, the jars were prone to uneven heating and constant cracking, resulting in repeated failures. The overseeing eunuch from the royal court, relentless and cruel, subjected the potters to severe beatings and persecution.',
      'Witnessing the torment of his fellow workers, Tong Bin, a kiln worker himself, made a desperate resolve. During the next firing cycle, he tragically threw himself into the blazing inferno of the kiln, sacrificing his flesh and blood to the fire. Astonishingly, when the kiln was opened, the massive dragon jars had fired perfectly.',
      'This tragic sacrifice fundamentally reflects the harrowing living conditions of grassroots artisans under feudal systems and the life-or-death pressure they faced to fulfill imperial quotas. Tong Bin\'s act was not mere superstition, but an act of desperate rebellion and ultimate sacrifice for his peers.',
      'Tong Bin saved the artisans of the entire town with his life. In his memory, the potters of Jingdezhen pooled money to build a temple, worshipping him as the deity of the kilns. Whenever a kiln is set ablaze, the firelight reflects not only the transformation of clay but the very lifeblood and spirit poured into this craft by generations of unnamed artisans.'
    ],
    mediaUrl: '/images/artisan_tong_bin.png',
    dynastyZh: '明代 (1368-1644)',
    dynastyEn: 'Ming Dynasty'
  },
  {
    id: 'jiang-qi',
    nameZh: '蒋祈',
    nameEn: 'Jiang Qi',
    titleZh: '中国第一部陶瓷专著《陶记》作者',
    titleEn: 'Author of the First Ceramic Monograph "Tao Ji"',
    summaryZh: '南宋时期的文人学者。他撰写了中国历史上第一部专门记载陶瓷生产的著作，为后世留下了珍贵的文献。',
    summaryEn: 'A scholar of the Southern Song Dynasty. He wrote the first monograph dedicated to ceramic production in Chinese history, leaving behind an invaluable historical record.',
    contentZh: [
      '在探讨中国陶瓷工艺史时，不仅有无数躬行实践的工匠，亦有在竹简纸张间进行理性梳理的学者。南宋时期的蒋祈，便是其中散发着独特光芒的一位。',
      '蒋祈并非窑役，也非商贾，而是一位深入社会基层的学者。他撰写了《陶记》（有考证为元代或南宋初年），这仅仅是一篇千余字的文章，却完整而详实地记录了当时景德镇及周边地区瓷器生产的整个体系。',
      '从泥土的开采、原料的配比、成型的手法，到釉料的配置、窑炉的结构，以及最后复杂的贸易与课税系统，《陶记》无一不包。这是中国乃至世界上第一部专门论述陶瓷手工业的文献。',
      '在那个“百工技艺向来靠口传心授”的时代，知识的传承极易中断或畸变。蒋祈以一种近乎近代工业田野调查的范式，突破了古代文人只赏玩器物而不问其来源的清高做派。他详尽记录了如“麻仓土”等重要原料的特性，为后世恢复古法制瓷提供了不可替代的密码。',
      '正是因为有了蒋祈这样兼具观察力与文化责任感的人，那些原本仅靠口授心传、面临巨大失传风险的泥火密码，才得以用优美的文字被永恒固化。他手中的笔，与工匠手中的刻刀一样，雕刻出了中华文明不朽的轮廓。'
    ],
    contentEn: [
      'When exploring the history of Chinese ceramics, we must acknowledge not only the artisans who physically shaped the clay but also the scholars who rationally documented the process. Jiang Qi, a scholar of the Southern Song period, shines uniquely in this regard.',
      'Jiang Qi was neither a kiln worker nor a merchant, but a keen observer embedded in the social fabric of his time. He authored "Tao Ji" (Record of Ceramics), a concise text of just over a thousand words, which systematically and thoroughly recorded the entire porcelain production network in Jingdezhen.',
      'From the mining of raw clay, proportioning of materials, and shaping techniques, to the formulation of glazes, structure of the kilns, and the complex trade and taxation system, "Tao Ji" covered it all. It stands as the earliest known monograph dedicated to the ceramic handicraft industry in China, and likely the world.',
      'In an era where "all artisanal skills were passed down purely by word of mouth," the transmission of knowledge was highly vulnerable to interruption or distortion. Jiang Qi approached his subject with a paradigm resembling modern industrial fieldwork, breaking away from the aloof attitude of ancient literati who merely appreciated objects without questioning their origins. His detailed records of crucial materials, such as "Macang clay," provided irreplaceable codes for later generations striving to restore ancient techniques.',
      'Because of figures like Jiang Qi—possessing both sharp observation and cultural responsibility—the secret codes of earth and fire, which once relied solely on word-of-mouth and faced constant risk of being lost, were solidified eternally into text. His brush, much like the artisan\'s carving knife, etched the immortal contours of Chinese civilization.'
    ],
    mediaUrl: '/images/artisan_jiang_qi.png',
    dynastyZh: '南宋 (1127-1279)',
    dynastyEn: 'Southern Song Dynasty'
  }
];
