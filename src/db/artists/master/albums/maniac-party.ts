import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.maniacParty,
  name: 'Maniac Party',
  year: 1994,
  folder: '/artist/master/albums/maniac_party_1994.jpg',
  songs: [
    { name: 'Beastie Generation' },
    { name: 'Maniac Party' },
    { name: 'Lock Them In Graves' },
    { name: 'Burning In Hell (Civil War Disaster)' },
    { name: 'Screams Of Pain' },
    { name: 'Time X' },
    { name: 'They Are Just Like Us' },
    { name: 'Punk Guys' },
    { name: 'Go!' },
  ],
  info: `
"Maniac Party" записан на студии "SNC-records" в Москве в 1993 году, звукорежиссер - Е.Трушин. Сам альбом вышел только в 1994 году на фирме "APEX" - CD, виниловый вариант - фирма "POLYGRAM".



Состав:
С.Сидоров - гитара      А.Грановский - бас-гитара
М.Серышев - вокал       Т.Шендер - ударные
  `,
};

export default album;
