import { TypeArtist } from '../../types';
import albums from './albums';
import songs from './songs';
import { EnumAlbums, EnumArtist } from './types';

const artist: TypeArtist = {
  id: EnumArtist.id,
  name: EnumArtist.name,
  streaming: {
    spotify: 'https://open.spotify.com/artist/3Gocx0waYCfV2wx0d5nKzs',
    youtube: 'https://www.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q',
    youtubeMusic: 'https://music.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q',
    yandexMusic: 'https://music.yandex.ru/artist/359599',
  },
  albums: [EnumAlbums.poTuStoronuSna],
};

export default { artist, albums, songs };