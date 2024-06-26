import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.klassika,
  name: 'Классика 1987-2002',
  year: 2001,
  folder: '/artist/master/albums/klassika_1987_2002.jpg',
  songs: [
    { name: 'Интродукция' },
    { name: 'Лабиринт' },
    { name: 'С кем ты?' },
    { name: 'Еще раз ночь' },
    { name: 'Только ты сам' },
    { name: 'Кресты' },
    { name: '2000 лет (Иуда)' },
    { name: 'Амстердам (бас-соло)' },
    { name: 'Тореро' },
    { name: 'Небо в глазах' },
    { name: 'Встань, страх преодолей' },
    { name: 'Тату' },
    { name: 'Воля и разум' },
    { name: 'Четырнадцатая' },
  ],
  info: `
Летом 2001 года - группа записывает альбом "Классика 1987-2001", в который вошли старые хиты группы в обновленной аранжировке, а так же композиции Алика Грановского: "Тореро" и "С Кем Ты?" написанные им в то время, когда он играл в группе "Ария".



Состав:
Страйк - гитара           А.Грановский - бас-гитара
Лекс - вокал                 О.Милованов - ударные
  `,
};

export default album;
