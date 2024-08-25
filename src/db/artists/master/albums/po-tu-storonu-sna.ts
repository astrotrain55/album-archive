import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.poTuStoronuSna,
  name: 'По ту сторону сна',
  year: 2006,
  folder: '/artist/master/albums/ptcc_2006.jpg',
  songs: [
    { name: 'Танец' },
    { name: 'Гений рока' },
    { name: 'Музыка сфер' },
    EnumSongs.zaGranyu,
    { name: 'Песня Аннушки' },
    { name: 'Смерть Берлиоза' },
    { name: 'Конферанс' },
    { name: 'Мечтай' },
    { name: 'Война (Live in studio)' },
    { name: 'По ту сторону сна (часть 1)' },
    { name: 'Лес Брокилон' },
    { name: 'Крысы' },
    { name: 'Сын камня' },
    { name: 'Время варваров' },
    { name: 'Live in studio' },
    { name: 'Omut' },
    { name: 'Мраморный Ангел' },
    { name: 'По ту сторону сна (часть 2) (Live in studio)' },
  ],
  info: `
2006 год... Совместный проект Мастер+Margenta  это следующий шаг в эпоху тяжёлой культуры Российской сцены. Эксперименты со звуком и стилями увенчались успешным завершением работы  более чем в 1000 часов группы и всех участников проекта.

"Ты Мастер в том, что пережил, ремесленник в том, что переживаешь, и дилетант в том, что предстоит пережить".
"Никакого рая, никакого ада, только эти бесконечные миры, которые создаёшь, пока думаешь, что так и надо".

Состав:
Маргарита  Пушкина - автор текстов, внезапный телефонный звонок...
А. Страйк - гитара, вокал                  А.Ярушина - вокал
А. Грановский - бас-гитара                С.Скрипников - клавишные
LEXX - гитара, вокал, клавишные      М.Серышев - вокал
А. Карпухин - ударные, перкуссия   О.Кочубей - вокал
Г.Матвеев - клавишные                      М.Самосват - вокал
В.Ярушин - вокал                                 О.Дзусова - вокал
  `,
};

export default album;