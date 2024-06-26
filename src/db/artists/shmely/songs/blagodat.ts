import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.blagodat,
  name: ['Благодать'],
  albums: [EnumAlbums.agressivnyjPokoj],
  text: `
Жизнь – работа, судьба – как пение птиц
У меня есть экспериментальных сто лиц
Лица могут смотреть так преданно в суть,
Заставляя всё снова и снова вернуть.

Грань любви береги!
Благодать, благодать,
Снизошла благодать!

Жадно дышит и плодотворно болит
Моя тень никогда меня не простит
Славно будет превращаться в кости и плоть,
Чтоб слёзы неба дождём её стали пороть

Завтра утром хорошее солнце в глаза
Жизнь – работа, а не слепая игра
Чёрным светом растают чувства, и вновь
Возвратится во вскрытые вены кровь
`,
};

export default song;
