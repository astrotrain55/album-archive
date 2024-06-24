import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.yaNeAngel,
  name: ['Я не ангел'],
  albums: [
    EnumAlbums.durackiyeKnizhki,
    EnumAlbums.bombaVUbezhishche,
    EnumAlbums.zhazhda,
    EnumAlbums.vosemZhenshchinNaRaduge,
  ],
  text: `
На упавшей с неба брошке
Наступил и стало холодно
Улетает сон
На разорванные подушки
Слёзы капали девичьего голода
Улетает сон

Я не ангел, я не я
Я не ангел - я белая ночь на чёрном солнце
Я не ангел, я не я
Я не ангел - я жёлтое небо над высохшим морем

С обгоревшими ресницами
Шли по лестницам незаметно так
Улетает сон
Пели песни вместе с птицами
И под пение вырос чёрный мак
Улетает сон

Повстречали замёрзшей гиеною
Обогрели и дело чистое
Напоили водой солёною
И покрасили в цвет неистовый
Годы шли, росли наши волосы
Годы шли, вслед ругаясь
Годы шли, оставляя полосы
Годы шли, не спотыкаясь
`,
};

export default song;
