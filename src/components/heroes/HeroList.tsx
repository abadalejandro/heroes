import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

interface IProps {
    publisher: string
}


export const HeroList = ({ publisher }: IProps) => {
    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                        {
                            hero.superhero
                        }
                    </li>
                ))
            }

        </ul>
    )
}
