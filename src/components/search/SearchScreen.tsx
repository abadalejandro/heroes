import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useMemo } from 'react';

export const SearchScreen = ({ history }: any) => {
    const location = useLocation();

    let q = new URLSearchParams(location.search).get('q');
    if (!q) {
        q = '';
    }
    const [formValues, handleInputChange] = useForm({ searchText: q });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    // const heroesFiltered = getHeroesByName(formValues.searchText);
    const handleSearch = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        history.push(`?q=${formValues.searchText}`);

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-5">                  
                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder="Find your hero."
                            className="form-control mb-2"
                            name="searchText"
                            value={formValues.searchText}
                            onChange={handleInputChange}

                        />

                        <button type="submit"
                            className="btn  btn-block btn-outline-primary">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-12 col-sm-7 mt-2">
                    <h4>Results: {heroesFiltered.length}</h4>
                    <hr />
                    {
                        (heroesFiltered.length === 0) && <div className="alert alert-danger">
                            Hero does not found.
                        </div>
                    }

                    <div className="d-flex flex-wrap">
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard key={hero.id} {...hero} />
                            ))

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
