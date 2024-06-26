import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.naLadoniPlaneta,
  name: ['На ладони планета'],
  albums: [EnumAlbums.spazmyRoka, EnumAlbums.poshmelye],
  authors: 'Шмель',
  duration: 187,
  text: `
Мне поля красивые,
Небеса огромные
Прошептали истину голую, странную:
Не ищи, мол, повода,
Не зови, мол, холода,
Да обрежь петлю свою самую главную...

На ладони планета, а в портфеле ништяк,
За спиною победа хорошо б, но не так.
Ведь утопленный котик в белезне туалета,
Постигает безмолвно уютный мрак...
Мрак... Мрак...

На испуг, на исповедь
Шёл бы вдруг, но скучно ведь
Подниматься в лифте полном трупами...
Значит, быть весёлыми,
Станем жить по-новому,
Заменив могилы цветными трубами...
`,
};

export default song;
