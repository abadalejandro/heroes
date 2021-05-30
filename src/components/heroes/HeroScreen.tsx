import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
    const {heroId} =  useParams<any>();

    const hero = getHeroById(heroId);
    if(!hero) return <Redirect to="/" />;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroId}.jpg`} alt={hero.superhero} className="img-thumbnail"/>
            </div>
        </div>
    )
}
