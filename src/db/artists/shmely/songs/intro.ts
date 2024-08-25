import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.intro,
  name: ['Всё будет хорошо (intro)'],
  albums: [EnumAlbums.pugovica],
  text: `
Загнанный порчей художник смеётся,
Он кистью щекочет нервы холста
Сорвалась последняя горе-звезда
В растянутый холст его бьётся и бьётся

Стремится в центральную нить водрузиться,
И снова слепить и манить без конца...
Картина прозрачна и нет в ней лица,
Придётся под ноги к нему приземлиться...

Был изгнан и проклят художник за это
Огромными силами меры традиций,
Но тенью сумел он в картине явиться
Без солнца и прочего цельного света...

И знать бы, зачем и куда ты пришёл,
Тогда бы не спал, не взлетал, не искал,
А главное, вовремя чтобы узнал
О том, что всегда будет всё хорошо...
`,
};

export default song;