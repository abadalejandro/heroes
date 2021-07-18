import { Link } from 'react-router-dom';
import { hero } from '../../interfaces/interfaces';
import './HeroCard.css';
const heroImages = require.context('../../assets/heroes/', true);

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}: hero) => {
    return (
        <div className="card-container animate__animated animate__backInLeft" >
            <Link to={`./hero/${id}`} className="more-info"  >

                <img
                    src={heroImages(`./${id}.jpg`).default}
                    className="card-imgs"
                    alt={superhero}
                />

                <div className="card-info">
                    <p className="card-title">{superhero}</p>
                    <p className="">{alter_ego}</p>
                    <p className="">
                        <small className="">{first_appearance}</small>
                    </p>
                </div>
            </Link>
        </div>
    )
}
