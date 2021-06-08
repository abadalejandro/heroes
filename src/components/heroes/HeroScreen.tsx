import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { useMemo } from 'react';

export const HeroScreen = ({ history }: any) => {

    const { heroId } = useParams<any>();

    const hero = useMemo(
        () => getHeroById(heroId),
        [heroId]
    );

    // const hero: hero | undefined = getHeroById(heroId);
    if (!hero) return <Redirect to="/" />;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className=" col-6">
                <img src={`../assets/heroes/${heroId}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__backInUp" />
            </div>
            <div className=" col-6 animate__animated animate__backInRight">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" ><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className="list-group-item" ><b>Publisher: </b>{hero.publisher}</li>
                    <li className="list-group-item" ><b>First appearance: </b>{hero.first_appearance}</li>
                </ul>
                &nbsp;
                <h5>Characters</h5>
                <p>{hero.characters}</p>
                <button
                    onClick={handleReturn}
                    className="btn btn-outline-info">Return</button>

            </div>
        </div>
    )
}
