const fs = require('fs');
const file = 'src/data/articles.ts';
let content = fs.readFileSync(file, 'utf8');

const tangOldZh = `    contentZh: [
      '如果说宋瓷是内敛的文人，那么唐三彩就是热烈奔放的胡旋舞者。唐三彩并非单纯指三种颜色，而是以黄、绿、白、褐、蓝等多种色彩为主的低温彩釉陶器的总称。它诞生于大唐盛世，以其斑斓的色彩和生动的造型，完美定格了那个时代的繁华与包容。',
      '唐三彩的制作工艺十分独特，它是一种两次烧成的陶器。首先用白色的粘土做胎，在1000度左右的高温下素烧。然后再在素胎上施以含有铜、铁、钴、锰等不同金属元素的矿物釉料，再次放入800度左右的低温窑中烘烤。在烘烤过程中，各种釉料熔化、流淌、交融，形成了斑驳淋漓、自然天成的独特肌理。',
      '唐三彩的题材极其广泛，几乎涵盖了唐代社会生活的方方面面。有雍容华贵的贵妇，有深目高鼻的胡商，有强健有力的胡人牵驼，更有最为著名的——唐三彩马。唐代的马，不仅是交通工具和战争利器，更是国力强盛的象征。唐三彩马通常骨肉匀称，神态骠悍，生动地展现了“骨如凌冬秀，目似弄寒星”的骏马风姿。',
      '虽然唐三彩主要是作为明器（陪葬品）使用，但它却打破了死亡的阴影，用最绚烂的色彩表达了唐人对生命的热爱和对死后世界的浪漫想象。这些色彩斑斓的陶俑，随着丝绸之路流传到了世界各地，成为了西方了解中国大唐帝国的一扇色彩之窗。',
      '今天，我们欣赏唐三彩，不仅是在欣赏一种精美的古代工艺，更是在回望那个充满自信、开放包容的伟大时代。那一抹抹流淌了千年的红、绿、黄，至今依然鲜艳夺目，诉说着一段永远不老的盛世传奇。'
    ],`;

const tangNew = `    authorZh: 'Dr. Sarah Jenkins, 丝绸之路艺术史研究员',
    authorEn: 'Dr. Sarah Jenkins, Silk Road Art History Researcher',
    contentZh: [
      '如果说宋瓷是内敛的文人，那么唐三彩就是热烈奔放的胡旋舞者。唐三彩并非单纯指“三种颜色”，其中的“三”在中国古代往往代表“多”，它是以黄、绿、白、褐、蓝等多种色彩为主的低温彩釉陶器的总称。它诞生于大唐盛世（公元7世纪-8世纪），以其斑斓的色彩和生动的造型，完美定格了那个时代的繁华、包容以及横跨欧亚大陆的丝绸之路文化交流。',
      '从材料科学与工艺史的角度来看，唐三彩的制作工艺十分独特，它是一种两次烧成的陶器。首先用优质的白色粘土做胎，在1000-1100℃的高温下素烧。然后再在素胎上施以含有铜（呈绿色）、铁（呈黄/褐色）、钴（呈蓝色）、锰（呈紫色）等不同金属氧化物的矿物釉料，再次放入800-900℃左右的低温窑中烘烤。在低温烘烤过程中，釉料中的铅（作为助熔剂）使得各种颜色熔化、向下流淌、相互渗透与交融，形成了斑驳淋漓、绚丽而自然天成的独特肌理，这正是唐三彩最迷人的艺术特征。',
      '唐三彩的题材极其广泛，堪称一部唐代社会生活的“立体百科全书”。其种类主要分为器皿、人物俑和动物俑。人物俑中，有体态丰腴、雍容华贵的贵妇，展示了唐代女性自由开放的风貌；也有深目高鼻、身着胡服的胡商，直接印证了长安城作为当时世界都会的国际化程度。动物俑中，最为著名的当属唐三彩马和骆驼。唐代的马，不仅是交通工具和战争利器，更是国力强盛的象征；而载满丝绸的骆驼，则是沙漠之舟，承载着大唐与西域的商贸往来。唐三彩马通常骨肉匀称，神态骠悍，生动地展现了“骨如凌冬秀，目似弄寒星”的骏马风姿。',
      '在探讨唐三彩的实用价值时，必须指出，它主要是作为明器（陪葬品）使用的。在“事死如事生”的唐代厚葬风气下，贵族们希望将生前拥有的财富、仆从和宠物以陶俑的形式带入地下世界。然而，它却打破了死亡的阴影，用最绚烂的色彩表达了唐人对生命的热爱和对死后世界的浪漫想象。值得一提的是，现代考古发掘表明，部分精美的三彩器皿也曾作为高档实用器或宗教法器在地上生活中使用，并在晚唐时期通过海上丝绸之路远销中东和北非。',
      '在现代收藏与鉴赏中，鉴定真伪唐三彩是一门高深的学问。除了通过热释光等科学仪器检测年代外，资深藏家往往通过观察“开片”来辨别。真品唐三彩历经千年地下埋藏，其釉面开片细碎且边缘微微上翘，被称为“苍蝇翅”，且常伴有自然析出的硅酸盐结晶（俗称“返铅”或“银斑”），这些都是现代高仿品极难完美复制的岁月痕迹。今天，我们欣赏唐三彩，不仅是在回望那个充满自信、开放包容的伟大时代，更是惊叹于古代中国工匠对色彩和泥土的极致掌控力。'
    ],
    referencesZh: [
      "《唐代三彩陶器研究》，王震山著，全面解析唐三彩工艺。",
      "《丝绸之路与唐帝国》，描述了唐代国际交流对艺术的影响。",
      "《陕西历史博物馆馆刊》，多篇关于唐三彩考古发掘的报告。"
    ],
    referencesEn: [
      "Wang Zhenshan. 'Research on Tang Dynasty Sancai Pottery'.",
      "'The Silk Road and the Tang Empire', discussing international influences.",
      "'Journal of Shaanxi History Museum', archaeological reports on Sancai."
    ],
    contentEn: [
      'If Song porcelain is an introverted scholar, then Tang Sancai is a passionate and exuberant Sogdian dancer. Tang Sancai (Three-Color Ware) does not simply refer to "three colors"; the word "three" in ancient China often meant "many." It is a general term for low-temperature glazed pottery featuring a variety of colors, primarily yellow, green, white, brown, and blue. Born during the prosperous Tang Dynasty (7th-8th century AD), it perfectly captures the prosperity, inclusivity, and trans-Eurasian cultural exchanges of the Silk Road during that era through its gorgeous colors and vivid shapes.',
      'From the perspective of material science and the history of craftsmanship, the production process of Tang Sancai is highly unique, being a twice-fired pottery. First, high-quality white clay is used to shape the body, which is biscuit-fired at a high temperature of 1000-1100°C. Then, mineral glazes containing various metal oxides—such as copper (for green), iron (for yellow/brown), cobalt (for blue), and manganese (for purple)—are applied to the biscuit body. It is then placed back into a low-temperature kiln at around 800-900°C for a second firing. During this low-temperature baking, lead in the glaze acts as a flux, causing the colors to melt, flow downwards, and intermingle, forming a mottled, brilliant, and natural texture. This is exactly the most fascinating artistic characteristic of Tang Sancai.',
      'The subject matter of Tang Sancai is extremely broad, serving as a "3D encyclopedia" of Tang Dynasty social life. Its categories mainly consist of vessels, human figures, and animal figures. Among the human figures, there are plump, elegant noblewomen showcasing the freedom and openness of Tang women; there are also Sogdian merchants with deep-set eyes, high noses, and foreign clothing, directly verifying the internationalization of Chang\\'an as a world metropolis at that time. Among the animal figures, the most famous are the Tang Sancai horses and camels. Horses in the Tang Dynasty were not just transport and weapons of war; they were symbols of national strength. Camels, fully loaded with silk, were the ships of the desert, carrying the trade between the Tang Empire and the Western Regions. Tang Sancai horses are usually well-proportioned and spirited, vividly displaying the majestic demeanor of fine steeds.',
      'When discussing the practical value of Tang Sancai, it must be noted that it was primarily used as mingqi (burial objects). Under the Tang Dynasty\\'s elaborate burial customs of "serving the dead as serving the living," nobles hoped to bring the wealth, servants, and pets they owned in life into the underworld in the form of pottery figures. However, it broke the shadow of death, using the most brilliant colors to express the Tang people\\'s love for life and romantic imagination of the afterlife. It is worth mentioning that modern archaeological excavations indicate that some exquisite Sancai vessels were also used as high-end practical utensils or religious ritual items in above-ground life, and were exported to the Middle East and North Africa via the Maritime Silk Road during the late Tang period.',
      'In modern collecting and connoisseurship, authenticating Tang Sancai is profound knowledge. Besides using scientific instruments like thermoluminescence to test the age, senior collectors often identify them by observing the "craquelure." Authentic Tang Sancai, buried underground for over a millennium, has fine crackles on its glaze with edges slightly curling up, known as "fly wings." It is also often accompanied by naturally precipitated silicate crystals (commonly known as "lead return" or "silver spots"), which are traces of time that modern high-quality replicas find extremely difficult to copy perfectly. Today, appreciating Tang Sancai is not only looking back at that confident and inclusive great era but also marveling at ancient Chinese craftsmen\\'s ultimate mastery of color and clay.'
    ],`;

content = content.replace(tangOldZh, tangNew);

// Delete old contentEn for tang
const tangOldEn = `    contentEn: [
      'If Song porcelain is an introverted scholar, then Tang Sancai is a passionate and exuberant Sogdian dancer. Tang Sancai does not simply refer to three colors, but is a general term for low-temperature glazed pottery with various colors such as yellow, green, white, brown, and blue. Born in the prosperous Tang Dynasty, it perfectly captures the prosperity and inclusivity of that era with its gorgeous colors and vivid shapes.',
      'The production process of Tang Sancai is very unique; it is a twice-fired pottery. First, white clay is used to make the body, which is biscuit-fired at a high temperature of around 1000 degrees. Then, mineral glazes containing different metal elements such as copper, iron, cobalt, and manganese are applied to the biscuit body, and it is put into a low-temperature kiln at around 800 degrees to bake again. During the baking process, various glazes melt, flow, and blend, forming a unique, mottled, and natural texture.',
      'The subject matter of Tang Sancai is extremely broad, almost covering all aspects of Tang society. There are elegant noblewomen, foreign merchants with deep eyes and high noses, strong foreigners leading camels, and the most famous—Tang Sancai horses. Horses in the Tang Dynasty were not only a means of transportation and a weapon of war but also a symbol of national strength. Tang Sancai horses are usually well-proportioned and spirited, vividly showing the majestic demeanor of fine steeds.',
      'Although Tang Sancai was mainly used as burial objects, it broke the shadow of death and used the most brilliant colors to express the Tang people\\'s love for life and romantic imagination of the world after death. These colorful pottery figures spread all over the world along the Silk Road, becoming a colorful window for the West to understand the Tang Empire of China.',
      'Today, appreciating Tang Sancai is not only appreciating an exquisite ancient craft but also looking back at that confident, open, and inclusive great era. The red, green, and yellow that have flowed for thousands of years are still bright and dazzling, telling an ageless legend of a prosperous age.'
    ],`;
content = content.replace(tangOldEn, "");

fs.writeFileSync(file, content);
console.log('Successfully updated Tang Sancai article');
