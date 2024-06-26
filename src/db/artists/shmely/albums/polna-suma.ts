import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.polnaSuma,
  name: 'Полна сума',
  year: 2003,
  folder: '/artist/shmely/albums/2003_suma.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79309' },
  songs: [
    { name: 'Зверь' },
    { name: 'Я обернусь огнём' },
    { name: 'Тоска' },
    { name: 'Агония' },
    { name: 'Клякса' },
    EnumSongs.polnaSuma,
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Вода' },
    { name: 'Садизм' },
    { name: 'Радиактивные отходы' },
    { name: 'Иволга' },
    { name: 'Виртуальный самолёт' },
    { name: 'Бом лбом' },
    { name: 'Тишина и покой' },
    { name: 'Фабрика фекалий' },
    { name: 'Облака' },
    { name: 'Эпидемия Ха' },
    { name: 'Гори, костёр!' },
    { name: 'Крыша горит' },
    { name: 'Трупные пятна' },
    { name: 'Сизоблюдов' },
    { name: 'Хули пули праху' },
    { name: 'Уа-у-уа' },
  ],
};

export default album;
