import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    const MARVEL_COMICS = 'Marvel Comics';
    return (
        <div>
            <h1>Marvel screen</h1>
            <hr />
            <HeroList publisher={MARVEL_COMICS} />
        </div>
    )
}
