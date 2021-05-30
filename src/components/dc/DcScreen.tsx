import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    const DC_COMICS = 'DC Comics';

    return (
        <div>
            <h1 className="animate__animated animate__backInRight">DC screen</h1>
            <hr />
            <HeroList publisher={DC_COMICS} />
        </div>        
    )
}