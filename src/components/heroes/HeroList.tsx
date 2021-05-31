import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import './HeroList.css';
interface IProps {
    publisher: string
}


export const HeroList = ({ publisher }: IProps) => {
    const heroes = useMemo(
        () => getHeroesByPublisher(publisher),
        [publisher]
    );

    // const heroes = getHeroesByPublisher(publisher);

    return (

        <div className="container">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }

        </div>
    )
}
