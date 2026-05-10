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
    titleZh: '汝窑的雨过天青',
    titleEn: 'Ru Ware: The Color of Sky After Rain',
    summaryZh: '北宋汝窑以其独特的“雨过天青”色闻名于世，存世极少，被誉为中国古代瓷器的巅峰之作。',
    summaryEn: 'Famous for its unique "sky after rain" blue-green glaze, Northern Song Ru ware is extremely rare and considered the pinnacle of ancient Chinese ceramics.',
    contentZh: [
      '汝窑，位列宋代五大名窑（汝、官、哥、钧、定）之首。它的釉色是一种极其温润的青色，古人形容为“雨过天青云破处，这般颜色作将来”。',
      '汝窑瓷器的生产时间极短，大约只有北宋晚期的二十年左右。因为专供御用，要求极高，且工艺复杂，成形后即被彻底摧毁窑址，导致流传于世的汝窑瓷器不足百件。',
      '其最大的特点在于釉面有细微的开片，称为“蟹爪纹”，并且釉中含有玛瑙，呈现出若隐若现的酥油光泽。'
    ],
    contentEn: [
      'Ru ware ranks first among the Five Great Kilns of the Song Dynasty (Ru, Guan, Ge, Jun, Ding). Its glaze is an extremely mild celadon, described by the ancients as "the color of the sky where the clouds break after rain."',
      'The production period of Ru ware was extremely short, lasting only about 20 years during the late Northern Song Dynasty. Because it was exclusively for imperial use with paramount standards and complex techniques, the kilns were often destroyed after firing. As a result, fewer than 100 authentic Ru ware pieces survive today.',
      'Its most prominent feature is the fine crackle in the glaze, known as "crab-claw pattern." Furthermore, agate was added to the glaze, giving it a subtle, buttery luster.'
    ],
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1623862846938-e6b7dcef3dd4?auto=format&fit=crop&w=1200&q=80',
    date: '2023-10-15'
  },
  {
    id: 'tang-sancai',
    titleZh: '唐三彩：盛世的斑斓',
    titleEn: 'Tang Sancai: The Vibrant Colors of a Golden Age',
    summaryZh: '唐三彩反映了唐代社会的繁荣与开放，其斑斓的色彩和生动的造型是陶瓷史上的瑰宝。',
    summaryEn: 'Tang Sancai reflects the prosperity and openness of the Tang Dynasty. Its vibrant colors and vivid shapes are treasures in ceramic history.',
    contentZh: [
      '唐三彩全名唐代三彩釉陶器，在同一器物上，黄、绿、白或黄、绿、蓝、赭、黑等基本釉色同时交错使用，形成绚丽多彩的艺术效果。',
      '它主要作为陪葬的明器使用，题材非常广泛，包括马、骆驼、仕女、文臣武将以及各种生活器皿。其中，唐三彩马和骆驼最为著名，它们造型矫健，肌肉线条流畅，展现了唐代丝绸之路的繁荣景象。',
      '三彩器的制作采用了两次烧成的工艺，先烧制素胎，再施以含有金属氧化物的低温铅釉进行第二次烧制。'
    ],
    contentEn: [
      'Tang Sancai, literally "Tang Dynasty Three-Color Glazed Pottery," interwoven basic glaze colors such as yellow, green, and white (or blue, brown, black) on the same object, creating a brilliant artistic effect.',
      'It was primarily used as burial wares (mingqi). The subjects were exceptionally broad, including horses, camels, court ladies, civil officials, military generals, and various daily utensils. Among them, the Sancai horses and camels are the most famous, showcasing the prosperity of the Silk Road during the Tang Dynasty with their robust shapes and fluid muscle lines.',
      'The production involved a dual-firing process: the biscuit body was fired first, followed by a second firing at a lower temperature after applying lead glazes containing metal oxides.'
    ],
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1602758169998-ef22a900508a?auto=format&fit=crop&w=1200&q=80',
    date: '2023-11-20'
  },
  {
    id: 'jian-ware',
    titleZh: '建盏与宋代斗茶',
    titleEn: 'Jian Ware and Song Dynasty Tea Contests',
    summaryZh: '建窑黑釉盏以其独特的兔毫、油滴斑纹而著称，是宋代茶文化中“斗茶”的绝佳之选。',
    summaryEn: 'Jian kiln black-glazed tea bowls, famous for their "hare\'s fur" and "oil spot" patterns, were the ultimate choice for "tea contests" in Song dynasty tea culture.',
    contentZh: [
      '建窑位于福建省建阳市，以烧造黑釉茶盏而闻名。宋代流行“斗茶”，即将茶饼碾碎研细，放入茶盏中点汤，比拼茶汤的颜色和击拂出的泡沫持久度。',
      '由于宋人推崇白色的茶汤，黑色的建盏自然成为了最佳的衬托工具。建盏在高温焙烧过程中，由于火候和气氛的变化，釉面会自然形成各种奇特的斑纹。',
      '最著名的斑纹有“兔毫”（如兔子细毛般的结晶条纹）、“油滴”和极其罕见的“曜变”。每一只建盏都是火的艺术，独一无二。'
    ],
    contentEn: [
      'The Jian kiln, located in Jianyang, Fujian Province, is renowned for firing black-glazed tea bowls. The Song dynasty popularized "tea contests," where tea cakes were ground into fine powder, placed in a bowl, and whisked with hot water to compete on the color of the tea soup and the endurance of the froth.',
      'Since the Song people favored white tea soup, the black Jian bowls naturally became the best contrasting canvas. During the high-temperature firing process, due to changes in heat and atmosphere, the glaze naturally forms various peculiar patterns.',
      'The most famous patterns include "hare\'s fur" (crystal streaks resembling rabbit hair), "oil spots," and the extremely rare "yohen" (iridescence). Every Jian bowl is an art of fire, completely unique.'
    ],
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=1200&q=80',
    date: '2024-01-05'
  }
];
