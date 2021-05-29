import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    const DC_COMICS = 'DC Comics';

    return (
        <div>
            <h1>DC screen</h1>
            <hr />
            <HeroList publisher={DC_COMICS} />
        </div>        
    )
}