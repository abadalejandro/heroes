import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import './HeroList.css';
interface IProps {
    publisher: string
}


export const HeroList = ({ publisher }: IProps) => {
    const heroes = getHeroesByPublisher(publisher);

    return (
        // <div className="card-columns">
        <div className="container">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />                     
                ))
            }

        </div>
    )
}
