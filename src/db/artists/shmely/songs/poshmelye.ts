import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.poshmelye,
  name: ['Пошмелье'],
  albums: [EnumAlbums.poshmelye],
  clipYouTubeId: 'ArmZpTJd4_0',
  authors: 'Стакан и Макс Экс - Макс Экс',
  duration: 192,
  text: `
Материки движутся по шельфу
В стране (?) проживают эльфы
В Париже башню построил Эйфель
Мы отправляемся в путешествие
Электровоз нас умчит по рельсам
Если не будет задержки рейса
В горах растут святые эдельвейсы
Бьют не по паспорту, а по фейсу…
С пошмелья.

Над Кастл-Роком сгустились тени
Остыли вмиг чувства и пельмени
Родился сволочь и неврастеник
Не нужно почестей, нужно денег
Пошмелье, пошмелье, пошмелье…

Пришел конверт с порошком по почте
Шмели кого-то связали скотчем
Кранты подкрались безлунной ночью
Действительность разорвалась в клочья
Пошмелье, пошмелье, пошмелье…
Пошмелье, пошмелье, пошмелье…
Пошмелье, пошмелье, пошмелье…
`,
};

export default song;
