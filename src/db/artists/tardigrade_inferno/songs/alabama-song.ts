import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.alabamaSong,
  name: ['Alabama Song'],
  albums: [EnumAlbums.mastermind],
  text: `
Well, show me the way
To the next whiskey bar
Oh, don't ask why
Oh, don't ask why
Show me the way
To the next whiskey bar
Oh, don't ask why
Oh, don't ask why
For if we don't find
The next whiskey bar
I tell you we must die
I tell you we must die
I tell you, I tell you
I tell you we must die

Oh, moon of Alabama
We now must say goodbye
We've lost our good old mama
And must have whiskey, oh, you know why

Well ,show me the way to the next pretty boy
Oh, don't ask why
Oh, don't ask why
Show me the way to the next little boy
Oh, don't ask why
Oh, don't ask why
For if we don't find
The next little boy
I tell you we must die
I tell you we must die
I tell you, I tell you
I tell you we must die

Oh, moon of Alabama
We now must say goodbye
We've lost our good old mama
And must have whiskey, oh, you know why
`,
};

export default song;
