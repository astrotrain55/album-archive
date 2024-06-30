import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.plachSvireli,
  name: ['Плач свирели'],
  albums: [EnumAlbums.akustika],
  text: `
День как стекло разбила,
Тень по стене размыла ночь,
Ты не спишь, ты не спишь...
Ты - отраженье неба,
Ты - повторенье света, но...
Ты одна, ты грустишь...

Плач свирели душа в метели,
Но ещё не умерла.
Замерзаешь и улетаешь
В царство вечного тепла.

Спишь, но глаза открыты,
И все мечты - прозрачный дым,
Без огня, без огня.
Дождь - это только слёзы,
И облетают лепестки
С белых роз, мёртвых роз...
`,
};

export default song;
