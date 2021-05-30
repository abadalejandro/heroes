import { Link } from 'react-router-dom';
import { hero } from '../../interfaces/interfaces';
import './HeroCard.css';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}: hero) => {
    return (
        <div className="card-container" >
            <Link to={`./hero/${id}`} className="more-info"  >
            <div className="">
                <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                <p className="card-title">{superhero}</p>

                <div className="card-info">
                    <p className="">{alter_ego}</p>
                    {/* {
                            (alter_ego !== characters)
                            && <p className="">{characters}</p>
                        } */}
                    <p className="">
                        <small className="">{first_appearance}</small>
                    </p>
                    

                </div>

            </div>
        </Link>
        </div>
    )
    // return (
    //     <div className="card ms-3" style={{ maxWidth: 540 }}>
    //         <div className="row no-gutters">

    //             <div className="col-md-4">
    //                 <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
    //             </div>

    //             <div className="col-md-8">
    //                 <div className="card-body">
    //                     <h5 className="card-title">{superhero}</h5>
    //                     <p className="card-text">{alter_ego}</p>
    //                     {
    //                         (alter_ego !== characters)
    //                         && <p className="card-text">{characters}</p>
    //                     }
    //                     <p className="card-text">
    //                         <small className="text-muted">{first_appearance}</small>
    //                     </p>
    //                     <Link to={`./hero/${id}`}  >More...</Link>
    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    // )
}