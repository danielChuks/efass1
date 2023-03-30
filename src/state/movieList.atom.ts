import {atom} from 'recoil';
export const movieListAtom = atom<Movie[]>({
    key: "movieList",
    default: []
})