import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.pesniMyortvyh,
  name: 'Песни мёртвых',
  year: 1996,
  folder: '/artist/master/albums/pesni_mertvix_1996.jpg',
  songs: [
    { name: 'Песни мёртвых' },
    { name: 'Дикие гуси' },
    { name: 'Дайте свет' },
    { name: 'Пепел на ветру' },
    { name: 'Надоело' },
    { name: 'Только ты сам' },
    { name: 'Я не хочу войны' },
    { name: 'Тату' },
    { name: 'Ночь' },
    { name: 'Корабль дураков' },
  ],
  info: `
Альбом "Песни мертвых" записан на студии "Ария Records" в марте 1996 года. Звукорежиссеры - В.Холстинин и Д.Калинин. Выпущен фирмой "Flam Records" в 1996 году. В песне Тату в записи хора принимали участие: А.Трофимов, А.Гирнык (ZZ-Top), Юрий Васин (артист ансамбля Игоря Моисеева).

Состав:
С.Попов - гитара           А.Грановский - бас-гитара
М.Серышев - вокал       Т.Шендер - ударные
  `,
};

export default album;
