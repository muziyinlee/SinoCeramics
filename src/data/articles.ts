export interface Article {
  id: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  contentZh: string[];
  contentEn: string[];
  mediaType: 'image' | 'video';
  mediaUrl: string;
  date: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'ru-ware',
    titleZh: '汝窑的雨过天青：宋代极简美学巅峰',
    titleEn: 'Ru Ware: The Sky After Rain and the Zenith of Song Minimalist Aesthetics',
    summaryZh: '北宋汝窑以其独特的“雨过天青”色闻名于世，存世极少，被誉为中国古代瓷器的巅峰之作，代表了中国美学的至高境界。',
    summaryEn: 'Famous for its unique "sky after rain" blue-green glaze, Northern Song Ru ware is extremely rare and considered the pinnacle of ancient Chinese ceramics, representing the highest realm of Chinese aesthetics.',
    contentZh: [
      '汝窑，位列宋代五大名窑（汝、官、哥、钧、定）之首。它的釉色是一种极其温润的青色，古人形容为“雨过天青云破处，这般颜色作将来”。这种独特的色彩并不是简单烧制出来的，它不仅对窑炉温度有着极其严苛的要求，还需要在适当的还原气氛下才能形成。在历史上，汝窑的辉煌时期非常短暂。',
      '汝窑瓷器的生产时间极短，大约只有北宋晚期的二十年左右。因为专供御用，要求极高，且工艺复杂，稍有瑕疵的瓷器成形后即被彻底摧毁窑址，导致流传于世的汝窑瓷器不足百件。如今存世的每一件汝窑瓷器，都堪称无价之宝，被世界各地的顶级博物馆视为镇馆之宝。它那含蓄内敛的光泽，代表了当时文人士大夫追求的清淡含蓄之美。',
      '其最大的特点在于釉面有细微的开片，称为“蟹爪纹”，并且釉中含有玛瑙，呈现出若隐若现的酥油光泽。所谓“玛瑙入釉”，是汝窑的一个重要特征。由于玛瑙的加入，使得釉面具有了一种特殊的乳浊感，似玉非玉而胜似玉。在阳光的照射下，釉面往往会折射出微微的红晕，也就是俗称的“晨星稀”。这种质感在中国陶瓷史上是独一无二的。',
      '宋徽宗是中国历史上著名的艺术皇帝，他对道教的推崇直接影响了汝窑的审美走向。道教追求的是“静”、“虚”、“淡”，这种理念被完美地投射到了汝窑瓷器上。汝窑器型多仿造古代青铜器，古朴端庄，线条流畅而极简，没有任何多余的装饰。这种化繁为简的设计理念，与现代的极简主义有着异曲同工之妙。',
      '总而言之，汝窑不仅仅是宋代制瓷工艺的巅峰，更是中国古典美学精神的物质载体。它超越了实用的范畴，成为了形而上的艺术追求。通过汝窑，我们能够窥见那个文风鼎盛、审美高级的伟大时代，感受到宋人对于自然、宇宙以及生命的深刻理解。这也是为什么一千年后的今天，汝窑依然能够震撼人心、让人沉醉的原因所在。'
    ],
    contentEn: [
      'Ru ware ranks first among the Five Great Kilns of the Song Dynasty (Ru, Guan, Ge, Jun, Ding). Its glaze is an extremely mild celadon, described by the ancients as "the color of the sky where the clouds break after rain." This unique color is not easily fired; it has extremely strict requirements for kiln temperature and needs to be formed in an appropriate reduction atmosphere. Historically, the glorious period of Ru ware was very short.',
      'The production period of Ru ware was extremely short, lasting only about 20 years during the late Northern Song Dynasty. Because it was exclusively for imperial use with paramount standards and complex techniques, any slightly flawed wares were destroyed after firing. As a result, fewer than 100 authentic Ru ware pieces survive today. Every existing piece of Ru ware is considered an invaluable treasure, revered as the centerpiece in top museums worldwide. Its implicit and subtle luster represents the pure and restrained beauty pursued by the literati and officialdom of that time.',
      'Its most prominent feature is the fine crackle in the glaze, known as "crab-claw pattern." Furthermore, agate was added to the glaze, giving it a subtle, buttery luster. The so-called "agate in the glaze" is an important characteristic of Ru ware. The addition of agate gives the glaze a special opalescent feel, resembling jade but surpassing it. Under sunlight, the glaze often refracts a faint red halo, commonly known as "sparse morning stars." This texture is unique in the history of Chinese ceramics.',
      'Emperor Huizong of Northern Song was a famous artistic emperor in Chinese history. His veneration for Taoism directly influenced the aesthetic direction of Ru ware. Taoism pursues "tranquility," "emptiness," and "lightness," and this philosophy is perfectly projected onto Ru ware. The shapes of Ru ware mostly imitate ancient bronzes, being unsophisticated yet dignified, with smooth and extremely simple lines and no superfluous decoration. This design concept of simplifying the complex is remarkably similar to modern minimalism.',
      'In conclusion, Ru ware is not only the pinnacle of porcelain-making technology in the Song Dynasty but also the material carrier of the spirit of Chinese classical aesthetics. It transcends the realm of utility and becomes a metaphysical artistic pursuit. Through Ru ware, we can catch a glimpse of that great era with its flourishing literary trends and advanced aesthetics, and feel the Song people\'s profound understanding of nature, the universe, and life. This is also why, a thousand years later, Ru ware is still able to shock the soul and intoxicate people.'
    ],
    mediaType: 'image',
    mediaUrl: '/images/AzureGeRuWare.png',
    date: '2023-10-15'
  },
  {
    id: 'tang-sancai',
    titleZh: '唐三彩：盛世的斑斓与包容万象的大唐气象',
    titleEn: 'Tang Sancai: The Vibrant Colors of a Golden Age and the Majestic Splendor of the Tang Dynasty',
    summaryZh: '唐三彩反映了唐代社会的繁荣与开放，其斑斓的色彩和生动的造型是陶瓷史上的瑰宝，生动地记录了丝绸之路的繁盛。',
    summaryEn: 'Tang Sancai reflects the prosperity and openness of the Tang Dynasty. Its vibrant colors and vivid shapes are treasures in ceramic history, vividly recording the prosperity of the Silk Road.',
    contentZh: [
      '唐三彩全名唐代三彩釉陶器，在同一器物上，黄、绿、白或黄、绿、蓝、赭、黑等基本釉色同时交错使用，形成绚丽多彩的艺术效果。虽然名叫“三彩”，但实际上色彩并不局限于三种，而是以黄、绿、白为主调的多彩展现。它生动地反映了唐代社会那种自信、开放、绚烂的时代风貌，是唐朝盛世气息的最佳代言。',
      '它主要作为陪葬的明器使用，题材非常广泛，包括马、骆驼、仕女、文臣武将以及各种生活器皿。其中，唐三彩马和骆驼最为著名，它们造型矫健，肌肉线条流畅，展现了唐代丝绸之路的繁荣景象。那深邃的胡人面孔、满载丝绸的骆驼队伍，无一不在诉说着大唐帝国与西域甚至更远地区频繁的经济文化交流。唐三彩不仅是艺术品，更是珍贵的历史记录。',
      '三彩器的制作采用了两次烧成的工艺，先烧制素胎，再施以含有金属氧化物的低温铅釉进行第二次烧制。这种铅釉在烧制过程中会向下流淌，各种颜色互相交融，形成了唐三彩那种自然奔放、斑驳淋漓的独特美感。这种工艺在唐代达到了顶峰，同时也对后世的陶瓷工艺，如辽三彩、金三彩甚至伊斯兰陶瓷产生了深远的影响。',
      '仕女俑是唐三彩的另一大特色。透过这些体态丰腴、衣着华丽的三彩仕女俑，我们可以清晰地看到唐代女性健康、自信、自由的精神面貌。她们或者正在奏乐，或者正在骑马打马球，生动地展现了唐代贵族阶层丰富多彩的娱乐生活与开放的社会风气。这与后世朝代所追求的瘦弱病态之美形成了鲜明的对比。',
      '在国际舞台上，唐三彩也是中国陶瓷早期走向世界的重要标志之一。在中东的遗址中、在日本的古墓中，都曾发现过唐三彩的踪迹。这种多彩的陶器，带着东方帝国的神秘与富庶，沿着丝绸之路走向了四面八方，成为了大唐软实力的重要象征。时至今日，唐三彩依然是中国最广为人知的文化符号之一。'
    ],
    contentEn: [
      'Tang Sancai, literally "Tang Dynasty Three-Color Glazed Pottery," refers to the interwoven use of basic glaze colors such as yellow, green, and white (or blue, brown, black) on the same object, creating a brilliant and colorful artistic effect. Although named "Three-Color," the colors are not actually limited to three, but rather a multi-colored display with yellow, green, and white as the main tones. It vividly reflects the confident, open, and gorgeous era of the Tang Dynasty society, making it the best spokesperson for the flourishing Tang era.',
      'It was primarily used as burial wares (mingqi). The subjects were exceptionally broad, including horses, camels, court ladies, civil officials, military generals, and various daily utensils. Among them, the Sancai horses and camels are the most famous, showcasing the prosperity of the Silk Road during the Tang Dynasty with their robust shapes and fluid muscle lines. The profound faces of the Hu people (foreigners) and the camel caravans fully loaded with silk all tell the story of the frequent economic and cultural exchanges between the Tang Empire and the Western Regions and beyond. Tang Sancai is not only an artwork but also a precious historical record.',
      'The production involved a dual-firing process: the biscuit body was fired first, followed by a second firing at a lower temperature after applying lead glazes containing metal oxides. During the firing process, this lead glaze flows downward, and various colors blend together, forming the unique aesthetic of Tang Sancai which is natural, unrestrained, and mottled. This technique reached its peak in the Tang Dynasty and also had a profound impact on later ceramic techniques, such as Liao Sancai, Jin Sancai, and even Islamic ceramics.',
      'Figures of court ladies are another major feature of Tang Sancai. Through these plump, gorgeously dressed Sancai figures of ladies, we can clearly see the healthy, confident, and free spiritual outlook of women in the Tang Dynasty. They are either playing music or riding horses playing polo, vividly showing the rich and colorful entertainment life and open social atmosphere of the Tang aristocracy. This forms a sharp contrast with the weak and sickly beauty pursued by later dynasties.',
      'On the international stage, Tang Sancai is also one of the important symbols of Chinese ceramics going global in the early days. Traces of Tang Sancai have been found in absolute ruins in the Middle East and ancient tombs in Japan. This colorful pottery, carrying the mystery and wealth of the Oriental Empire, went in all directions along the Silk Road and became an important symbol of the Tang Dynasty\'s soft power. Even today, Tang Sancai remains one of China\'s most widely known cultural symbols.'
    ],
    mediaType: 'image',
    mediaUrl: '/images/TangSancaiBactrianCamel.png',
    date: '2023-11-20'
  },
  {
    id: 'jian-ware',
    titleZh: '建盏与宋代斗茶：黑釉之下的宇宙奥秘',
    titleEn: 'Jian Ware and Song Dynasty Tea Contests: The Cosmic Secrets Beneath the Black Glaze',
    summaryZh: '建窑黑釉盏以其独特的兔毫、油滴斑纹而著称，是宋代茶文化中“斗茶”的绝佳之选，展现了黑釉瓷的高超技艺。',
    summaryEn: 'Jian kiln black-glazed tea bowls, famous for their "hare\'s fur" and "oil spot" patterns, were the ultimate choice for "tea contests" in Song dynasty, revealing the high skills in black-glazed ceramics.',
    contentZh: [
      '建窑位于福建省建阳市，以烧造黑釉茶盏而闻名。宋代流行“斗茶”，即将茶饼碾碎研细，放入茶盏中点汤，比拼茶汤的颜色和击拂出的泡沫持久度。宋朝时期的饮茶文化达到了新的高度，从上层达官贵人到市井平民，无不以此为乐。这种全民参与的文化活动，极大地推动了茶具制造工艺的繁荣与发展，建盏便是在这样的历史背景下应运而生的。',
      '由于宋人推崇白色的茶汤，黑色的建盏自然成为了最佳的衬托工具。如同夜空衬托着洁白的云朵一般，黑釉建盏能最大程度地凸显茶汤的颜色是否纯正、白沫的停留时间是否持久。建盏在高温焙烧过程中，由于火候和气氛的变化，釉面会自然形成各种奇特的斑纹，这种变化是完全不可控的，也就是所谓的“入窑一色，出窑万彩”。',
      '最著名的斑纹有“兔毫”（如兔子细毛般的结晶条纹）、“油滴”和极其罕见的“曜变”。“兔毫”如同流星划过夜空，又似丝丝春雨；“油滴”则如同水面上漂浮的油珠，在光线的折射下闪烁着金属光泽。至于“曜变”，则是建盏中的极品，其釉面上会出现大小不一的彩色光晕，仿佛包含了整个宇宙星空，令人叹为观止。目前存世的曜变天目盏屈指可数，绝大多数被日本视为国宝收藏。',
      '建盏的胎体通常比较厚重，这是由于建阳当地的泥料含铁量极高决定的。这种厚重的胎体不仅拿在手中具有十足的分量感，在实用上也起到了很好的保温作用，使得茶汤不容易迅速冷却变差。胎骨的粗糙感与釉面的光怪陆离形成了一种独特的质感对比，这也符合了中国传统文化中对于“拙”和“大巧若拙”的审美追求。',
      '随着元明时期饮茶方式由点茶转变为泡茶，黑釉建盏逐渐失去了它的实用环境，并由此衰落停烧。然而，建盏所代表的宋代极简美学、自然天成的工艺追求以及那份蕴含在小茶碗里的宇宙观，却深深地影响了东亚茶道文化。今天，建盏作为非物质文化遗产得到了复兴，再次向世人展现那抹来自千年之前宋朝的漆黑深邃。'
    ],
    contentEn: [
      'The Jian kiln, located in Jianyang City, Fujian Province, is renowned for firing black-glazed tea bowls. The Song dynasty popularized "tea contests," where tea cakes were ground into fine powder, placed in a bowl, and whisked with hot water to compete on the color of the tea soup and the endurance of the froth. The tea drinking culture in the Song Dynasty reached new heights; from high-ranking officials and nobles to commoners in the marketplace, everyone enjoyed it. This cultural activity with universal participation greatly promoted the prosperity and development of tea set manufacturing techniques, and Jian ware was born under such a historical background.',
      'Since the Song people favored white tea soup, the black Jian bowls naturally became the best contrasting canvas. Just like the night sky setting off pure white clouds, the black-glazed Jian ware could maximize the display of whether the color of the tea soup was pure and whether the white foam stayed for a long time. During the high-temperature firing process, due to changes in heat and atmosphere, the glaze naturally forms various peculiar patterns. This kind of change is completely uncontrollable, which is known as "one color entering the kiln, ten thousand colors coming out."',
      'The most famous patterns include "hare\'s fur" (crystal streaks resembling rabbit hair), "oil spots," and the extremely rare "yohen" (iridescence). "Hare\'s fur" looks like meteors streaking across the night sky, or like fine spring rain; "oil spots" are like drops of oil floating on the water surface, flashing with metallic luster under the refraction of light. As for "yohen," it is the absolute pinnacle of Jian ware. Colorful halos of different sizes appear on its glaze, as if containing the entire starry universe, leaving people sighing in praise. There are only a handful of yohen tenmoku bowls extant today, most of which are collected in Japan and revered as National Treasures.',
      'The body of Jian ware is usually relatively thick and heavy, which is determined by the extremely high iron content of the local clay in Jianyang. This thick and heavy body not only feels very substantial in the hand but also plays a good role in keeping the tea warm in practical use, so that the tea soup does not cool rapidly and deteriorate. The roughness of the clay body and the bizarre and motley glaze form a unique textural contrast, which is also in line with the aesthetic pursuit of "clumsiness" and "great skill appears clumsy" in traditional Chinese culture.',
      'With the change in tea drinking methods from whisked tea to steeped tea during the Yuan and Ming dynasties, the black-glazed Jian bowls gradually lost their practical environment, and thus declined and ceased firing. However, the minimalist aesthetics of the Song dynasty represented by Jian ware, the pursuit of natural craftsmanship, and the cosmic view contained in the small tea bowls deeply influenced the East Asian tea ceremony culture. Today, Jian ware has been revived as an intangible cultural heritage, once again showing the world that profound darkness from a thousand years ago in the Song Dynasty.'
    ],
    mediaType: 'image',
    mediaUrl: '/images/JianSilverHare2.png',
    date: '2024-01-05'
  },
  {
    id: 'blue-and-white-porcelain',
    titleZh: '青花瓷：水墨画意与全球化的早期使者',
    titleEn: 'Blue and White Porcelain: Ink Painting Aesthetics and the Early Messenger of Globalization',
    summaryZh: '青花瓷以其钴料在白底上绘制的幽蓝花纹闻名，是中国瓷器最具代表性的品种，远销海内外，深刻影响了世界陶瓷史。',
    summaryEn: 'Famous for its deep blue patterns painted with cobalt on a white background, Blue and White porcelain is the most representative variety of Chinese ceramics, widely exported and profoundly influencing world ceramic history.',
    contentZh: [
      '青花瓷，又称白地青花瓷，常简称青花，是中国瓷器的主流品种之一。它属于釉下彩瓷。其制作工艺是在陶瓷生坯上用含氧化钴的钴矿为原料描绘纹饰，再罩上一层透明釉，经高温还原焰一次烧成。这种工艺使得青花颜色呈现出幽雅的蓝色，并且永不褪色，历久弥新。青花瓷的出现，打破了宋代以来单色釉瓷器主导的局面。',
      '真正确立青花瓷历史地位的是元代青花瓷（元青花）。元青花使用了来自波斯的“苏麻离青”钴料，这种进口钴料在烧制后呈现出浓艳的色泽，且带有黑褐色的结晶斑点，具有非常强烈的异域风情。元青花的器型往往高大厚重，纹饰繁密，层次分明，深受伊斯兰世界和蒙古贵族的喜爱。它是东西方文化贸易交流的产物。',
      '到了明代永乐、宣德时期，青花瓷的发展迎来了第二个高峰。这一时期的青花瓷，胎质细腻，釉面肥润，青花发色浓艳沉稳，被誉为“开一代未有之奇”。特别是郑和下西洋，将大量的明代青花瓷带到了东南亚、南亚、中东乃至东非地区，使得青花瓷成为了中国与世界交流的重要文化名片，在世界范围内掀起了一股“中国风”。',
      '清代康熙时期的青花瓷，则以其“墨分五色”的绝技闻名。工匠们能够利用一种颜色，通过浓淡不同的笔法表现出阴阳向背、远近高低，达到了类似中国传统水墨画的艺术效果。这一时期的青花瓷，不仅在宫廷中备受推崇，更作为重要的外销商品，大量出口到欧洲，直接影响了欧洲诸多国家的制瓷业发展（如荷兰代尔夫特蓝陶）。',
      '因此，青花瓷绝非仅仅是一种容器，它更是古代丝绸之路上的重要见证者和早期经济全球化的推动者。从伊斯兰的几何纹样到中国传统的人物山水，青花瓷包容了多元文化的精髓，展现了非凡的艺术生命力，是中国古典艺术宝库中一颗璀璨的明珠。'
    ],
    contentEn: [
      'Blue and white porcelain, also known as white-ground blue-and-white porcelain, and often simply called underglaze blue, is one of the mainstream varieties of Chinese ceramics. It belongs to underglaze-decorated porcelain. Its manufacturing process involves painting patterns with cobalt oxide ore on the raw ceramic body, then covering it with a layer of transparent glaze, and firing it once in a high-temperature reducing flame. This process makes the blue-and-white color appear as an elegant blue, which never fades and remains fresh over time. The emergence of blue-and-white porcelain broke the dominance of monochrome glazed porcelain since the Song Dynasty.',
      'What truly established the historical status of blue-and-white porcelain was Yuan dynasty blue-and-white (Yuan Qinghua). Yuan blue-and-white used "Sumali blue" cobalt material from Persia. This imported cobalt material presented a rich and brilliant color after firing, and with blackish-brown crystal spots, it had a very strong exotic flair. The shapes of Yuan blue-and-white are often tall, large, thick, and heavy, with dense and distinct layers of decoration, deeply favored by the Islamic world and Mongolian nobles. It was the product of cultural and trade exchanges between the East and the West.',
      'By the Yongle and Xuande periods of the Ming Dynasty, the development of blue-and-white porcelain reached its second peak. The blue-and-white porcelain of this period features a delicate clay body, a rich and moist glaze surface, and a rich, brilliant, and steady blue-and-white color, hailed as "creating an unprecedented wonder of a generation." In particular, Zheng He\'s voyages to the Western Oceans brought a large amount of Ming dynasty blue-and-white porcelain to Southeast Asia, South Asia, the Middle East, and even East Africa, making blue-and-white porcelain a vital cultural icon of China\'s communication with the world and setting off a "Chinese wave" worldwide.',
      'The blue-and-white porcelain of the Kangxi period in the Qing Dynasty is famous for its unique skill of "dividing ink into five colors." Craftsmen were able to use one color to express light and shade, far and near, high and low through different shades of brushwork, realizing an artistic effect similar to traditional Chinese ink painting. Blue-and-white porcelain from this period was not only highly esteemed in the imperial court but also exported in large quantities to Europe as an important export commodity, directly influencing the development of the porcelain industry in many European countries (such as Delftware in the Netherlands).',
      'Therefore, blue-and-white porcelain is by no means just a container; it is also a vital witness on the ancient Silk Road and a promoter of early economic globalization. From Islamic geometric patterns to traditional Chinese figures and landscapes, blue-and-white porcelain has accommodated the essence of diverse cultures and demonstrated extraordinary artistic vitality. It is a shining pearl in the treasure house of Chinese classical art.'
    ],
    mediaType: 'image',
    mediaUrl: '/images/LotusBlueandWhitePearVase.png',
    date: '2024-02-10'
  },
  {
    id: 'famille-rose',
    titleZh: '粉彩瓷：柔美细腻的清宫绝唱',
    titleEn: 'Famille Rose: The Gentle and Delicate Swan Song of the Qing Palace',
    summaryZh: '粉彩瓷是在康熙末年创制的新品种，以其色彩柔和、画工细腻、立体感强而成为清代皇家御用瓷器的巅峰代表。',
    summaryEn: 'Created at the end of the Kangxi reign, Famille Rose porcelain became the peak representative of Qing imperial porcelain, renowned for its soft colors, delicate painting, and strong three-dimensional effect.',
    contentZh: [
      '粉彩瓷，也叫“软彩”，是釉上彩瓷的一个大家族。它是在清代康熙晚期，在五彩瓷的基础上，受西方法琅彩工艺的影响而创制出来的。粉彩的诞生，标志着中国陶瓷彩绘艺术进入了一个全新的阶段。与明代色调浓艳、对比强烈的五彩相比，粉彩最大的特点在于它的“粉润”。这种柔和的色调使得画面的表现力更加丰富和细腻。',
      '粉彩之所以能够呈现出柔和的色彩，是因为在颜料中加入了一种叫做“玻璃白”的物质。“玻璃白”是一种含有砷的半透明玻璃态物质，它能够在彩绘的时候起到一种类似于水粉画的晕染效果。画师在给瓷器上色时，可以像在宣纸上作画一样，自由地洗染出色彩的浓淡阴阳，使得花卉的叶片、人物的衣褶等具有极强的立体感和层次感。',
      '到了清代雍正时期，粉彩瓷的发展达到了登峰造极的地步。雍正皇帝本人的审美品位极高，他偏爱秀丽淡雅、造型规整的器物。在内务府造办处的严格品控下，雍正粉彩瓷胎质洁白如雪，釉面温润如玉，彩绘内容以花鸟、虫草为主，色彩娇艳柔美，画工精致到了头发丝都能根根分明的地步，堪称中国陶瓷史上的空前绝后之作。',
      '不仅如此，粉彩瓷上的绘画题材也极为丰富，包含了帝王祈求国家风调雨顺、多子多福的各种吉祥寓意。常见的有“百搭图”、“过枝花”、“九桃图”等。尤其是在乾隆时期，由于技术的成熟，甚至出现了可以转动的“转心瓶”、“交泰瓶”等极具工艺挑战性的奇巧器型，彰显了当时大清帝国国力的鼎盛以及陶瓷工艺的无所不能。',
      '即使到了清朝晚期国力衰落时期，粉彩瓷依然是景德镇御窑厂生产的主力，并且广泛流传于民间。它那种雅致、细腻、充满生活气息的艺术风格，至今依然深深地影响着现代陶瓷的创作。无论是作为宫廷御用的陈设，还是作为寻常百姓家的实用器皿，粉彩瓷都以其独特的柔美，成为了中国瓷器家族中不可或缺的重要瑰宝。'
    ],
    contentEn: [
      'Famille rose porcelain, also known as "soft color," is a large family of overglaze colored porcelain. It was created in the late Kangxi period of the Qing Dynasty, based on Wucai (five-color) porcelain and influenced by Western enamel craft. The birth of Famille Rose marked a brand new stage in the art of Chinese ceramic painting. Compared with the strong colors and sharp contrast of Ming dynasty Wucai, the most prominent feature of Famille Rose is its "powdery moistness." This soft color tone makes the expressiveness of the picture richer and more delicate.',
      'The reason Famille Rose can present soft colors is that a substance called "glassy white" is added to the pigment. "Glassy white" is a translucent glassy substance containing arsenic, which can play a blending effect similar to gouache painting when painting. When the painters color the porcelain, they can freely wash and dye the shades and shadows of colors, just like painting on Xuan paper, giving the leaves of flowers, the folds of figures\' clothes, etc., a very strong three-dimensional and layered sense.',
      'By the Yongzheng period of the Qing Dynasty, the development of Famille Rose porcelain reached its peak. Emperor Yongzheng himself had an extremely high aesthetic taste; he preferred elegant, subtle pieces with formalized shapes. Under the strict quality control of the Imperial Household Department Workhouse, Yongzheng Famille Rose features a clay body as white as snow, a glaze surface as mild as jade, and painted contents mainly of flowers, birds, and insects. The colors are beautiful and gentle, and the painting is so exquisite that even individual hairs can be distinguished clearly, making it an unprecedented masterpiece in the history of Chinese ceramics.',
      'Moreover, the painting themes on Famille Rose porcelain are also extremely rich, including various auspicious meanings of the emperor praying for good weather for the country and abundant offspring and good fortune. Common ones include "hundred antiques pattern," "branch-crossing flowers," "nine peaches pattern," etc. Especially during the Qianlong period, due to the maturity of technology, extremely challenging and ingenious shapes such as the revolving "Zhuanxin vase" and "Jiaotai vase" even appeared, highlighting the peak of the Great Qing Empire\'s national strength and the omnipotence of ceramic technology at that time.',
      'Even during the period of national decline in the late Qing Dynasty, Famille Rose porcelain remained the main force of production at the Jingdezhen imperial kilns and spread widely among the people. Its elegant, delicate artistic style, full of the breath of life, still deeply influences the creation of modern ceramics today. Whether as displays for imperial court use or as practical utensils for ordinary families, Famille Rose porcelain has become an indispensable and important treasure in the family of Chinese ceramics with its unique gentleness.'
    ],
    mediaType: 'image',
    mediaUrl: '/images/FRFlowerLiddedJar.png',
    date: '2024-03-22'
  }
];
