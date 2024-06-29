import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.slyoznaya,
  name: ['Слёзная', 'Лиха та беда'],
  albums: [
    EnumAlbums.bombaVUbezhishche,
    EnumAlbums.organizm,
    EnumAlbums.negativProstranstva,
    EnumAlbums.agressivnyjPokoj,
  ],
  text: `
Ах ты, слёзная ночею жданною,
Пробежалася волчицею по лесам глухим,
Ах ты слёзная битым фонариком
Повела синицею да по следам моим...
Ни с луной, ни с дождём, ни с копотью, -
Никогда...

Наказала беда за то, что
Облизала пенку с молока,
Поломала стенку страха...
Облизала пенку с молока,
Поломала стенку страха...
Лиха та беда...

Ах ты, слёзная дорога дороженька,
Паутиною окутала чёрный грех да смех,
Ах ты слёзная в час безобразия
Растрепала и окутала тайный мир потех
На печи душой раскаленной,
В час когда...

Но в тиски взяли тучи грозные,
Выжимали сок через поры,
Обняла метель распутница
И раздвинулись горы...
`,
};

export default song;
