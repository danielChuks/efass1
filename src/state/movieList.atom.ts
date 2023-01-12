import {atom} from 'recoil';
import { Movie } from '../interfaces';

export const movieListAtom = atom<Movie[]>({
    key: "movieList",
    default: []
})