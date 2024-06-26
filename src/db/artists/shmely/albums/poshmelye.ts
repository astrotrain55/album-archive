import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.poshmelye,
  name: 'Пошмелье',
  year: 2002,
  folder: '/artist/shmely/albums/2002_poshmele.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79307' },
  songs: [
    EnumSongs.yaVselennaya,
    { name: 'Ангелы в дверях' },
    { name: 'Огонь - наш свет, огонь - наш след' },
    EnumSongs.naLadoniPlaneta,
    { name: 'Гроза' },
    { name: 'Поле' },
    EnumSongs.poshmelye,
    { name: 'Клоун' },
    { name: 'Путь к...' },
    EnumSongs.volosy,
    { name: 'Кронос' },
    { name: 'Тень неизвестной звезды' },
    EnumSongs.skelety,
    EnumSongs.patologoanatom,
    EnumSongs.novayaReligiya,
    { name: 'Цветы' },
  ],
  info: `
"ПОШМЕЛЬЕ" - сборник (2002)
Этот сборник песен Шмеля и Лёса с разными составами их группы "ШМЕЛИ".
Выпущен фирмой Moroz Records в сентябре 2002 года. В него вошли песни 2000-2002 годов.
Кроме Шмеля и Лёса, в записи песен, принимали участие следующие музыканты:
Сова, Росс, Иван, A. Waters, Макс (Кранты), А. Казанцев.
`,
};

export default album;
