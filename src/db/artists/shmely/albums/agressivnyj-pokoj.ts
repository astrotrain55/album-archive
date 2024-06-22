import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.agressivnyjPokoj,
  name: 'Агрессивный покой',
  year: 2002,
  folder: '/artist/shmely/albums/2002_pokoy.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79305' },
  songs: [
    { name: 'Боль' },
    { name: 'Ты снег в моей преисподней' },
    { name: 'Агрессивный покой' },
    { name: 'The First Love' },
    { name: 'Погадай (new version)' },
    { name: 'Рисунки на душе (new version)' },
    { name: 'Искушение (1999)' },
    { name: 'Благодать' },
    { name: 'Манекен' },
    EnumSongs.laboratoriyaAltruizma,
    { name: 'День Святого Валентина' },
    { name: 'Отравленные боги' },
    { name: 'Слёзная (remix)' },
    { name: 'Либо (remix)' },
    { name: 'Гроза (remix)' },
    { name: 'Волшебный замок (live 1999)' },
    { name: 'Лакай отраву (live 1999)' },
  ],
};

export default album;
