import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.maneken,
  name: ['Манекен'],
  albums: [EnumAlbums.agressivnyjPokoj],
  clipYouTubeId: 'exkzYZohXRg',
  text: `
Пешеходов пещер усталых
Хватает разведчик след,
Девушку ищет парень,
Чтоб с ней сделать это!

Или совсем её нет,
Или когда света мало
Электрический сон и бред -
Девушка-манекен!

Манекен в белом парике,
Манекен - богиня извне!

Не день, не ночь и не два
Он едет в плену кошмара
За девушкой, что всегда
Давала, давала!

По утрам пусты пещеры,
Пещеры и каналы, сны!
В них девушек как не бывало!
Только реклам щиты...
`,
};

export default song;
